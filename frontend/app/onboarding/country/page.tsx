"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

const COUNTRIES = [
  { code: "KR", label: "대한민국" },
  { code: "US", label: "미국" },
  { code: "JP", label: "일본" },
  { code: "CN", label: "중국" },
  { code: "OTHER", label: "그 외" },
];

export default function CountryOnboardingPage() {
  const [country, setCountry] = useState("KR");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user, setUser } = useAuth();

  const handleSubmit = async () => {
    if (!country) {
      alert("나라를 선택해 주세요.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:8080/api/members/country", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ country }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("[CountryOnboarding] backend error:", text);
        throw new Error("나라 정보 저장 실패");
      }

      if (user) {
        setUser({ ...user, country } as any);
      }

      router.push("/main");
    } catch (e) {
      console.error(e);
      alert("나라 정보를 저장하는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050816] text-white">
      <div className="bg-[#111321] rounded-2xl px-8 py-10 max-w-md w-full shadow-2xl border border-[#262A40]">
        <h1 className="text-2xl font-bold mb-2">거주 국가 설정</h1>
        <p className="text-sm text-gray-400 mb-6">
          국가 정보를 설정하면 국가별 기부 랭킹, 통계 기능을 더 정확하게 제공할 수 있어요.
        </p>

        <label className="block text-sm mb-2 text-gray-300">
          거주 국가
        </label>
        <select
          className="w-full bg-[#25263A] border border-[#3B3D5A] rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6B8DFF] mb-6"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          {COUNTRIES.map((c) => (
            <option key={c.code} value={c.code}>
              {c.label}
            </option>
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