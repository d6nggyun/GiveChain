// app/onboarding/page.tsx
"use client";

import { useEffect, useState } from "react";
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

export default function CountryOnboardingPage() {
  const router = useRouter();
  const { user, setUser } = useAuth();

  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [country, setCountry] = useState("KR");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user, router]);

  const handleSubmit = async () => {
    if (!name.trim()) {
      alert("이름을 입력해 주세요.");
      return;
    }
    if (!email.trim()) {
      alert("이메일을 입력해 주세요.");
      return;
    }
    if (!country) {
      alert("나라를 선택해 주세요.");
      return;
    }

    setLoading(true);
    try {
      // 👉 실제 백엔드 엔드포인트에 맞게 URL 수정해줘
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
        console.error("[AdditionalOnboarding] backend error:", text);
        throw new Error("추가 정보 저장 실패");
      }

      if (user) {
        setUser({
          ...user,
          name,
          email,
          country,
          isNeededAdditionalInfo: false, // 🔥 플래그 내리기
        });
      }

      router.push("/main");
    } catch (e) {
      console.error(e);
      alert("추가 정보를 저장하는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050816] text-white">
      <div className="bg-[#111321] rounded-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 px-8 py-10 max-w-md w-full shadow-2xl border border-[#262A40]">
        <h1 className="text-2xl font-bold mb-2">프로필 정보 설정</h1>
        <p className="text-sm text-gray-400 mb-6">
          이름, 이메일, 거주 국가 정보를 설정하면, <br></br>
          맞춤 기부 경험과 국가별 랭킹을 제공할 수 있어요.
        </p>

        {/* 이름 */}
        <label className="block text-sm mb-2 text-gray-300">이름</label>
        <input
          type="text"
          className="w-full bg-[#25263A] border border-[#3B3D5A] rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6B8DFF] mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력하세요"
        />

        {/* 이메일 */}
        <label className="block text-sm mb-2 text-gray-300">이메일</label>
        <input
          type="email"
          className="w-full bg-[#25263A] border border-[#3B3D5A] rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6B8DFF] mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력하세요"
        />

        {/* 국가 */}
        <label className="block text-sm mb-2 text-gray-300">거주 국가</label>
        <select
          className="w-full bg-[#25263A] border border-[#3B3D5A] rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6B8DFF] mb-6"
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

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full h-11 rounded-full bg-[#6B8DFF] hover:bg-[#5a7af0] transition text-sm font-semibold disabled:opacity-60"
        >
          {loading ? "저장 중..." : "완료"}
        </button>
      </div>
    </div>
  );
}