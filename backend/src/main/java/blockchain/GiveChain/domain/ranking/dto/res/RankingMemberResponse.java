package blockchain.GiveChain.domain.ranking.dto.res;

import java.util.List;

public record RankingMemberResponse(

        Long memberId,

        String memberName,

        String memberCountry,

        Long totalDonationAmount,

        Boolean isMine,

        List<String> badgeTypes

) {
    public static RankingMemberResponse of(Long memberId, String memberName, String memberCountry,
                                           Long totalDonationAmount, Boolean isMine, List<String> badgeTypes) {
        return new RankingMemberResponse(memberId, memberName, memberCountry, totalDonationAmount, isMine, badgeTypes);
    }
}