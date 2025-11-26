// app/main/ranking/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchRankings, fetchCountryRankings } from "@/lib/api";
import type {
  RankingResponse,
  RankingCountryResponse,
  CategoryRankingResponse,
  RankingMemberResponse,
} from "@/lib/rankingTypes";

function formatEthFromWei(wei: number): string {
  const eth = wei / 1e18; // 1 ETH = 1e18 wei
  return eth.toLocaleString(undefined, {
    maximumFractionDigits: 4, // 소수 4자리까지
  });
}

export default function RankingPage() {
  const router = useRouter();

  const [data, setData] = useState<RankingResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ 내 국가 개인 랭킹
  const [myCountryRankings, setMyCountryRankings] = useState<
    RankingMemberResponse[] | null
  >(null);
  const [myCountryNeedLogin, setMyCountryNeedLogin] = useState(false);

  // 전체 랭킹 (공개)
  useEffect(() => {
    (async () => {
      try {
        const res = await fetchRankings();
        setData(res);
      } catch (e: any) {
        console.error(e);
        setError(e?.message ?? "랭킹 정보를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // 내 국가 개인 랭킹 (로그인 필요)
  useEffect(() => {
    (async () => {
      try {
        const res = await fetchCountryRankings();
        setMyCountryRankings(res);
        setMyCountryNeedLogin(false);
      } catch (e: any) {
        console.error(e);

        if (e?.message === "로그인이 필요합니다.") {
          // ✅ 이제는 로그인 페이지로 보내지 않고, 섹션에서 문구만 보여줌
          setMyCountryRankings(null);
          setMyCountryNeedLogin(true);
        }
      }
    })();
  }, []);

  if (loading) {
    return (
      <main className="min-h-[calc(100vh-64px)] bg-[#050816] text-white flex items-center justify-center">
        <div className="text-gray-300 text-sm">랭킹 데이터를 불러오는 중...</div>
      </main>
    );
  }

  if (error || !data) {
    return (
      <main className="min-h-[calc(100vh-64px)] bg-[#050816] text-white flex items-center justify-center">
        <div className="text-red-400 text-sm">
          {error ?? "랭킹 데이터를 불러오지 못했습니다."}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[calc(100vh-64px)] bg-[#050816] text-white">
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-10">
        {/* ✅ 국가별 랭킹 섹션 (전체 국가 TOP 10) */}
        <section>
          <h1 className="text-2xl font-bold mb-2">국가별 기부 랭킹</h1>
          <p className="text-sm text-gray-400 mb-4">
            국가별 총 기부 금액 기준 상위 10개국입니다.
          </p>

          {data.countryRankings.length === 0 ? (
            <div className="text-gray-400 bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 text-sm border border-[#24263a] rounded-xl px-4 py-6 bg-[#0b0f1e]">
              아직 랭킹 데이터가 없습니다. 첫 번째 기부자로 참여해보세요!
            </div>
          ) : (
            <div className="overflow-hidden rounded-xl border border-[#24263a] bg-[#0b0f1e]">
              <table className="w-full text-sm">
                <thead className="bg-[#111321]/60 border-b border-[#262a40]">
                  <tr>
                    <th className="py-3 px-4 text-left text-gray-400 font-medium w-16">
                      #
                    </th>
                    <th className="py-3 px-4 text-left text-gray-400 font-medium">
                      국가
                    </th>
                    <th className="py-3 px-4 text-right text-gray-400 font-medium">
                      총 기부 금액
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.countryRankings.map(
                    (row: RankingCountryResponse, index: number) => (
                      <tr
                        key={row.country}
                        className={
                          "border-t border-[#1b1f33]" +
                          (row.isMine ? " bg-[#1e2440]/60" : "")
                        }
                      >
                        <td className="py-3 px-4 text-gray-400">
                          {index + 1}
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={
                              "font-medium" +
                              (row.isMine ? " text-[#6B8DFF]" : "")
                            }
                          >
                            {row.country}
                          </span>
                          {row.isMine && (
                            <span className="ml-2 text-[11px] px-2 py-0.5 rounded-full bg-[#6B8DFF]/15 text-[#9fb4ff]">
                              내 국가
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-right text-gray-200">
                          {formatEthFromWei(row.totalDonationAmount)} ETH
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* ✅ 내 국가 개인 랭킹 섹션: 항상 보여주고, 안의 내용만 상태에 따라 변경 */}
        <section>
          <h2 className="text-xl font-semibold mb-2">내 국가 개인 랭킹</h2>
          <p className="text-sm text-gray-400 mb-4">
            로그인한 사용자가 속한 국가 내 상위 기부자 목록입니다.
          </p>

          {myCountryNeedLogin ? (
            // 🔐 비로그인 상태: 로그인 유도 문구
            <p className="text-gray-500 text-xs">
              <button
                onClick={() => router.push("/login")}
                className="text-[#6B8DFF] underline underline-offset-2"
              >
                로그인
              </button>
              후 내 국가 랭킹을 확인할 수 있어요.
            </p>
          ) : myCountryRankings === null ? (
            // 아직 데이터 못 가져온 상태(로딩/에러 등)
            <p className="text-gray-500 text-xs">
              내 국가 랭킹 데이터를 불러오는 중이거나, 아직 데이터가 없습니다.
            </p>
          ) : myCountryRankings.length === 0 ? (
            // 로그인은 됐는데, 내 국가에 기부 기록이 없는 경우
            <p className="text-gray-500 text-xs">
              아직 내 국가에 기부 기록이 없습니다.
            </p>
          ) : (
            // 실제 내 국가 랭킹 리스트
            <ul className="divide-y divide-[#1b1f33 bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 rounded-2xl border border-[#24263a] bg-[#0b0f1e]">
              {myCountryRankings.map((r, index) => (
                <li
                  key={r.memberId + "-my-country"}
                  className={
                    "flex items-center justify-between py-2 px-3" +
                    (r.isMine ? " bg-[#1e2440]/50" : "")
                  }
                >
                  <div className="flex items-center gap-3">
                    <span className="w-5 text-sm text-gray-400">
                      {index + 1}
                    </span>
                    <div>
                      <div
                        className={
                          "text-sm font-medium" +
                          (r.isMine ? " text-[#6B8DFF]" : "")
                        }
                      >
                        {r.memberName}
                        {r.isMine && (
                          <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-[#6B8DFF]/20 text-[#c7d4ff]">
                            나
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-gray-500">
                        {r.memberCountry}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-100">
                    {formatEthFromWei(r.totalDonationAmount)} ETH
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* 카테고리별 랭킹 섹션 (기존 그대로) */}
        <section>
          <h2 className="text-2xl font-bold mb-2">카테고리별 기부 랭킹</h2>
          <p className="text-sm text-gray-400 mb-4">
            환경, 교육, 보건, 재난 등 카테고리별 상위 기부자 목록입니다.
          </p>

          <div className="space-y-6">
            {data.categoryRankings.map(
              (categoryBlock: CategoryRankingResponse) => (
                <div
                  key={categoryBlock.category}
                  className="rounded-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border border-[#24263a] bg-[#0b0f1e] p-4"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold">
                      {categoryBlock.category}
                    </h3>
                    <span className="text-[11px] px-2 py-1 rounded-full bg-[#6B8DFF]/10 text-[#9fb4ff]">
                      카테고리 랭킹
                    </span>
                  </div>

                  {categoryBlock.rankings.length === 0 ? (
                    <p className="text-gray-500 text-xs">
                      아직 이 카테고리에 대한 기부 기록이 없습니다.
                    </p>
                  ) : (
                    <ul className="divide-y divide-[#1b1f33]">
                      {categoryBlock.rankings.map(
                        (r: RankingMemberResponse, index: number) => (
                          <li
                            key={r.memberId + "-" + categoryBlock.category}
                            className={
                              "flex items-center justify-between py-2" +
                              (r.isMine
                                ? " bg-[#1e2440]/50 rounded-lg px-2"
                                : "")
                            }
                          >
                            <div className="flex items-center gap-3">
                              <span className="w-5 text-sm text-gray-400">
                                {index + 1}
                              </span>
                              <div>
                                <div
                                  className={
                                    "text-sm font-medium" +
                                    (r.isMine ? " text-[#6B8DFF]" : "")
                                  }
                                >
                                  {r.memberName}
                                  {r.isMine && (
                                    <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-[#6B8DFF]/20 text-[#c7d4ff]">
                                      나
                                    </span>
                                  )}
                                </div>
                                <div className="text-[11px] text-gray-500">
                                  {r.memberCountry}
                                </div>
                              </div>
                            </div>
                            <div className="text-sm text-gray-100">
                              {formatEthFromWei(r.totalDonationAmount)} ETH
                            </div>
                          </li>
                        ),
                      )}
                    </ul>
                  )}
                </div>
              ),
            )}
          </div>
        </section>
      </div>
    </main>
  );
}