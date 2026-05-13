export function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <span className="w2-star inline-flex items-center" aria-label={`${rating} stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < full) return <span key={i}>★</span>;
        if (i === full && half) return <span key={i} style={{ opacity: 0.6 }}>★</span>;
        return (
          <span key={i} style={{ color: "#DDDDDD", textShadow: "none" }}>
            ★
          </span>
        );
      })}
    </span>
  );
}
