package blockchain.GiveChain.domain.donation.repository;

import blockchain.GiveChain.domain.campaign.enums.CampaignCategory;
import blockchain.GiveChain.domain.donation.domain.Donation;
import blockchain.GiveChain.domain.ranking.dto.res.RankingCountryResponse;
import blockchain.GiveChain.domain.ranking.dto.res.RankingMemberResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DonationRepository extends JpaRepository<Donation, Long> {

    @Query("""
    SELECT new blockchain.GiveChain.domain.ranking.dto.res.RankingCountryResponse(
        m.country,
        SUM(d.amount),
        false
    )
    FROM Donation d
    JOIN Member m ON d.memberId = m.id
    GROUP BY m.country
    ORDER BY SUM(d.amount) DESC
""")
    List<RankingCountryResponse> findTop10CountryRankings();

    @Query("""
        SELECT new blockchain.GiveChain.domain.ranking.dto.res.RankingMemberResponse(
            m.id,
            m.name,
            m.country,
            SUM(d.amount),
            false,
            null
        )
        FROM Donation d
        JOIN Member m ON d.memberId = m.id
        JOIN Campaign c ON d.campaignId = c.id
        WHERE c.category = :category
        GROUP BY m.id, m.name, m.country
        ORDER BY SUM(d.amount) DESC
    """)
    List<RankingMemberResponse> findCategoryMemberRankings(@Param("category") CampaignCategory category);

    @Query("""
    SELECT new blockchain.GiveChain.domain.ranking.dto.res.RankingMemberResponse(
                m.id,
                m.name,
                m.country,
                SUM(d.amount),
                false,
                null
            )
            FROM Donation d
            JOIN Member m ON d.memberId = m.id
            WHERE m.country = :country
            GROUP BY m.id, m.name
            ORDER BY SUM(d.amount) DESC
            LIMIT 10
""")
    List<RankingMemberResponse> findTop10CountryMemberRankings(@Param("country") String country);

    long countByMemberId(Long memberId);

    @Query("""
    SELECT SUM(d.amount)
    FROM Donation d
    WHERE d.memberId = :memberId
""")
    long sumAmountByMemberId(Long memberId);
}
