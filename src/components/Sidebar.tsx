import { Stars } from "./Stars";

const mostReviewed = [
  { name: "Cold Start", initials: "CS", reviews: 412, bg: "#6B4226" },
  { name: "Dark Mode", initials: "DM", reviews: 389, bg: "#1A1A2E" },
  { name: "Spaghetti Code", initials: "SC", reviews: 301, bg: "#A8261B" },
  { name: "The Main Branch", initials: "MB", reviews: 274, bg: "#3B2412" },
  { name: "Hotfix", initials: "HF", reviews: 198, bg: "#1C5D8C" },
];

const recentlyJoined = [
  "Eventually Consistent",
  "Four Eyes",
  "Git Blame",
  "Merge Conflicts",
  "Stack Overflow Café",
];

export function Sidebar() {
  return (
    <aside className="space-y-4">
      {/* Most reviewed */}
      <div className="w2-widget">
        <div className="w2-widget-title">★ Most reviewed this week</div>
        <ol className="p-2 space-y-2">
          {mostReviewed.map((m, i) => (
            <li key={m.name} className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-[#888] w-4">{i + 1}.</span>
              <div
                className="w2-photo w-8 h-8 flex items-center justify-center shrink-0"
                style={{ background: m.bg }}
              >
                <span className="text-white text-[10px] font-bold">{m.initials}</span>
              </div>
              <div className="min-w-0 flex-1">
                <a href="#" className="text-[12px] font-bold block truncate">
                  {m.name}
                </a>
                <div className="flex items-center gap-1">
                  <Stars rating={4.5} />
                  <span className="text-[10px] text-[#666]">{m.reviews}</span>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Recently joined */}
      <div className="w2-widget">
        <div className="w2-widget-title">✦ Recently joined businesses</div>
        <ul className="p-2 space-y-1.5">
          {recentlyJoined.map((n) => (
            <li key={n} className="text-[12px] flex items-center gap-1.5">
              <span className="text-[#52B788]">›</span>
              <a href="#" className="flex-1 truncate">{n}</a>
              <span className="text-[9px] bg-[#FFFBEA] text-[#8A6D00] px-1 border border-[#F0D878] rounded-sm">
                NEW
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Stats */}
      <div className="w2-widget">
        <div className="w2-widget-title">📊 Vibe Check Stats</div>
        <dl className="p-3 text-[11px] space-y-1.5">
          <div className="flex justify-between border-b border-dotted border-[#DDD] pb-1">
            <dt>Total Reviews</dt>
            <dd className="font-bold text-[#2D6A4F]">12,847</dd>
          </div>
          <div className="flex justify-between border-b border-dotted border-[#DDD] pb-1">
            <dt>Businesses Listed</dt>
            <dd className="font-bold text-[#2D6A4F]">3,204</dd>
          </div>
          <div className="flex justify-between border-b border-dotted border-[#DDD] pb-1">
            <dt>Editorial Reviews</dt>
            <dd className="font-bold text-[#2D6A4F]">11,892</dd>
          </div>
          <div className="flex justify-between">
            <dt>Listings Declined</dt>
            <dd className="font-bold text-[#C92A2A]">1</dd>
          </div>
        </dl>
      </div>

      {/* Newsletter */}
      <div className="w2-widget">
        <div className="w2-widget-title">✉ Vibe Check Weekly</div>
        <div className="p-3">
          <p className="text-[11px] text-[#444] mb-2">
            The week's best new listings, delivered every Monday morning.
          </p>
          <input className="w2-input w-full mb-2" placeholder="your@email.com" />
          <button className="w2-btn w-full">Subscribe →</button>
        </div>
      </div>

      {/* Legitimacy badges */}
      <div className="flex flex-wrap gap-1.5 justify-center">
        <span className="w2-legit-badge">
          <span className="text-[#FFB800]">★</span> Valid XHTML 1.0
        </span>
        <span className="w2-legit-badge">
          <span className="text-[#1A6B9A]">CSS</span> Certified
        </span>
        <span className="w2-legit-badge" style={{ background: "linear-gradient(to bottom,#52B788,#2D6A4F)" }}>
          ✓ No Rubber Stamps
        </span>
      </div>
    </aside>
  );
}
