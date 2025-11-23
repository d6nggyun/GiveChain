package blockchain.GiveChain.domain.campaign.domain;

import blockchain.GiveChain.domain.campaign.dto.req.AddCampaignRequest;
import blockchain.GiveChain.domain.campaign.enums.CampaignCategory;
import blockchain.GiveChain.domain.campaign.enums.CampaignStatus;
import blockchain.GiveChain.global.domain.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "campaign")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Campaign extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String description;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String detailedDescription;

    @Enumerated(EnumType.STRING)
    private CampaignCategory category;

    // 현재 모금 상황
    @Column(name = "current_amount", nullable = false)
    private Long currentAmount;

    // 기간
    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;

    @Column(name = "end_date", nullable = false)
    private LocalDate endDate;

    // 상태
    @Enumerated(EnumType.STRING)
    private CampaignStatus status;

    // 이미지
    @Column(name = "image_url", nullable = false)
    private String imageUrl;

    // 주관 단체
    @Column(name = "organizer_name", nullable = false)
    private String organizerName;

    @Column(name = "organizer_logo_url", nullable = false)
    private String organizerLogoUrl;

    // 캠페인 스마트 컨트랙트 주소
    @Column(name = "smart_contract_address", nullable = false)
    private String smartContractAddress;

    private Campaign(String title, String description, String detailedDescription,
                     CampaignCategory category,
                     Long currentAmount,
                     LocalDate startDate, LocalDate endDate,
                     CampaignStatus status,
                     String imageUrl,
                     String organizerName, String organizerLogoUrl,
                     String smartContractAddress) {
        this.title = title;
        this.description = description;
        this.detailedDescription = detailedDescription;
        this.category = category;
        this.currentAmount = currentAmount;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
        this.imageUrl = imageUrl;
        this.organizerName = organizerName;
        this.organizerLogoUrl = organizerLogoUrl;
        this.smartContractAddress = smartContractAddress;
    }

    public static Campaign of(AddCampaignRequest request) {
        return new Campaign(
                request.title(),
                request.description(),
                request.detailedDescription(),
                request.category(),
                0L,
                request.startDate(),
                request.endDate(),
                CampaignStatus.SCHEDULED,
                request.imageUrl(),
                request.organizerName(),
                request.organizerLogoUrl(),
                request.smartContractAddress()
        );
    }

    public void startCampaign() {
        this.status = CampaignStatus.ACTIVE;
    }

    public void endCampaign() {
        this.status = CampaignStatus.COMPLETED;
    }
}
