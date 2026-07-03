export function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-[25%] -left-[15%] w-[65vw] h-[65vw] rounded-full blur-[70px] bg-[radial-gradient(circle,_rgba(82,43,91,0.85)_0%,_rgba(82,43,91,0)_70%)]" />
      <div className="absolute -top-[10%] -right-[20%] w-[60vw] h-[60vw] rounded-full blur-[80px] bg-[radial-gradient(circle,_rgba(133,79,108,0.7)_0%,_rgba(133,79,108,0)_70%)]" />
      <div className="absolute top-[35%] left-[30%] w-[50vw] h-[50vw] rounded-full blur-[60px] bg-[radial-gradient(circle,_rgba(43,18,76,0.9)_0%,_rgba(43,18,76,0)_70%)]" />
      <div className="absolute -bottom-[20%] right-[5%] w-[55vw] h-[55vw] rounded-full blur-[90px] bg-[radial-gradient(circle,_rgba(223,182,178,0.28)_0%,_rgba(223,182,178,0)_70%)]" />
      <div className="absolute -bottom-[15%] -left-[10%] w-[45vw] h-[45vw] rounded-full blur-[80px] bg-[radial-gradient(circle,_rgba(133,79,108,0.5)_0%,_rgba(133,79,108,0)_70%)]" />
    </div>
  );
}
