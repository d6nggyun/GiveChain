package blockchain.GiveChain.domain.donation.dto.res;

import blockchain.GiveChain.domain.donation.domain.Donation;

public record DonationResponse(

        Long campaignId,

        Long memberId,

        Long amount,

        String txHash

) {
    public static DonationResponse from(Donation donation) {
        return new DonationResponse(
                donation.getCampaignId(),
                donation.getMemberId(),
                donation.getAmount(),
                donation.getTxHash()
        );
    }
}
