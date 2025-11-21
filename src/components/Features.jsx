import { FileAudio, ListChecks, Mail, TextQuote, TrendingUp } from 'lucide-react'

const features = [
  { icon: FileAudio, title: 'Auto Transcription', desc: 'Upload or record audio and get clean text.' },
  { icon: TextQuote, title: 'Smart Summary', desc: 'Key points, decisions, and agenda captured automatically.' },
  { icon: ListChecks, title: 'Action Items & Deadlines', desc: 'Tasks with owners and due dates extracted from the conversation.' },
  { icon: TrendingUp, title: 'Sentiment Heatmap', desc: 'See emotional tone across the meeting timeline.' },
  { icon: Mail, title: 'Auto Follow-up Emails', desc: 'One-click email drafts for your team.' },
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center">Feature highlights</h2>
        <p className="mt-3 text-center text-slate-600 dark:text-slate-300">Everything you need to turn meetings into actions</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-500 text-white">
                <f.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
