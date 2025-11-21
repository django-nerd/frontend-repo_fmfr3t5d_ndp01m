import { Routes, Route } from 'react-router-dom'
import Landing from './Landing'
import AppRoutes from './AppRoutes'
import AppLayout from './AppLayout'
import History from './History'

export default function AppIndex() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/app" element={<AppLayout />}> 
        <Route index element={<AppRoutes />} />
        <Route path="history" element={<div className='max-w-6xl mx-auto'><History onView={()=>{}}/></div>} />
        <Route path="templates" element={<div className='max-w-6xl mx-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6'>Templates coming soon.</div>} />
        <Route path="settings" element={<div className='max-w-6xl mx-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6'>Settings coming soon.</div>} />
      </Route>
    </Routes>
  )
}
