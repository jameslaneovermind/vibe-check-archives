import { useState } from "react";
import {
  LayoutGrid,
  UtensilsCrossed,
  Coffee,
  Music2,
  Wrench,
  HeartPulse,
  ShoppingBag,
} from "lucide-react";

const cats = [
  { label: "All", icon: LayoutGrid },
  { label: "Restaurants", icon: UtensilsCrossed },
  { label: "Coffee", icon: Coffee },
  { label: "Nightlife", icon: Music2 },
  { label: "Services", icon: Wrench },
  { label: "Health", icon: HeartPulse },
  { label: "Shopping", icon: ShoppingBag },
];

export function CategoryBar() {
  const [active, setActive] = useState("All");
  return (
    <div className="w2-box p-3 mt-4">
      <div className="flex items-center gap-2 flex-wrap">
        <span
          className="text-[11px] font-bold text-[#2D6A4F] mr-1"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Browse by category:
        </span>
        {cats.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className="w2-cat"
            data-active={active === label}
            onClick={() => setActive(label)}
          >
            <Icon className="w-3 h-3" strokeWidth={2.5} />
            {label}
          </button>
        ))}
        <span className="ml-auto text-[10px] text-[#888]">Showing 10 of 3,204 listings</span>
      </div>
    </div>
  );
}
