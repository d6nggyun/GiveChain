package blockchain.GiveChain.domain.ranking.dto.res;

public record RankingCountryResponse(

        String country,

        Long totalDonationAmount,

        Boolean isMine

) {
    public static RankingCountryResponse of(String country, Long totalDonationAmount, Boolean isMine) {
        return new RankingCountryResponse(country, totalDonationAmount, isMine);
    }
}
