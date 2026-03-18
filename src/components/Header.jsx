import { Sprout, DollarSign, Clock, Wifi, WifiOff } from 'lucide-react'

function formatLastUpdated(timestamp) {
  if (!timestamp) return null
  try {
    const date = new Date(timestamp)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    })
  } catch {
    return null
  }
}

export default function Header({ isLive, lastUpdated }) {
  const formattedTime = formatLastUpdated(lastUpdated)

  return (
    <header className="bg-white border-b border-sage-light/60 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-sage rounded-xl flex items-center justify-center shadow-sm">
            <Sprout className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-sage-dark tracking-tight">
              Cuddle Sprouts
            </h1>
            <p className="text-xs text-text/50 font-medium">Command Center</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* Data source badge and last updated */}
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${
              isLive
                ? 'bg-sage-light/40 text-sage-dark'
                : 'bg-amber-50 text-amber-700'
            }`}>
              {isLive
                ? <><Wifi className="w-3 h-3" /> Data: Live</>
                : <><WifiOff className="w-3 h-3" /> Data: Sample</>
              }
            </span>
            {formattedTime && (
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-text/40 font-medium">
                <Clock className="w-3 h-3" />
                {formattedTime}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 bg-sage-light/30 px-4 py-2 rounded-xl">
            <DollarSign className="w-4 h-4 text-sage-dark" />
            <div>
              <p className="text-xs text-text/50 font-medium">30-Day Revenue</p>
              <p className="text-lg font-bold text-sage-dark">$119.85</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
