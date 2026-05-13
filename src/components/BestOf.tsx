import { PixelIcon } from "./PixelIcon";
import { Stars } from "./Stars";

const bestRestaurants = [
  { id: "cold-start", name: "Cold Start", reviews: 412, rating: 4.8 },
  { id: "spaghetti-code", name: "Spaghetti Code", reviews: 301, rating: 4.4 },
  { id: "main-branch", name: "The Main Branch", reviews: 274, rating: 4.3 },
];

const bestNightlife = [
  { id: "dark-mode", name: "Dark Mode", reviews: 389, rating: 4.5 },
  { id: "merge-conflicts", name: "Merge Conflicts", reviews: 87, rating: 4.9 },
  { id: "git-blame", name: "Git Blame", reviews: 63, rating: 4.7 },
];

function Column({
  heading,
  total,
  feature,
  items,
}: {
  heading: string;
  total: string;
  feature: { id: string; name: string; reviews: number; rating: number };
  items: { id: string; name: string; reviews: number; rating: number }[];
}) {
  return (
    <div className="flex-1 min-w-0 px-3 py-2">
      <div className="flex items-baseline justify-between mb-1.5">
        <h3
          className="text-[14px] font-bold text-[#A8261B]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {heading}
        </h3>
        <span className="text-[10px] text-[#888] italic">{total} reviewed</span>
      </div>
      <div className="flex gap-2">
        <div className="w2-photo w-[68px] h-[68px] overflow-hidden shrink-0">
          <PixelIcon id={feature.id} size={68} />
        </div>
        <ol className="flex-1 min-w-0 text-[12px] space-y-0.5">
          <li className="flex items-baseline gap-1.5">
            <span className="font-bold text-[#888] w-[14px]">1.</span>
            <a href="#" className="font-bold truncate">{feature.name}</a>
          </li>
          {items.slice(0, 3).map((it, i) => (
            <li key={it.id} className="flex items-baseline gap-1.5">
              <span className="font-bold text-[#888] w-[14px]">{i + 2}.</span>
              <a href="#" className="truncate">{it.name}</a>
            </li>
          ))}
          <li className="pt-0.5">
            <a href="#" className="text-[11px] italic">…see more »</a>
          </li>
        </ol>
      </div>
      <div className="mt-1 flex items-center gap-1">
        <Stars rating={feature.rating} />
        <span className="text-[10px] text-[#666]">{feature.reviews} reviews</span>
      </div>
    </div>
  );
}

export function BestOf() {
  return (
    <div className="w2-bestof mt-3">
      <div className="w2-bestof-title">
        <span className="w2-bestof-trophy">★</span>
        Best of <span style={{ color: "#C92A2A" }}>Vibe&nbsp;Check</span>
        <span className="ml-auto text-[10px] font-normal text-[#8A6D00]">
          <a href="#" className="font-bold">More “Best Of” »</a>
        </span>
      </div>
      <div className="flex divide-x divide-[#F0D878]">
        <Column
          heading="Restaurants"
          total="1,184"
          feature={bestRestaurants[0]}
          items={bestRestaurants.slice(1)}
        />
        <Column
          heading="Nightlife"
          total="312"
          feature={bestNightlife[0]}
          items={bestNightlife.slice(1)}
        />
      </div>
    </div>
  );
}
