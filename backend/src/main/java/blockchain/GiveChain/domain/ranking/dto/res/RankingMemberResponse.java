package blockchain.GiveChain.domain.ranking.dto.res;

public record RankingMemberResponse(

        Long memberId,

        String memberName,

        String memberCountry,

        Long totalDonationAmount,

        Boolean isMine

) {
    public static RankingMemberResponse of(Long memberId, String memberName, String memberCountry, Long totalDonationAmount, Boolean isMine) {
        return new RankingMemberResponse(memberId, memberName, memberCountry, totalDonationAmount, isMine);
    }
}