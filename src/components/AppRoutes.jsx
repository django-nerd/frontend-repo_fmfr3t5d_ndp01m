import { useState } from 'react'
import AppLayout from './AppLayout'
import MeetingForm from './MeetingForm'
import OutputCards from './OutputCards'
import History from './History'

const sampleData = {
  summary: [
    'Outlined sprint goals and feature scope for v1',
    'Assigned owners: Rahul (UI), Shrikar (API), Team (demo)',
    'Set beta target for Friday with internal review Thursday',
    'Agreed to track tasks centrally and review daily',
  ],
  decisions: [
    'Ship with auth, billing, basic analytics only',
    'Use hackathon-friendly Free tier for demo',
    'Prioritize landing page polish and demo video',
  ],
  tasks: [
    { task: 'Finish landing page UI', owner: 'Rahul', due: 'Monday', status: 'Pending' },
    { task: 'Integrate API', owner: 'Shrikar', due: 'Monday', status: 'In Progress' },
    { task: 'Record demo video', owner: 'Team', due: 'Tomorrow', status: 'Pending' },
  ],
  sentiment: {
    positive: 65,
    neutral: 30,
    negative: 5,
    timeline: ['#34d399', '#34d399', '#9ca3af', '#34d399', '#34d399', '#34d399', '#f43f5e'],
  },
  email: `Hi team,\n\nHere’s a quick recap of today’s sprint planning. We confirmed the v1 scope (auth, billing, analytics), assigned owners, and set Friday as our beta target.\n\nAction items:\n- Rahul: Finalize landing page (Mon)\n- Shrikar: API integration (Mon)\n- Team: Record demo video (Tue)\n\nLet’s keep momentum—next check-in tomorrow at 10am.\n\nThanks!`,
}

export default function AppRoutes() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const runAI = async () => {
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setData(sampleData)
    setLoading(false)
  }

  const useSample = () => setData(sampleData)

  return (
    <AppLayout>
      <div className="grid lg:grid-cols-2 gap-6">
        <MeetingForm onRun={runAI} onSample={useSample} />
        <OutputCards data={data} loading={loading} />
      </div>
    </AppLayout>
  )
}
