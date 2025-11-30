package blockchain.GiveChain.global.config;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.http.HttpService;

@Configuration
@RequiredArgsConstructor
public class Web3Config {

    @Value("${blockchain.rpc-url}")
    private String rpcUrl;

    @Value("${blockchain.owner-private-key}")
    private String ownerPrivateKey;

    @Bean
    public Web3j web3j() {
        return Web3j.build(new HttpService(rpcUrl));
    }

    @Bean
    public Credentials badgeOwnerCredentials() {
        // 공백 제거
        String pk = ownerPrivateKey.trim();

        // 0x 붙어 있으면 제거
        if (pk.startsWith("0x") || pk.startsWith("0X")) {
            pk = pk.substring(2);
        }

        // 길이 검증 (64자리 hex)
        if (pk.length() != 64) {
            throw new IllegalArgumentException(
                    "[Badge] Invalid owner private key length: " + pk.length()
                            + " (value starts with: " + pk.substring(0, Math.min(6, pk.length())) + "...)"
            );
        }

        return Credentials.create(pk);
    }
}