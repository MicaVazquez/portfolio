export function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#0d000d]">
      <div
        className="absolute -top-[15%] -left-[10%] w-[max(48vw,420px)] h-[max(48vw,420px)] rounded-full blur-[100px] bg-[radial-gradient(circle,_rgba(82,43,91,0.95)_0%,_rgba(82,43,91,0)_65%)]"
        style={{ animation: "lava-drift-1 18s ease-in-out infinite" }}
      />
      <div
        className="absolute top-[5%] -right-[12%] w-[max(42vw,380px)] h-[max(42vw,380px)] rounded-full blur-[110px] bg-[radial-gradient(circle,_rgba(133,79,108,0.8)_0%,_rgba(133,79,108,0)_65%)]"
        style={{ animation: "lava-drift-2 22s ease-in-out infinite" }}
      />
      <div
        className="absolute top-[45%] left-[25%] w-[max(38vw,340px)] h-[max(38vw,340px)] rounded-full blur-[90px] bg-[radial-gradient(circle,_rgba(43,18,76,1)_0%,_rgba(43,18,76,0)_65%)]"
        style={{ animation: "lava-drift-3 26s ease-in-out infinite" }}
      />
      <div
        className="absolute -bottom-[15%] right-[8%] w-[max(36vw,320px)] h-[max(36vw,320px)] rounded-full blur-[120px] bg-[radial-gradient(circle,_rgba(223,182,178,0.3)_0%,_rgba(223,182,178,0)_65%)]"
        style={{ animation: "lava-drift-2 28s ease-in-out infinite reverse" }}
      />
      <div
        className="absolute -bottom-[10%] -left-[8%] w-[max(34vw,300px)] h-[max(34vw,300px)] rounded-full blur-[105px] bg-[radial-gradient(circle,_rgba(133,79,108,0.6)_0%,_rgba(133,79,108,0)_65%)]"
        style={{ animation: "lava-drift-1 21s ease-in-out infinite reverse" }}
      />
    </div>
  );
}
