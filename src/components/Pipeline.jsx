import { Clock, Loader, Eye, ListTodo, Archive, AlertOctagon } from 'lucide-react'

const statusConfig = {
  'todo': { label: 'To Do', color: 'bg-sage-light/40 text-sage-dark', icon: ListTodo },
  'in-progress': { label: 'In Progress', color: 'bg-blue-50 text-blue-600', icon: Loader },
  'review': { label: 'Review', color: 'bg-purple-50 text-purple-600', icon: Eye },
  'blocked': { label: 'Blocked', color: 'bg-alert/10 text-alert', icon: AlertOctagon },
  'backlog': { label: 'Backlog', color: 'bg-gray-100 text-text/50', icon: Archive },
}

export default function Pipeline({ items }) {
  return (
    <div className="space-y-2">
      {items.map((item) => {
        const config = statusConfig[item.status]
        const Icon = config.icon
        return (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-sage-light/40 p-4 shadow-sm flex items-center gap-4"
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-text">{item.task}</p>
              <p className="text-xs text-text/50 mt-0.5">{item.assignee} &middot; Due {item.dueDate}</p>
            </div>
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold ${config.color}`}>
              <Icon className="w-3 h-3" />
              {config.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
