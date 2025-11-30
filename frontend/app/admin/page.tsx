// app/admin/page.tsx
"use client";

import { useState } from "react";
import { toast } from "sonner";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default function AdminCampaignPage() {
  // 생성 폼 상태
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [detailedDescription, setDetailedDescription] = useState("");
  const [category, setCategory] = useState(""); // ENUM 문자열 그대로 입력 (예: EDUCATION)
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [organizerName, setOrganizerName] = useState("");
  const [organizerLogoUrl, setOrganizerLogoUrl] = useState("");
  const [smartContractAddress, setSmartContractAddress] = useState("");
  const [relatedLink, setRelatedLink] = useState("");

  // 액션용 캠페인 ID
  const [targetCampaignId, setTargetCampaignId] = useState("");

  const [creating, setCreating] = useState(false);
  const [acting, setActing] = useState(false);

  // 🔹 IPFS 업로드 상태
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingLogo, setUploadingLogo] = useState(false);

  // 🔹 공통 IPFS 업로드 함수
  const uploadFileToIpfs = async (
    file: File | null,
    onSuccess: (url: string) => void,
    setUploading: (v: boolean) => void,
  ) => {
    if (!file) {
      toast.error("업로드할 파일을 선택해 주세요.");
      return;
    }

    try {
      setUploading(true);

      const formData = new FormData();
      formData.append("file", file);

      // Next.js API Route 호출 (백엔드 Spring 아님!)
      const res = await fetch("/api/ipfs/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("[Admin] IPFS upload error:", text);
        toast.error("IPFS 업로드에 실패했습니다.");
        return;
      }

      const data = (await res.json()) as { cid: string; url: string };

      onSuccess(data.url); // 🔥 콜백으로 해당 state 세팅
      toast.success("IPFS 업로드 완료!");
    } catch (e) {
      console.error(e);
      toast.error("IPFS 업로드 중 오류가 발생했습니다.");
    } finally {
      setUploading(false);
    }
  };

  const handleCreate = async () => {
    if (!API_BASE) {
      toast.error("API_BASE 환경변수가 설정되지 않았습니다.");
      return;
    }

    if (
      !title ||
      !description ||
      !detailedDescription ||
      !category ||
      !startDate ||
      !endDate ||
      !organizerName ||
      !smartContractAddress
    ) {
      toast.error("필수 값들을 모두 입력해 주세요.");
      return;
    }

    setCreating(true);
    try {
      const res = await fetch(`${API_BASE}/api/campaigns`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // 쿠키 사용 시
        body: JSON.stringify({
          title,
          description,
          detailedDescription,
          category,
          startDate,
          endDate,
          imageUrl: imageUrl,
          organizerName,
          organizerLogoUrl: organizerLogoUrl,
          smartContractAddress,
          relatedLink: relatedLink,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("[Admin] create error:", text);
        toast.error("캠페인 생성에 실패했습니다.");
        return;
      }

      const data = await res.json();
      toast.success(`캠페인 생성 완료 (ID: ${data.id})`);

      // 폼 초기화
      setTitle("");
      setDescription("");
      setDetailedDescription("");
      setCategory("");
      setStartDate("");
      setEndDate("");
      setImageUrl("");
      setOrganizerName("");
      setOrganizerLogoUrl("");
      setSmartContractAddress("");
      setRelatedLink("");
    } catch (e) {
      console.error(e);
      toast.error("캠페인 생성 중 오류가 발생했습니다.");
    } finally {
      setCreating(false);
    }
  };

  const callAction = async (action: "delete" | "start" | "end") => {
    if (!API_BASE) {
      toast.error("API_BASE 환경변수가 설정되지 않았습니다.");
      return;
    }
    if (!targetCampaignId) {
      toast.error("캠페인 ID를 입력해 주세요.");
      return;
    }

    setActing(true);
    try {
      let url = "";
      let method = "";

      if (action === "delete") {
        url = `${API_BASE}/api/campaigns?campaignId=${targetCampaignId}`;
        method = "DELETE";
      } else if (action === "start") {
        url = `${API_BASE}/api/campaigns/${targetCampaignId}/start`;
        method = "PUT";
      } else {
        url = `${API_BASE}/api/campaigns/${targetCampaignId}/end`;
        method = "PUT";
      }

      const res = await fetch(url, {
        method,
        credentials: "include",
      });

      if (!res.ok) {
        const text = await res.text();
        console.error(`[Admin] ${action} error:`, text);
        toast.error(`캠페인 ${action} 처리에 실패했습니다.`);
        return;
      }

      if (action === "delete") {
        toast.success("캠페인 삭제 완료");
      } else if (action === "start") {
        toast.success("캠페인 시작 상태로 변경 완료");
      } else {
        toast.success("캠페인 종료 상태로 변경 완료");
      }
    } catch (e) {
      console.error(e);
      toast.error("요청 처리 중 오류가 발생했습니다.");
    } finally {
      setActing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold mb-2">캠페인 관리자 페이지</h1>
      <p className="text-sm text-gray-400">
        캠페인 생성, 삭제, 시작/종료를 관리용으로 조작하는 페이지입니다.
      </p>

      {/* 캠페인 생성 카드 */}
      <section className="rounded-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 p-6 shadow-xl border border-white/10 space-y-4">
        <h2 className="text-lg font-semibold mb-2">새 캠페인 생성</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 왼쪽 필드들 */}
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-300 mb-1">
                캠페인 이름 *
              </label>
              <input
                className="w-full bg-[#25263A] border border-[#3B3D5A] rounded-lg px-3 py-2 text-sm"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="예: 겨울 방한 키트 지원"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-300 mb-1">
                요약 설명 *
              </label>
              <textarea
                className="w-full h-16 bg-[#25263A] border border-[#3B3D5A] rounded-lg px-3 py-2 text-sm"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="목적을 간단히 적어주세요."
              />
            </div>

            <div>
              <label className="block text-xs text-gray-300 mb-1">
                상세 설명 *
              </label>
              <textarea
                className="w-full h-24 bg-[#25263A] border border-[#3B3D5A] rounded-lg px-3 py-2 text-sm"
                value={detailedDescription}
                onChange={(e) => setDetailedDescription(e.target.value)}
                placeholder="상세 내용을 적어주세요."
              />
            </div>

            <div>
              <label className="block text-xs text-gray-300 mb-1">
                카테고리 (ENUM 값 그대로) *
              </label>
              <input
                className="w-full bg-[#25263A] border border-[#3B3D5A] rounded-lg px-3 py-2 text-sm"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="예: EDUCATION, HEALTH, ENVIRONMENT ..."
              />
            </div>
          </div>

          {/* 오른쪽 필드들 */}
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block text-xs text-gray-300 mb-1">
                  시작일 *
                </label>
                <input
                  type="date"
                  className="w-full bg-[#25263A] border border-[#3B3D5A] rounded-lg px-3 py-2 text-sm"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs text-gray-300 mb-1">
                  종료일 *
                </label>
                <input
                  type="date"
                  className="w-full bg-[#25263A] border border-[#3B3D5A] rounded-lg px-3 py-2 text-sm"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>

            {/* 🔹 대표 이미지: IPFS 업로드 + URL + 미리보기 */}
            <div>
              <label className="block text-xs text-gray-300 mb-1">
                대표 이미지 (IPFS 업로드) *
              </label>

              <div className="flex items-center gap-2 mb-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0] ?? null;
                    if (file) {
                      void uploadFileToIpfs(
                        file,
                        (url) => setImageUrl(url),
                        setUploadingImage,
                      );
                    }
                  }}
                  className="text-xs text-gray-300"
                />
                {uploadingImage && (
                  <span className="text-[11px] text-gray-400">
                    업로드 중...
                  </span>
                )}
              </div>

              {/* IPFS URL 직접 입력도 가능하게 유지 */}
              <input
                className="w-full bg-[#25263A] border border-[#3B3D5A] rounded-lg px-3 py-2 text-sm"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="IPFS 또는 일반 이미지 URL"
              />

              {/* 미리보기 */}
              {imageUrl && (
                <div className="mt-2">
                  <span className="block text-[11px] text-gray-400 mb-1">
                    미리보기
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl}
                    alt="campaign preview"
                    className="w-40 h-24 object-cover rounded-lg border border-[#3B3D5A]"
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs text-gray-300 mb-1">
                주관 단체명 *
              </label>
              <input
                className="w-full bg-[#25263A] border border-[#3B3D5A] rounded-lg px-3 py-2 text-sm"
                value={organizerName}
                onChange={(e) => setOrganizerName(e.target.value)}
                placeholder="예: 행복나눔 재단"
              />
            </div>

            {/* 🔹 주관 단체 로고: IPFS 업로드 + URL + 미리보기 */}
            <div>
              <label className="block text-xs text-gray-300 mb-1">
                주관 단체 로고 (IPFS 업로드) *
              </label>

              <div className="flex items-center gap-2 mb-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0] ?? null;
                    if (file) {
                      void uploadFileToIpfs(
                        file,
                        (url) => setOrganizerLogoUrl(url),
                        setUploadingLogo,
                      );
                    }
                  }}
                  className="text-xs text-gray-300"
                />
                {uploadingLogo && (
                  <span className="text-[11px] text-gray-400">
                    업로드 중...
                  </span>
                )}
              </div>

              {/* IPFS URL 직접 입력도 가능 */}
              <input
                className="w-full bg-[#25263A] border border-[#3B3D5A] rounded-lg px-3 py-2 text-sm"
                value={organizerLogoUrl}
                onChange={(e) => setOrganizerLogoUrl(e.target.value)}
                placeholder="IPFS 또는 일반 이미지 URL"
              />

              {/* 미리보기 */}
              {organizerLogoUrl && (
                <div className="mt-2">
                  <span className="block text-[11px] text-gray-400 mb-1">
                    로고 미리보기
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={organizerLogoUrl}
                    alt="organizer logo preview"
                    className="w-24 h-24 object-contain rounded-lg border border-[#3B3D5A] bg-[#141527]"
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs text-gray-300 mb-1">
                스마트 컨트랙트 주소 *
              </label>
              <input
                className="w-full bg-[#25263A] border border-[#3B3D5A] rounded-lg px-3 py-2 text-sm font-mono"
                value={smartContractAddress}
                onChange={(e) => setSmartContractAddress(e.target.value)}
                placeholder="0x..."
              />
            </div>

            <div>
              <label className="block text-xs text-gray-300 mb-1">
                관련 링크 *
              </label>
              <input
                className="w-full bg-[#25263A] border border-[#3B3D5A] rounded-lg px-3 py-2 text-sm"
                value={relatedLink}
                onChange={(e) => setRelatedLink(e.target.value)}
                placeholder="https://..."
              />
            </div>
          </div>
        </div>

        <div className="pt-3 flex justify-end">
          <button
            onClick={handleCreate}
            disabled={creating}
            className="px-5 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-sm font-semibold disabled:opacity-60"
          >
            {creating ? "생성 중..." : "캠페인 생성"}
          </button>
        </div>
      </section>

      {/* 캠페인 제어 카드 */}
      <section className="rounded-2xl bg-[#0b1220] border border-white/10 p-6 space-y-4">
        <h2 className="text-lg font-semibold mb-2">
          캠페인 제어 (삭제 / 시작 / 종료)
        </h2>
        <p className="text-xs text-gray-400 mb-2">
          아래에 캠페인 ID를 입력한 뒤 원하는 동작 버튼을 클릭하세요.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <input
            className="w-full sm:w-40 bg-[#25263A] border border-[#3B3D5A] rounded-lg px-3 py-2 text-sm"
            value={targetCampaignId}
            onChange={(e) => setTargetCampaignId(e.target.value)}
            placeholder="캠페인 ID"
          />

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => callAction("start")}
              disabled={acting}
              className="px-4 py-2 rounded-full bg-sky-500 hover:bg-sky-600 text-xs sm:text-sm disabled:opacity-60"
            >
              시작 상태로 변경
            </button>
            <button
              onClick={() => callAction("end")}
              disabled={acting}
              className="px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-600 text-xs sm:text-sm disabled:opacity-60"
            >
              종료 상태로 변경
            </button>
            <button
              onClick={() => callAction("delete")}
              disabled={acting}
              className="px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 text-xs sm:text-sm disabled:opacity-60"
            >
              캠페인 삭제
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}