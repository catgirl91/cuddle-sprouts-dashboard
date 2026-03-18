import { useState } from 'react'
import { Check, Circle, Copy, CheckCheck, Flame, AlertTriangle, Minus } from 'lucide-react'

const urgencyConfig = {
  high: { icon: Flame, color: 'text-alert', bg: 'bg-alert/10', label: 'High' },
  medium: { icon: AlertTriangle, color: 'text-amber-600', bg: 'bg-amber-50', label: 'Med' },
  low: { icon: Minus, color: 'text-text/40', bg: 'bg-gray-50', label: 'Low' },
}

export default function Priorities({ priorities }) {
  const [copiedId, setCopiedId] = useState(null)
  const [items, setItems] = useState(priorities)

  const toggleDone = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, done: !item.done } : item))
  }

  const copyPrompt = async (id, prompt) => {
    await navigator.clipboard.writeText(prompt)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const urgency = urgencyConfig[item.urgency]
        const UrgencyIcon = urgency.icon
        return (
          <div
            key={item.id}
            className={`bg-white rounded-xl border border-sage-light/40 p-4 shadow-sm transition-all ${item.done ? 'opacity-60' : ''}`}
          >
            <div className="flex items-start gap-3">
              <button
                onClick={() => toggleDone(item.id)}
                className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                  item.done
                    ? 'bg-sage border-sage text-white'
                    : 'border-sage-light hover:border-sage'
                }`}
              >
                {item.done && <Check className="w-3 h-3" />}
              </button>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className={`font-semibold text-sm ${item.done ? 'line-through text-text/40' : 'text-text'}`}>
                    {item.title}
                  </h3>
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${urgency.bg} ${urgency.color}`}>
                    <UrgencyIcon className="w-2.5 h-2.5" />
                    {urgency.label}
                  </span>
                </div>
                <p className="text-xs text-text/60 mb-2">{item.description}</p>
                <button
                  onClick={() => copyPrompt(item.id, item.prompt)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-sage-light/30 text-sage-dark rounded-lg hover:bg-sage-light/50 transition-colors"
                >
                  {copiedId === item.id ? (
                    <>
                      <CheckCheck className="w-3.5 h-3.5" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy Prompt
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
