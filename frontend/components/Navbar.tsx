"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { logoutRequest } from "@/lib/api";

export default function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logoutRequest();  // 서버 로그아웃 요청
    } catch (e) {
      console.error("로그아웃 실패:", e);
    }

    logout(); // 클라이언트 로그아웃
  };

  return (
    <header className="border-b border-gray-800 bg-[#0d1117]">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/main" className="text-lg font-bold text-indigo-400">GiveChain</Link>

        <ul className="flex items-center gap-6 text-sm font-medium">
          <li><Link href="/main" className="text-gray-300 hover:text-white">기부</Link></li>
          <li><Link href="/main/ranking" className="text-gray-300 hover:text-white">랭킹</Link></li>
          <li><Link href="/main/badges" className="text-gray-300 hover:text-white">배지</Link></li>

          {user ? (
            <>
              <span className="text-gray-400">{user.name}님</span>
              <button
                onClick={handleLogout}
                className="px-3 py-1 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                로그아웃
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="px-3 py-1 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              로그인
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
}