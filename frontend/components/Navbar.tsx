// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const tabs = [
  { href: "/main", label: "기부" },
  { href: "/main/ranking", label: "랭킹" },
  { href: "/main/badges", label: "배지" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout, needCountryInfo } = useAuth();

  const handleLogout = async () => {
    try {
      // 서버 로그아웃 호출 (있다면)
      await fetch("http://localhost:8080/api/auth/logout", {
        method: "DELETE",
        credentials: "include",
      });
    } catch (e) {
      console.error("로그아웃 API 실패:", e);
    } finally {
      logout();
    }
  };

  return (
    <header className="border-b border-[#1e2135] bg-[#050816]">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        {/* 🔹 로고를 다시 Link로 변경 → 클릭하면 /main 이동 */}
        <Link
          href="/main"
          className="text-lg font-bold text-[#6B8DFF] hover:opacity-90"
        >
          GiveChain
        </Link>

        {/* 오른쪽 영역: 탭 + 로그인/로그아웃 */}
        <div className="flex items-center gap-6 text-sm font-medium">
          {/* 나라 설정 필요 시, 탭 대신 안내 문구만 노출 */}
          {needCountryInfo ? (
            <span className="text-[11px] text-gray-400">
              국가 설정을 완료하면 메뉴를 사용할 수 있어요.
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

          {/* 로그인/로그아웃 버튼 영역 */}
          {user ? (
            <>
              <span className="text-gray-400 hidden sm:inline">
                {user.name}님
              </span>
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
  );
}