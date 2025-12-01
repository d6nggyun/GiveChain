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

// 🔹 1) 기부 트랜잭션 (MetaMask 또는 Web3Auth)
export async function donateByWallet(amountEth: string, campaignId: number) {
  if (typeof window === "undefined") {
    throw new Error("클라이언트 환경에서만 기부가 가능합니다.");
  }

  const hasMetaMask = !!(window as any).ethereum;
  let eip1193Provider: any = null;

  // 1) MetaMask가 있으면 MetaMask 우선 사용
  if (hasMetaMask && (window as any).ethereum.isMetaMask) {
    await ensureSepoliaNetwork();
    eip1193Provider = (window as any).ethereum;
  } else {
    // 2) MetaMask 없으면 Web3Auth provider 시도
    eip1193Provider = await getWeb3AuthProvider();
  }

  if (!eip1193Provider) {
    throw new Error("지갑이 없습니다. 지갑을 연결한 뒤 다시 시도해 주세요.");
  }

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

// 🔹 2) 특정 캠페인에 대한 해당 유저 기부액 조회
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

// 🔹 3) 캠페인별 총 기부액 조회
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

// 🔹 4) 유저의 전체(모든 캠페인 합산) 기부액 조회
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