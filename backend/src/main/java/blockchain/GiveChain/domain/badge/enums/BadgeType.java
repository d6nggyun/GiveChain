package blockchain.GiveChain.domain.badge.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum BadgeType {

    // 횟수 배지
    FIRST_DONATION(1, "첫 기부"),
    DONATION_3_TIMES(2, "3회 이상 기부"),
    DONATION_5_TIMES(3, "5회 이상 기부"),
    DONATION_10_TIMES(4, "10회 이상 기부"),
    DONATION_50_TIMES(5, "50회 이상 기부"),
    DONATION_100_TIMES(6, "100회 이상 기부"),

    // 금액 배지
    AMOUNT_BRONZE(11, "총 10달러 이상"),
    AMOUNT_SILVER(12, "총 50달러 이상"),
    AMOUNT_GOLD(13, "총 100달러 이상"),
    AMOUNT_PLATINUM(14, "총 500달러 이상"),
    AMOUNT_DIAMOND(15, "총 1000달러 이상");

    private final int tokenId;
    private final String label;
}
