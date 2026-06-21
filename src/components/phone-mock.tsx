import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * A stylized phone showing a project's app UI.
 * Colors derive from the project's `mock.primary`.
 */
export function PhoneMock({
  mock,
  className,
}: {
  mock: Project["mock"];
  className?: string;
}) {
  const { appName, primary, statLabel, statValue, rows } = mock;

  return (
    <div
      className={cn(
        "relative aspect-[9/19] w-[208px] shrink-0 rounded-[2.4rem] border border-white/10 bg-[#0a0e1a] p-2.5 shadow-[0_30px_70px_-25px_rgba(2,6,23,0.9)]",
        className
      )}
    >
      {/* device glow */}
      <div
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] opacity-40 blur-2xl"
        style={{ background: `radial-gradient(circle at 50% 0%, ${primary}, transparent 70%)` }}
      />

      {/* screen */}
      <div className="relative flex h-full flex-col overflow-hidden rounded-[1.9rem] bg-gradient-to-b from-[#0b1120] to-[#070b16]">
        {/* notch */}
        <div className="relative flex h-9 items-center justify-center">
          <div className="absolute top-2 h-1.5 w-16 rounded-full bg-white/15" />
        </div>

        {/* header */}
        <div className="flex items-center justify-between px-4 pb-3">
          <div className="flex items-center gap-2">
            <div
              className="grid h-7 w-7 place-items-center rounded-lg text-[11px] font-bold text-white"
              style={{ background: `linear-gradient(135deg, ${primary}, ${primary}99)` }}
            >
              {appName.charAt(0)}
            </div>
            <span className="text-[13px] font-semibold text-white/90">{appName}</span>
          </div>
          <div className="flex gap-1">
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span className="h-1 w-1 rounded-full bg-white/40" />
          </div>
        </div>

        {/* hero card */}
        <div className="mx-4 rounded-2xl p-4" style={{ background: `linear-gradient(135deg, ${primary}, ${primary}aa)` }}>
          <p className="text-[10px] font-medium uppercase tracking-wider text-white/70">{statLabel}</p>
          <p className="mt-1 text-2xl font-bold text-white">{statValue}</p>
          <div className="mt-3 flex gap-2">
            <span className="rounded-md bg-white/20 px-2 py-1 text-[9px] font-medium text-white">Pay</span>
            <span className="rounded-md bg-white/15 px-2 py-1 text-[9px] font-medium text-white/90">History</span>
          </div>
        </div>

        {/* list */}
        <div className="mt-4 flex flex-col gap-2 px-4">
          {rows.map((r, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5"
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="grid h-7 w-7 place-items-center rounded-lg text-[10px] font-bold"
                  style={{ background: `${primary}22`, color: primary }}
                >
                  {r.label.charAt(0)}
                </span>
                <span className="text-[11px] text-white/80">{r.label}</span>
              </div>
              <span className="text-[11px] font-semibold text-white/90">{r.value}</span>
            </div>
          ))}
        </div>

        {/* bottom nav */}
        <div className="mt-auto flex items-center justify-around border-t border-white/[0.06] px-6 py-3">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: i === 0 ? primary : "rgba(255,255,255,0.2)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
