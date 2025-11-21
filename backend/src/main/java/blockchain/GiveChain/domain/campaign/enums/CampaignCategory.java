package blockchain.GiveChain.domain.campaign.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CampaignCategory {

    ENVIRONMENT("환경"),
    EDUCATION("교육"),
    HEALTH("보건"),
    DISASTER("재난");

    private final String name;
}
