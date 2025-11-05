import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sugar Salt Designs",
  description: "Globally influenced. Historically modern.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#F9F8F5]">
        {children}
        <footer className="mt-8 border-t border-[#E6DDD6] bg-[#FFFDFB]">
          <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-[#6E635C] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="font-semibold text-[#7A4C3F]">Sugar Salt Designs</div>
              <div>Globally influenced. Historically modern.</div>
            </div>
            <div className="text-[#7A4C3F]">
              Email:{" "}
              <a className="underline hover:opacity-80" href="mailto:askanything@sugarsaltdesign.com">
                askanything@sugarsaltdesign.com
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
