"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * 3D tilt card that reacts to the cursor with a follow-spotlight.
 * Falls back to a static card when the pointer leaves.
 */
export function TiltCard({
  children,
  className,
  max = 7,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rx = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 200, damping: 18 });

  // spotlight position in %
  const sx = useTransform(px, (v) => `${v * 100}%`);
  const sy = useTransform(py, (v) => `${v * 100}%`);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${sx} ${sy}, rgba(99,102,241,0.16), transparent 60%)`;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };
  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={cn("group/tilt relative [transform-style:preserve-3d]", className)}
    >
      <motion.div
        aria-hidden
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
      />
      {children}
    </motion.div>
  );
}
