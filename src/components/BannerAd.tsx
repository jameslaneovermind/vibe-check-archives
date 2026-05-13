import adImage from "@/assets/google-wave-ad.png";

export function BannerAd() {
  return (
    <div className="mt-3">
      <div className="text-[9px] uppercase tracking-wider text-[#999] mb-0.5 px-0.5">
        Advertisement
      </div>
      <a
        href="#"
        className="block mx-auto border border-[#9AA0A6] overflow-hidden"
        style={{
          maxWidth: 728,
          boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
        }}
      >
        <img
          src={adImage}
          alt="Advertisement"
          className="block w-full h-auto select-none"
          draggable={false}
        />
      </a>
    </div>
  );
}
