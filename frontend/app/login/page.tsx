// app/login/page.tsx
"use client";

import { LoginButton } from "@/components/LoginButton";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#050816] via-slate-900 to-[#050816]c text-white">
      <div className="bg-[#0b1220]/90 backdrop-blur rounded-3xl shadow-2xl p-10 w-full max-w-xl border border-white/10 text-white">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold">
            <span className="text-blue-400 text-white">Give</span>
            <span className="text-indigo-300">Chain</span>
          </h1>
          <p className="mt-3 text-sm text-gray-300">
            당신의 선행이 블록체인 위에 남습니다.
          </p>
        </div>

        <div className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">GiveChain 로그인</h2>
          <p className="text-sm text-gray-400">
            소셜 로그인 한 번으로 지갑과 계정을 동시에 생성해요.
          </p>
        </div>

        <LoginButton />
      </div>
    </main>
  );
}