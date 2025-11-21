import { Link, NavLink, Outlet } from 'react-router-dom'
import { LayoutGrid, FolderClock, FileSliders, Settings, User } from 'lucide-react'

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-white">
      <div className="flex">
        <aside className="hidden md:block w-64 shrink-0 border-r border-slate-200 dark:border-slate-800 p-4">
          <Link to="/app" className="flex items-center gap-2 font-semibold">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-500 text-white shadow-sm">MM</div>
            <span>MeetMate AI</span>
          </Link>
          <nav className="mt-6 space-y-1 text-sm">
            <NavLink to="/app" end className={({isActive}) => `flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-slate-100/60 dark:hover:bg-slate-800/60 ${isActive ? 'bg-slate-100 dark:bg-slate-800' : ''}`}>
              <LayoutGrid size={16}/> New Meeting
            </NavLink>
            <NavLink to="/app/history" className={({isActive}) => `flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-slate-100/60 dark:hover:bg-slate-800/60 ${isActive ? 'bg-slate-100 dark:bg-slate-800' : ''}`}>
              <FolderClock size={16}/> History
            </NavLink>
            <NavLink to="/app/templates" className={({isActive}) => `flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-slate-100/60 dark:hover:bg-slate-800/60 ${isActive ? 'bg-slate-100 dark:bg-slate-800' : ''}`}>
              <FileSliders size={16}/> Templates
            </NavLink>
            <NavLink to="/app/settings" className={({isActive}) => `flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-slate-100/60 dark:hover:bg-slate-800/60 ${isActive ? 'bg-slate-100 dark:bg-slate-800' : ''}`}>
              <Settings size={16}/> Settings
            </NavLink>
          </nav>
        </aside>

        <main className="flex-1 min-w-0">
          <div className="sticky top-0 z-10 border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur">
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
              <h1 className="text-sm font-medium">New Meeting Analysis</h1>
              <div className="flex items-center gap-3 text-sm">
                <div className="hidden sm:block text-slate-600 dark:text-slate-300">Hi, Alex</div>
                <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-500 grid place-items-center text-white"><User size={16}/></div>
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-6 lg:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
