import { DollarSign, Target, TrendingUp, Facebook } from 'lucide-react'

const statusColors = {
  active: 'bg-sage/20 text-sage-dark',
  paused: 'bg-amber-100 text-amber-700',
}

export default function FacebookAdsTab({ data }) {
  if (!data) {
    return <p className="text-sm text-text/50 py-8 text-center">No Facebook Ads data yet</p>
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Facebook className="w-5 h-5 text-sage-dark" />
        <h2 className="text-sm font-bold text-text">Facebook Ads</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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
        <div className="bg-sage-light/10 rounded-xl p-4 border border-sage-light/30 col-span-2 sm:col-span-1">
          <div className="flex items-center gap-1.5 mb-1">
            <Target className="w-3.5 h-3.5 text-sage" />
            <p className="text-xs font-medium text-text/50">Conversions</p>
          </div>
          <p className="text-2xl font-bold text-text">{data.conversions ?? 0}</p>
        </div>
      </div>

      <div>
        <h3 className="text-xs font-bold text-text/60 uppercase tracking-wider mb-2">Top Ad Sets</h3>
        <div className="bg-white rounded-xl border border-sage-light/40 overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-sage-light/30 text-text/40">
                <th className="text-left px-4 py-2 font-medium">Ad Set</th>
                <th className="text-center px-4 py-2 font-medium">Status</th>
                <th className="text-right px-4 py-2 font-medium hidden sm:table-cell">Spend</th>
                <th className="text-right px-4 py-2 font-medium hidden sm:table-cell">Conv.</th>
                <th className="text-right px-4 py-2 font-medium">ROAS</th>
              </tr>
            </thead>
            <tbody>
              {(data.topAdSets ?? []).map((a) => (
                <tr key={a.id} className="border-b border-sage-light/20 last:border-0 hover:bg-sage-light/5">
                  <td className="px-4 py-2.5 font-medium text-text">{a.name}</td>
                  <td className="px-4 py-2.5 text-center">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${statusColors[a.status] ?? 'bg-gray-100 text-gray-500'}`}>
                      {a.status}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-right text-text/60 hidden sm:table-cell">${a.spend.toFixed(2)}</td>
                  <td className="px-4 py-2.5 text-right text-text/60 hidden sm:table-cell">{a.conversions}</td>
                  <td className="px-4 py-2.5 text-right font-bold text-sage-dark">{a.roas.toFixed(2)}x</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
