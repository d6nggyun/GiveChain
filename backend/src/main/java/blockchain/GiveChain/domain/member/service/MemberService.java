package blockchain.GiveChain.domain.member.service;

import blockchain.GiveChain.domain.member.domain.Member;
import blockchain.GiveChain.domain.member.domain.MemberDetail;
import blockchain.GiveChain.domain.member.dto.req.UpdateCountryRequest;
import blockchain.GiveChain.domain.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class MemberService {

    private final MemberRepository memberRepository;

    @Transactional
    public void updateCountry(MemberDetail userDetails, UpdateCountryRequest updateCountryRequest) {
        Member member = userDetails.getMember();
        member.updateCountry(updateCountryRequest.country());
        memberRepository.save(member);
    }
}
