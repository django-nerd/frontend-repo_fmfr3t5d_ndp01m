import Spline from '@splinetool/react-spline'
import { Play, Rocket } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-90">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white dark:from-slate-950/60 dark:via-slate-950/70 dark:to-slate-950" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
              Your meetings, turned into actions in seconds.
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
              Upload or record any meeting and let MeetMate AI generate transcripts, summaries, decisions, tasks, sentiment, and follow-up emails instantly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/app" className="pointer-events-auto inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-5 py-3 font-medium shadow hover:shadow-md transition dark:bg-white dark:text-slate-900">
                <Rocket size={18} /> Try demo
              </Link>
              <button className="pointer-events-auto inline-flex items-center gap-2 rounded-xl border border-slate-300/70 dark:border-slate-700 px-5 py-3 font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition">
                <Play size={18} /> Watch sample workflow
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-4 shadow-xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 px-3 py-1 text-xs text-slate-600 dark:text-slate-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span> Uploaded audio: team-sync.m4a
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/70 p-3">
                  <h4 className="text-sm font-medium text-slate-700 dark:text-slate-200">Transcript</h4>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 line-clamp-6">
                    Sarah: Let's lock scope: auth, billing, and analytics for v1. Rahul will own the landing page. Shrikar will wire the API. We aim for Friday beta. Any blockers? ...
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/70 p-3">
                  <h4 className="text-sm font-medium text-slate-700 dark:text-slate-200">Summary</h4>
                  <ul className="mt-2 text-xs text-slate-600 dark:text-slate-300 list-disc pl-4 space-y-1">
                    <li>Defined v1 scope and owners</li>
                    <li>Beta target set to Friday</li>
                    <li>Landing page to finalize today</li>
                    <li>API endpoints drafted</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/70 p-3">
                  <h4 className="text-sm font-medium text-slate-700 dark:text-slate-200">Action items</h4>
                  <ul className="mt-2 text-xs text-slate-600 dark:text-slate-300 space-y-1">
                    <li>Finish landing page UI – Rahul – Mon</li>
                    <li>Integrate API – Shrikar – Mon</li>
                    <li>Record demo video – Team – Tue</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/70 p-3">
                  <h4 className="text-sm font-medium text-slate-700 dark:text-slate-200">Sentiment</h4>
                  <div className="mt-2 text-xs text-slate-600 dark:text-slate-300">
                    <div className="flex items-center justify-between">
                      <span>Positive</span><span>65%</span>
                    </div>
                    <div className="h-2 rounded bg-emerald-500/30 mt-1" style={{ width: '65%' }} />
                    <div className="mt-3 flex items-center justify-between">
                      <span>Neutral</span><span>30%</span>
                    </div>
                    <div className="h-2 rounded bg-slate-400/40 mt-1" style={{ width: '30%' }} />
                    <div className="mt-3 flex items-center justify-between">
                      <span>Negative</span><span>5%</span>
                    </div>
                    <div className="h-2 rounded bg-rose-500/30 mt-1" style={{ width: '5%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
