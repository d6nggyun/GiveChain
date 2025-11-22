package blockchain.GiveChain.domain.member.controller;

import blockchain.GiveChain.domain.member.domain.MemberDetail;
import blockchain.GiveChain.domain.member.dto.req.UpdateAdditionalInfoRequest;
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

    @PutMapping("/additional-info")
    public ResponseEntity<Void> updateAdditionalInfo(@AuthenticationPrincipal MemberDetail userDetails,
                                                         @Valid @RequestBody UpdateAdditionalInfoRequest updateAdditionalInfoRequest) {
        memberService.updateAdditionalInfo(userDetails, updateAdditionalInfoRequest);
        return ResponseEntity.noContent().build();
    }
}
