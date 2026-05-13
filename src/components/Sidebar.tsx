import { Stars } from "./Stars";
import { PixelIcon } from "./PixelIcon";
import { RatingDistribution } from "./RatingDistribution";
import iphoneImg from "@/assets/iphone.png";

const mostReviewed = [
  { id: "cold-start", name: "Cold Start", reviews: 412 },
  { id: "dark-mode", name: "Dark Mode", reviews: 389 },
  { id: "spaghetti-code", name: "Spaghetti Code", reviews: 301 },
  { id: "main-branch", name: "The Main Branch", reviews: 274 },
  { id: "hotfix", name: "Hotfix", reviews: 198 },
];

const events = [
  { date: "Sat, Oct 14", time: "8pm", name: "Cold Start: Latte Art Smackdown" },
  { date: "Sun, Oct 15", time: "7pm", name: "Dark Mode: Synthwave Night vol.4" },
  { date: "Wed, Oct 18", time: "6:30pm", name: "Eventually Consistent: Yin & Tonic" },
];

const freshLists = [
  { name: "10 places that take cash", author: "by Marcus W." },
  { name: "Best dog-friendly pubs in E2", author: "by James O." },
  { name: "Where to cry quietly", author: "by Anonymous" },
];

const todayInTalk = [
  { mins: 4, topic: "Why does Cold Start time their flat whites?" },
  { mins: 11, topic: "Anyone else been ghosted by Hotfix?" },
  { mins: 23, topic: "Is Dark Mode actually too dark now?" },
  { mins: 41, topic: "Rubber Stamp Co. — what really happened" },
];

export function Sidebar() {
  return (
    <aside className="space-y-3">
      {/* Mobile app promo */}
      <div className="w2-widget">
        <div className="w2-widget-title w2-title-blue">
          ☎ Get Vibe Check on your phone
        </div>
        <div className="p-2.5 flex gap-2">
          <img
            src={iphoneImg}
            alt="Vibe Check on iPhone"
            className="w-[68px] h-auto shrink-0 select-none"
            style={{ imageRendering: "auto" }}
            draggable={false}
          />
          <div className="flex-1 min-w-0 text-[11px]">
            <div className="font-bold text-[#1C5D8C]">It's free.</div>
            <p className="text-[#444] mt-0.5 leading-snug">
              Find editorially approved listings on the go. iPhone, Treo &amp;
              BlackBerry compatible.
            </p>
            <a href="#" className="w2-btn mt-1.5 inline-block !py-0.5 !px-2 text-[11px]">
              Get it free now »
            </a>
          </div>
        </div>
      </div>

      {/* Review of the Day */}
      <div className="w2-widget">
        <div className="w2-widget-title w2-title-orange flex items-center justify-between">
          <span>★ Review of the Day</span>
          <a href="#" className="text-[10px] !text-[#8C5A00] font-normal">Archive »</a>
        </div>
        <div className="p-2.5 flex gap-2">
          <div className="w2-photo w-[42px] h-[42px] shrink-0 overflow-hidden">
            <PixelIcon id="cold-start" size={42} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <Stars rating={5} size="md" />
              <a href="#" className="text-[12px] font-bold truncate">Cold Start</a>
            </div>
            <p
              className="text-[11px] text-[#333] italic mt-0.5 leading-snug"
              style={{ fontFamily: "Georgia, serif" }}
            >
              “The flat white takes 90 seconds. They time it. I have witnessed
              the timer. It is a small kitchen timer with a duck on it…”
            </p>
            <div className="text-[10px] text-[#666] mt-0.5">
              — Tom B. · <a href="#">Read more</a>
            </div>
          </div>
        </div>
      </div>

      {/* Rating distribution */}
      <RatingDistribution />

      {/* Most reviewed */}
      <div className="w2-widget">
        <div className="w2-widget-title">★ Most reviewed this week</div>
        <ol className="p-2 space-y-1.5">
          {mostReviewed.map((m, i) => (
            <li key={m.name} className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-[#888] w-3">{i + 1}.</span>
              <div className="w2-photo w-7 h-7 overflow-hidden shrink-0">
                <PixelIcon id={m.id} size={28} />
              </div>
              <div className="min-w-0 flex-1">
                <a href="#" className="text-[12px] font-bold block truncate leading-tight">
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

      {/* Popular events */}
      <div className="w2-widget">
        <div className="w2-widget-title w2-title-red flex items-center justify-between">
          <span>♪ Popular Events</span>
          <a href="#" className="text-[10px] !text-[#A8261B] font-normal">More »</a>
        </div>
        <ul className="p-2 space-y-1.5">
          {events.map((e) => (
            <li key={e.name} className="text-[11px] leading-snug">
              <a href="#" className="font-bold">{e.name}</a>
              <div className="text-[10px] text-[#888]">
                {e.date} · {e.time}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Fresh Lists */}
      <div className="w2-widget">
        <div className="w2-widget-title w2-title-purple flex items-center justify-between">
          <span>≡ Fresh Lists</span>
          <a href="#" className="text-[10px] !text-[#5C2A8C] font-normal">More »</a>
        </div>
        <ul className="p-2 space-y-1.5">
          {freshLists.map((l) => (
            <li key={l.name} className="text-[11px] leading-snug">
              <a href="#" className="font-bold">{l.name}</a>
              <div className="text-[10px] text-[#888]">{l.author}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Today in Talk */}
      <div className="w2-widget">
        <div className="w2-widget-title flex items-center justify-between">
          <span>💬 Today in Talk</span>
          <a href="#" className="text-[10px] !text-[#2D6A4F] font-normal">More »</a>
        </div>
        <ul className="p-2 space-y-1.5">
          {todayInTalk.map((t) => (
            <li key={t.topic} className="text-[11px] leading-snug">
              <div className="text-[10px] text-[#888]">{t.mins} minutes ago</div>
              <a href="#">{t.topic}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Stats */}
      <div className="w2-widget">
        <div className="w2-widget-title">📊 Vibe Check Stats</div>
        <dl className="p-2.5 text-[11px] space-y-1">
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

      {/* Legitimacy badges */}
      <div className="flex flex-wrap gap-1.5 justify-center pt-1">
        <span className="w2-legit-badge">
          <span className="text-[#FFB800]">★</span> Valid XHTML 1.0
        </span>
        <span className="w2-legit-badge">
          <span className="text-[#1A6B9A]">CSS</span> Certified
        </span>
        <span
          className="w2-legit-badge"
          style={{ background: "linear-gradient(to bottom,#52B788,#2D6A4F)" }}
        >
          ✓ No Rubber Stamps
        </span>
      </div>
    </aside>
  );
}
