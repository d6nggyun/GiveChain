package blockchain.GiveChain.domain.member.dto.req;

import jakarta.validation.constraints.NotBlank;

public record UpdateCountryRequest(

        @NotBlank
        String country

) {
}
