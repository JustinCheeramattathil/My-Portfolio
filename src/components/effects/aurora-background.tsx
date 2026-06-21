/**
 * Fixed, full-viewport ambient background:
 * aurora gradient blobs + faint mesh grid + noise.
 * Pure CSS animation — no JS, lives behind all content (z-0).
 */
export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden print:hidden"
    >
      {/* base vignette */}
      <div className="absolute inset-0 bg-background" />

      {/* aurora blobs */}
      <div className="absolute -top-40 left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.45),transparent_60%)] blur-3xl animate-aurora" />
      <div
        className="absolute -left-32 top-1/4 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.30),transparent_60%)] blur-3xl animate-aurora"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute -right-24 top-1/3 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.26),transparent_60%)] blur-3xl animate-aurora"
        style={{ animationDelay: "-11s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.30),transparent_60%)] blur-3xl animate-aurora"
        style={{ animationDelay: "-3s" }}
      />

      {/* mesh grid, masked to fade out */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* film grain */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* bottom fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
