package blockchain.GiveChain.domain.badge.controller;

import blockchain.GiveChain.domain.badge.dto.res.BadgeResponse;
import blockchain.GiveChain.domain.badge.service.BadgeService;
import blockchain.GiveChain.domain.member.domain.MemberDetail;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/badges")
public class BadgeController {

    private final BadgeService badgeService;

    @GetMapping
    public ResponseEntity<List<BadgeResponse>> getMemberBadges(@AuthenticationPrincipal MemberDetail memberDetail) {
        return ResponseEntity.status(HttpStatus.OK).body(badgeService.getMemberBadges(memberDetail));
    }
}
