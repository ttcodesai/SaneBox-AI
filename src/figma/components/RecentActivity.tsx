import { Mail, Trash2, Shield, Star, CheckCircle } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "unsubscribe",
    icon: Trash2,
    iconColor: "text-red-400",
    title: "Unsubscribed from 5 promotional emails",
    description: "Nike, Amazon, Spotify, LinkedIn, and 1 more",
    time: "2 minutes ago",
    count: 5
  },
  {
    id: 2,
    type: "classify",
    icon: Mail,
    iconColor: "text-blue-400", 
    title: "Classified 23 new emails",
    description: "12 Promotions, 6 Finance, 3 Travel, 2 Personal",
    time: "15 minutes ago",
    count: 23
  },
  {
    id: 3,
    type: "highlight",
    icon: Star,
    iconColor: "text-orange-400",
    title: "Added 3 emails to highlights",
    description: "Important meeting reminder, contract review",
    time: "1 hour ago",
    count: 3
  },
  {
    id: 4,
    type: "block",
    icon: Shield,
    iconColor: "text-purple-400",
    title: "Blocked suspicious sender",
    description: "noreply@suspicious-domain.com",
    time: "2 hours ago",
    count: 1
  },
  {
    id: 5,
    type: "process",
    icon: CheckCircle,
    iconColor: "text-green-400",
    title: "Processed inbox cleanup",
    description: "Removed 156 promotional emails from last month",
    time: "3 hours ago",
    count: 156
  }
];

export function RecentActivity() {
  return (
    <div className="dark-card">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h3 className="text-xl font-bold text-dark-primary mb-2">Recent Activity</h3>
          <p className="text-dark-secondary font-medium">Latest email management actions</p>
        </div>
        <button className="dark-button-secondary text-sm px-4 py-2">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-dark-hover transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-dark-tag flex items-center justify-center group-hover:scale-105 transition-transform">
                <Icon className={`w-6 h-6 ${activity.iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-dark-primary truncate">{activity.title}</h4>
                  <div className="dark-tag bg-dark-cta text-xs">
                    {activity.count}
                  </div>
                </div>
                <p className="text-sm text-dark-secondary mb-2 line-clamp-1">{activity.description}</p>
                <span className="text-xs text-dark-secondary font-medium">{activity.time}</span>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* View more prompt */}
      <div className="pt-6 border-t border-dark-border text-center">
        <button className="text-dark-cta hover:text-blue-300 text-sm font-medium transition-colors">
          View all activity →
        </button>
      </div>
    </div>
  );
}