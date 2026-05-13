// Glossy gold star — matches the star in the Vibe Check logo.
// Single source of truth for all standalone star marks across the site.
export function GoldStar({ size = 24 }: { size?: number }) {
  const id = `gs-${size}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="shrink-0 inline-block align-middle"
      style={{ filter: "drop-shadow(0 1px 0 rgba(0,0,0,0.25))" }}
    >
      <defs>
        <radialGradient id={`${id}-fill`} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#FFF1A8" />
          <stop offset="45%" stopColor="#F4C233" />
          <stop offset="100%" stopColor="#A8761A" />
        </radialGradient>
      </defs>
      <path
        d="M12 1.8l3.1 6.7 7.3.8-5.5 4.9 1.6 7.2L12 17.7 5.5 21.4l1.6-7.2L1.6 9.3l7.3-.8z"
        fill={`url(#${id}-fill)`}
        stroke="#5A3A05"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* subtle gloss highlight on upper-left lobe */}
      <path
        d="M12 3.4l1.7 3.7 1.6.2-2.4 2.1.4 2.7L12 10.6 9.3 11.7l.6-2.7L7.5 7l4-.5z"
        fill="#FFFFFF"
        opacity="0.28"
      />
    </svg>
  );
}
