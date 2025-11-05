import Image from "next/image";
import DriftingSeahorse from "./components/DriftingSeahorse";
import "./globals.css";

export default function Page() {
  return (
    <main className="bg-[#F9F8F5] min-h-screen">
      {/* Header spacing */}
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-6">
        <header className="flex items-center justify-between">
          <div className="text-sm tracking-wide uppercase text-[#8C5F50] font-medium">
            Sugar Salt Designs
          </div>
          <nav className="hidden sm:flex gap-6 text-sm text-[#8C5F50]">
            <a href="#work" className="hover:opacity-80">Work</a>
            <a href="#press" className="hover:opacity-80">Press</a>
            <a href="#journal" className="hover:opacity-80">Journal</a>
            <a href="#contact" className="ml-2 rounded-full bg-[#E7D6CB] text-[#603D33] px-3 py-1.5 font-semibold hover:opacity-90">Start a Project</a>
          </nav>
        </header>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="text-4xl sm:text-5xl leading-tight text-[#7A4C3F] font-serif">
            Calm, modern homes<br/> with a global soul.
          </h1>
          <p className="mt-5 text-[#6E635C]">
            sugarsaltdesign blends architecture and interiors — from Cape Town’s sea cliffs to London’s terraces and Florida’s coastal streets.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#work" className="rounded-full bg-[#E7D6CB] text-[#603D33] px-4 py-2 font-semibold hover:opacity-90">View Work</a>
            <a href="#contact" className="rounded-full border border-[#D7CBC0] text-[#7A4C3F] px-4 py-2 font-semibold hover:bg-white">Contact</a>
          </div>
          <p className="mt-6 text-sm text-[#8C5F50]">London • Cape Town • Florida — Available worldwide</p>
        </div>

        <div className="bg-[#FFFDFB] border-[2.5px] border-[#D7CBC0] rounded-2xl p-8 flex items-center justify-center shadow-sm">
          {/* Hero logo image – replace /public/logo-hero.png with your final logo if desired */}
          <Image
            src="/logo-hero.png"
            alt="Sugar Salt Designs logo"
            width={640}
            height={420}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </section>

      {/* Example anchors for the nav */}
      <section id="work" className="max-w-6xl mx-auto px-6 pt-16 pb-24">
        <h2 className="text-2xl text-[#7A4C3F] font-semibold">Selected Work</h2>
        <div className="mt-6 h-24 rounded-xl bg-white/60 border border-[#E6DDD6] grid place-items-center text-[#8C5F50]">
          (Your projects will appear here)
        </div>
      </section>

      {/* Contact anchor for footer */}
      <div id="contact" />

      {/* Watermark animation */}
      <DriftingSeahorse/>
    </main>
  );
}
