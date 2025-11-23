package blockchain.GiveChain.domain.blockchain.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.web3j.abi.FunctionEncoder;
import org.web3j.abi.FunctionReturnDecoder;
import org.web3j.abi.TypeReference;
import org.web3j.abi.datatypes.Address;
import org.web3j.abi.datatypes.Function;
import org.web3j.abi.datatypes.Type;
import org.web3j.abi.datatypes.generated.Uint256;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.protocol.core.methods.request.Transaction;
import org.web3j.protocol.core.methods.response.EthCall;
import org.web3j.protocol.http.HttpService;

import java.math.BigInteger;
import java.util.List;

@Service
public class DonationOnchainService {

    private final Web3j web3j;
    private final String donationContractAddress;

    public DonationOnchainService(@Value("${blockchain.rpc-url}") String rpcUrl,
                                  @Value("${blockchain.donation-contract-address}") String contractAddress) {
        this.web3j = Web3j.build(new HttpService(rpcUrl));
        this.donationContractAddress = contractAddress;
    }

    public BigInteger getTotalDonation(String walletAddress) {
        try {
            Function function = new Function(
                    "getTotalDonation",
                    List.of(new Address(walletAddress)),
                    List.of(new TypeReference<Uint256>() {
                    })
            );

            String encoded = FunctionEncoder.encode(function);

            EthCall response = web3j.ethCall(
                    Transaction.createEthCallTransaction(walletAddress, donationContractAddress, encoded),
                    DefaultBlockParameterName.LATEST).send();

            List<Type> output = FunctionReturnDecoder.decode(
                    response.getValue(),
                    function.getOutputParameters());

            Uint256 result = (Uint256) output.get(0);
            return result.getValue();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
