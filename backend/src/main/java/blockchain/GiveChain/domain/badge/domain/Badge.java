package blockchain.GiveChain.domain.badge.domain;

import blockchain.GiveChain.domain.badge.enums.BadgeType;
import blockchain.GiveChain.global.domain.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "badge")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Badge extends BaseTimeEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "member_id", nullable = false)
    private Long memberId;

    @Enumerated(EnumType.STRING)
    @Column(name = "badge_type", nullable = false)
    private BadgeType badgeType;

    @Column(name = "tx_hash")
    private String txHash;

    private Badge(Long memberId, BadgeType badgeType, String txHash) {
        this.memberId = memberId;
        this.badgeType = badgeType;
        this.txHash = txHash;
    }

    public static Badge of(Long memberId, BadgeType badgeType, String txHash) {
        return new Badge(memberId, badgeType, txHash);
    }
}
