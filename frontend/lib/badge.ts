// lib/badge.ts
import { ethers } from "ethers";
import badgeAbi from "@/abi/BadgeNFT.json";

const BADGE_NFT_ADDRESS = process.env.NEXT_PUBLIC_BADGE_NFT_ADDRESS!;
const HARDHAT_RPC_URL = process.env.NEXT_PUBLIC_HARDHAT_RPC_URL;

// ✅ 백엔드 BadgeType tokenId와 반드시 맞춰야 함
export const BADGE_IDS = {
  FIRST_DONATION: 1,
  DONATION_3_TIMES: 2,
  DONATION_5_TIMES: 3,
  DONATION_10_TIMES: 4,
  DONATION_50_TIMES: 5,
  DONATION_100_TIMES: 6,
  AMOUNT_BRONZE: 11,
  AMOUNT_SILVER: 12,
  AMOUNT_GOLD: 13,
  AMOUNT_PLATINUM: 14,
  AMOUNT_DIAMOND: 15,
} as const;

export type BadgeKey = keyof typeof BADGE_IDS;

const EMPTY_BADGE_OWNERSHIP: Record<BadgeKey, boolean> = {
  FIRST_DONATION: false,
  DONATION_3_TIMES: false,
  DONATION_5_TIMES: false,
  DONATION_10_TIMES: false,
  DONATION_50_TIMES: false,
  DONATION_100_TIMES: false,
  AMOUNT_BRONZE: false,
  AMOUNT_SILVER: false,
  AMOUNT_GOLD: false,
  AMOUNT_PLATINUM: false,
  AMOUNT_DIAMOND: false,
};

export async function fetchMyBadges(walletAddress: string) {
  if (!BADGE_NFT_ADDRESS) {
    throw new Error("NEXT_PUBLIC_BADGE_NFT_ADDRESS 가 설정되지 않았습니다.");
  }

  const provider = new ethers.JsonRpcProvider(HARDHAT_RPC_URL);
  const contract = new ethers.Contract(
    BADGE_NFT_ADDRESS,
    badgeAbi.abi,
    provider
  );

  // 기본값은 전부 false
  const result: Record<BadgeKey, boolean> = { ...EMPTY_BADGE_OWNERSHIP };

  for (const key of Object.keys(BADGE_IDS) as BadgeKey[]) {
    const tokenId = BADGE_IDS[key];

    const balance = (await contract.balanceOf(
      walletAddress,
      tokenId
    )) as bigint;

    // TS target이 ES2020 이상이어야 bigint 리터럴(0n) 사용 가능
    result[key] = balance > 0n;
  }

  return result;
}