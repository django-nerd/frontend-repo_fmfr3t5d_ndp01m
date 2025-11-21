const cases = [
  { title: 'Startup team standups', body: 'Auto-capture decisions and blockers so the team stays aligned.' },
  { title: 'Client review calls', body: 'Share polished summaries, action items, and follow-ups within minutes.' },
  { title: 'College project meetings', body: 'Turn group discussions into clear next steps and timelines.' },
  { title: 'Teacher–student discussions', body: 'Keep track of feedback and assignments effortlessly.' },
]

export default function UseCases() {
  return (
    <section id="usecases" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center">Use cases</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 dark:text-white">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
