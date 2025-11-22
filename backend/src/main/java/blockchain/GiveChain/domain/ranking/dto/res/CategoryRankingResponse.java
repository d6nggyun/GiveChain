package blockchain.GiveChain.domain.ranking.dto.res;

import blockchain.GiveChain.domain.campaign.enums.CampaignCategory;

import java.util.List;

public record CategoryRankingResponse(

        String category,

        List<RankingMemberResponse> rankings

) {
    public static CategoryRankingResponse of(CampaignCategory category, List<RankingMemberResponse> rankings) {
        return new CategoryRankingResponse(category.getName(), rankings);
    }
}
