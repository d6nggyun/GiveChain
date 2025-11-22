package blockchain.GiveChain.domain.member.repository;

import blockchain.GiveChain.domain.member.domain.Member;
import jakarta.validation.constraints.NotBlank;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findByEmail(String email);
    Optional<Member> findByWalletAddress(String walletAddress);
    boolean existsByEmail(@NotBlank String email);
}
