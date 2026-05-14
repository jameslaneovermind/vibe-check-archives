import { Stars } from "./Stars";
import { PixelIcon } from "./PixelIcon";

export type Listing = {
  id: string;
  name: string;
  category: string;
  pillKind: "food" | "service" | "nightlife";
  rating: number;
  reviews: number;
  excerpt: string;
  reviewer: string;
  topPick?: boolean;
  suspended?: boolean;
  sponsored?: boolean;
};

const PILL_STYLES: Record<Listing["pillKind"], string> = {
  food: "linear-gradient(to bottom,#52B788,#2D6A4F)",
  service: "linear-gradient(to bottom,#3A8FC9,#1C5D8C)",
  nightlife: "linear-gradient(to bottom,#9C5BD4,#5C2A8C)",
};

export function ListingCard({ l, index }: { l: Listing; index: number }) {
  return (
    <div
      className={`border border-[#CCCCCC] border-b-2 px-3 py-2.5 flex gap-3 relative ${
        l.suspended ? "border-2 border-dashed !border-[#C92A2A]" : ""
      }`}
      style={{ background: l.sponsored ? "#FBF5E0" : "#FFFFFF" }}
    >
      <span className="w2-listnum">{index + 1}.</span>
      {l.topPick && <EditorialPickBadge />}


      {/* Pixel-art icon */}
      <div className="relative shrink-0">
        <div className="w2-photo w-[78px] h-[78px] overflow-hidden">
          <PixelIcon id={l.id} size={78} />
        </div>
        {l.suspended && (
          <div className="w2-suspended-banner" style={{ fontSize: 9, padding: "3px 2px" }}>
            ⚠ SUSPENDED ⚠
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <a
            href="#"
            className="text-[15px] font-bold leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {l.name}
          </a>
          <span
            className="w2-cat-pill"
            style={{ background: PILL_STYLES[l.pillKind] }}
          >
            {l.category}
          </span>
          <span className="ml-auto text-[10px] text-[#888] flex items-center gap-2">
            {l.sponsored && (
              <span
                className="px-1 py-px text-[9px] font-bold uppercase tracking-wider"
                style={{
                  color: "#888",
                  border: "1px solid #CCC",
                  background: "#F5F5F5",
                  letterSpacing: 0.5,
                }}
                title="Sponsored placement"
              >
                Vibe Check Ad
              </span>
            )}
            <span>posted 2 days ago · {((index * 1.3) % 7 + 0.4).toFixed(1)} mi</span>
          </span>
        </div>

        <div className="flex items-center gap-2 mt-0.5">
          <Stars rating={l.rating} />
          <span className="text-[11px] text-[#555]">
            <strong>{l.rating.toFixed(1)}</strong> · {l.reviews} reviews
          </span>
        </div>

        <p
          className="text-[12px] text-[#333] mt-1 italic leading-snug line-clamp-2"
          style={{ fontFamily: "Georgia, serif" }}
        >
          “{l.excerpt}”
        </p>
        <div className="text-[10px] text-[#888] mt-0.5">
          — {l.reviewer}, verified reviewer
          {l.suspended && (
            <span className="ml-2 text-[#C92A2A] font-bold">
              ⚠ Editorial action: rubber-stamping detected
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 text-[11px] mt-1">
          <a href="#" className="w2-link-action font-bold">Read reviews ›</a>
          <span className="text-[#CCC]">|</span>
          <a href="#" className="w2-link-action">♥ Favourite</a>
          <span className="text-[#CCC]">|</span>
          <a href="#" className="w2-link-action">✎ Write a review</a>
          <span className="text-[#CCC]">|</span>
          <a href="#" className="w2-link-action">✉ Send to a friend</a>
        </div>
      </div>
    </div>
  );
}

function EditorialPickBadge() {
  // 12-point starburst, muted gold, with a tiny white star centered.
  const points: string[] = [];
  const cx = 12;
  const cy = 12;
  const outer = 11;
  const inner = 6.5;
  const n = 12;
  for (let i = 0; i < n * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = (Math.PI / n) * i - Math.PI / 2;
    points.push(`${(cx + Math.cos(a) * r).toFixed(2)},${(cy + Math.sin(a) * r).toFixed(2)}`);
  }
  return (
    <span
      title="Editorial pick"
      aria-label="Editorial pick"
      className="inline-flex items-center justify-center align-middle"
      style={{ width: 16, height: 16, marginLeft: 2, marginRight: -2 }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
        <polygon
          points={points.join(" ")}
          fill="#D4940A"
          stroke="#8A5E04"
          strokeWidth="0.6"
          strokeLinejoin="round"
        />
        <path
          d="M12 7.5 L13.1 10.4 L16.2 10.6 L13.8 12.5 L14.6 15.5 L12 13.9 L9.4 15.5 L10.2 12.5 L7.8 10.6 L10.9 10.4 Z"
          fill="#FFFFFF"
        />
      </svg>
    </span>
  );
}
