// lib/blockchain/donation.ts
import { ethers } from "ethers";
import donationAbi from "@/abi/Donation.json";
import { ensureSepoliaNetwork } from "@/lib/network";
import { getWeb3AuthProvider } from "@/lib/aaSdk";

const DONATION_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_DONATION_ADDRESS!;

// 🔹 Sepolia RPC (프론트용, 조회용)
const SEPOLIA_RPC_URL =
  process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL || "https://1rpc.io/sepolia";

// 🔹 1) 기부 트랜잭션 (MetaMask + Web3Auth 둘 다 지원)
export async function donateByWallet(amountEth: string, campaignId: number) {
  // 1) 어떤 지갑을 쓸지 결정
  let ethersProvider: ethers.BrowserProvider;

  const hasWindow = typeof window !== "undefined";

  const isMetaMask =
    hasWindow &&
    (window as any).ethereum &&
    (window as any).ethereum.isMetaMask;

  if (isMetaMask) {
    // ✅ MetaMask 사용
    await ensureSepoliaNetwork(); // 체인이 Sepolia 아니면 스위치 시도

    ethersProvider = new ethers.BrowserProvider(
      (window as any).ethereum
    );
  } else {
    // ✅ Web3Auth 사용 (Google 로그인 지갑)
    const waProvider = getWeb3AuthProvider();

    if (!waProvider) {
      throw new Error(
        "지갑 세션이 없습니다. 다시 로그인 후 시도해 주세요."
      );
    }

    ethersProvider = new ethers.BrowserProvider(waProvider as any);
  }

  // 2) 네트워크 체인 확인
  const network = await ethersProvider.getNetwork();
  const chainIdStr = network.chainId.toString(); // bigint -> string (10진수)
  console.log("[donateByWallet] 현재 chainId:", chainIdStr);

  if (chainIdStr !== "11155111") {
    throw new Error("Sepolia 테스트넷(ChainId 11155111)에 연결해 주세요.");
  }

  // 3) 컨트랙트 호출
  const signer = await ethersProvider.getSigner();

  const contract = new ethers.Contract(
    DONATION_CONTRACT_ADDRESS,
    donationAbi.abi,
    signer
  );

  try {
    const tx = await contract.donate(
      campaignId, // 🔥 캠페인 ID 전달
      {
        value: ethers.parseEther(amountEth),
      }
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
    return ethers.formatEther(amount); // "0.004" 형식 문자열
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