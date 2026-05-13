export function Footer() {
  return (
    <footer
      className="w-full mt-8 text-white"
      style={{
        background: "linear-gradient(to bottom, #3A3A3A 0%, #2A2A2A 100%)",
        borderTop: "1px solid #555555",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-4 py-4 flex flex-wrap items-center gap-4 text-[11px]">
        <div className="text-white/70">
          © 2007–2026 Vibe Check Inc. All rights reserved.
        </div>
        <nav className="flex items-center gap-3 mx-auto">
          {["About", "Blog", "API", "Advertise", "Help"].map((l, i) => (
            <span key={l} className="flex items-center gap-3">
              <a href="#" className="text-white/90 hover:text-white">
                {l}
              </a>
              {i < 4 && <span className="text-white/30">·</span>}
            </span>
          ))}
        </nav>
        <div className="text-white/70">
          Built with Brent —{" "}
          <a href="#" className="text-[#7DD3A8] hover:text-white">
            view audit log →
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-4 py-2 text-[10px] text-white/50 flex justify-between">
          <span>Listings: 3,204 | Reviews: 12,847 | Last updated: just now</span>
          <span>v2.0.7 · uptime 99.91%</span>
        </div>
      </div>
    </footer>
  );
}
