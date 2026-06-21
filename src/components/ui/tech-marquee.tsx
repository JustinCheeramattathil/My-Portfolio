import { cn } from "@/lib/utils";

/**
 * Seamless infinite marquee of tech pills.
 * Content is duplicated so the -50% translate loops without a seam.
 */
export function TechMarquee({
  items,
  reverse = false,
  className,
}: {
  items: readonly string[];
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-3 pr-3",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          "[animation-play-state:running] group-hover:[animation-play-state:paused]"
        )}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-white/[0.03] px-4 py-2 font-mono text-sm text-muted backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-primary to-accent" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
