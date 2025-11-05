export default function JournalGuide() {
  return (
    <section className="container">
      <h1>Journal — Editor Guide</h1>
      <ol className="mt-6 list-decimal list-inside space-y-3 text-slate-700 max-w-2xl">
        <li>Create a Notion database with properties: <b>title</b>, <b>date</b>, <b>excerpt</b>, <b>content</b>, <b>cover</b>.</li>
        <li>Share it with your Notion integration and copy your <code>NOTION_API_KEY</code> and <code>NOTION_JOURNAL_DB_ID</code> into <code>.env.local</code>.</li>
        <li>Once deployed, posts will appear on your site automatically.</li>
      </ol>
    </section>
  )
}
