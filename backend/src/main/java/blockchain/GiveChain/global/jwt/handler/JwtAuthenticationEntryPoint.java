package blockchain.GiveChain.global.jwt.handler;

import blockchain.GiveChain.global.exception.ErrorCode;
import blockchain.GiveChain.global.exception.ErrorResponseEntity;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request,
                         HttpServletResponse response,
                         AuthenticationException authException) throws IOException, ServletException {
        response.setStatus(ErrorCode.JWT_ENTRY_POINT.getHttpStatus().value());
        response.setContentType("application/json;charset=UTF-8");

        ObjectMapper objectMapper = new ObjectMapper();

        String json = objectMapper.writeValueAsString(
                ErrorResponseEntity.builder()
                        .code(ErrorCode.JWT_ENTRY_POINT.getCode())
                        .name(ErrorCode.JWT_ENTRY_POINT.name())
                        .message(ErrorCode.JWT_ENTRY_POINT.getMessage())
                        .build()
        );

        response.getWriter().write(json);
    }
}
