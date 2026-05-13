import type { ReactNode } from "react";
import { Minus, Square, X } from "lucide-react";

const CHROME_HEIGHT = 26 + 22 + 38 + 28 + 22; // title + menu + toolbar + address + links = 136
const STATUS_HEIGHT = 22;
const TASKBAR_HEIGHT = 36;

export function IEFrame({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Fixed XP desktop background */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 35%, #B7E0F4 0%, #6BB4DC 35%, #4A8FB8 65%, #2B5F7E 100%)",
        }}
      />
      <div
        aria-hidden
        className="fixed inset-x-0 bottom-9 h-[42vh] -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 100%, #5C8E3C 0%, #4A7A2E 40%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 100%, #6FA84A 0%, #4A7A2E 50%, transparent 70%)",
        }}
      />

      {/* Fixed IE6 chrome — title bar through links bar */}
      <div
        className="fixed top-0 inset-x-0 z-40"
        style={{
          background: "#ECE9D8",
          borderBottom: "1px solid #ACA899",
          fontFamily: "Tahoma, Verdana, sans-serif",
          boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-1.5 px-1.5 py-1"
          style={{
            background:
              "linear-gradient(to bottom, #0058E1 0%, #3A7DE5 8%, #1761DC 40%, #0F58D6 90%, #2A6FE0 100%)",
            color: "#FFFFFF",
            height: 26,
          }}
        >
          <IELogo size={16} />
          <span
            className="text-[11px] font-bold flex-1 truncate"
            style={{ textShadow: "1px 1px 0 rgba(0,0,0,0.4)" }}
          >
            Vibe Check - Microsoft Internet Explorer
          </span>
          <div className="flex items-center gap-0.5">
            {[Minus, Square].map((Icon, i) => (
              <button
                key={i}
                className="w-[22px] h-[20px] flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(to bottom, #5A9BEC 0%, #2D6FD9 100%)",
                  border: "1px solid #003B8E",
                  borderRadius: 2,
                }}
              >
                <Icon className="w-2.5 h-2.5 text-white" strokeWidth={3} />
              </button>
            ))}
            <button
              className="w-[22px] h-[20px] flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(to bottom, #E97062 0%, #C9382A 100%)",
                border: "1px solid #7A1A10",
                borderRadius: 2,
              }}
            >
              <X className="w-2.5 h-2.5 text-white" strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Menu bar */}
        <div
          className="flex items-center gap-3 px-2 text-[11px]"
          style={{
            background: "#ECE9D8",
            borderBottom: "1px solid #ACA899",
            height: 22,
            color: "#000",
          }}
        >
          {["File", "Edit", "View", "Favorites", "Tools", "Help"].map((m) => (
            <span
              key={m}
              className="cursor-default hover:bg-[#316AC5] hover:text-white px-1"
            >
              <u>{m[0]}</u>
              {m.slice(1)}
            </span>
          ))}
        </div>

        {/* Toolbar */}
        <div
          className="flex items-center gap-1 px-2 py-1"
          style={{
            background:
              "linear-gradient(to bottom, #F5F4EA 0%, #ECE9D8 50%, #D6D2BB 100%)",
            borderBottom: "1px solid #ACA899",
            height: 38,
          }}
        >
          {[
            { label: "Back", color: "#3A6AC7", arrow: "←" },
            { label: "Forward", color: "#888", arrow: "→" },
            { label: "Stop", color: "#C92A2A", arrow: "✕" },
            { label: "Refresh", color: "#2D8B3C", arrow: "↻" },
            { label: "Home", color: "#3A6AC7", arrow: "⌂" },
          ].map((b) => (
            <button
              key={b.label}
              className="flex items-center gap-1 px-2 h-7 text-[11px] hover:bg-[#FFE89E] hover:border hover:border-[#C49A36] rounded-sm border border-transparent"
              style={{ color: "#000" }}
            >
              <span
                className="text-base leading-none w-4 h-4 flex items-center justify-center"
                style={{ color: b.color, fontWeight: "bold" }}
              >
                {b.arrow}
              </span>
              <span>{b.label}</span>
            </button>
          ))}
          <div className="w-px h-6 bg-[#ACA899] mx-1" />
          {["Search", "Favorites", "History", "Mail", "Print"].map((b) => (
            <button
              key={b}
              className="text-[11px] px-1.5 h-7 hover:bg-[#FFE89E] hover:border hover:border-[#C49A36] rounded-sm border border-transparent"
            >
              {b}
            </button>
          ))}
        </div>

        {/* Address bar */}
        <div
          className="flex items-center gap-2 px-2"
          style={{
            background: "#ECE9D8",
            borderBottom: "1px solid #ACA899",
            height: 28,
          }}
        >
          <span className="text-[11px]">
            A<u>d</u>dress
          </span>
          <div
            className="flex-1 flex items-center gap-1 bg-white px-1 h-[20px]"
            style={{
              border: "1px solid #7F9DB9",
              boxShadow: "inset 1px 1px 0 #B6BDC7",
            }}
          >
            <StarFav size={12} />
            <span className="text-[11px] text-black truncate flex-1">
              http://www.vibecheck.com/
            </span>
          </div>
          <button
            className="flex items-center gap-1 h-[20px] px-2 text-[11px]"
            style={{
              background: "linear-gradient(to bottom, #F5F4EA, #D6D2BB)",
              border: "1px solid #ACA899",
            }}
          >
            <span style={{ color: "#2D8B3C", fontWeight: "bold" }}>→</span>
            <u>G</u>o
          </button>
          <span className="text-[11px]">
            <u>L</u>inks
          </span>
        </div>

        {/* Links bar */}
        <div
          className="flex items-center gap-3 px-3 text-[11px]"
          style={{
            background: "#ECE9D8",
            borderBottom: "1px solid #ACA899",
            color: "#0831D9",
            height: 22,
          }}
        >
          <span className="text-black">Links</span>
          {[
            "Customize Links",
            "Free Hotmail",
            "Windows",
            "Windows Marketplace",
            "Windows Media",
          ].map((l) => (
            <span key={l} className="cursor-pointer hover:underline">
              <span
                className="inline-block w-3 h-3 mr-1 align-middle rounded-sm"
                style={{
                  background:
                    "linear-gradient(to bottom, #FFEC99 0%, #FFB800 100%)",
                  border: "1px solid #B07B00",
                }}
              />
              {l}
            </span>
          ))}
        </div>
      </div>

      {/* Scrollable browser viewport */}
      <main
        className="fixed inset-x-0 overflow-y-auto bg-[#F0F0F0] z-10"
        style={{
          top: CHROME_HEIGHT,
          bottom: STATUS_HEIGHT + TASKBAR_HEIGHT,
          borderLeft: "1px solid #0831D9",
          borderRight: "1px solid #0831D9",
          fontFamily: "Verdana, Tahoma, sans-serif",
        }}
      >
        {children}
      </main>

      {/* Fixed status bar */}
      <div
        className="fixed inset-x-0 z-40 flex items-center text-[11px] px-2 gap-1"
        style={{
          bottom: TASKBAR_HEIGHT,
          height: STATUS_HEIGHT,
          background: "#ECE9D8",
          borderTop: "1px solid #FFFFFF",
          boxShadow: "inset 0 1px 0 #ACA899",
          fontFamily: "Tahoma, sans-serif",
        }}
      >
        <span className="px-2 border-r border-[#ACA899]">Done</span>
        <div className="flex-1 h-3 mx-2 bg-white border border-[#ACA899] shadow-[inset_1px_1px_0_#B6BDC7]" />
        <span className="px-2 border-l border-[#ACA899] flex items-center gap-1">
          <span
            className="inline-block w-3 h-3"
            style={{
              background: "#FFB800",
              clipPath:
                "polygon(20% 45%, 20% 30%, 35% 15%, 65% 15%, 80% 30%, 80% 45%, 90% 45%, 90% 95%, 10% 95%, 10% 45%)",
            }}
          />
          Internet
        </span>
      </div>

      {/* Fixed XP taskbar */}
      <div
        className="fixed bottom-0 inset-x-0 flex items-center px-1 gap-1 z-50"
        style={{
          height: TASKBAR_HEIGHT,
          background:
            "linear-gradient(to bottom, #245EDC 0%, #3A7DE5 8%, #1F58D4 50%, #245EDC 100%)",
          borderTop: "1px solid #0831D9",
          fontFamily: "Tahoma, sans-serif",
        }}
      >
        <button
          className="h-7 px-3 pr-4 flex items-center gap-1.5 text-white font-bold italic text-[13px]"
          style={{
            background:
              "linear-gradient(to bottom, #3FAB3F 0%, #2D8B3C 50%, #1E6B2E 100%)",
            borderRadius: "0 12px 12px 0",
            border: "1px solid #1E5E2A",
            boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.3)",
            textShadow: "1px 1px 0 rgba(0,0,0,0.4)",
          }}
        >
          <span className="inline-flex gap-px">
            <span className="w-1.5 h-1.5 bg-[#E63946]" />
            <span className="w-1.5 h-1.5 bg-[#3FAB3F]" />
          </span>
          <span className="inline-flex gap-px -ml-0.5">
            <span className="w-1.5 h-1.5 bg-[#FFB800]" />
            <span className="w-1.5 h-1.5 bg-[#3A7DE5]" />
          </span>
          start
        </button>

        <div
          className="h-7 px-2 flex items-center gap-1.5 text-white text-[11px] font-bold max-w-[260px]"
          style={{
            background:
              "linear-gradient(to bottom, #1F4FB8 0%, #1A47A8 100%)",
            border: "1px solid #0831D9",
            boxShadow: "inset 1px 1px 0 rgba(0,0,0,0.2)",
            textShadow: "1px 1px 0 rgba(0,0,0,0.4)",
          }}
        >
          <IELogo size={14} />
          <span className="truncate">Vibe Check - Microsoft I…</span>
        </div>

        <div
          className="ml-auto h-7 flex items-center gap-2 px-2 text-white text-[11px]"
          style={{
            background:
              "linear-gradient(to bottom, #0F8AD8 0%, #0972C0 100%)",
            borderLeft: "1px solid #0831D9",
            boxShadow: "inset 1px 0 0 rgba(255,255,255,0.2)",
          }}
        >
          <span className="text-base">🔊</span>
          <span className="text-base">🛡</span>
          <span
            className="font-bold"
            style={{ textShadow: "1px 1px 0 rgba(0,0,0,0.4)" }}
          >
            14:32
          </span>
        </div>
      </div>
    </>
  );
}

function StarFav({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" className="shrink-0">
      <path
        fill="#FFB800"
        stroke="#B07B00"
        strokeWidth="0.7"
        strokeLinejoin="round"
        d="M8 1.5l1.9 4.1 4.5.5-3.4 3 1 4.4L8 11.3 3.9 13.5l1-4.4-3.4-3 4.5-.5z"
      />
    </svg>
  );
}

function IELogo({ size }: { size: number }) {
  return (
    <div
      className="shrink-0 rounded-full flex items-center justify-center font-bold italic"
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle at 30% 30%, #FFE680 0%, #FFB800 50%, #B07B00 100%)",
        color: "#003B8E",
        border: size >= 16 ? "1px solid #003B8E" : undefined,
        fontFamily: "Times, serif",
        fontSize: Math.round(size * 0.65),
        lineHeight: 1,
      }}
    >
      e
    </div>
  );
}
