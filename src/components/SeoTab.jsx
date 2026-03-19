import { Search, TrendingUp, TrendingDown, FileText, ArrowUp, ArrowDown, Minus } from 'lucide-react'

const contentStatusColors = {
  published: 'bg-sage/20 text-sage-dark',
  draft: 'bg-amber-100 text-amber-700',
  idea: 'bg-blue-100 text-blue-700',
}

export default function SeoTab({ data }) {
  if (!data) {
    return <p className="text-sm text-text/50 py-8 text-center">No SEO data yet</p>
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Search className="w-5 h-5 text-sage-dark" />
        <h2 className="text-sm font-bold text-text">SEO / Blog</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="bg-sage-light/10 rounded-xl p-4 border border-sage-light/30">
          <div className="flex items-center gap-1.5 mb-1">
            <TrendingUp className="w-3.5 h-3.5 text-sage" />
            <p className="text-xs font-medium text-text/50">Organic Traffic (30d)</p>
          </div>
          <p className="text-2xl font-bold text-text">{data.organicTraffic ?? 0}</p>
        </div>
        <div className="bg-sage-light/10 rounded-xl p-4 border border-sage-light/30">
          <div className="flex items-center gap-1.5 mb-1">
            <Search className="w-3.5 h-3.5 text-sage" />
            <p className="text-xs font-medium text-text/50">Keywords Tracked</p>
          </div>
          <p className="text-2xl font-bold text-text">{(data.keywordRankings ?? []).length}</p>
        </div>
      </div>

      <div>
        <h3 className="text-xs font-bold text-text/60 uppercase tracking-wider mb-2">Keyword Rankings</h3>
        <div className="bg-white rounded-xl border border-sage-light/40 overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-sage-light/30 text-text/40">
                <th className="text-left px-4 py-2 font-medium">Keyword</th>
                <th className="text-center px-4 py-2 font-medium">Position</th>
                <th className="text-center px-4 py-2 font-medium">Change</th>
                <th className="text-right px-4 py-2 font-medium hidden sm:table-cell">Volume</th>
              </tr>
            </thead>
            <tbody>
              {(data.keywordRankings ?? []).map((k, i) => (
                <tr key={i} className="border-b border-sage-light/20 last:border-0 hover:bg-sage-light/5">
                  <td className="px-4 py-2.5 font-medium text-text">{k.keyword}</td>
                  <td className="px-4 py-2.5 text-center">
                    <span className="inline-flex items-center justify-center w-8 h-6 rounded bg-sage-light/30 font-bold text-sage-dark">
                      {k.position}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-center">
                    {k.change > 0 ? (
                      <span className="inline-flex items-center gap-0.5 text-sage-dark font-semibold">
                        <ArrowUp className="w-3 h-3" />+{k.change}
                      </span>
                    ) : k.change < 0 ? (
                      <span className="inline-flex items-center gap-0.5 text-alert font-semibold">
                        <ArrowDown className="w-3 h-3" />{k.change}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-0.5 text-text/30">
                        <Minus className="w-3 h-3" />0
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-2.5 text-right text-text/60 hidden sm:table-cell">{k.volume.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="text-xs font-bold text-text/60 uppercase tracking-wider mb-2">Content Pipeline</h3>
        <div className="bg-white rounded-xl border border-sage-light/40 overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-sage-light/30 text-text/40">
                <th className="text-left px-4 py-2 font-medium">Article</th>
                <th className="text-center px-4 py-2 font-medium">Status</th>
                <th className="text-right px-4 py-2 font-medium hidden sm:table-cell">Target Keyword</th>
                <th className="text-right px-4 py-2 font-medium">Traffic</th>
              </tr>
            </thead>
            <tbody>
              {(data.contentPipeline ?? []).map((c) => (
                <tr key={c.id} className="border-b border-sage-light/20 last:border-0 hover:bg-sage-light/5">
                  <td className="px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <FileText className="w-3 h-3 text-sage flex-shrink-0" />
                      <span className="font-medium text-text">{c.title}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2.5 text-center">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${contentStatusColors[c.status] ?? 'bg-gray-100 text-gray-500'}`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-4 py-2.5 text-right text-text/50 hidden sm:table-cell">{c.targetKeyword}</td>
                  <td className="px-4 py-2.5 text-right font-bold text-sage-dark">{c.traffic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
