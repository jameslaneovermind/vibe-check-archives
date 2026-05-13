const rows: { label: string; pct: number; count: string }[] = [
  { label: "5 ★", pct: 62, count: "7,968" },
  { label: "4 ★", pct: 88, count: "11,305" },
  { label: "3 ★", pct: 48, count: "6,166" },
  { label: "2 ★", pct: 22, count: "2,826" },
  { label: "1 ★", pct: 10, count: "1,284" },
];

export function RatingDistribution() {
  return (
    <div className="w2-widget">
      <div className="w2-widget-title flex items-center justify-between">
        <span>📊 Vibe Check Stats</span>
        <span className="text-[10px] font-normal text-[#888]">last 30 days</span>
      </div>
      <div className="p-2.5 space-y-1">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center gap-2 text-[10px]">
            <span className="w-7 text-[#8A6D00] font-bold shrink-0">{r.label}</span>
            <div
              className="flex-1 h-3 relative"
              style={{
                background: "#F2EBDA",
                border: "1px solid #D9C98F",
                boxShadow: "inset 0 1px 1px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  width: `${r.pct}%`,
                  height: "100%",
                  background: "linear-gradient(to bottom,#FBC58A 0%,#F6A96B 50%,#E68A4A 100%)",
                  borderRight: "1px solid #B86A2E",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4)",
                }}
              />
            </div>
            <span className="w-10 text-right text-[#666]">{r.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
