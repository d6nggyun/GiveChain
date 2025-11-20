"use client";

import { useAuth } from "@/hooks/useAuth";
import { LoginButton } from "@/components/LoginButton";

export default function HomePage() {
  const { user } = useAuth();

  return (
    <main className="gc-root">
      <div className="gc-card">
        <h1 className="gc-title">GiveChain</h1>
        <p className="gc-subtitle">당신의 선행이 블록체인 위에 남습니다</p>

        {user ? (
          <div className="gc-user-box">
            <div className="gc-user-greeting">안녕하세요, {user.name}님 👋</div>
            <div className="gc-user-wallet">
              지갑 주소 <span>{user.walletAddress}</span>
            </div>
          </div>
        ) : (
          <div className="gc-login-box">
            <h2 className="gc-login-title">GiveChain 로그인</h2>
            <p className="gc-login-desc">
              소셜 로그인 한 번으로 지갑과 계정을 동시에 생성해요.
            </p>
            <LoginButton />
          </div>
        )}
      </div>
    </main>
  );
}