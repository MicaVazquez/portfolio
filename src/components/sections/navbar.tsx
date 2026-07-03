import { personalInfo } from "@/lib/data";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-brand-bg/70 backdrop-blur-md border-b border-brand-highlight/22">
      <nav className="flex justify-between items-center h-16 px-6 md:px-8 max-w-[1040px] mx-auto">
        <span className="font-display text-xl font-bold text-brand-cream tracking-tight">
          MV<span className="text-brand-highlight">.</span>
        </span>
        <div className="hidden md:flex gap-10">
          <a
            href="#proyectos"
            className="font-mono text-xs uppercase tracking-[0.1em] text-brand-highlight hover:text-brand-cream transition-colors"
          >
            Proyectos
          </a>
          <a
            href="#experiencia"
            className="font-mono text-xs uppercase tracking-[0.1em] text-brand-highlight hover:text-brand-cream transition-colors"
          >
            Experiencia
          </a>
          <a
            href="#stack"
            className="font-mono text-xs uppercase tracking-[0.1em] text-brand-highlight hover:text-brand-cream transition-colors"
          >
            Skills
          </a>
        </div>
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-sm px-4 py-2 rounded-[10px] bg-brand-highlight text-brand-bg font-semibold hover:bg-brand-cream transition-colors"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}
