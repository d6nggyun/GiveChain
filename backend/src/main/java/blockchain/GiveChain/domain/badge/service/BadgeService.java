package blockchain.GiveChain.domain.badge.service;

import blockchain.GiveChain.domain.badge.domain.Badge;
import blockchain.GiveChain.domain.badge.dto.res.BadgeResponse;
import blockchain.GiveChain.domain.badge.enums.BadgeType;
import blockchain.GiveChain.domain.badge.repository.BadgeRepository;
import blockchain.GiveChain.domain.blockchain.BadgeOnChainClient;
import blockchain.GiveChain.domain.donation.repository.DonationRepository;
import blockchain.GiveChain.domain.exchangeRate.service.EthPriceService;
import blockchain.GiveChain.domain.member.domain.Member;
import blockchain.GiveChain.domain.member.domain.MemberDetail;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class BadgeService {

    private final BadgeRepository badgeRepository;
    private final DonationRepository donationRepository;
    private final BadgeOnChainClient badgeOnchainClient;
    private final EthPriceService ethPriceService;

    @Transactional
    public void createAndMintBadge(Member member) {
        Long memberId = member.getId();

        long donationCount = donationRepository.countByMemberId(memberId);
        long totalAmountWei = donationRepository.sumAmountByMemberId(memberId);
        BigDecimal totalAmountEth = weiToEth(totalAmountWei);
        BigDecimal ethPriceUsd = ethPriceService.getEthUsdPrice();
        BigDecimal totalUsd = totalAmountEth.multiply(ethPriceUsd);

        List<Badge> existingBadges = badgeRepository.findAllByMemberId(memberId);
        List<BadgeType> existingBadgeTypes = existingBadges.stream().map(Badge::getBadgeType).toList();
        List<BadgeType> toMintBadgeTypes = new ArrayList<>();

        addToMintBadgeByCount(donationCount, existingBadgeTypes, toMintBadgeTypes);
        addToMintBadgeBySum(totalUsd, existingBadgeTypes, toMintBadgeTypes);

        if (toMintBadgeTypes.isEmpty()) return;

        String walletAddress = member.getWalletAddress();

        for (BadgeType badgeType : toMintBadgeTypes) {
            try {
                String txHash = badgeOnchainClient.mintBadge(walletAddress, badgeType.getTokenId());
                badgeRepository.save(Badge.of(memberId, badgeType, txHash));
            } catch (Exception e) {
                log.error("Failed to mint badge onchain for memberId: {}, badgeType: {}", memberId, badgeType, e);
            }
        }
    }

    // Wei 단위를 Eth 단위로 변환
    private BigDecimal weiToEth(long wei) {
        return new BigDecimal(wei).divide(BigDecimal.TEN.pow(18));
    }

    // 기부 횟수 기반 뱃지 추가
    private void addToMintBadgeByCount(long count, List<BadgeType> exist, List<BadgeType> toMint) {
        if (count >= 1 && !exist.contains(BadgeType.FIRST_DONATION)) {
            toMint.add(BadgeType.FIRST_DONATION);
        }
        if (count >= 3 && !exist.contains(BadgeType.DONATION_3_TIMES)) {
            toMint.add(BadgeType.DONATION_3_TIMES);
        }
        if (count >= 5 && !exist.contains(BadgeType.DONATION_5_TIMES)) {
            toMint.add(BadgeType.DONATION_5_TIMES);
        }
        if (count >= 10 && !exist.contains(BadgeType.DONATION_10_TIMES)) {
            toMint.add(BadgeType.DONATION_10_TIMES);
        }
        if (count >= 50 && !exist.contains(BadgeType.DONATION_50_TIMES)) {
            toMint.add(BadgeType.DONATION_50_TIMES);
        }
        if (count >= 100 && !exist.contains(BadgeType.DONATION_100_TIMES)) {
            toMint.add(BadgeType.DONATION_100_TIMES);
        }
    }

    // 기부 금액 기반 뱃지 추가
    private void addToMintBadgeBySum(BigDecimal totalUsd, List<BadgeType> exist, List<BadgeType> toMint) {
        if (totalUsd.compareTo(BigDecimal.valueOf(10)) >= 0 && !exist.contains(BadgeType.AMOUNT_BRONZE)) {
            toMint.add(BadgeType.AMOUNT_BRONZE);
        }
        if (totalUsd.compareTo(BigDecimal.valueOf(50)) >= 0 && !exist.contains(BadgeType.AMOUNT_SILVER)) {
            toMint.add(BadgeType.AMOUNT_SILVER);
        }
        if (totalUsd.compareTo(BigDecimal.valueOf(100)) >= 0 && !exist.contains(BadgeType.AMOUNT_GOLD)) {
            toMint.add(BadgeType.AMOUNT_GOLD);
        }
        if (totalUsd.compareTo(BigDecimal.valueOf(500)) >= 0 && !exist.contains(BadgeType.AMOUNT_PLATINUM)) {
            toMint.add(BadgeType.AMOUNT_PLATINUM);
        }
        if (totalUsd.compareTo(BigDecimal.valueOf(1000)) >= 0 && !exist.contains(BadgeType.AMOUNT_DIAMOND)) {
            toMint.add(BadgeType.AMOUNT_DIAMOND);
        }
    }

    @Transactional(readOnly = true)
    public List<BadgeResponse> getMemberBadges(MemberDetail memberDetail) {
        List<Badge> badges = badgeRepository.findAllByMemberId(memberDetail.getMember().getId());
        return badges.stream()
                .map(badge -> new BadgeResponse(
                        badge.getId(), badge.getBadgeType().getTokenId(), badge.getBadgeType().name(),
                        badge.getBadgeType().getLabel(), badge.getTxHash())
                )
                .toList();
    }

    public List<String> loadBadgeTypesForMember(Long memberId) {
        List<Badge> badges = badgeRepository.findAllByMemberId(memberId);

        return badges.stream()
                .map(b -> b.getBadgeType().name())
                .toList();
    }
}
