import { timeline } from "@/lib/data";

export function Experience() {
  return (
    <section id="experiencia" className="max-w-[1040px] mx-auto px-6 md:px-8 pb-[120px]">
      <div className="flex items-baseline gap-4 mb-12">
        <h2 className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-brand-highlight m-0">
          Experiencia y formación
        </h2>
        <div className="flex-1 h-px bg-brand-highlight/25" />
      </div>

      <div className="flex flex-col">
        {timeline.map((item, i) => (
          <div key={i} className="grid grid-cols-[minmax(90px,170px)_40px_minmax(0,1fr)] gap-0">
            <div className="font-mono text-[13px] text-brand-highlight text-right pr-2 pt-0.5">
              {item.date}
            </div>
            <div className="flex flex-col items-center">
              <span className="w-[11px] h-[11px] rounded-full bg-brand-highlight border-2 border-brand-bg shadow-[0_0_0_2px_#DFB6B2] mt-1" />
              {i < timeline.length - 1 && (
                <span className="flex-1 w-px bg-brand-highlight/30 mt-1.5" />
              )}
            </div>
            <div className="flex flex-col gap-2 pb-11">
              <h3 className="font-display text-xl font-semibold text-brand-cream m-0">
                {item.title}
              </h3>
              <p className="font-mono text-[13px] text-brand-highlight m-0">{item.org}</p>
              <p
                className="text-[15px] leading-[1.6] text-brand-highlight max-w-[560px] m-0"
                style={{ textWrap: "pretty" }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
