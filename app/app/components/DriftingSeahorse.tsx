"use client";
import { useEffect, useState } from "react";

export default function DriftingSeahorse() {
  const [opacity, setOpacity] = useState(0.18); // subtle watermark fade

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const o = Math.max(0, 0.18 - y / 800); // fade out as you scroll
      setOpacity(o);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className="fixed pointer-events-none z-40 right-4 bottom-4 sm:right-6 sm:bottom-6"
    >
      <img
        src="/favicon.svg"
        alt="Drifting Seahorse"
        style={{ opacity }}
        className="h-10 w-10 sm:h-12 sm:w-12 animate-float"
      />
    </div>
  );
}
