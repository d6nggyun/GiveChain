package blockchain.GiveChain.global.jwt.refreshToken;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {

    Optional<RefreshToken> findByWalletAddress(String walletAddress);
    Optional<RefreshToken> findByRefreshToken(String refreshToken);
    void deleteByRefreshToken(String refreshToken);
    Optional<RefreshToken> findByMemberId(Long memberId);
    void deleteByWalletAddress(String walletAddress);
}

