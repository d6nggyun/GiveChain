package blockchain.GiveChain.domain.ranking.controller;

import blockchain.GiveChain.domain.member.domain.MemberDetail;
import blockchain.GiveChain.domain.ranking.dto.res.RankingMemberResponse;
import blockchain.GiveChain.domain.ranking.dto.res.RankingResponse;
import blockchain.GiveChain.domain.ranking.service.RankingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/rankings")
@RequiredArgsConstructor
public class RankingController {

    private final RankingService rankingService;

    @GetMapping
    public ResponseEntity<RankingResponse> getRankings(@AuthenticationPrincipal MemberDetail userDetails) {
        return ResponseEntity.ok(rankingService.getRankings(userDetails));
    }

    @GetMapping("/country")
    public ResponseEntity<List<RankingMemberResponse>> getCountryRankings(@AuthenticationPrincipal MemberDetail userDetails) {
        return ResponseEntity.ok(rankingService.getCountryRankings(userDetails));
    }
}
