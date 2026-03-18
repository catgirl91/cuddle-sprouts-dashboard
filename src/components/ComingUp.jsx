import { CalendarDays } from 'lucide-react'

const urgencyDot = {
  high: 'bg-alert',
  medium: 'bg-amber-400',
  low: 'bg-sage-light',
}

export default function ComingUp({ items }) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl border border-sage-light/40 p-4 shadow-sm flex items-center gap-3"
        >
          <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${urgencyDot[item.urgency]}`} />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-text">{item.task}</p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-text/50">
            <CalendarDays className="w-3.5 h-3.5" />
            {item.date}
          </div>
        </div>
      ))}
    </div>
  )
}
