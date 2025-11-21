package blockchain.GiveChain.domain.member.controller;

import blockchain.GiveChain.domain.member.domain.MemberDetail;
import blockchain.GiveChain.domain.member.dto.req.UpdateCountryRequest;
import blockchain.GiveChain.domain.member.service.MemberService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/members")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @PutMapping("/country")
    public ResponseEntity<Void> updateCountry(@AuthenticationPrincipal MemberDetail userDetails,
                                                         @Valid @RequestBody UpdateCountryRequest updateCountryRequest) {
        memberService.updateCountry(userDetails, updateCountryRequest);
        return ResponseEntity.noContent().build();
    }
}
