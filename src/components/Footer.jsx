export default function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-400">
          <div>© {new Date().getFullYear()} MeetMate AI — All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Privacy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Terms</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
