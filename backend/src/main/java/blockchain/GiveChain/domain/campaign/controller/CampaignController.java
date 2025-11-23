package blockchain.GiveChain.domain.campaign.controller;

import blockchain.GiveChain.domain.campaign.dto.req.AddCampaignRequest;
import blockchain.GiveChain.domain.campaign.dto.res.CampaignResponse;
import blockchain.GiveChain.domain.campaign.service.CampaignService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/campaigns")
public class CampaignController {

    private CampaignService campaignService;

    // 캠페인 등록
    @PostMapping
    public ResponseEntity<CampaignResponse> addCampaign(@Valid @RequestBody AddCampaignRequest request) {
        return ResponseEntity.status(HttpStatus.OK).body(campaignService.addCampaign(request));
    }

    // 캠페인 삭제

    // 캠페인 시작
    @PutMapping("/{campaignId}/start")
    public ResponseEntity<Void> startCampaign(@PathVariable Long campaignId) {
        campaignService.startCampaign(campaignId);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    // 캠페인 종료
    @PutMapping("/{campaignId}/end")
    public ResponseEntity<Void> endCampaign(@PathVariable Long campaignId) {
        campaignService.endCampaign(campaignId);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
