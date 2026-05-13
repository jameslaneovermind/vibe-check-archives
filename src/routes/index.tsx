import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { CategoryBar } from "@/components/CategoryBar";
import { ListingCard, type Listing } from "@/components/ListingCard";
import { Sidebar } from "@/components/Sidebar";

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
    categoryColor: "linear-gradient(to bottom,#5C2A8C,#3A1860)",
    rating: 4.5,
    reviews: 389,
    excerpt: "Pitch black, four floors, the bouncer remembers your name. A vibe.",
    reviewer: "Priya S.",
    topPick: true,
    photoBg: "linear-gradient(135deg,#1A1A2E,#3A1860)",
    initials: "DM",
  },
  {
    id: "cold-start",
    name: "Cold Start",
    category: "Coffee Shop",
    categoryColor: "linear-gradient(to bottom,#A06B3A,#6B4226)",
    rating: 4.8,
    reviews: 412,
    excerpt: "The flat white takes 90 seconds. They time it. Worth it.",
    reviewer: "Tom B.",
    topPick: true,
    photoBg: "linear-gradient(135deg,#6B4226,#A06B3A)",
    initials: "CS",
  },
  {
    id: "hotfix",
    name: "Hotfix",
    category: "Emergency Plumber",
    categoryColor: "linear-gradient(to bottom,#1C5D8C,#0F3D5C)",
    rating: 4.7,
    reviews: 198,
    excerpt: "Showed up in 22 minutes at 2am. Fixed it. Didn't lecture me.",
    reviewer: "Marcus W.",
    photoBg: "linear-gradient(135deg,#1C5D8C,#0F3D5C)",
    initials: "HF",
  },
  {
    id: "spaghetti-code",
    name: "Spaghetti Code",
    category: "Italian Restaurant",
    categoryColor: "linear-gradient(to bottom,#C8362B,#8C1F18)",
    rating: 4.4,
    reviews: 301,
    excerpt: "The carbonara has no cream and the waiter will know if you ask.",
    reviewer: "Elena R.",
    photoBg: "linear-gradient(135deg,#A8261B,#5C1108)",
    initials: "SC",
  },
  {
    id: "main-branch",
    name: "The Main Branch",
    category: "Pub",
    categoryColor: "linear-gradient(to bottom,#8C5A2B,#5C3818)",
    rating: 4.3,
    reviews: 274,
    excerpt: "Sunday roast, real fire, dog-friendly. Pints under £6. A miracle.",
    reviewer: "James O.",
    photoBg: "linear-gradient(135deg,#3B2412,#7A4A1F)",
    initials: "MB",
  },
  {
    id: "merge-conflicts",
    name: "Merge Conflicts",
    category: "Couples Therapy",
    categoryColor: "linear-gradient(to bottom,#B85C8C,#7A2E5C)",
    rating: 4.9,
    reviews: 87,
    excerpt: "Saved my marriage. Also explained what 'rebase' means to my partner.",
    reviewer: "Anonymous",
    topPick: true,
    photoBg: "linear-gradient(135deg,#7A2E5C,#B85C8C)",
    initials: "MC",
  },
  {
    id: "rubber-stamp",
    name: "Rubber Stamp Co.",
    category: "Stationery",
    categoryColor: "linear-gradient(to bottom,#888,#555)",
    rating: 5.0,
    reviews: 4,
    excerpt: "All four reviews posted within a 12-minute window from the same IP.",
    reviewer: "Vibe Check Editorial",
    suspended: true,
    photoBg: "linear-gradient(135deg,#666,#3A3A3A)",
    initials: "RS",
  },
  {
    id: "eventually-consistent",
    name: "Eventually Consistent",
    category: "Yoga Studio",
    categoryColor: "linear-gradient(to bottom,#52B788,#2D6A4F)",
    rating: 4.6,
    reviews: 156,
    excerpt: "Class starts whenever the instructor finishes her tea. It's fine.",
    reviewer: "Sasha L.",
    photoBg: "linear-gradient(135deg,#2D6A4F,#7DD3A8)",
    initials: "EC",
  },
  {
    id: "four-eyes",
    name: "Four Eyes",
    category: "Optician",
    categoryColor: "linear-gradient(to bottom,#3A3A3A,#1A1A1A)",
    rating: 4.5,
    reviews: 142,
    excerpt: "Two opticians look at every prescription. Hence the name. Genius.",
    reviewer: "Daniel K.",
    photoBg: "linear-gradient(135deg,#1A1A1A,#4A4A4A)",
    initials: "4E",
  },
  {
    id: "git-blame",
    name: "Git Blame",
    category: "Detective Agency",
    categoryColor: "linear-gradient(to bottom,#5C2A1A,#2E1408)",
    rating: 4.7,
    reviews: 63,
    excerpt: "Found out who'd been moving things in the office. It was Karen.",
    reviewer: "H.R. Department",
    photoBg: "linear-gradient(135deg,#2E1408,#7A3820)",
    initials: "GB",
  },
];

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-[1200px] px-4">
          <Hero />
          <CategoryBar />

          <div className="mt-4 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4">
            {/* Listings column */}
            <div>
              <div className="flex items-center justify-between mb-2 px-1">
                <h2
                  className="text-[18px] font-bold text-[#1B4332]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Listings near you
                </h2>
                <div className="text-[11px] text-[#666]">
                  Sort by:{" "}
                  <a href="#" className="font-bold">Editorial pick</a> ·{" "}
                  <a href="#">Rating</a> · <a href="#">Newest</a>
                </div>
              </div>

              <div className="space-y-3">
                {listings.map((l) => (
                  <ListingCard key={l.id} l={l} />
                ))}
              </div>

              <div className="w2-box mt-4 p-3 text-center text-[12px]">
                <a href="#" className="w2-btn">Load more listings ↓</a>
                <div className="text-[10px] text-[#888] mt-2">
                  Showing 10 of 3,204 editorially approved listings.
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
