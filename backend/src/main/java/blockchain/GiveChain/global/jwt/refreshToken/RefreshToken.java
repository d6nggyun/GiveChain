package blockchain.GiveChain.global.jwt.refreshToken;

import blockchain.GiveChain.domain.member.domain.Member;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
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

    @Column(name = "member_id", nullable = false, unique = true)
    private Long memberId;

    @Column(nullable = false, length = 20)
    private String email;

    @Column(nullable = false, length = 512)
    private String refreshToken;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    public void onCreate() {
        this.createdAt = LocalDateTime.now();
    }

    @Builder
    private RefreshToken(Member member, String refreshToken) {
        this.memberId = member.getId();
        this.email = member.getEmail();
        this.refreshToken = refreshToken;
    }
}