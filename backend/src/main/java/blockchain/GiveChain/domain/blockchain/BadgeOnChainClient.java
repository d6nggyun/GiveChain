package blockchain.GiveChain.domain.blockchain;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.web3j.abi.FunctionEncoder;
import org.web3j.abi.datatypes.Address;
import org.web3j.abi.datatypes.Function;
import org.web3j.abi.datatypes.generated.Uint256;
import org.web3j.crypto.Credentials;
import org.web3j.crypto.RawTransaction;
import org.web3j.crypto.TransactionEncoder;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.protocol.core.methods.response.EthGetTransactionCount;
import org.web3j.protocol.core.methods.response.EthSendTransaction;
import org.web3j.utils.Numeric;

import java.math.BigInteger;
import java.util.Arrays;
import java.util.Collections;

@Slf4j
@Service
@RequiredArgsConstructor
public class BadgeOnChainClient {

    private final Web3j web3j;
    private final Credentials badgeOwnerCredentials;

    @Value("${blockchain.badge-contract-address}")
    private String badgeContractAddress;

    /**
     * BadgeNFT 컨트랙트의 mintBadge(to, tokenId)를 호출해서
     * 실제 온체인으로 배지를 발급하고, 트랜잭션 해시를 반환한다.
     */
    public String mintBadge(String walletAddress, int tokenId) throws Exception {
        String contractAddress = badgeContractAddress;

        // 호출할 컨트랙트 함수 정의
        Function function = new Function(
                "mintBadge",
                Arrays.asList(
                        new Address(walletAddress),
                        new Uint256(BigInteger.valueOf(tokenId))
                ),
                Collections.emptyList() // 반환값 없음
        );

        String encodedFunction = FunctionEncoder.encode(function);

        // nonce 조회
        EthGetTransactionCount ethGetTransactionCount = web3j.ethGetTransactionCount(
                badgeOwnerCredentials.getAddress(),
                DefaultBlockParameterName.LATEST
        ).send();

        BigInteger nonce = ethGetTransactionCount.getTransactionCount();

        // gas 설정
        BigInteger gasPrice = web3j.ethGasPrice().send().getGasPrice();
        BigInteger gasLimit = BigInteger.valueOf(300_000);

        // RawTransaction 생성
        RawTransaction rawTx = RawTransaction.createTransaction(
                nonce,
                gasPrice,
                gasLimit,
                contractAddress,
                BigInteger.ZERO, // value = 0 (ERC1155 mint는 ETH 안 보냄)
                encodedFunction
        );

        // 서명 & 전송
        byte[] signedMessage = TransactionEncoder.signMessage(rawTx, badgeOwnerCredentials);
        String hexValue = Numeric.toHexString(signedMessage);

        EthSendTransaction sendTx = web3j.ethSendRawTransaction(hexValue).send();

        if (sendTx.hasError()) {
            log.error("Failed to send mintBadge tx: {}", sendTx.getError().getMessage());
            throw new RuntimeException(sendTx.getError().getMessage());
        }

        String txHash = sendTx.getTransactionHash();
        log.info("Badge minted onchain. to={}, tokenId={}, txHash={}",
                walletAddress, tokenId, txHash);

        return txHash;
    }
}
