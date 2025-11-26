package blockchain.GiveChain.domain.donation.service;

import blockchain.GiveChain.domain.donation.domain.Donation;
import blockchain.GiveChain.domain.donation.dto.req.DonationRequest;
import blockchain.GiveChain.domain.donation.dto.res.DonationResponse;
import blockchain.GiveChain.domain.donation.repository.DonationRepository;
import blockchain.GiveChain.domain.member.domain.MemberDetail;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class DonationService {

    private final DonationRepository donationRepository;

    @Transactional
    public DonationResponse saveDonation(MemberDetail memberDetail, DonationRequest request) {
        Donation donation = donationRepository.save(Donation.of(memberDetail.getMember().getId(), request));
        return DonationResponse.from(donation);
    }
}
