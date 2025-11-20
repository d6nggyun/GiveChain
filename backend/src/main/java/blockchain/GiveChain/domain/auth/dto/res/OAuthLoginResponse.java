package blockchain.GiveChain.domain.auth.dto.res;

import blockchain.GiveChain.domain.member.domain.Member;

public record OAuthLoginResponse(

        Long id,

        String name,

        String email,

        String walletAddress

) {
    public static OAuthLoginResponse of(Member member) {
        return new OAuthLoginResponse(member.getId(), member.getName(), member.getEmail(), member.getWalletAddress());
    }
}
