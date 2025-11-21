import { useMemo } from 'react'

export default function History({ onView }) {
  const rows = useMemo(()=> ([
    { title: 'Product Sprint Planning', date: 'Nov 21', duration: '45m', owner: 'Alex' },
    { title: 'Client Review - Apex Co', date: 'Nov 19', duration: '30m', owner: 'Mia' },
    { title: 'Standup - Week 47', date: 'Nov 18', duration: '12m', owner: 'Team' },
  ]), [])

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left text-slate-500">
            <th className="py-2 pr-4">Meeting Title</th>
            <th className="py-2 pr-4">Date</th>
            <th className="py-2 pr-4">Duration</th>
            <th className="py-2 pr-4">Owner</th>
            <th className="py-2 pr-4">Actions</th>
          </tr>
        </thead>
        <tbody className="text-slate-700 dark:text-slate-300">
          {rows.map((r,i)=> (
            <tr key={i} className="border-t border-slate-200 dark:border-slate-800">
              <td className="py-2 pr-4">{r.title}</td>
              <td className="py-2 pr-4">{r.date}</td>
              <td className="py-2 pr-4">{r.duration}</td>
              <td className="py-2 pr-4">{r.owner}</td>
              <td className="py-2 pr-4">
                <button onClick={onView} className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-3 py-1.5 text-xs font-medium dark:bg-white dark:text-slate-900">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
