import { Upload, BrainCircuit, Share2 } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    { icon: Upload, title: 'Upload or record your meeting audio.' },
    { icon: BrainCircuit, title: 'AI transcribes, analyzes, and extracts decisions & tasks.' },
    { icon: Share2, title: 'Share summary, tasks, and emails with your team.' },
  ]
  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center">How it works</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                <s.icon size={22} />
              </div>
              <p className="mt-4 text-slate-700 dark:text-slate-300">{s.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
