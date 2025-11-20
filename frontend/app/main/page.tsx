// app/main/page.tsx
"use client";

export default function MainHomePage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <section className="rounded-3xl bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-950/80 p-8 shadow-2xl border border-white/5">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">기부 홈</h1>
        <p className="text-slate-300 mb-6">
          Web3 지갑으로 손쉽게 기부하고, 기부 내역에 따라 배지를 획득해보세요.
        </p>

        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 rounded-full bg-slate-900/80 text-sm text-slate-200 border border-white/10">
            온체인 기부 영수증
          </span>
          <span className="px-4 py-2 rounded-full bg-slate-900/80 text-sm text-slate-200 border border-white/10">
            배지 기반 기부 랭킹
          </span>
          <span className="px-4 py-2 rounded-full bg-slate-900/80 text-sm text-slate-200 border border-white/10">
            투명한 기부 흐름
          </span>
        </div>
      </section>

      <section className="rounded-3xl bg-slate-900/70 p-8 shadow-xl border border-white/5">
        <h2 className="text-xl font-semibold mb-2">아직 기부 캠페인이 없습니다.</h2>
        <p className="text-slate-400">
          첫 번째 캠페인이 곧 오픈될 예정입니다. 조금만 기다려 주세요!
        </p>
      </section>
    </div>
  );
}