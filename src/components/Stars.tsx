type Size = "sm" | "md";

const SIZES: Record<Size, number> = { sm: 14, md: 18 };

const BOX_BG = "#FBF3E0";
const BOX_BORDER = "#E0D4A8";
const STAR_FILLED = "#C83100";
const STAR_EMPTY = "#E8DDC0";

function Star({ fill, size }: { fill: "full" | "half" | "empty"; size: number }) {
  const inner = Math.round(size * 0.78);
  const path =
    "M12 2.2 L14.85 8.6 L21.8 9.35 L16.6 14.05 L18.1 20.85 L12 17.35 L5.9 20.85 L7.4 14.05 L2.2 9.35 L9.15 8.6 Z";
  const id = `star-half-${Math.random().toString(36).slice(2, 8)}`;

  return (
    <span
      style={{
        width: size,
        height: size,
        background: BOX_BG,
        border: `1px solid ${BOX_BORDER}`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        marginRight: -1,
      }}
    >
      <svg width={inner} height={inner} viewBox="0 0 24 24" aria-hidden>
        {fill === "half" && (
          <defs>
            <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
              <stop offset="50%" stopColor={STAR_FILLED} />
              <stop offset="50%" stopColor={STAR_EMPTY} />
            </linearGradient>
          </defs>
        )}
        <path
          d={path}
          fill={
            fill === "full"
              ? STAR_FILLED
              : fill === "empty"
                ? STAR_EMPTY
                : `url(#${id})`
          }
        />
      </svg>
    </span>
  );
}

export function Stars({
  rating,
  size = "sm",
}: {
  rating: number;
  size?: Size;
}) {
  const px = SIZES[size];
  // Round to nearest 0.5
  const r = Math.round(rating * 2) / 2;
  const full = Math.floor(r);
  const half = r - full >= 0.5;

  return (
    <span
      className="inline-flex items-center align-middle"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const fill: "full" | "half" | "empty" =
          i < full ? "full" : i === full && half ? "half" : "empty";
        return <Star key={i} fill={fill} size={px} />;
      })}
    </span>
  );
}
