// app/(main)/ranking/page.tsx
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
    maximumFractionDigits: 4,
  });
}

// 🔹 country 코드 → 국기 + 한글 이름 매핑
const COUNTRY_META: Record<string, { flag: string; label: string }> = {
  KR: { flag: "🇰🇷", label: "대한민국" },
  JP: { flag: "🇯🇵", label: "일본" },
  CN: { flag: "🇨🇳", label: "중국" },
  SG: { flag: "🇸🇬", label: "싱가포르" },
  IN: { flag: "🇮🇳", label: "인도" },
  TH: { flag: "🇹🇭", label: "태국" },
  VN: { flag: "🇻🇳", label: "베트남" },

  GB: { flag: "🇬🇧", label: "영국" },
  DE: { flag: "🇩🇪", label: "독일" },
  FR: { flag: "🇫🇷", label: "프랑스" },
  IT: { flag: "🇮🇹", label: "이탈리아" },
  ES: { flag: "🇪🇸", label: "스페인" },
  NL: { flag: "🇳🇱", label: "네덜란드" },

  US: { flag: "🇺🇸", label: "미국" },
  CA: { flag: "🇨🇦", label: "캐나다" },
  MX: { flag: "🇲🇽", label: "멕시코" },

  AU: { flag: "🇦🇺", label: "호주" },
  BR: { flag: "🇧🇷", label: "브라질" },
  AE: { flag: "🇦🇪", label: "아랍에미리트" },

  OTHER: { flag: "🌍", label: "그 외" },
};

// 🔹 배지 타입별 아이콘 매핑 (백엔드 BadgeType.name() 기준)
const BADGE_ICON_MAP: Record<string, string> = {
  FIRST_DONATION: "🌱",
  DONATION_3_TIMES: "🥉",
  DONATION_5_TIMES: "🥈",
  DONATION_10_TIMES: "🥇",
  DONATION_50_TIMES: "🏆",
  DONATION_100_TIMES: "👑",
  AMOUNT_BRONZE: "🥉",
  AMOUNT_SILVER: "🥈",
  AMOUNT_GOLD: "🥇",
  AMOUNT_PLATINUM: "🏆",
  AMOUNT_DIAMOND: "💎",
};

// 🔹 배지 타입 → 짧은 라벨 (툴팁용/시각용)
const BADGE_LABEL_MAP: Record<string, string> = {
  FIRST_DONATION: "첫 기부",
  DONATION_3_TIMES: "3회 이상 기부",
  DONATION_5_TIMES: "5회 이상 기부",
  DONATION_10_TIMES: "10회 이상 기부",
  DONATION_50_TIMES: "50회 이상 기부",
  DONATION_100_TIMES: "100회 이상 기부",
  AMOUNT_BRONZE: "10달러 이상",
  AMOUNT_SILVER: "50달러 이상",
  AMOUNT_GOLD: "100달러 이상",
  AMOUNT_PLATINUM: "500달러 이상",
  AMOUNT_DIAMOND: "1000달러 이상",
};

// 🔹 공통 배지 렌더링 컴포넌트
function MemberBadges({ badges }: { badges: string[] | undefined }) {
  if (!badges || badges.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1 mt-1">
      {badges.map((b) => (
        <span
          key={b}
          className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-[#111321] border border-[#262a40] text-[11px]"
          title={BADGE_LABEL_MAP[b] ?? b}
        >
          <span className="mr-1">{BADGE_ICON_MAP[b] ?? "🏅"}</span>
          <span className="text-[10px] text-gray-300">
            {BADGE_LABEL_MAP[b] ?? b}
          </span>
        </span>
      ))}
    </div>
  );
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
                    (row: RankingCountryResponse, index: number) => {
                      const meta =
                        COUNTRY_META[row.country] ?? {
                          flag: "🌍",
                          label: row.country,
                        };

                      return (
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
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{meta.flag}</span>
                              <span
                                className={
                                  "font-medium" +
                                  (row.isMine ? " text-[#6B8DFF]" : "")
                                }
                              >
                                {meta.label}
                              </span>
                              {row.isMine && (
                                <span className="ml-2 text-[11px] px-2 py-0.5 rounded-full bg-[#6B8DFF]/15 text-[#9fb4ff]">
                                  내 국가
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-4 text-right text-gray-200">
                            {formatEthFromWei(row.totalDonationAmount)} ETH
                          </td>
                        </tr>
                      );
                    },
                  )}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* ✅ 내 국가 개인 랭킹 섹션 */}
        <section>
          <h2 className="text-xl font-semibold mb-2">내 국가 개인 랭킹</h2>
          <p className="text-sm text-gray-400 mb-4">
            로그인한 사용자가 속한 국가 내 상위 기부자 목록입니다.
          </p>

          {myCountryNeedLogin ? (
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
            <p className="text-gray-500 text-xs">
              내 국가 랭킹 데이터를 불러오는 중이거나, 아직 데이터가 없습니다.
            </p>
          ) : myCountryRankings.length === 0 ? (
            <p className="text-gray-500 text-xs">
              아직 내 국가에 기부 기록이 없습니다.
            </p>
          ) : (
            <ul className="divide-y divide-[#1b1f33] bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 rounded-2xl border border-[#24263a] bg-[#0b0f1e]">
              {myCountryRankings.map((r, index) => (
                <li
                  key={r.memberId + "-my-country"}
                  className={
                    "flex items-center justify-between py-3 px-3" +
                    (r.isMine ? " bg-[#1e2440]/50" : "")
                  }
                >
                  <div className="flex flex-col gap-1">
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

                        <MemberBadges badges={r.badgeTypes} />
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

        {/* ✅ 카테고리별 랭킹 섹션 */}
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
                  <div className="flex items-center justify_between mb-3">
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
                              "flex items-center justify-between py-3" +
                              (r.isMine
                                ? " bg-[#1e2440]/50 rounded-lg px-2"
                                : "")
                            }
                          >
                            <div className="flex flex-col gap-1">
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

                                  <MemberBadges badges={r.badgeTypes} />
                                </div>
                              </div>
                            </div>
                            <div className="text-sm text_gray-100">
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