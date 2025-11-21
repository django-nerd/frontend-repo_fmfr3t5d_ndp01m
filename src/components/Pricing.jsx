export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center">Simple pricing</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
            <div className="text-sm font-medium text-slate-500">Free</div>
            <div className="mt-2 text-3xl font-bold">Hackathon Mode</div>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Unlimited demo meetings</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600 dark:text-slate-300 list-disc pl-5">
              <li>Upload recordings</li>
              <li>Instant summaries & tasks</li>
              <li>Export email drafts</li>
            </ul>
            <button className="mt-6 inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-5 py-3 font-medium dark:bg-white dark:text-slate-900">Get started</button>
          </div>

          <div className="rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-white/40 dark:bg-slate-900/40 p-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-800 px-3 py-1 text-xs">Coming soon</div>
            <div className="mt-2 text-3xl font-bold">Pro</div>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Team features, integrations, and more</p>
          </div>
        </div>
      </div>
    </section>
  )
}
