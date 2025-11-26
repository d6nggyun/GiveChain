package blockchain.GiveChain.domain.campaign.dto.res;

import blockchain.GiveChain.domain.campaign.domain.Campaign;

import java.time.LocalDate;

public record CampaignResponse(

        Long id,

        String title,

        String description,

        String detailedDescription,

        String category,

        Long currentAmount,

        LocalDate startDate,

        LocalDate endDate,

        String status,

        String imageUrl,

        String organizerName,

        String organizerLogoUrl,

        String smartContractAddress,

        String relatedLink

) {
    public static CampaignResponse of(Campaign campaign) {
        return new CampaignResponse(
                campaign.getId(),
                campaign.getTitle(),
                campaign.getDescription(),
                campaign.getDetailedDescription(),
                campaign.getCategory().getName(),
                campaign.getCurrentAmount(),
                campaign.getStartDate(),
                campaign.getEndDate(),
                campaign.getStatus().getName(),
                campaign.getImageUrl(),
                campaign.getOrganizerName(),
                campaign.getOrganizerLogoUrl(),
                campaign.getSmartContractAddress(),
                campaign.getRelatedLink()
        );
    }
}