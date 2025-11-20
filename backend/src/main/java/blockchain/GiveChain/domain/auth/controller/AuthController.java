package blockchain.GiveChain.domain.auth.controller;

import blockchain.GiveChain.domain.auth.dto.req.OAuthLoginRequest;
import blockchain.GiveChain.domain.auth.dto.res.OAuthLoginResponse;
import blockchain.GiveChain.domain.auth.service.AuthService;
import blockchain.GiveChain.domain.member.domain.MemberDetail;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    // OAuth 회원가입 및 로그인
    @PostMapping("/login")
    public ResponseEntity<OAuthLoginResponse> login(@Valid @RequestBody OAuthLoginRequest request,
                                                     HttpServletResponse response) {
        return ResponseEntity.ok(authService.login(request, response));
    }

    // 토큰 재발급
    @PostMapping("/refresh")
    public ResponseEntity<OAuthLoginResponse> refresh(@CookieValue(value = "refreshToken", required = true) String refreshToken,
                                                        HttpServletResponse response) {
        return ResponseEntity.status(HttpStatus.OK).body(authService.refresh(refreshToken, response));
    }

    // 로그아웃
    @DeleteMapping("/logout")
    public ResponseEntity<Void> logout(@AuthenticationPrincipal MemberDetail userDetails,
                                       HttpServletResponse response) {
        authService.logout(userDetails.getMember(), response);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    // 회원탈퇴
    @DeleteMapping
    public ResponseEntity<Void> deleteMember(@AuthenticationPrincipal MemberDetail userDetails,
                                             HttpServletResponse response) {
        authService.deleteMember(userDetails.getMember(), response);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
