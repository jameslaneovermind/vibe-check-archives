const cities = ["London", "Manchester", "Edinburgh", "Bristol", "Leeds", "Brighton", "Glasgow", "Cardiff", "Belfast"];
const cuisines = ["Coffee Shops", "Italian", "Pubs", "Cocktail Bars", "Brunch", "Pizza", "Vegan", "Bakeries"];
const services = ["Plumbers", "Opticians", "Therapists", "Detectives", "Yoga Studios", "Hairdressers", "Locksmiths"];

export function Footer() {
  return (
    <footer className="w-full mt-6">
      {/* Browse panel — dark grey textured */}
      <div
        className="w-full text-white"
        style={{
          background:
            "repeating-linear-gradient(45deg, #4A4A4A 0, #4A4A4A 2px, #444444 2px, #444444 4px)",
          borderTop: "1px solid #666666",
        }}
      >
        <div className="mx-auto max-w-[1200px] px-4 py-4">
          <h3
            className="text-[14px] font-bold mb-2"
            style={{ color: "#7DD3A8", fontFamily: "var(--font-serif)" }}
          >
            Browse Vibe Check
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[11px]">
            <div>
              <div className="w2-foot-h">Cities</div>
              <ul className="grid grid-cols-3 gap-x-2 gap-y-0.5">
                {cities.map((c) => (
                  <li key={c}>
                    <a href="#" className="!text-white/85 hover:!text-white">{c}</a>
                  </li>
                ))}
              </ul>
              <a href="#" className="!text-[#7DD3A8] mt-1 inline-block">View all cities »</a>
            </div>
            <div>
              <div className="w2-foot-h">Food &amp; Drink</div>
              <ul className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                {cuisines.map((c) => (
                  <li key={c}>
                    <a href="#" className="!text-white/85 hover:!text-white">{c}</a>
                  </li>
                ))}
              </ul>
              <a href="#" className="!text-[#7DD3A8] mt-1 inline-block">View all cuisines »</a>
            </div>
            <div>
              <div className="w2-foot-h">Services</div>
              <ul className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                {services.map((s) => (
                  <li key={s}>
                    <a href="#" className="!text-white/85 hover:!text-white">{s}</a>
                  </li>
                ))}
              </ul>
              <a href="#" className="!text-[#7DD3A8] mt-1 inline-block">View all services »</a>
            </div>
          </div>
        </div>
      </div>

      {/* Link columns — black */}
      <div
        className="w-full text-white"
        style={{ background: "#1F1F1F", borderTop: "1px solid #333333" }}
      >
        <div className="mx-auto max-w-[1200px] px-4 py-4 grid grid-cols-2 md:grid-cols-5 gap-4 text-[11px]">
          <div>
            <div className="w2-foot-h">About</div>
            <ul className="space-y-0.5">
              {["About Vibe Check", "Editorial Standards", "Press", "Investor Relations", "Privacy Policy"].map((l) => (
                <li key={l}><a href="#" className="!text-white/80 hover:!text-white">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="w2-foot-h">Help</div>
            <ul className="space-y-0.5">
              {["FAQ", "Content Guidelines", "Contact Vibe Check", "Support Centre", "Developers"].map((l) => (
                <li key={l}><a href="#" className="!text-white/80 hover:!text-white">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="w2-foot-h">More</div>
            <ul className="space-y-0.5">
              {["Careers", "Vibe Check Mobile", "The Weekly Vibe", "Vibe Check Apparel", "RSS"].map((l) => (
                <li key={l}><a href="#" className="!text-white/80 hover:!text-white">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="w2-foot-h">Countries</div>
            <ul className="space-y-0.5">
              {["United Kingdom", "Ireland", "France", "Germany", "Spain", "Australia"].map((l) => (
                <li key={l}><a href="#" className="!text-white/80 hover:!text-white">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="w2-foot-h">Languages</div>
            <ul className="space-y-0.5">
              <li><a href="#" className="!text-white/80 hover:!text-white">English ▾</a></li>
            </ul>
            <div className="w2-foot-h mt-3">Built with</div>
            <a href="#" className="!text-[#7DD3A8]">Brent — view audit log →</a>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="w-full bg-[#0F0F0F] border-t border-[#333]">
        <div className="mx-auto max-w-[1200px] px-4 py-2 text-[10px] text-white/50 flex flex-wrap justify-between gap-2">
          <span>
            Listings business directory: <a href="#" className="!text-white/70">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</a>
          </span>
          <span>© 2007–2026 Vibe Check Ltd. · v2.0.7 · uptime 99.91% · Last updated: just now</span>
        </div>
      </div>
    </footer>
  );
}
