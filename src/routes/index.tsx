import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { CategoryBar } from "@/components/CategoryBar";
import { ListingCard, type Listing } from "@/components/ListingCard";
import { Sidebar } from "@/components/Sidebar";
import { IEFrame } from "@/components/IEFrame";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Vibe Check — Find businesses that actually got reviewed" },
      {
        name: "description",
        content:
          "Editorially approved business listings and reviews. No rubber stamps, ever. 12,847 reviews and counting.",
      },
    ],
  }),
});

const listings: Listing[] = [
  {
    id: "dark-mode",
    name: "Dark Mode",
    category: "Nightclub",
    pillKind: "nightlife",
    rating: 4.5,
    reviews: 389,
    excerpt: "Pitch black, four floors, the bouncer remembers your name. A vibe.",
    reviewer: "Priya S.",
    topPick: true,
  },
  {
    id: "cold-start",
    name: "Cold Start",
    category: "Coffee Shop",
    pillKind: "food",
    rating: 4.8,
    reviews: 412,
    excerpt: "The flat white takes 90 seconds. They time it. Worth it.",
    reviewer: "Tom B.",
    topPick: true,
  },
  {
    id: "hotfix",
    name: "Hotfix",
    category: "Emergency Plumber",
    pillKind: "service",
    rating: 4.7,
    reviews: 198,
    excerpt: "Showed up in 22 minutes at 2am. Fixed it. Didn't lecture me.",
    reviewer: "Marcus W.",
  },
  {
    id: "spaghetti-code",
    name: "Spaghetti Code",
    category: "Italian Restaurant",
    pillKind: "food",
    rating: 4.4,
    reviews: 301,
    excerpt: "The carbonara has no cream and the waiter will know if you ask.",
    reviewer: "Elena R.",
  },
  {
    id: "main-branch",
    name: "The Main Branch",
    category: "Pub",
    pillKind: "food",
    rating: 4.3,
    reviews: 274,
    excerpt: "Sunday roast, real fire, dog-friendly. Pints under £6. A miracle.",
    reviewer: "James O.",
  },
  {
    id: "merge-conflicts",
    name: "Merge Conflicts",
    category: "Couples Therapy",
    pillKind: "service",
    rating: 4.9,
    reviews: 87,
    excerpt: "Saved my marriage. Also explained what 'rebase' means to my partner.",
    reviewer: "Anonymous",
    topPick: true,
  },
  {
    id: "rubber-stamp",
    name: "Rubber Stamp Co.",
    category: "Stationery",
    pillKind: "service",
    rating: 5.0,
    reviews: 4,
    excerpt: "All four reviews posted within a 12-minute window from the same IP.",
    reviewer: "Vibe Check Editorial",
    suspended: true,
  },
  {
    id: "eventually-consistent",
    name: "Eventually Consistent",
    category: "Yoga Studio",
    pillKind: "service",
    rating: 4.6,
    reviews: 156,
    excerpt: "Class starts whenever the instructor finishes her tea. It's fine.",
    reviewer: "Sasha L.",
  },
  {
    id: "four-eyes",
    name: "Four Eyes",
    category: "Optician",
    pillKind: "service",
    rating: 4.5,
    reviews: 142,
    excerpt: "Two opticians look at every prescription. Hence the name. Genius.",
    reviewer: "Daniel K.",
  },
  {
    id: "git-blame",
    name: "Git Blame",
    category: "Detective Agency",
    pillKind: "service",
    rating: 4.7,
    reviews: 63,
    excerpt: "Found out who'd been moving things in the office. It was Karen.",
    reviewer: "H.R. Department",
  },
];

function Index() {
  return (
    <IEFrame>
      <div className="min-h-full flex flex-col">
        <Header />

        <main className="flex-1">
          <div className="mx-auto max-w-[1200px] px-4">
            <Hero />
            <CategoryBar />
            <BestOf />

            <div className="mt-3 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-3">
              <div>
                <div className="flex items-center justify-between mb-1.5 px-0.5">
                  <h2
                    className="text-[16px] font-bold text-[#1B4332]"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Recent Activity — Listings near you
                  </h2>
                  <div className="text-[11px] text-[#666]">
                    Sort by:{" "}
                    <a href="#" className="font-bold">Editorial pick</a> ·{" "}
                    <a href="#">Rating</a> · <a href="#">Newest</a>
                  </div>
                </div>

                <div className="bg-white border border-[#CCCCCC] border-t-[3px] border-t-[#52B788] rounded">
                  {listings.map((l, i) => (
                    <ListingCard key={l.id} l={l} index={i} />
                  ))}
                </div>

                <div className="mt-3 p-2.5 text-center text-[12px] bg-white border border-[#CCCCCC] rounded">
                  <a href="#" className="w2-btn">Load more listings ↓</a>
                  <div className="text-[10px] text-[#888] mt-1.5">
                    Showing 10 of 3,204 editorially approved listings.
                  </div>
                </div>
              </div>

              <Sidebar />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </IEFrame>
  );
}
