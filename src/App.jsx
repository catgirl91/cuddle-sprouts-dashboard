import { useState } from 'react'
import {
  Target, Mail, BarChart3, GitBranch, SkipForward, CalendarClock,
} from 'lucide-react'
import Header from './components/Header'
import StatCards from './components/StatCards'
import Priorities from './components/Priorities'
import EmailFlows from './components/EmailFlows'
import Insights from './components/Insights'
import Pipeline from './components/Pipeline'
import SkipToday from './components/SkipToday'
import ComingUp from './components/ComingUp'
import {
  priorities, emailFlows, insightsData, pipeline, skipToday, comingUp,
} from './data/dashboardData'

const tabs = [
  { id: 'priorities', label: 'Priorities', icon: Target, count: priorities.filter(p => !p.done).length },
  { id: 'flows', label: 'Email Flows', icon: Mail, count: emailFlows.length },
  { id: 'insights', label: 'Insights', icon: BarChart3 },
  { id: 'pipeline', label: 'Pipeline', icon: GitBranch, count: pipeline.length },
  { id: 'skip', label: 'Skip Today', icon: SkipForward, count: skipToday.length },
  { id: 'coming', label: 'Coming Up', icon: CalendarClock, count: comingUp.length },
]

function TabContent({ activeTab }) {
  switch (activeTab) {
    case 'priorities':
      return <Priorities priorities={priorities} />
    case 'flows':
      return <EmailFlows flows={emailFlows} />
    case 'insights':
      return <Insights data={insightsData} />
    case 'pipeline':
      return <Pipeline items={pipeline} />
    case 'skip':
      return <SkipToday items={skipToday} />
    case 'coming':
      return <ComingUp items={comingUp} />
    default:
      return null
  }
}

export default function App() {
  const [activeTab, setActiveTab] = useState('priorities')

  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        <StatCards />

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
            <TabContent activeTab={activeTab} />
          </div>
        </div>

        <footer className="text-center text-xs text-text/30 pb-4">
          Cuddle Sprouts Command Center &middot; Built with love for tiny humans
        </footer>
      </main>
    </div>
  )
}
