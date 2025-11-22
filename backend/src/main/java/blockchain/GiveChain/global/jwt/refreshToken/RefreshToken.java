package blockchain.GiveChain.global.jwt.refreshToken;

import blockchain.GiveChain.domain.member.domain.Member;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "refresh_token")
public class RefreshToken {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 512)
    private String refreshToken;

    @Column(name = "member_id", nullable = false, unique = true)
    private Long memberId;

    @Column(nullable = false, length = 20)
    private String email;

    @Column(name = "wallet_address", nullable = false, unique = true)
    private String walletAddress;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    public void onCreate() {
        this.createdAt = LocalDateTime.now();
    }

    private RefreshToken(String refreshToken, Long memberId, String email, String walletAddress) {
        this.refreshToken = refreshToken;
        this.memberId = memberId;
        this.email = email;
        this.walletAddress = walletAddress;
    }

    public static RefreshToken of(Member member, String refreshToken) {
        return new RefreshToken(refreshToken, member.getId(), member.getEmail(), member.getWalletAddress());
    }

    public void updateToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }
}