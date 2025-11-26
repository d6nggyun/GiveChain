package blockchain.GiveChain.domain.donation.domain;

import blockchain.GiveChain.domain.donation.dto.req.DonationRequest;
import blockchain.GiveChain.global.domain.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "donation")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Donation extends BaseTimeEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "member_id", nullable = false)
    private Long memberId;

    @Column(name = "campaign_id", nullable = false)
    private Long campaignId;

    private Long amount;

    private String txHash;

    private Donation(Long memberId, Long campaignId, Long amount, String txHash) {
        this.memberId = memberId;
        this.campaignId = campaignId;
        this.amount = amount;
        this.txHash = txHash;
    }

    public static Donation of(Long memberId, DonationRequest request) {
        return new Donation(memberId, request.campaignId(), request.amount(), request.txHash());
    }
}