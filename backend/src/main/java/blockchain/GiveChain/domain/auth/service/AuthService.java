package blockchain.GiveChain.domain.auth.service;

import blockchain.GiveChain.domain.auth.dto.req.OAuthLoginRequest;
import blockchain.GiveChain.domain.auth.dto.res.OAuthLoginResponse;
import blockchain.GiveChain.domain.member.domain.Member;
import blockchain.GiveChain.domain.member.repository.MemberRepository;
import blockchain.GiveChain.global.exception.CustomException;
import blockchain.GiveChain.global.exception.ErrorCode;
import blockchain.GiveChain.global.jwt.JwtProvider;
import blockchain.GiveChain.global.jwt.refreshToken.RefreshToken;
import blockchain.GiveChain.global.utils.CookieUtil;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthService {

    private final MemberRepository memberRepository;
    private final JwtProvider jwtProvider;

    @Transactional
    public OAuthLoginResponse login(@Valid OAuthLoginRequest request, HttpServletResponse response) {
        Member member = memberRepository.findByProviderAndProviderMemberId(request.provider(), request.providerMemberId())
                .map(existing -> {
                    existing.updateProfile(request.email(), request.name(), request.walletAddress());
                    return existing;
                })
                .orElseGet(() -> {
                    Member newMember = Member.of(
                            request.name(), request.email(),
                            request.provider(), request.providerMemberId(),
                            request.walletAddress());
                    return memberRepository.save(newMember);
                });

        return jwtProvider.authenticateAndGenerateToken(member, response);
    }

    @Transactional
    public OAuthLoginResponse refresh(String refreshToken, HttpServletResponse response) {
        jwtProvider.validateRefreshTokenAndDelete(refreshToken);

        RefreshToken studentRefreshToken = jwtProvider.findRefreshToken(refreshToken);
        Member member = getMemberByEmail(studentRefreshToken.getEmail());

        jwtProvider.matchRefreshToken(studentRefreshToken.getRefreshToken(), refreshToken);

        jwtProvider.deleteRefreshToken(studentRefreshToken);

        return jwtProvider.authenticateAndGenerateToken(member, response);
    }

    @Transactional
    public void logout(Member member, HttpServletResponse response) {
        RefreshToken refreshToken = jwtProvider.findRefreshTokenByEmail(member.getEmail());

        jwtProvider.deleteRefreshToken(refreshToken);
        CookieUtil.deleteCookie(response, "accessToken");
        CookieUtil.deleteCookie(response, "refreshToken");
    }

    @Transactional
    public void deleteMember(Member member, HttpServletResponse response) {
        Member memberToDelete = getMemberByEmail(member.getEmail());

        jwtProvider.deleteRefreshTokenByEmail(member.getEmail());
        memberRepository.delete(memberToDelete);
        CookieUtil.deleteCookie(response, "accessToken");
        CookieUtil.deleteCookie(response, "refreshToken");
    }

    private Member getMemberByEmail(String email) {
        return memberRepository.findByEmail(email)
                .orElseThrow(() -> {
                    log.warn("[회원 정보 조회 실패] 사용자 없음: email={}", email);
                    return new CustomException(ErrorCode.MEMBER_NOT_FOUND);
                });
    }
}
