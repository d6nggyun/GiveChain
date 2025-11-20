package blockchain.GiveChain.domain.member.repository;

import blockchain.GiveChain.domain.member.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findByProviderAndProviderMemberId(String provider, String providerMemberId);
    Optional<Member> findByEmail(String email);
}
