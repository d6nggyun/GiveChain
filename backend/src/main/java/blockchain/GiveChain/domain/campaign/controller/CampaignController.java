package blockchain.GiveChain.domain.campaign.controller;

import blockchain.GiveChain.domain.campaign.dto.req.AddCampaignRequest;
import blockchain.GiveChain.domain.campaign.dto.res.CampaignResponse;
import blockchain.GiveChain.domain.campaign.service.CampaignService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/campaigns")
public class CampaignController {

    private final CampaignService campaignService;

    // 캠페인 조회
    @GetMapping
    public ResponseEntity<List<CampaignResponse>> getCampaign() {
        return ResponseEntity.status(HttpStatus.OK).body(campaignService.getCampaign());
    }

    // 캠페인 상세 조회
    @GetMapping("/{campaignId}")
    public ResponseEntity<CampaignResponse> getDetailCampaign(@PathVariable Long campaignId) {
        return ResponseEntity.status(HttpStatus.OK).body(campaignService.getDetailCampaign(campaignId));
    }

    // 캠페인 등록
    @PostMapping
    public ResponseEntity<CampaignResponse> addCampaign(@Valid @RequestBody AddCampaignRequest request) {
        return ResponseEntity.status(HttpStatus.OK).body(campaignService.addCampaign(request));
    }

    // 캠페인 삭제
    @DeleteMapping
    public ResponseEntity<Void> deleteCampaign(@RequestParam Long campaignId) {
        campaignService.deleteCampaign(campaignId);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

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
