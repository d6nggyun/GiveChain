// app/(main)/badge/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { fetchUserTotalDonation } from "@/lib/donation";

const mockBadges = [
  { id: 1, name: "첫 기부", description: "첫 번째 온체인 기부를 완료했습니다." },
  { id: 2, name: "지속 가능한 기부자", description: "3회 이상 기부를 완료했습니다." },
];

export default function BadgePage() {

  const { user } = useAuth();

  const [totalDonation, setTotalDonation] = useState<string | null>(null);
  const [loadingDonation, setLoadingDonation] = useState(false);
  const [donationError, setDonationError] = useState<string | null>(null);

  useEffect(() => {
  console.log("[Badges] user.walletAddress:", user?.walletAddress);

  if ((window as any).ethereum) {
    (window as any).ethereum
      .request({ method: "eth_accounts" })
      .then((accounts: string[]) => {
        console.log("[Badges] Metamask account[0]:", accounts[0]);
      });
  }
}, [user]);

  useEffect(() => {
    // 로그인 + 지갑 주소가 있을 때만 호출
    if (!user?.walletAddress) return;

    const load = async () => {
      try {
        setLoadingDonation(true);
        setDonationError(null);
        const amount = await fetchUserTotalDonation(user.walletAddress);
        setTotalDonation(amount);
      } catch (e) {
        console.error("[Badges] fetchUserTotalDonation error:", e);
        setDonationError("온체인 기부 금액을 불러오지 못했습니다.");
      } finally {
        setLoadingDonation(false);
      }
    };

    load();
  }, [user?.walletAddress]);

  return (
    <div className="space-y-10">
      {/* =================================================== */}
      {/* 🔹 온체인 총 기부 금액 섹션 */}
      {/* =================================================== */}
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

      {/* =================================================== */}
      {/* 🔹 기존 배지 섹션 */}
      {/* =================================================== */}
      <section className="space-y-6">
        <h1 className="text-2xl font-bold mb-2">내 배지</h1>
        <p className="text-sm text-gray-400 mb-4">
          기부 활동에 따라 획득한 배지를 여기서 확인할 수 있습니다.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {mockBadges.map((badge) => (
            <div
              key={badge.id}
              className="bg-[#0b1220] rounded-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border border-white/10 p-5 flex flex-col gap-2"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-sm">
                🏅
              </div>
              <div>
                <h2 className="font-semibold">{badge.name}</h2>
                <p className="text-xs text-gray-400 mt-1">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}

          {mockBadges.length === 0 && (
            <p className="text-gray-500 text-sm col-span-full">
              아직 획득한 배지가 없습니다. 첫 기부를 통해 배지를 모아보세요!
            </p>
          )}
        </div>
      </section>
    </div>
  );
}