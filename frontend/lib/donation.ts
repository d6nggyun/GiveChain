// lib/blockchain/donation.ts
import { ethers } from "ethers";
import donationAbi from "@/abi/Donation.json";
import { ensureHardhatNetwork } from "@/lib/network";

const DONATION_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_DONATION_ADDRESS!;
const HARDHAT_RPC_URL =
  process.env.NEXT_PUBLIC_HARDHAT_RPC_URL ?? "http://127.0.0.1:8545";

// 🔹 1) 기부 트랜잭션 (MetaMask 기준)
export async function donateByWallet(amountEth: string, campaignId: number) {
  if (typeof window === "undefined" || !window.ethereum) {
    throw new Error("지갑이 없습니다. MetaMask를 설치하고 다시 시도해주세요.");
  }

  // MetaMask일 때만 네트워크 스위치 시도
  if ((window.ethereum as any).isMetaMask) {
    await ensureHardhatNetwork();
  }

  const provider = new ethers.BrowserProvider(window.ethereum as any);
  const network = await provider.getNetwork();

  if (network.chainId.toString() !== "31337") {
    console.warn("[donateByWallet] 현재 chainId:", network.chainId.toString());
    throw new Error("Hardhat 로컬 네트워크(ChainId 31337)에 연결해 주세요.");
  }

  const signer = await provider.getSigner();

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

export async function fetchUserDonation(
  campaignId: number,
  walletAddress: string
) {
  try {
    const provider = new ethers.JsonRpcProvider(HARDHAT_RPC_URL);

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

export async function fetchCampaignTotal(campaignId: number) {
  try {
    const provider = new ethers.JsonRpcProvider(HARDHAT_RPC_URL);

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
    const provider = new ethers.JsonRpcProvider(HARDHAT_RPC_URL);

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