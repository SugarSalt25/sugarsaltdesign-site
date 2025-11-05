import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "sugarsaltdesign — Globally influenced. Historically modern.",
  description: "Architecture, interiors, and environments that breathe.",
  openGraph: {
    title: "sugarsaltdesign",
    description: "Globally influenced. Historically modern.",
    images: ["/og.png"]
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-warmwhite text-charcoal antialiased">
        <header className="sticky top-0 z-50 bg-warmwhite/80 backdrop-blur border-b border-mist">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img src="/octopus.svg" alt="octopus" className="h-8 w-8" />
              <span className="font-semibold tracking-tight">sugarsaltdesign</span>
            </a>
            <nav className="hidden sm:flex gap-6 text-sm">
              <a href="/work" className="hover:underline">Work</a>
              <a href="/press" className="hover:underline">Press</a>
              <a href="/journal-guide" className="hover:underline">Journal</a>
              <a href="#contact" className="px-3 py-1 rounded-full bg-powder text-charcoal font-medium">Start a Project</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-20 border-t border-mist">
          <div className="max-w-6xl mx-auto px-4 py-10 text-sm flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <img src="/octopus.svg" className="h-5 w-5" />
              <span>Globally influenced. Historically modern.</span>
            </div>
            <div className="text-slate-600">© {new Date().getFullYear()} sugarsaltdesign</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
