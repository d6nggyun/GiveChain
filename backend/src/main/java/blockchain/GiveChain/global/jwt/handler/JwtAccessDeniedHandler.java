package blockchain.GiveChain.global.jwt.handler;

import blockchain.GiveChain.global.exception.ErrorCode;
import blockchain.GiveChain.global.exception.ErrorResponseEntity;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.List;

@Component
public class JwtAccessDeniedHandler implements AccessDeniedHandler {
    @Override
    public void handle(HttpServletRequest request,
                       HttpServletResponse response,
                       AccessDeniedException accessDeniedException) throws IOException, ServletException {
        response.setStatus(ErrorCode.JWT_ACCESS_DENIED.getHttpStatus().value());
        response.setContentType("application/json;charset=UTF-8");

        ObjectMapper objectMapper = new ObjectMapper();

        String json = objectMapper.writeValueAsString(
                ErrorResponseEntity.builder()
                        .code(ErrorCode.JWT_ACCESS_DENIED.getCode())
                        .name(ErrorCode.JWT_ACCESS_DENIED.name())
                        .message(ErrorCode.JWT_ACCESS_DENIED.getMessage())
                        .errors(List.of())
                        .build()
        );

        response.getWriter().write(json);
    }
}
