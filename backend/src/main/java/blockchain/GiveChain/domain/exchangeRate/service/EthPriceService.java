package blockchain.GiveChain.domain.exchangeRate.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;
import java.util.Map;

@Service
public class EthPriceService {

    private final RestTemplate restTemplate = new RestTemplate();

    public BigDecimal getEthUsdPrice() {
        try {
            String url = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";
            Map<String, Map<String, Double>> response = restTemplate.getForObject(url, Map.class);

            Double price = response.get("ethereum").get("usd");
            return BigDecimal.valueOf(price);
        } catch (Exception e) {
            throw new RuntimeException("ETH 가격 조회 실패", e);
        }
    }
}
