// app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/context/AuthContext";
import RequireCountry from "@/components/RequireCountry";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-[#050816] text-white">
        <AuthProvider>
          {/* 🔥 전역 토스트 */}
          <Toaster richColors position="top-center" />

          <Navbar />
          {/* 🔥 메인 쪽에 나라 정보 가드 */}
          <RequireCountry>
            <main className="max-w-5xl mx-auto px-4 py-8 min-h-[calc(100vh-64px)]">
              {children}
            </main>
          </RequireCountry>
        </AuthProvider>
      </body>
    </html>
  );
}