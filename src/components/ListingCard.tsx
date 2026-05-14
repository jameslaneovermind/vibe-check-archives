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
