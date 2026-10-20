import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Preloader } from "@/components/ui/Preloader";
import { portfolio } from "@/config/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolio.websiteUrl || "https://example.com"),
  title: portfolio.seo.title,
  description: portfolio.seo.description,
  openGraph: {
    title: portfolio.seo.title,
    description: portfolio.seo.description,
    url: portfolio.websiteUrl || "https://example.com",
    siteName: portfolio.name,
    type: "website",
  },
  alternates: {
    canonical: portfolio.websiteUrl || "https://example.com",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Preloader />
          <div className="relative min-h-screen">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
