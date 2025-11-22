package blockchain.GiveChain.domain.member.domain;

import blockchain.GiveChain.domain.member.enums.Role;
import blockchain.GiveChain.global.domain.BaseTimeEntity;
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
public class Member extends BaseTimeEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String provider;

    @Column(name = "provider_member_id", nullable = false)
    private String providerMemberId;

    @Column(name = "wallet_address", nullable = false, unique = true)
    private String walletAddress;

    private String country;

    @Column(name = "is_needed_additional_info", nullable = false)
    private boolean isNeededAdditionalInfo = true;

    @Column(nullable = false, length = 10)
    @Enumerated(EnumType.STRING)
    private Role role;

    private Member (String name, String email, String provider, String providerMemberId, String walletAddress, String country, Role role) {
        this.name = name;
        this.email = email;
        this.provider = provider;
        this.providerMemberId = providerMemberId;
        this.walletAddress = walletAddress;
        this.country = country;
        this.role = role;
    }

    public static Member of(String name, String email, String provider, String providerMemberId, String walletAddress) {
        if (name == null) name = "NoName";
        if (email == null) email = "NoEmail";
        return new Member(name, email, provider, providerMemberId, walletAddress, null, Role.USER);
    }

    public void updateProfile(String email, String name, String walletAddress) {
        this.email = Optional.ofNullable(email).orElse(this.email);
        this.name = Optional.ofNullable(name).orElse(this.name);
        this.walletAddress = Optional.ofNullable(walletAddress).orElse(this.walletAddress);
    }

    public void updateAdditionalInfo(String name, String email, String country) {
        this.name = name;
        this.email = email;
        this.country = country;
        this.isNeededAdditionalInfo = false;
    }
}
