// lib/network.ts

export async function ensureSepoliaNetwork() {
  if (typeof window === "undefined" || !window.ethereum) {
    console.warn("MetaMask가 없습니다.");
    return;
  }

  // Sepolia 체인 ID (16진수)
  const SEPOLIA_CHAIN_ID = "0xaa36a7";
  const RPC_URL = process.env.NEXT_PUBLIC_HARDHAT_RPC_URL;

  const currentChainId = await window.ethereum.request({
    method: "eth_chainId",
  });

  if (currentChainId !== SEPOLIA_CHAIN_ID) {
    try {
      // 먼저 네트워크 스위치 시도
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: SEPOLIA_CHAIN_ID }],
      });
    } catch (switchError: any) {
      // 4902: 아직 MetaMask에 네트워크가 등록 안 된 경우 → 추가
      if (switchError.code === 4902) {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: SEPOLIA_CHAIN_ID,
              chainName: "Sepolia Testnet",
              rpcUrls: [RPC_URL],
              nativeCurrency: {
                name: "Sepolia ETH",
                symbol: "SEP",
                decimals: 18,
              },
              blockExplorerUrls: ["https://sepolia.etherscan.io"],
            },
          ],
        });
      } else {
        throw switchError;
      }
    }
  }
}