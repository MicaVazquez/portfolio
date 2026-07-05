const COLORS = ["#FBE4D8", "#DFB6B2", "#854F6C"];

// Valores pseudo-aleatorios pero deterministas (mismos en servidor y cliente,
// así no hay errores de hidratación)
function particleConfig(i: number, side: "left" | "right") {
  const r1 = ((i * 37 + 13) % 100) / 100;
  const r2 = ((i * 61 + 7) % 100) / 100;
  const r3 = ((i * 89 + 29) % 100) / 100;
  const r4 = ((i * 53 + 41) % 100) / 100;
  return {
    top: 8 + r1 * 84,
    size: 2 + r2 * 3.5,
    dx: (40 + r3 * 140) * (side === "left" ? -1 : 1),
    dy: (r4 - 0.5) * 70,
    duration: 2.2 + r2 * 2.4,
    delay: r3 * 3.2,
    color: COLORS[i % COLORS.length],
  };
}

export function SparkleEmitter({ side, count = 16 }: { side: "left" | "right"; count?: number }) {
  return (
    <span
      aria-hidden
      className={`absolute inset-y-0 w-px pointer-events-none ${
        side === "left" ? "left-[0.02em]" : "right-[0.02em]"
      }`}
    >
      {Array.from({ length: count }, (_, i) => {
        const p = particleConfig(i, side);
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${p.top}%`,
              [side]: "0px",
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.color,
              boxShadow: `0 0 6px 1px ${p.color}`,
              opacity: 0,
              "--dx": `${p.dx}px`,
              "--dy": `${p.dy}px`,
              animation: `sparkle-drift ${p.duration}s ease-out ${p.delay}s infinite`,
            } as React.CSSProperties}
          />
        );
      })}
    </span>
  );
}
