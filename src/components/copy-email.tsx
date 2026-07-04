"use client";

import { useRef, useState } from "react";

export function CopyEmail({
  email,
  className,
  copiedLabel = "¡Copiado! ✓",
  children,
}: {
  email: string;
  className?: string;
  copiedLabel?: string;
  children: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | null>(null);

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Fallback para navegadores sin Clipboard API (o sin HTTPS)
      const ta = document.createElement("textarea");
      ta.value = email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button type="button" onClick={onClick} className={`cursor-pointer ${className ?? ""}`}>
      {copied ? copiedLabel : children}
    </button>
  );
}
