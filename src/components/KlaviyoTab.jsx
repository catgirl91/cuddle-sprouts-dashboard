import { useState } from 'react'
import { ChevronDown, ChevronUp, Mail, Stethoscope, Users, TrendingUp, DollarSign, Send } from 'lucide-react'

const statusColors = {
  live: 'bg-sage/20 text-sage-dark',
  draft: 'bg-amber-100 text-amber-700',
  paused: 'bg-alert/10 text-alert',
}

export default function KlaviyoTab({ data }) {
  const [expanded, setExpanded] = useState(null)

  if (!data) {
    return <p className="text-sm text-text/50 py-8 text-center">No Klaviyo data yet</p>
  }

  const flows = data.flows ?? []
  const campaigns = data.campaigns ?? []

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Mail className="w-5 h-5 text-sage-dark" />
        <h2 className="text-sm font-bold text-text">Klaviyo</h2>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div className="bg-sage-light/10 rounded-xl p-4 border border-sage-light/30">
          <div className="flex items-center gap-1.5 mb-1">
            <Users className="w-3.5 h-3.5 text-sage" />
            <p className="text-xs font-medium text-text/50">Klaviyo Subscribers</p>
          </div>
          <p className="text-2xl font-bold text-text">{data.subscribers ?? 0}</p>
        </div>
        <div className="bg-sage-light/10 rounded-xl p-4 border border-sage-light/30">
          <div className="flex items-center gap-1.5 mb-1">
            <TrendingUp className="w-3.5 h-3.5 text-sage" />
            <p className="text-xs font-medium text-text/50">Klaviyo List Growth</p>
          </div>
          <p className="text-2xl font-bold text-text">{data.listGrowthRate ?? 0}%</p>
        </div>
        <div className="bg-sage-light/10 rounded-xl p-4 border border-sage-light/30 col-span-2 sm:col-span-1">
          <div className="flex items-center gap-1.5 mb-1">
            <DollarSign className="w-3.5 h-3.5 text-sage" />
            <p className="text-xs font-medium text-text/50">Klaviyo Email Revenue</p>
          </div>
          <p className="text-2xl font-bold text-text">${(data.emailRevenue ?? 0).toFixed(2)}</p>
        </div>
      </div>

      {/* Flows */}
      <div>
        <h3 className="text-xs font-bold text-text/60 uppercase tracking-wider mb-2">Klaviyo Flows</h3>
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
      </div>

      {/* Campaigns */}
      {campaigns.length > 0 && (
        <div>
          <h3 className="text-xs font-bold text-text/60 uppercase tracking-wider mb-2">Klaviyo Campaigns</h3>
          <div className="bg-white rounded-xl border border-sage-light/40 overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-sage-light/30 text-text/40">
                  <th className="text-left px-4 py-2 font-medium">Campaign</th>
                  <th className="text-right px-4 py-2 font-medium hidden sm:table-cell">Sent</th>
                  <th className="text-right px-4 py-2 font-medium hidden sm:table-cell">Open %</th>
                  <th className="text-right px-4 py-2 font-medium">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((c) => (
                  <tr key={c.id} className="border-b border-sage-light/20 last:border-0 hover:bg-sage-light/5">
                    <td className="px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <Send className="w-3 h-3 text-sage flex-shrink-0" />
                        <span className="font-medium text-text">{c.name}</span>
                      </div>
                      <p className="text-[10px] text-text/40 mt-0.5 sm:hidden">{c.sentDate} &middot; {c.openRate}% open</p>
                    </td>
                    <td className="px-4 py-2.5 text-right text-text/60 hidden sm:table-cell">{c.sentDate}</td>
                    <td className="px-4 py-2.5 text-right text-text/60 hidden sm:table-cell">{c.openRate}%</td>
                    <td className="px-4 py-2.5 text-right font-bold text-sage-dark">${c.revenue.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
