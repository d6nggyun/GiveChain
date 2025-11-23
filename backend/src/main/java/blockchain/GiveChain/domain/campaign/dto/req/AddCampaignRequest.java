package blockchain.GiveChain.domain.campaign.dto.req;

import blockchain.GiveChain.domain.campaign.enums.CampaignCategory;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public record AddCampaignRequest(

        @NotBlank
        String title,

        @NotBlank
        String description,

        @NotBlank
        String detailedDescription,

        @NotNull
        CampaignCategory category,

        @NotNull
        LocalDate startDate,

        @NotNull
        LocalDate endDate,

        @NotBlank
        String imageUrl,

        @NotBlank
        String organizerName,

        @NotBlank
        String organizerLogoUrl,

        @NotBlank
        String smartContractAddress

) {
}
