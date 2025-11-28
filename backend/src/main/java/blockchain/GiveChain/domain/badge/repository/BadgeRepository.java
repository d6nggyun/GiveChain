package blockchain.GiveChain.domain.badge.repository;

import blockchain.GiveChain.domain.badge.domain.Badge;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BadgeRepository extends JpaRepository<Badge, Long> {
}
