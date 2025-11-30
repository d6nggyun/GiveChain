// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { disconnectWeb3 } from "@/lib/aaSdk";
import ProfilePanel from "@/components/ProfilePanel"; // ⭐ 프로필 패널 import

const tabs = [
  { href: "/main", label: "기부" },
  { href: "/main/ranking", label: "랭킹" },
  { href: "/main/badges", label: "배지" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout, needAdditionalInfo } = useAuth();

  // ⭐ 프로필 패널 open/close 상태
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await disconnectWeb3();

      // 서버 로그아웃 호출
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, {
        method: "DELETE",
        credentials: "include",
      });
    } catch (e) {
      console.error("로그아웃 API 실패:", e);
    } finally {
      logout();
      router.push("/login");
    }
  };

  const handleClickProfile = () => {
    setIsProfileOpen(true);
  };

  return (
    <>
      <header className="border-b border-[#1e2135] bg-[#050816]">
        <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          {/* 로고 → /main 이동 */}
          <Link
            href="/main"
            className="flex items-center gap-2 hover:opacity-90"
          >
            <Image
              src="/logo.png"
              alt="GiveChain Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="text-lg font-bold text-[#6B8DFF]">
              GiveChain
            </span>
          </Link>

          {/* 오른쪽 영역: 탭 + 유저영역 */}
          <div className="flex items-center gap-6 text-sm font-medium">
            {/* 추가 정보 필요하면 탭 대신 안내 문구 */}
            {needAdditionalInfo ? (
              <span className="text-[11px] text-gray-400">
                프로필 설정을 완료하면 메뉴를 사용할 수 있어요
              </span>
            ) : (
              <ul className="flex items-center gap-6">
                {tabs.map((tab) => {
                  const active = pathname === tab.href;
                  return (
                    <li key={tab.href}>
                      <Link
                        href={tab.href}
                        className={
                          active
                            ? "text-[#6B8DFF] border-b-2 border-[#6B8DFF] pb-1"
                            : "text-gray-400 hover:text-gray-100 pb-1"
                        }
                      >
                        {tab.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}

            {/* 로그인/프로필/로그아웃 */}
            {user ? (
              <>
                {/* ⭐ 이름 클릭하면 ProfilePanel 열기 */}
                <button
                  type="button"
                  onClick={handleClickProfile}
                  className="text-gray-300 hidden sm:inline hover:text-white text-xs sm:text-sm underline-offset-2 hover:underline"
                >
                  {user.name}님
                </button>
                <button
                  onClick={handleLogout}
                  className="px-3 py-1 rounded-md bg-[#6B8DFF] hover:bg-[#5a7af0] text-white text-xs sm:text-sm"
                >
                  로그아웃
                </button>
              </>
            ) : (
              <button
                onClick={() => router.push("/login")}
                className="px-3 py-1 rounded-md bg-[#6B8DFF] hover:bg-[#5a7af0] text-white text-xs sm:text-sm"
              >
                로그인
              </button>
            )}
          </div>
        </nav>
      </header>

      {/* ⭐ 오버레이 패널 렌더링 */}
      {isProfileOpen && <ProfilePanel onClose={() => setIsProfileOpen(false)} />}
    </>
  );
}