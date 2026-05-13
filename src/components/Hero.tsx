export function Hero() {
  return (
    <div className="w2-box p-5 mt-4 relative overflow-hidden">
      <div className="w2-ribbon">BETA</div>

      <h1
        className="text-[26px] font-bold text-[#1B4332] leading-tight"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Find businesses that actually got reviewed.
      </h1>
      <p className="text-[13px] text-[#444] mt-1.5 max-w-[640px]">
        Every listing on Vibe Check is editorially approved. No rubber stamps, ever.
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-3 text-[12px] text-[#2D6A4F] font-bold">
        <span className="flex items-center gap-1.5">
          <span className="text-[#FFB800] text-base">✦</span>
          12,847 reviews posted
        </span>
        <span className="text-[#CCC]">·</span>
        <span className="flex items-center gap-1.5">
          <span className="text-[#FFB800] text-base">✦</span>
          3,204 businesses listed
        </span>
        <span className="text-[#CCC]">·</span>
        <span className="flex items-center gap-1.5">
          <span className="text-[#FFB800] text-base">✦</span>
          Editorial approval required
        </span>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <a href="#" className="w2-btn">Browse listings →</a>
        <a href="#" className="text-[12px]">or read our <em>editorial standards</em> »</a>
      </div>
    </div>
  );
}
