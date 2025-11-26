// app/campaigns/[campaignId]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { donateByWallet } from "@/lib/donation";
import { toast } from "sonner";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

type CampaignStatus = "PLANNED" | "ONGOING" | "ENDED";

type CampaignResponse = {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  category: string;
  currentAmount: number;
  startDate: string;
  endDate: string;
  status: CampaignStatus;
  imageUrl: string | null;
  organizerName: string;
  organizerLogoUrl: string | null;
  smartContractAddress: string;
  relatedLink: string;
};

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toISOString().slice(0, 10); // yyyy-MM-dd
}

function statusLabel(status: CampaignStatus) {
  switch (status) {
    case "PLANNED":
      return "예정";
    case "ONGOING":
      return "진행 중";
    case "ENDED":
      return "종료";
    default:
      return status;
  }
}

export default function CampaignDetailPage({
  params,
}: {
  params: Promise<{ campaignId: string }>;
}) {
  // Next 15: params는 Promise라 React.use로 꺼냄
  const { campaignId } = React.use(params);

  const [campaign, setCampaign] = useState<CampaignResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  // 기부 폼 상태
  const [amount, setAmount] = useState("0.001");
  const [donating, setDonating] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setNotFound(false);

        const res = await fetch(`${API_BASE}/api/campaigns/${campaignId}`, {
          method: "GET",
          credentials: "include",
        });

        if (res.status === 404) {
          setNotFound(true);
          return;
        }

        if (!res.ok) {
          console.error("[CampaignDetail] backend error:", await res.text());
          throw new Error("캠페인 정보를 불러오지 못했습니다.");
        }

        const data: CampaignResponse = await res.json();
        setCampaign(data);
      } catch (e) {
        console.error(e);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [campaignId]);

  const handleDonate = async () => {
    if (!amount || Number(amount) <= 0) {
      toast.error("0보다 큰 금액을 입력해 주세요.");
      return;
    }

    if (!API_BASE) {
      toast.error("API 주소가 설정되지 않았습니다.");
      return;
    }

    setDonating(true);
    try {
      // 1) 온체인 기부 (공용 Donation 컨트랙트 + campaignId 전달)
      const receipt = await donateByWallet(amount, Number(campaignId));

      // ethers v6에서는 보통 hash 사용, 혹시 transactionHash도 있으면 같이 처리
      const txHash =
        (receipt as any)?.hash ?? (receipt as any)?.transactionHash ?? "";

      // 2) 온체인 성공 후 → 백엔드에 기부 기록 저장
      const res = await fetch(`${API_BASE}/api/donations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          campaignId: Number(campaignId),
          amount: Number(amount) * 1e18, // wei 단위로 저장 (Long 가능)
          txHash,
        }),
      });

      if (!res.ok) {
        console.error("[CampaignDetail] save donation error:", await res.text());
        throw new Error("기부 기록 저장에 실패했습니다.");
      }

      toast.success(`🎉 ${amount} ETH 기부가 완료되었습니다! 감사합니다.`);
      setAmount("0.001");
    } catch (e: any) {
      console.error(e);
      toast.error(e?.message ?? "기부 중 오류가 발생했습니다.");
    } finally {
      setDonating(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center text-slate-300">
        캠페인 정보를 불러오는 중입니다...
      </div>
    );
  }

  if (notFound || !campaign) {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center text-slate-300">
        <h1 className="text-2xl font-semibold mb-2">
          아직 기부 캠페인이 없습니다.
        </h1>
        <p className="text-slate-400">
          첫 번째 캠페인이 곧 오픈될 예정입니다. 조금만 기다려 주세요!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* 상단 이미지 + 정보 */}
      <section className="rounded-3xl overflow-hidden bg-slate-900 border border-white/5 shadow-2xl">
        <div className="relative w-full h-64 sm:h-80 bg-black">
          {campaign.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={campaign.imageUrl}
              alt={campaign.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-500 text-sm">
              이미지가 없습니다
            </div>
          )}
        </div>

        <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
          <div className="flex items-center justify-between gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/80 border border-white/10 text-xs text-slate-100">
              {campaign.category}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full border border-slate-500/40 text-[11px] text-slate-200">
              {statusLabel(campaign.status)}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold mb-3">
            {campaign.title}
          </h1>
          <p className="text-sm text-slate-300 mb-6">
            {campaign.description}
          </p>

          <div className="flex flex-col gap-2 text-sm text-slate-300 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">주관:</span>
              {campaign.organizerLogoUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={campaign.organizerLogoUrl}
                  alt="organizer logo"
                  className="w-6 h-6 rounded-full object-cover border border-white/20"
                />
              )}
              <span className="font-medium">{campaign.organizerName}</span>
            </div>
            <div>
              <span className="text-slate-400">기간: </span>
              <span>
                {formatDate(campaign.startDate)} ~{" "}
                {formatDate(campaign.endDate)}
              </span>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">캠페인 소개</h2>
            <p className="text-sm leading-relaxed text-slate-200 whitespace-pre-line">
              {campaign.detailedDescription}
            </p>
          </div>

          {/* 온체인(or 외부) 관련 링크 */}
          <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 break-all">
            <div className="mb-1 text-slate-500">관련 링크</div>
            <div>{campaign.relatedLink}</div>
          </div>

          {/* 이 캠페인에 기부하기 폼 */}
          <div className="mt-8 pt-5 border-t border-slate-800">
            <h2 className="text-lg font-semibold mb-3">
              이 캠페인에 기부하기
            </h2>
            <p className="text-xs text-slate-400 mb-3">
              연결된 Web3 지갑에서 직접 ETH를 전송하여 이 캠페인을 후원할 수 있어요.
            </p>

            <div className="mt-2 flex flex-col sm:flex-row items-center gap-3">
              <input
                type="number"
                min="0"
                step="0.001"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full sm:w-40 bg-[#25263A] border border-[#3B3D5A] rounded-lg px-3 py-2 text-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6B8DFF]"
                placeholder="0.001"
              />
              <span className="text-slate-300 text-sm">ETH</span>
              <button
                onClick={handleDonate}
                disabled={donating}
                className="mt-2 sm:mt-0 px-5 py-2 rounded-full bg-[#6B8DFF] hover:bg-[#5a7af0] text-sm font-semibold disabled:opacity-60"
              >
                {donating ? "기부 중..." : "기부하기"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}