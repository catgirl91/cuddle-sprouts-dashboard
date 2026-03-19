import { useState } from 'react'
import { ShoppingBag, DollarSign, Package, TrendingUp } from 'lucide-react'

const ranges = ['today', 'week', 'month']
const rangeLabels = { today: 'Today', week: '7 Days', month: '30 Days' }

export default function ShopifyTab({ data }) {
  const [range, setRange] = useState('month')

  if (!data) {
    return <p className="text-sm text-text/50 py-8 text-center">No Shopify data yet</p>
  }

  const revenue = data.revenue?.[range] ?? 0
  const orders = data.orders?.[range] ?? 0

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-sage-dark" />
          <h2 className="text-sm font-bold text-text">Shopify</h2>
        </div>
        <div className="flex bg-sage-light/20 rounded-lg p-0.5">
          {ranges.map(r => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                range === r ? 'bg-white text-sage-dark shadow-sm' : 'text-text/40 hover:text-text/60'
              }`}
            >
              {rangeLabels[r]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div className="bg-sage-light/10 rounded-xl p-4 border border-sage-light/30">
          <div className="flex items-center gap-1.5 mb-1">
            <DollarSign className="w-3.5 h-3.5 text-sage" />
            <p className="text-xs font-medium text-text/50">Revenue</p>
          </div>
          <p className="text-2xl font-bold text-text">${revenue.toFixed(2)}</p>
        </div>
        <div className="bg-sage-light/10 rounded-xl p-4 border border-sage-light/30">
          <div className="flex items-center gap-1.5 mb-1">
            <Package className="w-3.5 h-3.5 text-sage" />
            <p className="text-xs font-medium text-text/50">Orders</p>
          </div>
          <p className="text-2xl font-bold text-text">{orders}</p>
        </div>
        <div className="bg-sage-light/10 rounded-xl p-4 border border-sage-light/30 col-span-2 sm:col-span-1">
          <div className="flex items-center gap-1.5 mb-1">
            <TrendingUp className="w-3.5 h-3.5 text-sage" />
            <p className="text-xs font-medium text-text/50">AOV</p>
          </div>
          <p className="text-2xl font-bold text-text">${(data.aov ?? 0).toFixed(2)}</p>
        </div>
      </div>

      <div>
        <h3 className="text-xs font-bold text-text/60 uppercase tracking-wider mb-2">Top Products</h3>
        <div className="bg-white rounded-xl border border-sage-light/40 overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-sage-light/30 text-text/40">
                <th className="text-left px-4 py-2 font-medium">Product</th>
                <th className="text-right px-4 py-2 font-medium hidden sm:table-cell">Units</th>
                <th className="text-right px-4 py-2 font-medium">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {(data.topProducts ?? []).map((product, i) => (
                <tr key={i} className="border-b border-sage-light/20 last:border-0 hover:bg-sage-light/5">
                  <td className="px-4 py-2.5 font-medium text-text">{product.name}</td>
                  <td className="px-4 py-2.5 text-right text-text/60 hidden sm:table-cell">{product.unitsSold}</td>
                  <td className="px-4 py-2.5 text-right font-bold text-sage-dark">${product.revenue.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
