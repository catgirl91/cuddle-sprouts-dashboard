import {
  BarChart, Bar, PieChart, Pie, Cell, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts'

const COLORS = ['#65765C', '#A7B6A0', '#C9D6C3', '#D4736E', '#ddd']

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-white rounded-lg shadow-lg border border-sage-light/40 px-3 py-2 text-xs">
      <p className="font-semibold text-text mb-1">{label || payload[0]?.name}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color || p.fill }}>
          {p.name}: {typeof p.value === 'number' && p.value < 1 ? p.value : p.value}{p.unit || ''}
        </p>
      ))}
    </div>
  )
}

export default function Insights({ data }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Revenue by Flow - Bar Chart */}
      <div className="bg-white rounded-xl border border-sage-light/40 p-4 shadow-sm">
        <h3 className="text-sm font-bold text-text mb-3">Revenue by Flow</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={data.revenueByFlow}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#444' }} />
            <YAxis tick={{ fontSize: 10, fill: '#444' }} tickFormatter={v => `$${v}`} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" fill="#A7B6A0" radius={[4, 4, 0, 0]} name="Revenue" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Subscriber Segments - Pie Chart */}
      <div className="bg-white rounded-xl border border-sage-light/40 p-4 shadow-sm">
        <h3 className="text-sm font-bold text-text mb-3">Subscriber Segments</h3>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={data.subscriberSegments}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={3}
              dataKey="value"
            >
              {data.subscriberSegments.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: 10 }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Engagement Trend - Line Chart */}
      <div className="bg-white rounded-xl border border-sage-light/40 p-4 shadow-sm">
        <h3 className="text-sm font-bold text-text mb-3">Engagement Trend</h3>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={data.engagementTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="week" tick={{ fontSize: 10, fill: '#444' }} />
            <YAxis tick={{ fontSize: 10, fill: '#444' }} tickFormatter={v => `${v}%`} />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="openRate"
              stroke="#65765C"
              strokeWidth={2}
              dot={{ fill: '#65765C', r: 3 }}
              name="Open Rate"
            />
            <Line
              type="monotone"
              dataKey="clickRate"
              stroke="#D4736E"
              strokeWidth={2}
              dot={{ fill: '#D4736E', r: 3 }}
              name="Click Rate"
            />
            <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 10 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
