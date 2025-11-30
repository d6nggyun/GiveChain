// components/ProfilePanel.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const COUNTRIES = [
  {
    group: "아시아",
    options: [
      { code: "KR", label: "🇰🇷 대한민국" },
      { code: "JP", label: "🇯🇵 일본" },
      { code: "CN", label: "🇨🇳 중국" },
      { code: "SG", label: "🇸🇬 싱가포르" },
      { code: "IN", label: "🇮🇳 인도" },
      { code: "TH", label: "🇹🇭 태국" },
      { code: "VN", label: "🇻🇳 베트남" },
    ],
  },
  {
    group: "유럽",
    options: [
      { code: "GB", label: "🇬🇧 영국" },
      { code: "DE", label: "🇩🇪 독일" },
      { code: "FR", label: "🇫🇷 프랑스" },
      { code: "IT", label: "🇮🇹 이탈리아" },
      { code: "ES", label: "🇪🇸 스페인" },
      { code: "NL", label: "🇳🇱 네덜란드" },
    ],
  },
  {
    group: "북미",
    options: [
      { code: "US", label: "🇺🇸 미국" },
      { code: "CA", label: "🇨🇦 캐나다" },
      { code: "MX", label: "🇲🇽 멕시코" },
    ],
  },
  {
    group: "기타",
    options: [
      { code: "AU", label: "🇦🇺 호주" },
      { code: "BR", label: "🇧🇷 브라질" },
      { code: "AE", label: "🇦🇪 아랍에미리트" },
      { code: "OTHER", label: "🌍 그 외" },
    ],
  },
];

type ProfilePanelProps = {
  onClose: () => void;
};

export default function ProfilePanel({ onClose }: ProfilePanelProps) {
  const router = useRouter();
  const { user, setUser } = useAuth();

  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [country, setCountry] = useState(user?.country ?? "KR");
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  if (!user) return null;

  const handleSaveProfile = async () => {
    if (!name.trim()) {
      alert("이름을 입력해 주세요.");
      return;
    }
    if (!email.trim()) {
      alert("이메일을 입력해 주세요.");
      return;
    }
    if (!country) {
      alert("국가를 선택해 주세요.");
      return;
    }

    try {
      setSaving(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/members/additional-info`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ name, email, country }),
        }
      );

      if (!res.ok) {
        const text = await res.text();
        console.error("[ProfilePanel] update error:", text);
        alert("프로필 정보를 저장하지 못했습니다.");
        return;
      }

      setUser({
        ...user,
        name,
        email,
        country,
        isNeededAdditionalInfo: false,
      });

      alert("프로필 정보가 저장되었습니다.");
      onClose();
    } catch (e) {
      console.error(e);
      alert("프로필 정보를 저장하는 중 오류가 발생했습니다.");
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteAccount = async () => {
    const ok = confirm(
      "정말 회원탈퇴 하시겠어요?\n모든 기부 랭킹 및 배지 정보가 삭제될 수 있습니다."
    );
    if (!ok) return;

    try {
      setDeleting(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      if (!res.ok) {
        const text = await res.text();
        console.error("[ProfilePanel] delete error:", text);
        alert("회원탈퇴 중 오류가 발생했습니다.");
        return;
      }

      // 클라이언트 상태 정리
      setUser(null);
      alert("회원탈퇴가 완료되었습니다.");
      router.push("/"); // 혹은 /login
    } catch (e) {
      console.error(e);
      alert("회원탈퇴 중 오류가 발생했습니다.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    // 전체 화면 오버레이
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      {/* 패널 */}
      <div className="w-full max-w-md rounded-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border border-[#262A40] px-6 py-7 shadow-2xl relative">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute right-4 top-3 text-gray-400 hover:text-gray-200 text-xl"
        >
          ×
        </button>

        <h1 className="text-xl font-bold mb-1">내 프로필</h1>
        <p className="text-xs text-gray-400 mb-5">
          계정 정보와 지갑 주소를 확인하고, 이름·이메일·국가를 수정할 수 있어요.
        </p>

        {/* 지갑 주소 (읽기 전용) */}
        <div className="mb-4">
          <label className="block text-xs mb-1 text-gray-300">지갑 주소</label>
          <div className="w-full text-[11px] sm:text-xs bg-[#15162a] border border-[#3B3D5A] rounded-lg px-3 py-2 font-mono text-gray-300 break-all">
            {user.walletAddress ?? "-"}
          </div>
        </div>

        {/* 이름 */}
        <div className="mb-3">
          <label className="block text-xs mb-1 text-gray-300">이름</label>
          <input
            type="text"
            className="w-full bg-[#25263A] border border-[#3B3D5A] rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6B8DFF]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력하세요"
          />
        </div>

        {/* 이메일 */}
        <div className="mb-3">
          <label className="block text-xs mb-1 text-gray-300">이메일</label>
          <input
            type="email"
            className="w-full bg-[#25263A] border border-[#3B3D5A] rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6B8DFF]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요"
          />
        </div>

        {/* 국가 */}
        <div className="mb-5">
          <label className="block text-xs mb-1 text-gray-300">거주 국가</label>
          <select
            className="w-full bg-[#25263A] border border-[#3B3D5A] rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6B8DFF]"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            {COUNTRIES.map((group) => (
              <optgroup key={group.group} label={group.group}>
                {group.options.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        {/* 버튼 영역 */}
        <div className="flex items-center justify-between gap-3">
          {/* 회원탈퇴 */}
          <button
            onClick={handleDeleteAccount}
            disabled={deleting}
            className="text-xs sm:text-sm px-3 py-2 rounded-full border border-red-500/40 text-red-300 hover:bg-red-500/10 disabled:opacity-50"
          >
            {deleting ? "탈퇴 중..." : "회원탈퇴"}
          </button>

          {/* 저장 버튼들 */}
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full bg-transparent text-xs sm:text-sm border border-[#3B3D5A] text-gray-300 hover:bg-[#1b1e35]"
            >
              취소
            </button>
            <button
              onClick={handleSaveProfile}
              disabled={saving}
              className="px-5 py-2 rounded-full bg-[#6B8DFF] hover:bg-[#5a7af0] text-xs sm:text-sm font-semibold disabled:opacity-60"
            >
              {saving ? "저장 중..." : "저장"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}