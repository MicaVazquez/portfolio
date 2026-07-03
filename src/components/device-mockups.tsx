import Image from "next/image";

export function LaptopMockup({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <div className="w-full">
      {/* Pantalla */}
      <div className="relative rounded-t-[10px] border-[8px] border-b-0 border-[#0d0410] bg-[#0d0410] shadow-2xl">
        <span className="absolute left-1/2 top-0.5 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-highlight/40 z-10" />
        <div
          className="relative w-full overflow-hidden bg-white"
          style={{ aspectRatio: `${width} / ${height}` }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 768px) 420px, 90vw"
            className="object-cover object-top"
          />
        </div>
      </div>
      {/* Bisagra */}
      <div className="h-[3px] bg-gradient-to-b from-black/50 to-[#1a0d1f]" />
      {/* Base / teclado: más alta y desborda a los costados para que se lea como notebook */}
      <div className="relative h-5 w-[calc(100%+28px)] -ml-3.5">
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#3a1a42] via-[#241129] to-[#0d0410] rounded-b-[6px] shadow-lg"
          style={{ clipPath: "polygon(8% 0, 92% 0, 100% 100%, 0% 100%)" }}
        />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-16 h-[6px] bg-black/35 rounded-b-full" />
      </div>
    </div>
  );
}

export function PhoneMockup({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <div className="w-full rounded-[20px] border-[3px] border-[#0d0410] bg-[#0d0410] shadow-2xl overflow-hidden">
      <div className="relative w-full" style={{ aspectRatio: `${width} / ${height}` }}>
        <Image src={src} alt={alt} fill sizes="140px" className="object-cover" />
      </div>
    </div>
  );
}
