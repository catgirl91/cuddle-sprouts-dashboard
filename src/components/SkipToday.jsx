import { XCircle } from 'lucide-react'

export default function SkipToday({ items }) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl border border-sage-light/40 p-4 shadow-sm flex items-start gap-3"
        >
          <XCircle className="w-4 h-4 text-text/25 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-text/50 line-through">{item.task}</p>
            <p className="text-xs text-text/40 mt-0.5">{item.reason}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
