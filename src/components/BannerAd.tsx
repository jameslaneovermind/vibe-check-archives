import reactBellAd from "@/assets/react-bell-ad.jpg";

export function BannerAd() {
  return (
    <div className="mt-3">
      <div className="text-[9px] uppercase tracking-wider text-[#999] mb-0.5 px-0.5 text-center">
        Advertisement
      </div>
      <a
        href="#"
        className="block mx-auto border border-[#9AA0A6] overflow-hidden"
        style={{
          maxWidth: 728,
          boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
          background: "#FFFFFF",
        }}
      >
        <img
          src={reactBellAd}
          alt="React Bell — Try our amazing new framework. Now with 47% more bells. Trusted by 3 developers worldwide."
          width={728}
          height={90}
          loading="lazy"
          className="block w-full h-auto select-none"
          draggable={false}
        />
      </a>
    </div>
  );
}
