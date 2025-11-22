package blockchain.GiveChain.domain.member.service;

import blockchain.GiveChain.domain.member.domain.Member;
import blockchain.GiveChain.domain.member.domain.MemberDetail;
import blockchain.GiveChain.domain.member.dto.req.UpdateAdditionalInfoRequest;
import blockchain.GiveChain.domain.member.repository.MemberRepository;
import blockchain.GiveChain.global.exception.CustomException;
import blockchain.GiveChain.global.exception.ErrorCode;
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
    public void updateAdditionalInfo(MemberDetail userDetails, UpdateAdditionalInfoRequest request) {
        Member member = userDetails.getMember();

        if (memberRepository.existsByEmail(request.email())) {
            throw new CustomException(ErrorCode.EMAIL_ALREADY_EXISTS);
        }

        member.updateAdditionalInfo(request.name(), request.email(), request.country());
        memberRepository.save(member);
    }
}
