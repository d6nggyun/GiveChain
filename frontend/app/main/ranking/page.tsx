// app/(main)/ranking/page.tsx
"use client";

const mockRanking = [
  { rank: 1, name: "김동균", amount: 1.23 },
  { rank: 2, name: "Alice", amount: 0.75 },
  { rank: 3, name: "Bob", amount: 0.5 },
];

export default function RankingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-2">기부 랭킹</h1>
      <p className="text-sm text-gray-400 mb-4">
        기간별 · 금액 기준으로 기부 랭킹을 확인할 수 있습니다. (현재는 더미 데이터입니다.)
      </p>

      <div className="bg-[#0b1220] rounded-3xl border border-white/10 p-6">
        <table className="w-full text-sm">
          <thead className="text-gray-400 border-b border-white/10">
            <tr>
              <th className="py-2 text-left">순위</th>
              <th className="py-2 text-left">닉네임</th>
              <th className="py-2 text-right">총 기부액 (ETH)</th>
            </tr>
          </thead>
          <tbody>
            {mockRanking.map((user) => (
              <tr key={user.rank} className="border-b border-white/5 last:border-b-0">
                <td className="py-3">{user.rank}</td>
                <td className="py-3">{user.name}</td>
                <td className="py-3 text-right font-mono">{user.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}