"use client";

import { Download } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(110deg,var(--primary-deep),var(--accent))] px-5 py-2.5 text-sm font-medium text-white shadow-[0_8px_30px_-8px_rgba(99,102,241,0.6)] transition-transform hover:-translate-y-0.5"
    >
      <Download className="h-4 w-4" />
      Save as PDF
    </button>
  );
}
