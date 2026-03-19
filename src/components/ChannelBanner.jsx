import { TrendingUp, TrendingDown } from 'lucide-react'

function MiniSparkline({ data, up }) {
  if (!data || data.length < 2) return null
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const h = 24
  const w = 56
  const step = w / (data.length - 1)
  const points = data.map((v, i) => `${i * step},${h - ((v - min) / range) * h}`).join(' ')
  return (
    <svg width={w} height={h} className="flex-shrink-0">
      <polyline
        points={points}
        fill="none"
        stroke={up ? '#65765C' : '#D4736E'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const channelTabMap = {
  shopify: 'shopify',
  klaviyo: 'klaviyo',
  googleAds: 'googleAds',
  facebookAds: 'facebookAds',
  seo: 'seo',
}

export default function ChannelBanner({ items, onChannelClick }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {items.map((item, i) => (
        <button
          key={i}
          onClick={() => onChannelClick(channelTabMap[item.channel] || item.channel)}
          className="bg-white rounded-xl p-3 sm:p-4 border border-sage-light/40 shadow-sm hover:shadow-md hover:border-sage/60 transition-all text-left cursor-pointer group"
        >
          <p className="text-[10px] sm:text-xs font-medium text-text/50 mb-1 truncate">{item.label}</p>
          <div className="flex items-end justify-between gap-2">
            <div className="min-w-0">
              <p className="text-lg sm:text-2xl font-bold text-text truncate">{item.value}</p>
              <div className={`flex items-center gap-1 mt-0.5 text-[10px] sm:text-xs font-semibold ${item.up ? 'text-sage-dark' : 'text-alert'}`}>
                {item.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                <span className="truncate">{item.change}</span>
              </div>
            </div>
            <MiniSparkline data={item.sparkline} up={item.up} />
          </div>
        </button>
      ))}
    </div>
  )
}
