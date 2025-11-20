// app/(main)/badge/page.tsx
"use client";

const mockBadges = [
  { id: 1, name: "첫 기부", description: "첫 번째 온체인 기부를 완료했습니다." },
  { id: 2, name: "지속 가능한 기부자", description: "3회 이상 기부를 완료했습니다." },
];

export default function BadgePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-2">내 배지</h1>
      <p className="text-sm text-gray-400 mb-4">
        기부 활동에 따라 획득한 배지를 여기서 확인할 수 있습니다.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {mockBadges.map((badge) => (
          <div
            key={badge.id}
            className="bg-[#0b1220] rounded-2xl border border-white/10 p-5 flex flex-col gap-2"
          >
            <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-sm">
              🏅
            </div>
            <div>
              <h2 className="font-semibold">{badge.name}</h2>
              <p className="text-xs text-gray-400 mt-1">{badge.description}</p>
            </div>
          </div>
        ))}

        {mockBadges.length === 0 && (
          <p className="text-gray-500 text-sm col-span-full">
            아직 획득한 배지가 없습니다. 첫 기부를 통해 배지를 모아보세요!
          </p>
        )}
      </div>
    </div>
  );
}