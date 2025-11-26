package blockchain.GiveChain.domain.donation.controller;

import blockchain.GiveChain.domain.donation.dto.req.DonationRequest;
import blockchain.GiveChain.domain.donation.dto.res.DonationResponse;
import blockchain.GiveChain.domain.donation.service.DonationService;
import blockchain.GiveChain.domain.member.domain.MemberDetail;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/donations")
@RequiredArgsConstructor
public class DonationController {

    private final DonationService donationService;

    @PostMapping
    public ResponseEntity<DonationResponse> saveDonation(@AuthenticationPrincipal MemberDetail memberDetail,
                                                         @Valid @RequestBody DonationRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(donationService.saveDonation(memberDetail, request));
    }
}
