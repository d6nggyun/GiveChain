package blockchain.GiveChain.domain.auth.dto.res;

import blockchain.GiveChain.domain.member.domain.Member;

public record OAuthLoginResponse(

        Long id,

        String name,

        String email,

        String walletAddress,

        boolean isNeededCountryInfo

) {
    public static OAuthLoginResponse of(Member member) {
        boolean isNeededCountryInfo = member.getCountry() == null || member.getCountry().isEmpty();

        return new OAuthLoginResponse(
                member.getId(),
                member.getName(),
                member.getEmail(),
                member.getWalletAddress(),
                isNeededCountryInfo);
    }
}
