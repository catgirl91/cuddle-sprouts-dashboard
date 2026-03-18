import { TrendingUp, TrendingDown } from 'lucide-react'

export default function StatCards({ stats }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-4 border border-sage-light/40 shadow-sm hover:shadow-md transition-shadow"
        >
          <p className="text-xs font-medium text-text/50 mb-1">{stat.label}</p>
          <p className="text-2xl font-bold text-text">{stat.value}</p>
          <div className={`flex items-center gap-1 mt-1 text-xs font-semibold ${stat.up ? 'text-sage-dark' : 'text-alert'}`}>
            {stat.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {stat.change}
          </div>
        </div>
      ))}
    </div>
  )
}
