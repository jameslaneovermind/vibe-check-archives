export function Hero() {
  return (
    <div className="mt-3 flex items-stretch gap-0 border border-[#F0D878] rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] overflow-hidden relative">
      <div
        className="flex-1 px-4 py-3 flex items-center gap-3"
        style={{ background: "linear-gradient(to bottom,#FFFBEA 0%,#FFF3C2 100%)" }}
      >
        <span
          className="inline-block shrink-0 w-9 h-9 rounded-full text-center"
          style={{
            background: "radial-gradient(circle at 35% 30%, #FFE680, #E8A800 70%, #8C6A00)",
            lineHeight: "36px",
            fontSize: "20px",
            border: "2px solid #FFFFFF",
            boxShadow: "0 1px 2px rgba(0,0,0,0.25)",
          }}
        >
          ★
        </span>
        <div className="flex-1 min-w-0">
          <div
            className="text-[14px] font-bold text-[#1B4332] leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Vibe Check is the editorially approved way to find businesses that
            actually got reviewed.
          </div>
          <div className="text-[11px] text-[#5C4A00] mt-0.5">
            <strong>12,847</strong> reviews · <strong>3,204</strong> businesses ·
            no rubber stamps, ever.
          </div>
        </div>
        <a href="#" className="w2-btn shrink-0">Browse listings →</a>
      </div>
      <div className="w2-ribbon">BETA</div>
    </div>
  );
}
