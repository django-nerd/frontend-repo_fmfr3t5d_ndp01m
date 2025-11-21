export default function OutputCards({ data, loading }) {
  if (!data && !loading) {
    return (
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 text-center text-slate-500">
        Upload or use a sample meeting to see results here.
      </div>
    )
  }

  if (loading) {
    return (
      <div className="grid lg:grid-cols-2 gap-4 animate-pulse">
        {Array.from({length:4}).map((_,i)=> (
          <div key={i} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 p-6 h-40" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
        <h3 className="font-semibold">Meeting Summary</h3>
        <ul className="mt-2 list-disc pl-5 text-sm space-y-1 text-slate-700 dark:text-slate-300">
          {data.summary.map((s,i)=> <li key={i}>{s}</li>)}
        </ul>
      </div>
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
        <h3 className="font-semibold">Decisions Taken</h3>
        <ol className="mt-2 list-decimal pl-5 text-sm space-y-1 text-slate-700 dark:text-slate-300">
          {data.decisions.map((s,i)=> <li key={i}>{s}</li>)}
        </ol>
      </div>
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 overflow-x-auto">
        <h3 className="font-semibold">Action Items</h3>
        <table className="mt-2 min-w-full text-sm">
          <thead>
            <tr className="text-left text-slate-500">
              <th className="py-1 pr-4">Task</th>
              <th className="py-1 pr-4">Owner</th>
              <th className="py-1 pr-4">Due date</th>
              <th className="py-1 pr-4">Status</th>
            </tr>
          </thead>
          <tbody className="text-slate-700 dark:text-slate-300">
            {data.tasks.map((t,i)=> (
              <tr key={i} className="border-t border-slate-200 dark:border-slate-800">
                <td className="py-1 pr-4">{t.task}</td>
                <td className="py-1 pr-4">{t.owner}</td>
                <td className="py-1 pr-4">{t.due}</td>
                <td className="py-1 pr-4">{t.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
        <h3 className="font-semibold">Sentiment</h3>
        <div className="mt-2 space-y-2 text-sm">
          <div className="flex items-center justify-between"><span>Positive</span><span>{data.sentiment.positive}%</span></div>
          <div className="h-2 rounded bg-emerald-500/30" style={{ width: `${data.sentiment.positive}%` }} />
          <div className="flex items-center justify-between"><span>Neutral</span><span>{data.sentiment.neutral}%</span></div>
          <div className="h-2 rounded bg-slate-400/40" style={{ width: `${data.sentiment.neutral}%` }} />
          <div className="flex items-center justify-between"><span>Negative</span><span>{data.sentiment.negative}%</span></div>
          <div className="h-2 rounded bg-rose-500/30" style={{ width: `${data.sentiment.negative}%` }} />
          <div className="mt-3 grid grid-cols-7 gap-1">
            {data.sentiment.timeline.map((v,i)=> (
              <div key={i} className="h-2 rounded" style={{ backgroundColor: v }} />
            ))}
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
        <h3 className="font-semibold">Follow-up Email Draft</h3>
        <textarea className="mt-2 w-full rounded-xl border border-slate-300/70 dark:border-slate-700 bg-transparent p-3 text-sm" rows={8} defaultValue={data.email}></textarea>
        <div className="mt-3 flex gap-3">
          <button className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-medium dark:bg-white dark:text-slate-900">Copy email</button>
          <button className="inline-flex items-center justify-center rounded-xl border border-slate-300/70 dark:border-slate-700 px-4 py-2 text-sm font-medium">Refine</button>
        </div>
      </div>
    </div>
  )
}
