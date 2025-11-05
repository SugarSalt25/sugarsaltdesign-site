interface Params { params: { slug: string } }

const DEMO: Record<string, { title: string; body: string; }> = {
  "misty-cliffs": {
    title: "11 Main Road, Misty Cliffs",
    body: "Wind-worn timber, glass, white render; coastal minimalism meeting natural drama."
  },
  "1296-beach-avenue": {
    title: "1296 Beach Avenue — Parade of Homes Feature",
    body: "Contemporary coastal calm — wide-plank oak, linen, coral limestone."
  },
  "colville-terrace": {
    title: "Flat 11, 9 Colville Terrace, London W11 2BE",
    body: "Refined textures, Parisian grey palette, antique bronze details."
  }
}

export default function WorkDetail({ params }: Params) {
  const item = DEMO[params.slug] ?? { title: "Project", body: "Details coming soon." }
  return (
    <section className="container">
      <h1>{item.title}</h1>
      <div className="mt-4 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="aspect-[4/3] bg-mist rounded-2xl" />
        </div>
        <div className="space-y-4 text-slate-700">
          <p>{item.body}</p>
          <ul className="list-disc list-inside text-sm">
            <li>Services: Architecture, Interiors, Landscape</li>
            <li>Scope: Internal + external design</li>
            <li>Status: Completed</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
