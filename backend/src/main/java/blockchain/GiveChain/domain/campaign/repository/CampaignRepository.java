package blockchain.GiveChain.domain.campaign.repository;

import blockchain.GiveChain.domain.campaign.domain.Campaign;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CampaignRepository extends JpaRepository<Campaign, Long> {
}
