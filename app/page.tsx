import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1>Calm, modern homes with a global soul.</h1>
            <p className="mt-4 text-slate-700">
              sugarsaltdesign blends architecture and interiors — from Cape Town’s sea cliffs to London’s terraces and Florida’s coastal streets.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="/work" className="btn btn-primary">View Work</a>
              <a href="#contact" className="btn border border-mist">Contact</a>
            </div>
            <div className="mt-6 text-sm text-slate-600">London • Cape Town • Florida — Available worldwide</div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-mist">
            <Image src="/hero.jpg" alt="hero" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="container">
        <h2>Selected Work</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { title: "11 Main Road, Misty Cliffs", href: "/work/misty-cliffs" },
            { title: "1296 Beach Avenue — Parade Feature", href: "/work/1296-beach-avenue" },
            { title: "Flat 11, 9 Colville Terrace, London", href: "/work/colville-terrace" }
          ].map((w) => (
            <a key={w.title} href={w.href} className="card overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] bg-mist"></div>
              <div className="p-4">
                <div className="font-medium">{w.title}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container">
        <h2>Architecture, interiors, and environments</h2>
        <p className="mt-4 text-slate-700 max-w-2xl">
          We design both internally and externally, uniting structure, light, and texture into one continuous language — from façade and courtyard to furniture and finish.
        </p>
      </section>

      {/* About */}
      <section id="about" className="container">
        <h2>Amy &amp; David — sugarsaltdesign</h2>
        <p className="mt-4 text-slate-700 max-w-2xl">
          Partners in life and design, shaping calm, crafted spaces across three continents. Globally influenced. Historically modern.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="container">
        <h2>Start a project</h2>
        <form className="mt-6 grid gap-4 max-w-xl" method="POST" action="/api/contact">
          <input name="name" placeholder="Your name" className="border border-mist rounded-lg p-3" required />
          <input type="email" name="email" placeholder="Email" className="border border-mist rounded-lg p-3" required />
          <textarea name="message" placeholder="Tell us about your project" className="border border-mist rounded-lg p-3 h-32" required />
          <button className="btn btn-primary w-max" type="submit">Send</button>
        </form>
        <p className="mt-3 text-sm text-slate-600">Enquiries route to askyanything@sugarsaltdesign.com, leighw@brightmindscp.com, and amy@realize-365.com</p>
      </section>
    </div>
  )
}
