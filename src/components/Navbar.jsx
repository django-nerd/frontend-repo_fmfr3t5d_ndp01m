import { Link } from 'react-router-dom'
import { Menu, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 dark:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-700/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-500 text-white shadow-sm">
              <Sparkles size={18} />
            </div>
            <span>MeetMate AI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600 dark:text-slate-300">
            <a href="#features" className="hover:text-slate-900 dark:hover:text-white transition">Features</a>
            <a href="#how" className="hover:text-slate-900 dark:hover:text-white transition">How it works</a>
            <a href="#usecases" className="hover:text-slate-900 dark:hover:text-white transition">Use cases</a>
            <a href="#pricing" className="hover:text-slate-900 dark:hover:text-white transition">Pricing</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/app" className="hidden sm:inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:shadow transition-all disabled:opacity-60 dark:bg-white dark:text-slate-900">Launch App</Link>
            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300/70 dark:border-slate-700">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
