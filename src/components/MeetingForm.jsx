import { useState } from 'react'

export default function MeetingForm({ onRun, onSample }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [type, setType] = useState('Standup')

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-6 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs text-slate-500">Meeting Title</label>
          <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Sprint sync" className="mt-1 w-full rounded-xl border border-slate-300/70 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400" />
        </div>
        <div>
          <label className="text-xs text-slate-500">Date</label>
          <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300/70 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400" />
        </div>
        <div>
          <label className="text-xs text-slate-500">Time</label>
          <input type="time" value={time} onChange={(e)=>setTime(e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300/70 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400" />
        </div>
        <div>
          <label className="text-xs text-slate-500">Meeting type</label>
          <select value={type} onChange={(e)=>setType(e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300/70 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400">
            <option>Standup</option>
            <option>Client Call</option>
            <option>Lecture</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <div className="grid place-items-center rounded-xl border border-dashed border-slate-300 dark:border-slate-700 p-6 text-center text-sm text-slate-600 dark:text-slate-300">
          <div className="font-medium">Upload audio</div>
          <div className="mt-1 text-xs">Or drag and drop your recording here (.mp3, .wav, .m4a)</div>
          <button className="mt-3 inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-medium dark:bg-white dark:text-slate-900">Choose file</button>
          <div className="mt-3 flex items-center gap-2 text-xs">
            <input id="live" type="checkbox" className="rounded" />
            <label htmlFor="live">Live mic recording</label>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <button onClick={()=>onRun({title, date, time, type})} className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-500 text-white px-5 py-2.5 text-sm font-medium shadow hover:shadow-md transition">Run MeetMate AI</button>
        <button onClick={onSample} className="inline-flex items-center justify-center rounded-xl border border-slate-300/70 dark:border-slate-700 px-5 py-2.5 text-sm font-medium">Use sample meeting</button>
      </div>
    </div>
  )
}
