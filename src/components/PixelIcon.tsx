// 16x16 pixel-art icons. Each row is 16 chars; '.' = transparent, others = palette key.
type IconDef = {
  palette: Record<string, string>;
  bg: string;
  rows: string[];
};

const ICONS: Record<string, IconDef> = {
  // Speaker (Dark Mode - nightclub)
  "dark-mode": {
    bg: "#2A1B4D",
    palette: { K: "#0A0612", G: "#888", W: "#E0DFFF", P: "#7B5BE6", D: "#3D2470" },
    rows: [
      "................",
      "...KKKKKKKKKK...",
      "..KDDDDDDDDDDK..",
      "..KDPPPPPPPPDK..",
      "..KDPGGGGGGPDK..",
      "..KDPGWWWWGPDK..",
      "..KDPGWPPWGPDK..",
      "..KDPGWPPWGPDK..",
      "..KDPGWWWWGPDK..",
      "..KDPGGGGGGPDK..",
      "..KDPPPPPPPPDK..",
      "..KDPGGGGPPPDK..",
      "..KDPGWWGPPPDK..",
      "..KDPGGGGPPPDK..",
      "..KDDDDDDDDDDK..",
      "...KKKKKKKKKK...",
    ],
  },
  // Coffee cup (Cold Start)
  "cold-start": {
    bg: "#5A3A1F",
    palette: { K: "#2A1A08", W: "#FFFFFF", B: "#6B3F1A", S: "#C49A6C", C: "#3A1F08", T: "#E8E0D0" },
    rows: [
      "................",
      "................",
      "....TTTTTTTT....",
      "...T........T...",
      "..WWWWWWWWWWBB..",
      "..WCCCCCCCCWBKB.",
      "..WCCCCCCCCWBKB.",
      "..WCCCCCCCCWBBB.",
      "..WCCCCCCCCW....",
      "..WCCCCCCCCW....",
      "..WCCCCCCCCW....",
      "..WWWWWWWWWW....",
      "...WWWWWWWW.....",
      "..SSSSSSSSSSSS..",
      ".SSSSSSSSSSSSSS.",
      "................",
    ],
  },
  // Wrench (Hotfix)
  hotfix: {
    bg: "#1C5D8C",
    palette: { K: "#0A1F38", S: "#9CB4C8", D: "#5C7A92", H: "#C0D4E4" },
    rows: [
      "................",
      "...........KKK..",
      "..........KSSK..",
      ".........KSDSK..",
      "........KSDSK...",
      "........KSDK....",
      ".......KSDSK....",
      "......KSDSK.....",
      ".....KSDSK......",
      "....KSDSK.......",
      "...KSDSK........",
      "..KHSSK.........",
      "..KSSDK.........",
      "..KSSSK.........",
      "...KKK..........",
      "................",
    ],
  },
  // Plate of pasta (Spaghetti Code)
  "spaghetti-code": {
    bg: "#A8261B",
    palette: { K: "#3A0A04", W: "#F0E8D8", Y: "#E8C24A", R: "#C92A2A", S: "#FFE680" },
    rows: [
      "................",
      "................",
      "................",
      "...WWWWWWWWWW...",
      "..WYYSYYSYYSYYW.",
      ".WYYRSYRYSYRYYYW",
      ".WYSYRYYRYYRYSYW",
      ".WSYYYSYYSYYYSYW",
      ".WYRYYYRYYYRYYYW",
      ".WYSYRYYRYYYSYYW",
      ".WYYYSYYYSYYYRYW",
      ".WYYRYYYRYYYYYYW",
      "..WYYYYYYYYYYYW.",
      "...WWWWWWWWWW...",
      "..KKKKKKKKKKKK..",
      "................",
    ],
  },
  // Beer mug (Main Branch - pub)
  "main-branch": {
    bg: "#5C3818",
    palette: { K: "#1A0E04", W: "#FFFAEB", A: "#E8C24A", H: "#F5E8B8", G: "#9C7A3C" },
    rows: [
      "................",
      "...HHHHHHHH.....",
      "..HWWHWHWWWH....",
      "..WHWWWWHWWHKKK.",
      "..AAAAAAAAAAKWK.",
      "..AAAAAAAAAAKWK.",
      "..AGAGAGAGAAKKK.",
      "..AAAAAAAAAA....",
      "..AGAGAGAGAA....",
      "..AAAAAAAAAA....",
      "..AGAGAGAGAA....",
      "..AAAAAAAAAA....",
      "..AGAGAGAGAA....",
      "..AAAAAAAAAA....",
      "..KKKKKKKKKK....",
      "................",
    ],
  },
  // Two hearts (Merge Conflicts - couples therapy)
  "merge-conflicts": {
    bg: "#7A2E5C",
    palette: { K: "#3A0E2C", P: "#E85CA8", W: "#FFC2DC", R: "#C9357A" },
    rows: [
      "................",
      "..KK.KK.........",
      ".KPPKPPK........",
      ".KPWPPPK........",
      ".KPPPPPK..KK.KK.",
      "..KPPPK..KRRKRRK",
      "...KPK...KRWRRRK",
      "....K....KRRRRRK",
      ".........KRRRRRK",
      "..........KRRRK.",
      "...........KRK..",
      "............K...",
      "................",
      "...KKKKKKKKKK...",
      "..K..........K..",
      "................",
    ],
  },
  // Rubber stamp
  "rubber-stamp": {
    bg: "#3A3A3A",
    palette: { K: "#0A0A0A", W: "#D4D4D4", R: "#C92A2A", D: "#6B6B6B", B: "#888888" },
    rows: [
      "................",
      "................",
      "....KKKKKKKK....",
      "....KRRRRRRK....",
      "....KRWRWRRK....",
      "....KRRRRRRK....",
      "....KKKKKKKK....",
      "....KDDDDDDK....",
      "....KDDDDDDK....",
      "...KKDDDDDDKK...",
      "...KBBBBBBBBK...",
      "..KBWWWWWWWWBK..",
      "..KKKKKKKKKKKK..",
      "................",
      ".KKKKKKKKKKKKKK.",
      "................",
    ],
  },
  // Lotus (Yoga)
  "eventually-consistent": {
    bg: "#2D6A4F",
    palette: { K: "#0E2E1F", G: "#7DD3A8", D: "#3FA372", L: "#B8F0D2", P: "#FFC2DC" },
    rows: [
      "................",
      "................",
      ".......K........",
      "......KPK.......",
      ".....KPLPK......",
      "....KPLLLPK.....",
      "...KGLLPLLGK....",
      "..KGGLLLLLGGK...",
      ".KGDGGLLLGGDGK..",
      ".KDDGGGLGGGDDK..",
      ".KDDDGGGGGDDDK..",
      "..KDDDDGDDDDDK..",
      "...KDDDDDDDDDK..",
      "....KDDDDDDDK...",
      ".....KKKKKKK....",
      "................",
    ],
  },
  // Glasses (Four Eyes)
  "four-eyes": {
    bg: "#2A2A2A",
    palette: { K: "#000000", D: "#1A1A1A", W: "#9CB4C8", G: "#5C7A92" },
    rows: [
      "................",
      "................",
      "................",
      "................",
      "................",
      "..KKKK....KKKK..",
      ".KDDWDKKKKDWDDK.",
      "KDWWWGKKKKGWWWDK",
      "KDWWWWK..KWWWWDK",
      "KDWWWGK..KGWWWDK",
      ".KDDDDK..KDDDDK.",
      "..KKKK....KKKK..",
      "................",
      "................",
      "................",
      "................",
    ],
  },
  // Magnifier (Git Blame - detective)
  "git-blame": {
    bg: "#3A2010",
    palette: { K: "#0A0604", S: "#C49A6C", G: "#8C6A3C", H: "#E8D4B0", B: "#5C3818" },
    rows: [
      "................",
      "...KKKKKK.......",
      "..KSSSSSSK......",
      ".KSHHGGGGSK.....",
      ".KSHGGGGGGK.....",
      "KSGGGGGGGGSK....",
      "KSGGGGGGGGSK....",
      "KSGGGGGGGGSK....",
      ".KSGGGGGGSK.....",
      ".KSGGGGGGSKK....",
      "..KSSSSSSKBBK...",
      "...KKKKKK.KBBK..",
      "...........KBBK.",
      "............KBBK",
      ".............KBK",
      "..............KK",
    ],
  },
};

export function PixelIcon({ id, size = 110 }: { id: string; size?: number }) {
  const def = ICONS[id];
  if (!def) {
    return (
      <div
        style={{
          width: size,
          height: size,
          background: "#888",
        }}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      shapeRendering="crispEdges"
      style={{
        imageRendering: "pixelated",
        background: def.bg,
        display: "block",
      }}
    >
      {def.rows.map((row, y) =>
        row.split("").map((ch, x) => {
          if (ch === "." || !def.palette[ch]) return null;
          return (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width={1}
              height={1}
              fill={def.palette[ch]}
            />
          );
        })
      )}
    </svg>
  );
}
