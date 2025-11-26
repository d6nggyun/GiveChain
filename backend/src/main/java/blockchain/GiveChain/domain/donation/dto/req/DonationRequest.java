package blockchain.GiveChain.domain.donation.dto.req;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record DonationRequest(

        @NotNull
        Long campaignId,

        @NotNull
        Long amount,

        @NotBlank
        String txHash

) {
}
