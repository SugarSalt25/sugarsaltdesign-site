import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Work_Sans } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const sans  = Work_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Sugar Salt Designs — Calm, modern homes with a global soul.",
  description: "Architecture, interiors, and environments that breathe.",
  openGraph: {
    title: "Sugar Salt Designs",
    description: "Calm, modern homes with a global soul.",
    images: ["/og.png"]
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-cream text-cocoa antialiased">
        <header className="sticky top-0 z-50 bg-cream/85 backdrop-blur border-b border-mist">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img src="/logo-seahorse.png" alt="Sugar Salt Designs" className="h-8 w-auto" />
              <span className="font-semibold tracking-tight">Sugar Salt Designs</span>
            </a>
            <nav className="hidden sm:flex gap-6 text-sm">
              <a href="/work" className="hover:underline">Work</a>
              <a href="/press" className="hover:underline">Press</a>
              <a href="/journal-guide" className="hover:underline">Journal</a>
              <a href="#contact" className="px-3 py-1 rounded-full bg-coral text-ink font-medium shadow-sm">Start a Project</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-20 border-t border-mist">
          <div className="max-w-6xl mx-auto px-4 py-10 text-sm flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <img src="/favicon.svg" className="h-5 w-5" />
              <span>Globally influenced. Historically modern.</span>
            </div>
            <div className="text-cocoa/70">© {new Date().getFullYear()} Sugar Salt Designs</div>
          </div>
        </footer>
      </body>
    </html>
  );
}