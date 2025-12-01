// lib/blockchain/donation.ts
import { ethers } from "ethers";
import donationAbi from "@/abi/Donation.json";
import { ensureSepoliaNetwork } from "@/lib/network";
import { getWeb3AuthProvider } from "@/lib/aaSdk";

const DONATION_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_DONATION_ADDRESS!;

// Sepolia RPC (조회용)
const SEPOLIA_RPC_URL =
  process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL ||
  "https://1rpc.io/sepolia";

// 🔹 1) 기부 트랜잭션 (Web3Auth 우선, 없으면 MetaMask)
export async function donateByWallet(amountEth: string, campaignId: number) {
  if (typeof window === "undefined") {
    throw new Error("클라이언트 환경에서만 기부가 가능합니다.");
  }

  let eip1193Provider: any = null;

  // 1️⃣ Web3Auth provider 먼저 시도 (구글 로그인 시 여기로 옴)
  eip1193Provider = await getWeb3AuthProvider();

  // 2️⃣ Web3Auth가 없으면 MetaMask fallback
  if (!eip1193Provider && (window as any).ethereum) {
    const mm = (window as any).ethereum;

    // MetaMask 인 경우에만 처리
    if (mm.isMetaMask) {
      try {
        // 계정 연결 요청 (이걸 안 하면 지금처럼 "MetaMask is not connected" 에러)
        await mm.request({ method: "eth_requestAccounts" });
      } catch (e) {
        console.error("[donateByWallet] MetaMask 계정 연결 실패:", e);
        throw new Error("MetaMask 지갑 연결에 실패했습니다.");
      }

      // 네트워크 Sepolia로 맞추기
      await ensureSepoliaNetwork();
      eip1193Provider = mm;
    }
  }

  // 3️⃣ 둘 다 없으면 에러
  if (!eip1193Provider) {
    throw new Error("지갑이 없습니다. Web3Auth 로그인 또는 MetaMask 설치 후 다시 시도해 주세요.");
  }

  // 4️⃣ ethers Provider/Signer 설정
  const provider = new ethers.BrowserProvider(eip1193Provider);
  const network = await provider.getNetwork();

  const chainIdStr = network.chainId.toString(); // bigint -> string
  console.log("[donateByWallet] 현재 chainId:", chainIdStr);

  if (chainIdStr !== "11155111") {
    throw new Error("Sepolia 테스트넷(ChainId 11155111)에 연결해 주세요.");
  }

  const signer = await provider.getSigner();

  const contract = new ethers.Contract(
    DONATION_CONTRACT_ADDRESS,
    donationAbi.abi,
    signer
  );

  try {
    const tx = await contract.donate(
      campaignId,
      { value: ethers.parseEther(amountEth) }
    );

    return await tx.wait();
  } catch (e: any) {
    console.error("[donateByWallet] error:", e);

    if (e.code === "INSUFFICIENT_FUNDS" || e?.info?.error?.code === -32003) {
      throw new Error("지갑 잔액이 부족합니다. 테스트 ETH를 충전해 주세요.");
    }

    throw new Error("기부 트랜잭션 전송에 실패했습니다.");
  }
}

// 아래 조회 함수들은 그대로 두면 됨
export async function fetchUserDonation(
  campaignId: number,
  walletAddress: string
) {
  try {
    const provider = new ethers.JsonRpcProvider(SEPOLIA_RPC_URL);
    const contract = new ethers.Contract(
      DONATION_CONTRACT_ADDRESS,
      donationAbi.abi,
      provider
    );
    const amount = await contract.getDonation(campaignId, walletAddress);
    return ethers.formatEther(amount);
  } catch (e) {
    console.error("[fetchUserDonation] error:", e);
    return "0";
  }
}

export async function fetchCampaignTotal(campaignId: number) {
  try {
    const provider = new ethers.JsonRpcProvider(SEPOLIA_RPC_URL);
    const contract = new ethers.Contract(
      DONATION_CONTRACT_ADDRESS,
      donationAbi.abi,
      provider
    );
    const amount = await contract.getTotalDonationByCampaign(campaignId);
    return ethers.formatEther(amount);
  } catch (e) {
    console.error("[fetchCampaignTotal] error:", e);
    return "0";
  }
}

export async function fetchUserTotalDonation(walletAddress: string) {
  try {
    const provider = new ethers.JsonRpcProvider(SEPOLIA_RPC_URL);
    const contract = new ethers.Contract(
      DONATION_CONTRACT_ADDRESS,
      donationAbi.abi,
      provider
    );
    const amount = await contract.getTotalDonation(walletAddress);
    return ethers.formatEther(amount);
  } catch (e) {
    console.error("[fetchUserTotalDonation] error:", e);
    return "0";
  }
}