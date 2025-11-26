package blockchain.GiveChain.domain.campaign.service;

import blockchain.GiveChain.domain.campaign.domain.Campaign;
import blockchain.GiveChain.domain.campaign.dto.req.AddCampaignRequest;
import blockchain.GiveChain.domain.campaign.dto.res.CampaignResponse;
import blockchain.GiveChain.domain.campaign.repository.CampaignRepository;
import blockchain.GiveChain.global.exception.CustomException;
import blockchain.GiveChain.global.exception.ErrorCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class CampaignService {

    private final CampaignRepository campaignRepository;

    @Transactional(readOnly = true)
    public List<CampaignResponse> getCampaign() {
        List<Campaign> campaign = campaignRepository.findAll();
        return campaign.stream().map(CampaignResponse::of).toList();
    }

    @Transactional(readOnly = true)
    public CampaignResponse getDetailCampaign(Long campaignId) {
        Campaign campaign = getCampaignById(campaignId);
        return CampaignResponse.of(campaign);
    }

    @Transactional
    public CampaignResponse addCampaign(AddCampaignRequest request) {
        Campaign campaign = campaignRepository.save(Campaign.of(request));
        return CampaignResponse.of(campaign);
    }

    @Transactional
    public void deleteCampaign(Long campaignId) {
        campaignRepository.deleteById(campaignId);
    }

    @Transactional
    public void startCampaign(Long campaignId) {
        Campaign campaign = getCampaignById(campaignId);
        campaign.startCampaign();
    }

    @Transactional
    public void endCampaign(Long campaignId) {
        Campaign campaign = getCampaignById(campaignId);
        campaign.endCampaign();
    }

    private Campaign getCampaignById(Long campaignId) {
        return campaignRepository.findById(campaignId)
                .orElseThrow(() -> new CustomException(ErrorCode.CAMPAIGN_NOT_FOUND));
    }
}
