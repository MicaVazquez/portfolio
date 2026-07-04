"use client";

import { useEffect, useState } from "react";
import { CopyEmail } from "@/components/copy-email";
import { personalInfo } from "@/lib/data";

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y < 16);
      // Oculta al bajar, muestra al subir; siempre visible cerca del inicio
      if (y > lastY && y > 80) {
        setHidden(true);
      } else if (y < lastY) {
        setHidden(false);
      }
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        atTop
          ? "bg-transparent border-b border-transparent"
          : "bg-brand-bg/70 backdrop-blur-md border-b border-brand-highlight/22"
      }`}
    >
      <nav className="flex justify-between items-center h-16 px-6 md:px-8 max-w-[1040px] mx-auto">
        <span className="font-display text-xl font-bold text-brand-cream tracking-tight">
          MV<span className="text-brand-highlight">.</span>
        </span>
        <div className="hidden md:flex gap-10">
          <a
            href="#proyectos"
            className="text-xs uppercase tracking-[0.1em] text-brand-highlight hover:text-brand-cream transition-colors"
          >
            Proyectos
          </a>
          <a
            href="#experiencia"
            className="text-xs uppercase tracking-[0.1em] text-brand-highlight hover:text-brand-cream transition-colors"
          >
            Experiencia
          </a>
          <a
            href="#stack"
            className="text-xs uppercase tracking-[0.1em] text-brand-highlight hover:text-brand-cream transition-colors"
          >
            Skills
          </a>
        </div>
        <CopyEmail
          email={personalInfo.email}
          copiedLabel="Copiado ✓"
          className="text-sm px-4 py-2 rounded-[10px] bg-brand-highlight text-brand-bg font-semibold hover:bg-brand-cream transition-colors"
        >
          Contacto
        </CopyEmail>
      </nav>
    </header>
  );
}
