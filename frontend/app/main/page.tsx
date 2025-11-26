// app/main/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Campaign = {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  category: string;
  currentAmount: number;
  startDate: string;
  endDate: string;
  status: string;
  imageUrl?: string | null;
  organizerName: string;
  organizerLogoUrl?: string | null;
  smartContractAddress: string;
  relatedLink: string;
};

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default function MainHomePage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!API_BASE) {
      setError("API 주소가 설정되지 않았습니다.");
      setLoading(false);
      return;
    }

    (async () => {
      try {
        const res = await fetch(`${API_BASE}/api/campaigns`, {
          method: "GET",
          credentials: "include",
        });

        if (res.status === 404) {
          setCampaigns([]);
          setLoading(false);
          return;
        }

        if (!res.ok) {
          const text = await res.text();
          console.error("[Main] getCampaign error:", text);
          setError("캠페인 정보를 불러오지 못했습니다.");
          setLoading(false);
          return;
        }

        const data: Campaign[] = await res.json();
        setCampaigns(data);
      } catch (e) {
        console.error(e);
        setError("캠페인 정보를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* 상단 설명 섹션만 유지 */}
      <section className="rounded-3xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 p-8 shadow-2xl border border-white/5">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">기부</h1>
        <p className="text-slate-300 mb-6">
          Web3 지갑으로 손쉽게 기부하고, 기부 내역에 따라 배지를 획득해보세요.
        </p>

        <div className="flex flex-wrap gap-3 mb-2">
          <span className="px-4 py-2 rounded-full bg-slate-900/80 text-sm text-slate-200 border border-white/10">
            ⛓️ 온체인 기부 영수증
          </span>
          <span className="px-4 py-2 rounded-full bg-slate-900/80 text-sm text-slate-200 border border-white/10">
            🥇 배지 기반 기부 랭킹
          </span>
          <span className="px-4 py-2 rounded-full bg-slate-900/80 text-sm text-slate-200 border border-white/10">
            🔎 투명한 기부 흐름
          </span>
        </div>
        <p className="text-xs text-slate-500">
          캠페인 카드를 클릭하면 해당 캠페인 상세 페이지에서 기부할 수 있어요.
        </p>
      </section>

      {/* 하단 캠페인 섹션 */}
      {loading ? (
        <section className="rounded-3xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 p-8 shadow-xl border border-white/5">
          <p className="text-slate-400 text-sm">캠페인을 불러오는 중입니다...</p>
        </section>
      ) : error ? (
        <section className="rounded-3xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 p-8 shadow-xl border border-red-500/40">
          <h2 className="text-xl font-semibold mb-2">
            캠페인 정보를 불러오지 못했습니다.
          </h2>
          <p className="text-slate-400 text-sm">{error}</p>
        </section>
      ) : campaigns.length === 0 ? (
        <section className="rounded-3xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 p-8 shadow-xl border border-white/5">
          <h2 className="text-xl font-semibold mb-2">
            아직 기부 캠페인이 없습니다.
          </h2>
          <p className="text-slate-400">
            첫 번째 캠페인이 곧 오픈될 예정입니다. 조금만 기다려 주세요!
          </p>
        </section>
      ) : (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">진행 중인 기부 캠페인</h2>
          <p className="text-slate-400 text-sm">
            아래 캠페인들은 온체인/오프체인 정보를 기반으로 운영되고 있습니다.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            {campaigns.map((c) => (
              <Link
                key={c.id}
                href={`/campaigns/${c.id}`}
                className="block rounded-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 
                to-slate-800/90 border border-white/10 shadow-lg overflow-hidden hover:border-[#6B8DFF]/50 transition"
              >
                {c.imageUrl && (
                  <div className="h-40 w-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.imageUrl}
                      alt={c.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-5 flex-1 flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-slate-900/80 border border-white/10 text-slate-200">
                      {c.category}
                    </span>
                    <span className="text-[11px] px-2 py-1 rounded-full border border-slate-500/40 text-slate-300">
                      {c.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">{c.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {c.description}
                    </p>
                  </div>

                  <div className="text-xs text-slate-400 space-y-1">
                    <p>
                      기간: {c.startDate} ~ {c.endDate}
                    </p>

                    <div className="flex items-center gap-2">
                      <span>주관:</span>
                      {c.organizerLogoUrl && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={c.organizerLogoUrl}
                          alt="organizer logo"
                          className="w-5 h-5 rounded-full object-cover border border-white/20"
                        />
                      )}
                      <span className="font-medium text-slate-200">
                        {c.organizerName}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}