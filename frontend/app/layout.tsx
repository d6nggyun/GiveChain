// app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/hooks/useAuth";

export const metadata = {
  title: "GiveChain",
  description: "블록체인 기반 기부 플랫폼",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-[#020617] text-white">
        <AuthProvider>
          <Navbar />
          <main className="min-h-screen px-4 py-8 md:px-8">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}