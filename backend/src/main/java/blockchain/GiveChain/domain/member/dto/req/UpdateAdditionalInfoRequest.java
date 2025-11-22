package blockchain.GiveChain.domain.member.dto.req;

import jakarta.validation.constraints.NotBlank;

public record UpdateAdditionalInfoRequest(

        @NotBlank
        String name,

        @NotBlank
        String email,

        @NotBlank
        String country

) {
}
