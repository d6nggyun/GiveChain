// app/login/page.tsx
"use client";

import { LoginButton } from "@/components/LoginButton";

export default function LoginPage() {
  return (
    // 네비게이션 높이를 제외한 전체 화면 높이 확보 + 가운데 정렬
    <main className="min-h-[calc(100vh-64px)] bg-[#050816] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl rounded-3xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 shadow-2xl border border-white/10 p-10">
        <h1 className="text-3xl font-bold mb-3">
          <span className="text-gray-300">Give</span>
          <span className="text-[#6B8DFF]">Chain</span>
        </h1>

        <p className="text-sm text-gray-400 mb-8">
          당신의 선행이 블록체인 위에 남습니다.
        </p>

        <h2 className="text-xl font-semibold mb-2">GiveChain 로그인</h2>
        <p className="text-sm text-gray-400 mb-8">
          소셜 로그인 한 번으로 지갑과 계정을 동시에 생성해요.
        </p>

        <LoginButton />
      </div>
    </main>
  );
}