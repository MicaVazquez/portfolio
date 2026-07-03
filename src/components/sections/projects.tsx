import { LaptopMockup, PhoneMockup } from "@/components/device-mockups";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="proyectos" className="max-w-[1040px] mx-auto px-6 md:px-8 pb-[120px]">
      <div className="flex items-baseline gap-4 mb-12">
        <h2 className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-brand-highlight m-0">
          Proyectos
        </h2>
        <div className="flex-1 h-px bg-brand-highlight/25" />
      </div>

      <div className="flex flex-col gap-16">
        {projects.map((project, i) => {
          const imageOnRight = i % 2 === 1;
          return (
            <article
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-brand-highlight/22 bg-brand-surface/35 backdrop-blur-2xl"
            >
              <div
                className={`relative w-full min-h-[360px] flex items-center justify-center p-10 md:p-12 bg-brand-bg/35 ${
                  imageOnRight
                    ? "md:order-2 md:border-l border-brand-highlight/22"
                    : "md:border-r border-brand-highlight/22"
                }`}
              >
                <div className="relative w-full max-w-[380px]">
                  <LaptopMockup
                    src={project.desktopImage.src}
                    width={project.desktopImage.width}
                    height={project.desktopImage.height}
                    alt={`Captura de escritorio de ${project.title}`}
                  />
                  {project.mobileImage && (
                    <div className="absolute -bottom-7 -right-4 w-[22%] min-w-[76px] rotate-[-3deg]">
                      <PhoneMockup
                        src={project.mobileImage.src}
                        width={project.mobileImage.width}
                        height={project.mobileImage.height}
                        alt={`Captura mobile de ${project.title}`}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div
                className={`p-8 md:p-11 flex flex-col gap-5 ${imageOnRight ? "md:order-1" : ""}`}
              >
                <span className="font-mono text-xs text-brand-highlight tracking-[0.08em]">
                  CASE STUDY · {project.id} · {project.company.toUpperCase()}
                </span>
                <h3 className="font-display text-[27px] font-bold tracking-[-0.01em] leading-[1.2] m-0">
                  {project.title}
                </h3>
                <div className="flex flex-col gap-3.5 text-[15px] leading-[1.6] text-brand-highlight">
                  <p className="m-0">
                    <strong className="text-brand-cream font-semibold">El problema.</strong>{" "}
                    {project.problem}
                  </p>
                  <p className="m-0">
                    <strong className="text-brand-cream font-semibold">Mi rol.</strong> {project.role}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-2 font-mono text-[13px] px-[13px] py-[7px] rounded-full border border-brand-highlight/30 bg-brand-bg/35 text-brand-highlight"
                    >
                      <tech.icon />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
