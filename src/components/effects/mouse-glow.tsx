"use client";

import { useEffect, useRef } from "react";

/**
 * A soft radial glow that trails the cursor across the page.
 * Disabled on touch devices and when reduced motion is requested.
 * Uses rAF + transform for a 60fps, repaint-free follow.
 */
export function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduced || !fine) return;

    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      el.style.opacity = "1";
    };

    const tick = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      el.style.transform = `translate3d(${cx - 300}px, ${cy - 300}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[600px] w-[600px] rounded-full opacity-0 mix-blend-screen transition-opacity duration-700"
      style={{
        background:
          "radial-gradient(circle, rgba(99,102,241,0.16) 0%, rgba(6,182,212,0.08) 35%, transparent 70%)",
      }}
    />
  );
}
