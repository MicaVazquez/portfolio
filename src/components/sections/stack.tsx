import { skillGroups } from "@/lib/data";

export function Stack() {
  return (
    <section id="stack" className="max-w-[1040px] mx-auto px-6 md:px-8 pb-[120px]">
      <div className="flex items-baseline gap-4 mb-12">
        <h2 className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-brand-highlight m-0">
          Skills
        </h2>
        <div className="flex-1 h-px bg-brand-highlight/25" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-11">
        {skillGroups.map((group) => (
          <div key={group.name} className="flex flex-col gap-4">
            <h3 className="font-display text-[19px] font-semibold text-brand-cream m-0">
              {group.name}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-2.5 font-mono text-sm px-[15px] py-2.5 rounded-[10px] bg-brand-surface/40 backdrop-blur-md border border-brand-highlight/22 text-brand-highlight hover:border-brand-highlight hover:text-brand-cream transition-colors"
                >
                  <skill.icon />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
