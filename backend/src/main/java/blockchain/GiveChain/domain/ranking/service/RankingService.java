package blockchain.GiveChain.domain.ranking.service;

import blockchain.GiveChain.domain.badge.service.BadgeService;
import blockchain.GiveChain.domain.campaign.enums.CampaignCategory;
import blockchain.GiveChain.domain.donation.repository.DonationRepository;
import blockchain.GiveChain.domain.member.domain.MemberDetail;
import blockchain.GiveChain.domain.ranking.dto.res.CategoryRankingResponse;
import blockchain.GiveChain.domain.ranking.dto.res.RankingCountryResponse;
import blockchain.GiveChain.domain.ranking.dto.res.RankingMemberResponse;
import blockchain.GiveChain.domain.ranking.dto.res.RankingResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class RankingService {

    private final DonationRepository donationRepository;
    private final BadgeService badgeService;

    @Transactional(readOnly = true)
    public RankingResponse getRankings(MemberDetail memberDetail) {
        Long memberId = getMemberId(memberDetail);
        String memberCountry = getMemberCountry(memberDetail);

        List<RankingCountryResponse> countryRankings = donationRepository.findTop10CountryRankings().stream()
                .limit(10)
                .map(cr -> RankingCountryResponse.of(
                        cr.country(),
                        cr.totalDonationAmount(),
                        memberCountry != null && cr.country().equals(memberCountry)
                )).toList();

        List<CategoryRankingResponse> categoryRankings = Arrays.stream(CampaignCategory.values())
                .map(category -> {
                    List<RankingMemberResponse> memberRankings = donationRepository.findCategoryMemberRankings(category).stream()
                            .limit(10)
                            .map(cr -> {
                                Long targetMemberId = cr.memberId();
                                List<String> badgeTypes = badgeService.loadBadgeTypesForMember(targetMemberId);

                                return RankingMemberResponse.of(
                                        targetMemberId,
                                        cr.memberName(),
                                        cr.memberCountry(),
                                        cr.totalDonationAmount(),
                                        cr.memberId().equals(memberId),
                                        badgeTypes
                                );
                            }).toList();

                    return CategoryRankingResponse.of(category, memberRankings);
                }).toList();

        return RankingResponse.of(countryRankings, categoryRankings);
    }

    @Transactional(readOnly = true)
    public List<RankingMemberResponse> getCountryRankings(MemberDetail memberDetail) {
        List<RankingMemberResponse> countryRankings = donationRepository.findTop10CountryMemberRankings(memberDetail.getMember().getCountry());

        return countryRankings.stream()
                .limit(10)
                .map(cr -> {
                    Long targetMemberId = cr.memberId();
                    List<String> badgeTypes = badgeService.loadBadgeTypesForMember(targetMemberId);

                    return RankingMemberResponse.of(
                            targetMemberId,
                            cr.memberName(),
                            cr.memberCountry(),
                            cr.totalDonationAmount(),
                            cr.memberId().equals(memberDetail.getMember().getId()),
                            badgeTypes
                    );
                }).toList();
    }

    private Long getMemberId(MemberDetail memberDetail) {
        Long memberId;
        if (memberDetail != null) {
            memberId = memberDetail.getMember().getId();
        } else {
            memberId = null;
        }
        return memberId;
    }

    private String getMemberCountry(MemberDetail memberDetail) {
        String memberCountry;
        if (memberDetail != null) {
            memberCountry = memberDetail.getMember().getCountry();
        } else {
            memberCountry = null;
        }
        return memberCountry;
    }
}
