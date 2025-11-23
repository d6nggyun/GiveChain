package blockchain.GiveChain.domain.campaign.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CampaignStatus {

    ACTIVE("진행중"),
    COMPLETED("완료"),
    SCHEDULED("예정");

    private final String name;
}
