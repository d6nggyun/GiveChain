package blockchain.GiveChain.domain.auth.dto.req;

import jakarta.validation.constraints.NotBlank;

public record OAuthLoginRequest(

        @NotBlank
        String provider,

        @NotBlank
        String providerMemberId,

        String email,

        String name,

        @NotBlank
        String walletAddress

) {
}
