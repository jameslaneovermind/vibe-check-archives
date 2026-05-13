export function BannerAd() {
  return (
    <div className="mt-3">
      <div className="text-[9px] uppercase tracking-wider text-[#999] mb-0.5 px-0.5">
        Advertisement
      </div>
      <div
        className="relative w-full overflow-hidden border border-[#9AA0A6]"
        style={{
          height: 90,
          maxWidth: 728,
          margin: "0 auto",
          background:
            "repeating-linear-gradient(135deg, #1F2D3D 0 12px, #243345 12px 24px), linear-gradient(to bottom,#2C3E55,#1B2838)",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08), 0 1px 2px rgba(0,0,0,0.2)",
        }}
      >
        {/* faux code-glyphs background */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-25 select-none pointer-events-none"
          style={{
            fontFamily: "Courier New, monospace",
            color: "#7DD3A8",
            fontSize: 10,
            lineHeight: "11px",
            padding: 4,
            whiteSpace: "pre",
            overflow: "hidden",
          }}
        >
{`<bell ring="true">  function() { return "ding"; }   npm i react-bell --save
  import { Bell } from 'react-bell'   <Bell onClick={ring}/>   v0.0.9-alpha
  if (user) { ring(); ring(); ring(); }    // 99% test coverage*
  *coverage measured by react-bell using react-bell. ©2009 React Bell Corp.`}
        </div>

        <div className="relative h-full flex items-center gap-3 px-3">
          <div
            className="shrink-0 flex items-center justify-center text-white font-bold"
            style={{
              width: 56,
              height: 56,
              background: "linear-gradient(to bottom,#E63946,#A11E2A)",
              border: "2px solid #FFFFFF",
              boxShadow: "0 1px 3px rgba(0,0,0,0.4)",
              fontFamily: "Georgia, serif",
              fontSize: 28,
              lineHeight: 1,
              textShadow: "1px 1px 0 rgba(0,0,0,0.4)",
            }}
          >
            ⌁
          </div>

          <div className="flex-1 min-w-0 text-white">
            <div
              className="font-bold leading-tight"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 18,
                textShadow: "1px 1px 0 rgba(0,0,0,0.5)",
                color: "#FFE680",
              }}
            >
              Try our amazing new framework — React Bell™
            </div>
            <div
              className="text-[11px] mt-0.5"
              style={{ color: "#DCEAF5", textShadow: "1px 1px 0 rgba(0,0,0,0.5)" }}
            >
              Now with 47% more bells. Trusted by 3 developers worldwide.
            </div>
            <div className="text-[9px] mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>
              At participating npm registries. ©2009 React Bell Corp.
            </div>
          </div>

          <a
            href="#"
            className="shrink-0 no-underline"
            style={{
              padding: "8px 14px",
              borderRadius: 3,
              background: "var(--gradient-search-btn)",
              color: "#FFFFFF",
              fontWeight: "bold",
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              border: "1px solid #154A30",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.3)",
              textShadow: "0 -1px 0 rgba(0,0,0,0.35)",
              letterSpacing: 0.5,
            }}
          >
            SEE FOR YOURSELF ›
          </a>
        </div>
      </div>
    </div>
  );
}
