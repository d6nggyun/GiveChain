package blockchain.GiveChain.domain.auth.dto.res;

import blockchain.GiveChain.domain.member.domain.Member;

public record OAuthLoginResponse(

        Long id,

        String name,

        String email,

        String walletAddress,

        String accessToken,

        String refreshToken

) {
    public static OAuthLoginResponse of(Member member, String accessToken, String refreshToken) {
        return new OAuthLoginResponse(member.getId(), member.getName(), member.getEmail(), member.getWalletAddress(),
                accessToken, refreshToken);
    }
}
