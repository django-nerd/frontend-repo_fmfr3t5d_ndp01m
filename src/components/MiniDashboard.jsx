import * as Tabs from '@radix-ui/react-tabs'

export default function MiniDashboard() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Product Sprint Planning – Nov 21</h3>
            <div className="text-xs text-slate-600 dark:text-slate-400">Preview</div>
          </div>

          <div className="mt-4">
            <Tabs.Root defaultValue="summary">
              <Tabs.List className="inline-flex gap-2 rounded-xl border border-slate-200 dark:border-slate-800 p-1">
                <Tabs.Trigger value="summary" className="px-3 py-1.5 rounded-lg data-[state=active]:bg-slate-100 dark:data-[state=active]:bg-slate-800">Summary</Tabs.Trigger>
                <Tabs.Trigger value="transcript" className="px-3 py-1.5 rounded-lg data-[state=active]:bg-slate-100 dark:data-[state=active]:bg-slate-800">Transcript</Tabs.Trigger>
                <Tabs.Trigger value="tasks" className="px-3 py-1.5 rounded-lg data-[state=active]:bg-slate-100 dark:data-[state=active]:bg-slate-800">Tasks</Tabs.Trigger>
                <Tabs.Trigger value="sentiment" className="px-3 py-1.5 rounded-lg data-[state=active]:bg-slate-100 dark:data-[state=active]:bg-slate-800">Sentiment</Tabs.Trigger>
                <Tabs.Trigger value="emails" className="px-3 py-1.5 rounded-lg data-[state=active]:bg-slate-100 dark:data-[state=active]:bg-slate-800">Emails</Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="summary" className="mt-4 text-sm text-slate-700 dark:text-slate-300">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Defined v1 scope and owners</li>
                  <li>Beta target set to Friday</li>
                  <li>Landing page to finalize today</li>
                  <li>API endpoints drafted</li>
                </ul>
              </Tabs.Content>

              <Tabs.Content value="transcript" className="mt-4 text-sm text-slate-700 dark:text-slate-300">
                Rahul: Shipping plan: landing -> API -> demo. Sarah: Let’s track tasks in a shared board. Team: Agreed. ...
              </Tabs.Content>

              <Tabs.Content value="tasks" className="mt-4 text-sm text-slate-700 dark:text-slate-300">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="text-left text-slate-500">
                        <th className="py-2 pr-4">Task</th>
                        <th className="py-2 pr-4">Owner</th>
                        <th className="py-2 pr-4">Due date</th>
                        <th className="py-2 pr-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-700 dark:text-slate-300">
                      <tr className="border-t border-slate-200 dark:border-slate-800">
                        <td className="py-2 pr-4">Finish landing page UI</td>
                        <td className="py-2 pr-4">Rahul</td>
                        <td className="py-2 pr-4">Monday</td>
                        <td className="py-2 pr-4">Pending</td>
                      </tr>
                      <tr className="border-t border-slate-200 dark:border-slate-800">
                        <td className="py-2 pr-4">Integrate API</td>
                        <td className="py-2 pr-4">Shrikar</td>
                        <td className="py-2 pr-4">Monday</td>
                        <td className="py-2 pr-4">In Progress</td>
                      </tr>
                      <tr className="border-t border-slate-200 dark:border-slate-800">
                        <td className="py-2 pr-4">Record demo video</td>
                        <td className="py-2 pr-4">Team</td>
                        <td className="py-2 pr-4">Tomorrow</td>
                        <td className="py-2 pr-4">Pending</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Tabs.Content>

              <Tabs.Content value="sentiment" className="mt-4 text-sm text-slate-700 dark:text-slate-300">
                <div className="space-y-2">
                  <div className="flex items-center justify-between"><span>Positive</span><span>65%</span></div>
                  <div className="h-2 rounded bg-emerald-500/30" style={{ width: '65%' }} />
                  <div className="flex items-center justify-between"><span>Neutral</span><span>30%</span></div>
                  <div className="h-2 rounded bg-slate-400/40" style={{ width: '30%' }} />
                  <div className="flex items-center justify-between"><span>Negative</span><span>5%</span></div>
                  <div className="h-2 rounded bg-rose-500/30" style={{ width: '5%' }} />
                </div>
              </Tabs.Content>

              <Tabs.Content value="emails" className="mt-4 text-sm text-slate-700 dark:text-slate-300">
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-3">
                  Hi team,\n\nHere’s a summary of today’s sprint planning...\n\nNext steps:\n- Rahul: Landing page (Mon)\n- Shrikar: API integration (Mon)\n- Team: Demo video (Tue)\n\nThanks!
                </div>
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </div>
      </div>
    </section>
  )
}
