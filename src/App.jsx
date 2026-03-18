import { useState, useEffect } from 'react'
import {
  Target, Mail, BarChart3, GitBranch, SkipForward, CalendarClock, Loader2,
} from 'lucide-react'
import Header from './components/Header'
import StatCards from './components/StatCards'
import Priorities from './components/Priorities'
import EmailFlows from './components/EmailFlows'
import Insights from './components/Insights'
import Pipeline from './components/Pipeline'
import SkipToday from './components/SkipToday'
import ComingUp from './components/ComingUp'
import { fetchDashboardData } from './data/dashboardData'

function TabContent({ activeTab, data }) {
  switch (activeTab) {
    case 'priorities':
      return <Priorities priorities={data.priorities} />
    case 'flows':
      return <EmailFlows flows={data.emailFlows} />
    case 'insights':
      return <Insights data={data.insightsData} />
    case 'pipeline':
      return <Pipeline items={data.pipeline} />
    case 'skip':
      return <SkipToday items={data.skipToday} />
    case 'coming':
      return <ComingUp items={data.comingUp} />
    default:
      return null
  }
}

export default function App() {
  const [activeTab, setActiveTab] = useState('priorities')
  const [dashboardData, setDashboardData] = useState(null)
  const [isLive, setIsLive] = useState(false)
  const [lastUpdated, setLastUpdated] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData().then(({ data, isLive, lastUpdated }) => {
      setDashboardData(data)
      setIsLive(isLive)
      setLastUpdated(lastUpdated)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-bg">
        <Header isLive={false} lastUpdated={null} />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <Loader2 className="w-8 h-8 text-sage animate-spin" />
            <p className="text-sm text-text/50 font-medium">Loading dashboard data...</p>
          </div>
        </main>
      </div>
    )
  }

  const tabs = [
    { id: 'priorities', label: 'Priorities', icon: Target, count: dashboardData.priorities.filter(p => !p.done).length },
    { id: 'flows', label: 'Email Flows', icon: Mail, count: dashboardData.emailFlows.length },
    { id: 'insights', label: 'Insights', icon: BarChart3 },
    { id: 'pipeline', label: 'Pipeline', icon: GitBranch, count: dashboardData.pipeline.length },
    { id: 'skip', label: 'Skip Today', icon: SkipForward, count: dashboardData.skipToday.length },
    { id: 'coming', label: 'Coming Up', icon: CalendarClock, count: dashboardData.comingUp.length },
  ]

  return (
    <div className="min-h-screen bg-bg">
      <Header isLive={isLive} lastUpdated={lastUpdated} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        <StatCards stats={dashboardData.stats} />

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-sage-light/40 shadow-sm overflow-hidden">
          <div className="flex overflow-x-auto border-b border-sage-light/30 scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-3.5 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                    isActive
                      ? 'border-sage-dark text-sage-dark bg-sage-light/10'
                      : 'border-transparent text-text/40 hover:text-text/70 hover:bg-sage-light/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  {tab.count !== undefined && (
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-sage-dark text-white' : 'bg-sage-light/50 text-text/40'
                    }`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          <div className="p-4 sm:p-5">
            <TabContent activeTab={activeTab} data={dashboardData} />
          </div>
        </div>

        <footer className="text-center text-xs text-text/30 pb-4">
          Cuddle Sprouts Command Center &middot; Built with love for tiny humans
        </footer>
      </main>
    </div>
  )
}
