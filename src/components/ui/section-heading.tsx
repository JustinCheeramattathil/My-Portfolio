import { cn } from "@/lib/utils";
import { Reveal } from "@/components/effects/reveal";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-accent to-transparent" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-balance text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-2xl text-pretty text-base leading-relaxed text-muted md:text-lg",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
