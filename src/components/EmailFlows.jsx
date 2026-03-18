import { useState } from 'react'
import { ChevronDown, ChevronUp, Mail, Stethoscope } from 'lucide-react'

const statusColors = {
  live: 'bg-sage/20 text-sage-dark',
  draft: 'bg-amber-100 text-amber-700',
  paused: 'bg-alert/10 text-alert',
}

export default function EmailFlows({ flows }) {
  const [expanded, setExpanded] = useState(null)

  return (
    <div className="space-y-2">
      {flows.map((flow) => (
        <div key={flow.id} className="bg-white rounded-xl border border-sage-light/40 shadow-sm overflow-hidden">
          <button
            onClick={() => setExpanded(expanded === flow.id ? null : flow.id)}
            className="w-full px-4 py-3 flex items-center gap-4 hover:bg-sage-light/10 transition-colors text-left"
          >
            <Mail className="w-4 h-4 text-sage flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm text-text">{flow.name}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${statusColors[flow.status]}`}>
                  {flow.status}
                </span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-6 text-xs text-text/60">
              <span>{flow.emails} emails</span>
              <span className="font-medium text-text">{flow.openRate}% open</span>
              <span className="font-medium text-text">{flow.clickRate}% click</span>
              <span className="font-bold text-sage-dark">${flow.revenue.toFixed(2)}</span>
            </div>
            {expanded === flow.id ? (
              <ChevronUp className="w-4 h-4 text-text/30" />
            ) : (
              <ChevronDown className="w-4 h-4 text-text/30" />
            )}
          </button>

          {expanded === flow.id && (
            <div className="px-4 pb-4 animate-fadeIn">
              <div className="sm:hidden flex items-center gap-4 text-xs text-text/60 mb-3 pt-1">
                <span>{flow.emails} emails</span>
                <span>{flow.openRate}% open</span>
                <span>{flow.clickRate}% click</span>
                <span className="font-bold text-sage-dark">${flow.revenue.toFixed(2)}</span>
              </div>
              <div className="bg-sage-light/15 rounded-lg p-3 border border-sage-light/30">
                <div className="flex items-start gap-2">
                  <Stethoscope className="w-4 h-4 text-sage-dark mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-sage-dark mb-1">Diagnosis</p>
                    <p className="text-xs text-text/70 leading-relaxed">{flow.diagnosis}</p>
                  </div>
                </div>
                <p className="text-[10px] text-text/30 mt-2 text-right">Last updated: {flow.lastUpdated}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
