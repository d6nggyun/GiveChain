package blockchain.GiveChain.domain.campaign.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CampaignCategory {

    ENVIRONMENT("환경"),
    EDUCATION("교육"),
    HEALTH("보건"),
    DISASTER("재난"),
    ANIMAL_WELFARE("동물복지"),
    COMMUNITY_DEVELOPMENT("지역사회 개발"),
    ARTS_CULTURE("예술 및 문화"),
    HUMAN_RIGHTS("인권"),
    POVERTY_ALLEVIATION("빈곤 퇴치"),
    OTHER("기타");

    private final String name;
}
