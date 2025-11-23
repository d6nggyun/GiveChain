package blockchain.GiveChain.domain.campaign.dto.res;

import blockchain.GiveChain.domain.campaign.domain.Campaign;
import blockchain.GiveChain.domain.campaign.enums.CampaignCategory;
import blockchain.GiveChain.domain.campaign.enums.CampaignStatus;

import java.time.LocalDate;

public record CampaignResponse(

        Long id,

        String title,

        String description,

        String detailedDescription,

        CampaignCategory category,

        Long currentAmount,

        LocalDate startDate,

        LocalDate endDate,

        CampaignStatus status,

        String imageUrl,

        String organizerName,

        String organizerLogoUrl,

        String smartContractAddress

) {
    public static CampaignResponse of(Campaign campaign) {
        return new CampaignResponse(
                campaign.getId(),
                campaign.getTitle(),
                campaign.getDescription(),
                campaign.getDetailedDescription(),
                campaign.getCategory(),
                campaign.getCurrentAmount(),
                campaign.getStartDate(),
                campaign.getEndDate(),
                campaign.getStatus(),
                campaign.getImageUrl(),
                campaign.getOrganizerName(),
                campaign.getOrganizerLogoUrl(),
                campaign.getSmartContractAddress()
        );
    }
}