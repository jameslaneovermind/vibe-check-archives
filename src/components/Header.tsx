import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import vibeLogo from "@/assets/vibe-check-logo.png";

const subnav = ["Home", "Browse", "Write a Review", "Find Friends", "Messaging", "Talk", "Events"];

export function Header() {
  return (
    <header className="w-full">
      {/* Dark green top row: logo + search + auth */}
      <div
        style={{ background: "var(--gradient-nav)" }}
        className="w-full border-b border-[#1B4332] shadow-[inset_0_-1px_0_rgba(0,0,0,0.2)]"
      >
        <div className="mx-auto max-w-[1200px] px-4 py-3 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 no-underline hover:no-underline shrink-0">
            <img
              src={vibeLogo}
              alt="Vibe Check"
              className="h-16 w-auto select-none"
              style={{ filter: "drop-shadow(1px 1px 0 rgba(0,0,0,0.35))" }}
              draggable={false}
            />
            <span
              className="text-white/85 text-[10px] px-1 border border-white/40 rounded-sm"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              .com
            </span>
          </Link>

          <div className="flex-1 flex items-center gap-2 ml-2">
            <label
              htmlFor="vc-search"
              className="text-[12px] font-bold text-white"
              style={{ textShadow: "0 -1px 0 rgba(0,0,0,0.25)" }}
            >
              Find:
            </label>
            <input
              id="vc-search"
              className="w2-input flex-1 max-w-[320px]"
              placeholder="e.g. coffee, plumber, pub…"
              defaultValue=""
            />
            <span
              className="text-[11px] text-white/85"
              style={{ textShadow: "0 -1px 0 rgba(0,0,0,0.25)" }}
            >
              near
            </span>
            <input className="w2-input w-[170px]" placeholder="London, UK" defaultValue="" />
            <button className="w2-btn-search inline-flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5" />
              Search
            </button>
          </div>

          <div className="ml-2 flex items-center gap-2 text-[12px] shrink-0">
            <a
              href="#"
              className="!text-white no-underline hover:underline font-bold"
              style={{ textShadow: "0 -1px 0 rgba(0,0,0,0.25)" }}
            >
              Sign In
            </a>
            <span className="text-white/40">|</span>
            <a
              href="#"
              className="!text-white no-underline hover:underline font-bold"
              style={{ textShadow: "0 -1px 0 rgba(0,0,0,0.25)" }}
            >
              Register
            </a>
          </div>
        </div>
      </div>

      {/* Cream secondary nav strip */}
      <div
        className="w-full border-b border-[#E5D9A8]"
        style={{ background: "#FEF8E6" }}
      >
        <div className="mx-auto max-w-[1200px] px-4 py-1.5 flex items-center gap-3 text-[12px]">
          {subnav.map((item, i) => (
            <span key={item} className="flex items-center gap-3">
              <a
                href="#"
                className="!text-[#1F1F1F] no-underline hover:underline font-bold"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {item}
              </a>
              {i < subnav.length - 1 && <span className="text-[#C9B97A]">|</span>}
            </span>
          ))}
          <span className="ml-auto text-[10px] text-[#8A7A3A] italic">
            Tuesday, 13 May 2026 — 12,847 reviews and counting
          </span>
        </div>
      </div>
    </header>
  );
}
