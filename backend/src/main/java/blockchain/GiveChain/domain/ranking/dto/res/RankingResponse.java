package blockchain.GiveChain.domain.ranking.dto.res;

import java.util.List;

public record RankingResponse(

        List<RankingCountryResponse> countryRankings,

        List<CategoryRankingResponse> categoryRankings

) {
    public static RankingResponse of(List<RankingCountryResponse> countryRankings, List<CategoryRankingResponse> categoryRankings) {
        return new RankingResponse(countryRankings, categoryRankings);
    }
}
