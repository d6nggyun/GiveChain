// lib/blockchain/donation.ts
import { ethers } from "ethers";
import donationAbi from "@/abi/Donation.json";
import { ensureSepoliaNetwork } from "@/lib/network";
import { getWeb3AuthProvider } from "@/lib/aaSdk";

const DONATION_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_DONATION_ADDRESS!;
const SEPOLIA_RPC_URL =
  process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL || "https://1rpc.io/sepolia";

// 🔹 1) 기부 트랜잭션 (Web3Auth 우선 + MetaMask 보조)
export async function donateByWallet(amountEth: string, campaignId: number) {
  const hasWindow = typeof window !== "undefined";

  // ✅ 1. Web3Auth provider가 있으면 그걸 최우선으로 사용
  const waProvider = getWeb3AuthProvider();
  let ethersProvider: ethers.BrowserProvider | null = null;

  if (waProvider) {
    console.log("[donateByWallet] Web3Auth provider 사용");
    ethersProvider = new ethers.BrowserProvider(waProvider as any);
  } else {
    // ✅ 2. Web3Auth가 없으면 MetaMask 시도
    if (!hasWindow || !(window as any).ethereum) {
      throw new Error("지갑이 없습니다. 지갑을 연결한 뒤 다시 시도해 주세요.");
    }

    const eth = (window as any).ethereum;

    if (eth.isMetaMask) {
      console.log("[donateByWallet] MetaMask provider 사용");

      // 체인 Sepolia로 스위치
      await ensureSepoliaNetwork();

      // 계정 연결 (연결 안 되어 있으면 이 시점에서 팝업 뜸)
      await eth.request({ method: "eth_requestAccounts" });

      ethersProvider = new ethers.BrowserProvider(eth);
    } else {
      throw new Error(
        "지원하지 않는 지갑 타입입니다. Web3Auth로 로그인하거나 MetaMask를 사용해 주세요."
      );
    }
  }

  // 여기까지 왔으면 ethersProvider는 무조건 존재
  const network = await ethersProvider.getNetwork();
  const chainIdStr = network.chainId.toString(); // bigint → string
  console.log("[donateByWallet] 현재 chainId:", chainIdStr);

  if (chainIdStr !== "11155111") {
    throw new Error("Sepolia 테스트넷(ChainId 11155111)에 연결해 주세요.");
  }

  const signer = await ethersProvider.getSigner();

  const contract = new ethers.Contract(
    DONATION_CONTRACT_ADDRESS,
    donationAbi.abi,
    signer
  );

  try {
    const tx = await contract.donate(campaignId, {
      value: ethers.parseEther(amountEth),
    });

    return await tx.wait();
  } catch (e: any) {
    console.error("[donateByWallet] error:", e);

    if (e.code === "INSUFFICIENT_FUNDS" || e?.info?.error?.code === -32003) {
      throw new Error("지갑 잔액이 부족합니다. 테스트 ETH를 충전해 주세요.");
    }

    throw new Error("기부 트랜잭션 전송에 실패했습니다.");
  }
}