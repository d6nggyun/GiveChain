// app/(main)/badge/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { fetchUserTotalDonation } from "@/lib/donation";
import { fetchMyBadgesFromBackend } from "@/lib/api";
import type { BadgeKey } from "@/lib/badge"; // BADGE_IDS 키 타입 재사용

// 백엔드에서 오는 BadgeResponse 타입 정의 (record와 동일하게)
type BackendBadgeResponse = {
  badgeId: number;
  tokenId: number;
  badgeType: string;   // 예: "FIRST_DONATION"
  badgeLabel: string;  // 예: "첫 기부"
  txHash: string;
};

type BadgeItem = {
  id: BadgeKey;
  name: string;
  description: string;
  icon: string;
};

const BADGE_DEFINITIONS: BadgeItem[] = [
  {
    id: "FIRST_DONATION",
    name: "첫 기부",
    description: "첫 번째 온체인 기부를 완료했습니다.",
    icon: "🌱",
  },
  {
    id: "DONATION_3_TIMES",
    name: "지속 가능한 기부자 I",
    description: "3회 이상 기부를 완료했습니다.",
    icon: "🥉",
  },
  {
    id: "DONATION_5_TIMES",
    name: "지속 가능한 기부자 II",
    description: "5회 이상 기부를 완료했습니다.",
    icon: "🥈",
  },
  {
    id: "DONATION_10_TIMES",
    name: "지속 가능한 기부자 III",
    description: "10회 이상 기부를 완료했습니다.",
    icon: "🥇",
  },
  {
    id: "DONATION_50_TIMES",
    name: "지속 가능한 기부자 IV",
    description: "50회 이상 기부를 완료했습니다.",
    icon: "🏆",
  },
  {
    id: "DONATION_100_TIMES",
    name: "지속 가능한 기부자 V",
    description: "100회 이상 기부를 완료했습니다.",
    icon: "👑",
  },
  {
    id: "AMOUNT_BRONZE",
    name: "Bronze Donor",
    description: "누적 10달러 이상 기부했습니다.",
    icon: "🥉",
  },
  {
    id: "AMOUNT_SILVER",
    name: "Silver Donor",
    description: "누적 50달러 이상 기부했습니다.",
    icon: "🥈",
  },
  {
    id: "AMOUNT_GOLD",
    name: "Gold Donor",
    description: "누적 100달러 이상 기부했습니다.",
    icon: "🥇",
  },
  {
    id: "AMOUNT_PLATINUM",
    name: "Platinum Donor",
    description: "누적 500달러 이상 기부했습니다.",
    icon: "🏆",
  },
  {
    id: "AMOUNT_DIAMOND",
    name: "Diamond Donor",
    description: "누적 1000달러 이상 기부했습니다.",
    icon: "💎",
  },
];

// 전부 false인 기본값
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

export default function BadgePage() {
  const { user } = useAuth();

  // 🔹 온체인 총 기부 금액
  const [totalDonation, setTotalDonation] = useState<string | null>(null);
  const [loadingDonation, setLoadingDonation] = useState(false);

  // 🔹 백엔드 기준 배지 보유 여부
  const [badgeOwnership, setBadgeOwnership] =
    useState<Record<BadgeKey, boolean> | null>(null);
  const [loadingBadges, setLoadingBadges] = useState(false);

  // 🔹 백엔드에서 받은 배지 전체 리스트 (옵션: 디버깅/추가표시용)
  const [backendBadges, setBackendBadges] = useState<BackendBadgeResponse[] | null>(null);

  // ✅ 온체인 총 기부 금액 조회
  useEffect(() => {
    if (!user?.walletAddress) return;

    const load = async () => {
      try {
        setLoadingDonation(true);
        const amount = await fetchUserTotalDonation(user.walletAddress);
        setTotalDonation(amount);
      } catch (e) {
        console.error("[BadgePage] total donation load error:", e);
      } finally {
        setLoadingDonation(false);
      }
    };

    load();
  }, [user?.walletAddress]);

  // ✅ 백엔드 기준 배지 보유 정보 조회 & boolean 맵으로 변환
  useEffect(() => {
    if (!user) return;

    (async () => {
      try {
        setLoadingBadges(true);
        const myBadges: BackendBadgeResponse[] = await fetchMyBadgesFromBackend();
        console.log("[BadgePage] backend badges =", myBadges);
        setBackendBadges(myBadges);

        const ownedMap: Record<BadgeKey, boolean> = { ...EMPTY_BADGE_OWNERSHIP };

        for (const b of myBadges) {
          const key = b.badgeType as BadgeKey; // "FIRST_DONATION" 같은 enum 이름
          if (key in ownedMap) {
            ownedMap[key] = true;
          }
        }

        setBadgeOwnership(ownedMap);
      } catch (e) {
        console.error("[BadgePage] 백엔드 배지 불러오기 실패:", e);
      } finally {
        setLoadingBadges(false);
      }
    })();
  }, [user]);

  return (
    <div className="space-y-10">
      {/* ================================
          🔹 온체인 총 기부 금액 섹션
      ================================= */}
      <section className="rounded-3xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 p-6 shadow-2xl border border-white/5">
        <h1 className="text-2xl font-bold mb-2">내 온체인 기부 현황</h1>
        <p className="text-sm text-slate-300 mb-4">
          Web3 지갑 기준 온체인에 기록된 총 기부 금액입니다.
        </p>

        {!user ? (
          <p className="text-slate-400 text-sm">
            로그인하면 내 기부 내역을 확인할 수 있어요.
          </p>
        ) : loadingDonation ? (
          <p className="text-slate-400 text-sm">기부 금액 불러오는 중...</p>
        ) : totalDonation !== null ? (
          <div className="text-3xl font-semibold">
            <span className="text-[#6B8DFF]">
              {Number(totalDonation).toFixed(4)}
            </span>{" "}
            <span className="text-slate-300">ETH</span>
          </div>
        ) : (
          <p className="text-slate-400 text-sm">
            아직 온체인 기부 내역이 없습니다.
          </p>
        )}
      </section>

      {/* ================================
          🔹 NFT 배지 섹션 (백엔드 기준)
      ================================= */}
      <section className="space-y-6">
        <h1 className="text-2xl font-bold mb-2">내 배지 (NFT)</h1>
        <p className="text-sm text-gray-400 mb-4">
          조건을 만족하면 자동으로 발급되는 온체인 배지입니다. (표시는 백엔드 기준)
        </p>

        {!user ? (
          <p className="text-gray-500 text-sm">
            로그인하면 내 NFT 배지를 확인할 수 있어요.
          </p>
        ) : loadingBadges || !badgeOwnership ? (
          <p className="text-gray-500 text-sm">배지 정보를 불러오는 중...</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {BADGE_DEFINITIONS.map((badge) => {
              const owned = badgeOwnership[badge.id];

              return (
                <div
                  key={badge.id}
                  className={
                    "rounded-2xl border p-5 flex flex-col gap-2 bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 " +
                    (owned
                      ? "border-emerald-400/60 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                      : "border-white/10 opacity-70")
                  }
                >
                 <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-sm">
                      {badge.icon}
                    </div>

                    {owned ? (
                      <span className="text-[11px] px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300">
                        획득 완료
                      </span>
                    ) : (
                      <span className="text-[11px] px-2 py-1 rounded-full bg-slate-700/60 text-slate-300">
                        미획득
                      </span>
                    )}
                  </div>
                  <div>
                    <h2 className="font-semibold">{badge.name}</h2>
                    <p className="text-xs text-gray-400 mt-1">
                      {badge.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 옵션: 백엔드 기준 총 배지 개수 표기 */}
        {backendBadges && (
          <p className="text-xs text-slate-500">
            보유 배지: {backendBadges.length}개
          </p>
        )}
      </section>
    </div>
  );
}