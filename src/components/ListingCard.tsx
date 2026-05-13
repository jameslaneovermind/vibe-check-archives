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
};

const PILL_STYLES: Record<Listing["pillKind"], string> = {
  food: "linear-gradient(to bottom,#52B788,#2D6A4F)",
  service: "linear-gradient(to bottom,#3A8FC9,#1C5D8C)",
  nightlife: "linear-gradient(to bottom,#9C5BD4,#5C2A8C)",
};

export function ListingCard({ l }: { l: Listing }) {
  return (
    <div
      className={`w2-box p-3 flex gap-3 relative ${
        l.suspended ? "border-2 border-dashed !border-[#C92A2A]" : ""
      }`}
    >
      {/* Pixel-art icon */}
      <div className="relative shrink-0">
        <div className="w2-photo w-[110px] h-[110px] overflow-hidden">
          <PixelIcon id={l.id} size={110} />
        </div>
        {l.topPick && (
          <div className="w2-burst">
            ⭐<br />TOP<br />PICK!
          </div>
        )}
        {l.suspended && (
          <div className="w2-suspended-banner">⚠ LISTING SUSPENDED ⚠</div>
        )}
      </div>

      {/* Body */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-2">
          <a
            href="#"
            className="text-[16px] font-bold"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {l.name}
          </a>
          <span
            className="w2-cat-pill mt-1"
            style={{ background: PILL_STYLES[l.pillKind] }}
          >
            {l.category}
          </span>
        </div>

        <div className="flex items-center gap-2 mt-1">
          <Stars rating={l.rating} />
          <span className="text-[11px] text-[#555]">
            <strong>{l.rating.toFixed(1)}</strong> · {l.reviews} reviews
          </span>
        </div>

        <p
          className="text-[12px] text-[#333] mt-1.5 italic"
          style={{ fontFamily: "Georgia, serif" }}
        >
          “{l.excerpt}”
        </p>
        <div className="text-[10px] text-[#888] mt-0.5">
          — {l.reviewer}, verified reviewer
        </div>

        <hr className="w2-divider my-2" />

        <div className="flex items-center gap-3 text-[11px]">
          <a href="#" className="w2-link-action font-bold">Read reviews ›</a>
          <span className="text-[#CCC]">|</span>
          <a href="#" className="w2-link-action">Add to favourites ♥</a>
          <span className="text-[#CCC]">|</span>
          <a href="#" className="w2-link-action">Write a review ✎</a>
          {l.suspended && (
            <span className="ml-auto text-[10px] text-[#C92A2A] font-bold">
              ⚠ Editorial action: rubber-stamping detected
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
