import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import vibeLogo from "@/assets/vibe-check-logo.png";

export function Header() {
  return (
    <header className="w-full">
      {/* Gradient nav bar */}
      <div
        style={{ background: "var(--gradient-nav)" }}
        className="w-full border-b border-[#1B4332] shadow-[inset_0_-1px_0_rgba(0,0,0,0.2)]"
      >
        <div className="mx-auto max-w-[1200px] px-4 py-3 flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 no-underline hover:no-underline">
            <img
              src={vibeLogo}
              alt="Vibe Check"
              className="h-11 w-auto select-none"
              style={{ filter: "drop-shadow(1px 1px 0 rgba(0,0,0,0.35))" }}
              draggable={false}
            />
            <span
              className="text-white/80 text-[10px] px-1 border border-white/40 rounded-sm"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              .com
            </span>
          </Link>

          <nav className="flex items-center gap-4 ml-4">
            {["Home", "Browse", "Write a Review", "Add a Business", "Help"].map((item, i) => (
              <a
                key={item}
                href="#"
                className="text-white text-[12px] font-bold no-underline hover:underline"
                style={{ textShadow: "0 -1px 0 rgba(0,0,0,0.25)" }}
              >
                {item}
                {i < 4 && <span className="ml-4 text-white/40">|</span>}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3 text-[12px]">
            <a
              href="#"
              className="text-white no-underline hover:underline font-bold"
              style={{ textShadow: "0 -1px 0 rgba(0,0,0,0.25)" }}
            >
              Sign In
            </a>
            <span className="text-white/40">|</span>
            <a
              href="#"
              className="text-white no-underline hover:underline font-bold"
              style={{ textShadow: "0 -1px 0 rgba(0,0,0,0.25)" }}
            >
              Register
            </a>
          </div>
        </div>
      </div>

      {/* Search row */}
      <div className="w-full bg-white border-b border-[#CCCCCC] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
        <div className="mx-auto max-w-[1200px] px-4 py-3 flex items-center gap-2">
          <label
            htmlFor="vc-search"
            className="text-[12px] font-bold text-[#2D6A4F]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Find:
          </label>
          <input
            id="vc-search"
            className="w2-input flex-1 max-w-[380px]"
            placeholder="e.g. coffee, plumber, pub…"
            defaultValue=""
          />
          <span className="text-[11px] text-[#666666]">near</span>
          <input className="w2-input w-[180px]" placeholder="London, UK" defaultValue="" />
          <button className="w2-btn-search inline-flex items-center gap-1.5">
            <Search className="w-3.5 h-3.5" />
            Search
          </button>
          <a href="#" className="text-[11px] ml-2">
            Advanced search »
          </a>
        </div>
      </div>
    </header>
  );
}
