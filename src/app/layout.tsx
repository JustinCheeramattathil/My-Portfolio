import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import { ThemeProvider } from "@/components/theme-provider";
import { AuroraBackground } from "@/components/effects/aurora-background";
import { MouseGlow } from "@/components/effects/mouse-glow";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { LoadingScreen } from "@/components/loading-screen";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CommandPalette } from "@/components/command-palette";
import { EasterEgg } from "@/components/easter-egg";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

const siteUrl = "https://justinthomas.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.tagline,
  keywords: [
    "Flutter Developer",
    "Mobile Application Engineer",
    "Cross-Platform Development",
    "Dart",
    "Payment Integration",
    "Stripe",
    "Firebase",
    "Justin Thomas",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    siteName: `${profile.name} · Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050816" },
    { media: "(prefers-color-scheme: light)", color: "#f6f8fc" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-background text-foreground font-sans antialiased"
      >
        <ThemeProvider>
          <LoadingScreen />
          <AuroraBackground />
          <MouseGlow />
          <ScrollProgress />
          <CommandPalette />
          <EasterEgg />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
