import { personalInfo } from "@/lib/data";

export function Hero() {
  return (
    <header className="max-w-[1040px] mx-auto px-6 md:px-8 pt-[140px] pb-[120px]">
      <div className="flex flex-col items-center text-center gap-7 animate-fade-up">
        <p className="text-base text-brand-highlight m-0">Hola, soy</p>

        <h1
          className="font-display m-0 text-[clamp(56px,10vw,112px)] leading-[1.02] tracking-[-0.03em] bg-[linear-gradient(90deg,#FBE4D8_0%,#FBE4D8_35%,#854F6C_50%,#FBE4D8_65%,#FBE4D8_100%)] bg-[length:200%_100%] bg-clip-text text-transparent animate-name-sweep"
        >
          <span className="block font-bold">Micaela</span>
          <span className="block font-light italic">Vázquez</span>
        </h1>

        <p className="text-[22px] font-medium text-brand-highlight m-0">
          {personalInfo.role} · {personalInfo.location}
        </p>

        <p className="max-w-[620px] text-lg leading-[1.65] text-brand-highlight m-0" style={{ textWrap: "pretty" }}>
          {personalInfo.tagline}
        </p>

        <div className="flex justify-center gap-3.5 mt-2">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-[22px] py-[13px] rounded-[10px] bg-brand-highlight text-brand-bg text-[15px] font-semibold no-underline hover:bg-brand-cream transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18a11 11 0 0 1 5.76 0c2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.23 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-[22px] py-[13px] rounded-[10px] bg-brand-surface/40 backdrop-blur-md border border-brand-highlight/35 text-brand-cream text-[15px] font-semibold no-underline hover:border-brand-highlight hover:text-brand-highlight transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.2 8.4h4.6V23H.2V8.4Zm7.4 0h4.4v2h.06c.61-1.16 2.11-2.38 4.35-2.38 4.65 0 5.51 3.06 5.51 7.04V23h-4.6v-7.1c0-1.7-.03-3.88-2.36-3.88-2.37 0-2.73 1.85-2.73 3.76V23H7.6V8.4Z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
