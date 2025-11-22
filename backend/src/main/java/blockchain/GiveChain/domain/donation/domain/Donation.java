package blockchain.GiveChain.domain.donation.domain;

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

    private Long amount; // 토큰 수량

    private String txHash; // 트랜잭션 해시

    public Donation(Long memberId, Long campaignId, Long amount, String txHash) {
        this.memberId = memberId;
        this.campaignId = campaignId;
        this.amount = amount;
        this.txHash = txHash;
    }

    public static Donation of(Long memberId, Long campaignId, Long amount, String txHash) {
        return new Donation(memberId, campaignId, amount, txHash);
    }
}