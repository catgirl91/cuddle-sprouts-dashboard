import { DollarSign, Target, TrendingUp, AlertTriangle } from 'lucide-react'

const statusColors = {
  active: 'bg-sage/20 text-sage-dark',
  enabled: 'bg-sage/20 text-sage-dark',
  paused: 'bg-amber-100 text-amber-700',
  removed: 'bg-alert/10 text-alert',
}

export default function GoogleAdsTab({ data }) {
  if (!data) {
    return <p className="text-sm text-text/50 py-8 text-center">No Google Ads data yet</p>
  }

  const allPaused = (data.campaigns ?? []).every(c => c.status === 'paused')

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Target className="w-5 h-5 text-sage-dark" />
        <h2 className="text-sm font-bold text-text">Google Ads</h2>
      </div>

      {allPaused && (
        <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
          <p className="text-xs text-amber-800 font-medium">All campaigns are paused — no paid traffic is entering the funnel.</p>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-sage-light/10 rounded-xl p-4 border border-sage-light/30">
          <div className="flex items-center gap-1.5 mb-1">
            <DollarSign className="w-3.5 h-3.5 text-sage" />
            <p className="text-xs font-medium text-text/50">Spend</p>
          </div>
          <p className="text-2xl font-bold text-text">${(data.spend ?? 0).toFixed(2)}</p>
        </div>
        <div className="bg-sage-light/10 rounded-xl p-4 border border-sage-light/30">
          <div className="flex items-center gap-1.5 mb-1">
            <TrendingUp className="w-3.5 h-3.5 text-sage" />
            <p className="text-xs font-medium text-text/50">ROAS</p>
          </div>
          <p className="text-2xl font-bold text-text">{(data.roas ?? 0).toFixed(2)}x</p>
        </div>
        <div className="bg-sage-light/10 rounded-xl p-4 border border-sage-light/30">
          <div className="flex items-center gap-1.5 mb-1">
            <Target className="w-3.5 h-3.5 text-sage" />
            <p className="text-xs font-medium text-text/50">Conversions</p>
          </div>
          <p className="text-2xl font-bold text-text">{data.conversions ?? 0}</p>
        </div>
        <div className="bg-sage-light/10 rounded-xl p-4 border border-sage-light/30">
          <div className="flex items-center gap-1.5 mb-1">
            <DollarSign className="w-3.5 h-3.5 text-sage" />
            <p className="text-xs font-medium text-text/50">Cost/Conv.</p>
          </div>
          <p className="text-2xl font-bold text-text">${(data.costPerConversion ?? 0).toFixed(2)}</p>
        </div>
      </div>

      <div>
        <h3 className="text-xs font-bold text-text/60 uppercase tracking-wider mb-2">Campaigns</h3>
        <div className="bg-white rounded-xl border border-sage-light/40 overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-sage-light/30 text-text/40">
                <th className="text-left px-4 py-2 font-medium">Campaign</th>
                <th className="text-center px-4 py-2 font-medium">Status</th>
                <th className="text-right px-4 py-2 font-medium hidden sm:table-cell">Spend</th>
                <th className="text-right px-4 py-2 font-medium hidden sm:table-cell">Conv.</th>
                <th className="text-right px-4 py-2 font-medium">ROAS</th>
              </tr>
            </thead>
            <tbody>
              {(data.campaigns ?? []).map((c) => (
                <tr key={c.id} className="border-b border-sage-light/20 last:border-0 hover:bg-sage-light/5">
                  <td className="px-4 py-2.5 font-medium text-text">{c.name}</td>
                  <td className="px-4 py-2.5 text-center">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${statusColors[c.status] ?? 'bg-gray-100 text-gray-500'}`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-right text-text/60 hidden sm:table-cell">${c.spend.toFixed(2)}</td>
                  <td className="px-4 py-2.5 text-right text-text/60 hidden sm:table-cell">{c.conversions}</td>
                  <td className="px-4 py-2.5 text-right font-bold text-sage-dark">{c.roas.toFixed(2)}x</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
