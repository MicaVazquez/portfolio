import { CopyEmail } from "@/components/copy-email";
import { personalInfo } from "@/lib/data";

export function Contact() {
  return (
    <footer className="border-t border-brand-highlight/22">
      <div className="max-w-[1040px] mx-auto px-6 md:px-8 pt-20 pb-16 flex flex-col gap-8">
        <h2 className="font-display text-[clamp(28px,4vw,40px)] font-bold tracking-[-0.01em] m-0">
          Hablemos<span className="text-brand-highlight">.</span>
        </h2>
        <div className="flex flex-wrap gap-7 text-base">
          <CopyEmail
            email={personalInfo.email}
            className="text-brand-cream border-b border-brand-accent pb-0.5 hover:text-brand-highlight hover:border-brand-highlight transition-colors"
          >
            {personalInfo.email}
          </CopyEmail>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-highlight no-underline border-b border-transparent pb-0.5 hover:text-brand-cream hover:border-brand-highlight transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-highlight no-underline border-b border-transparent pb-0.5 hover:text-brand-cream hover:border-brand-highlight transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>
        <p className="text-xs text-brand-accent m-0">
          © 2026 Micaela Vázquez · Buenos Aires, Argentina
        </p>
      </div>
    </footer>
  );
}
