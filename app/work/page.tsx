type Item = { title: string; slug: string; summary: string; location: string }

// In production, swap this demo with a fetch to Notion using NOTION_WORK_DB_ID
const demo: Item[] = [
  { title: "11 Main Road, Misty Cliffs", slug: "misty-cliffs", summary: "Oceanfront minimalism between fynbos and sea cliffs.", location: "Misty Cliffs, South Africa" },
  { title: "1296 Beach Avenue — Parade Feature", slug: "1296-beach-avenue", summary: "Coastal calm with oak and limestone.", location: "Atlantic Beach, Florida" },
  { title: "Flat 11, 9 Colville Terrace", slug: "colville-terrace", summary: "Refined textures with modern restraint.", location: "London W11 2BE" }
]

export default function WorkIndex() {
  return (
    <section className="container">
      <h1>Work</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {demo.map((item) => (
          <a key={item.slug} href={`/work/${item.slug}`} className="card p-4 hover:shadow-md transition-shadow">
            <div className="aspect-[4/3] bg-mist rounded-xl" />
            <div className="mt-3 font-medium">{item.title}</div>
            <div className="text-sm text-slate-600">{item.location}</div>
            <p className="text-slate-700 mt-2">{item.summary}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
