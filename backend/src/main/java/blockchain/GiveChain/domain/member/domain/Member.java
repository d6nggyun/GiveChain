package blockchain.GiveChain.domain.member.domain;

import blockchain.GiveChain.domain.member.enums.Role;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Optional;

@Entity
@Table(name = "member",
        uniqueConstraints = {
                   @UniqueConstraint(name = "uk_member_provider_member", columnNames = {"provider", "provider_member_id"})
               })
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    private String name;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String provider;

    @Column(name = "provider_member_id", nullable = false)
    private String providerMemberId;

    @Column(name = "wallet_address", nullable = false, unique = true)
    private String walletAddress;

    @Column(nullable = false, length = 10)
    @Enumerated(EnumType.STRING)
    private Role role;

    private Member (String name, String email, String provider, String providerMemberId, String walletAddress, Role role) {
        this.name = name;
        this.email = email;
        this.provider = provider;
        this.providerMemberId = providerMemberId;
        this.walletAddress = walletAddress;
        this.role = role;
    }

    public static Member of(String name, String email, String provider, String providerMemberId, String walletAddress) {
        return new Member(name, email, provider, providerMemberId, walletAddress, Role.USER);
    }

    public void updateProfile(String email, String name, String walletAddress) {
        this.email = Optional.ofNullable(email).orElse(this.email);
        this.name = Optional.ofNullable(name).orElse(this.name);
        this.walletAddress = Optional.ofNullable(walletAddress).orElse(this.walletAddress);
    }
}
