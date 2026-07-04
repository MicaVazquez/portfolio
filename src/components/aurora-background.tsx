export function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#0d000d]">
      <div
        className="absolute -top-[15%] -left-[10%] w-[48vw] h-[48vw] rounded-full blur-[60px] bg-[radial-gradient(circle,_rgba(82,43,91,0.95)_0%,_rgba(82,43,91,0)_65%)]"
        style={{ animation: "lava-drift-1 18s ease-in-out infinite" }}
      />
      <div
        className="absolute top-[5%] -right-[12%] w-[42vw] h-[42vw] rounded-full blur-[70px] bg-[radial-gradient(circle,_rgba(133,79,108,0.8)_0%,_rgba(133,79,108,0)_65%)]"
        style={{ animation: "lava-drift-2 22s ease-in-out infinite" }}
      />
      <div
        className="absolute top-[45%] left-[25%] w-[38vw] h-[38vw] rounded-full blur-[55px] bg-[radial-gradient(circle,_rgba(43,18,76,1)_0%,_rgba(43,18,76,0)_65%)]"
        style={{ animation: "lava-drift-3 26s ease-in-out infinite" }}
      />
      <div
        className="absolute -bottom-[15%] right-[8%] w-[36vw] h-[36vw] rounded-full blur-[80px] bg-[radial-gradient(circle,_rgba(223,182,178,0.3)_0%,_rgba(223,182,178,0)_65%)]"
        style={{ animation: "lava-drift-2 28s ease-in-out infinite reverse" }}
      />
      <div
        className="absolute -bottom-[10%] -left-[8%] w-[34vw] h-[34vw] rounded-full blur-[65px] bg-[radial-gradient(circle,_rgba(133,79,108,0.6)_0%,_rgba(133,79,108,0)_65%)]"
        style={{ animation: "lava-drift-1 20s ease-in-out infinite reverse" }}
      />
    </div>
  );
}
