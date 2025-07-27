import { 
  Mail, 
  Trash2, 
  Clock, 
  CheckCircle, 
  TrendingDown, 
  BarChart3,
  AlertCircle,
  Star,
  RefreshCw
} from "lucide-react";
import { EmailCategoryChart } from "../EmailCategoryChart";
import { RecentActivity } from "../RecentActivity";
import { UnsubscribeStats } from "../UnsubscribeStats";

const metrics = [
  {
    title: "Emails Processed",
    value: "2,847",
    change: "+234 today",
    icon: Mail,
    iconColor: "text-blue-400",
    isPositive: true
  },
  {
    title: "Unsubscribed", 
    value: "156",
    change: "12 this week",
    icon: Trash2,
    iconColor: "text-red-400",
    isPositive: true
  },
  {
    title: "Time Saved",
    value: "4.2 hrs",
    change: "+45 min today",
    icon: Clock,
    iconColor: "text-green-400",
    isPositive: true
  },
  {
    title: "Important Emails",
    value: "23",
    change: "Needs attention",
    icon: Star,
    iconColor: "text-orange-400",
    isPositive: false
  },
];

const quickActions = [
  {
    title: "Process New Emails",
    description: "Classify and organize 47 new emails",
    icon: RefreshCw,
    color: "bg-blue-600 hover:bg-blue-500",
    count: 47
  },
  {
    title: "Review Unsubscribe Suggestions",
    description: "12 senders recommended for unsubscribe",
    icon: Trash2,
    color: "bg-red-600 hover:bg-red-500", 
    count: 12
  },
  {
    title: "Check Daily Highlights",
    description: "5 important emails requiring attention",
    icon: Star,
    color: "bg-orange-600 hover:bg-orange-500",
    count: 5
  }
];

export function DashboardPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-dark-bg border-b border-dark-color px-8 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-dark-primary mb-2">Dashboard</h1>
            <p className="text-dark-secondary font-medium">Your email management overview</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="dark-tag">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Live Sync</span>
              </div>
            </div>
            <button className="dark-button-primary gap-2 flex items-center">
              <RefreshCw className="w-4 h-4" />
              Sync Now
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-8 bg-dark-bg">
        {/* Top-level Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            
            return (
              <div key={metric.title} className="dark-card hover:dark-shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-dark-tag flex items-center justify-center`}>
                    <Icon className={`w-7 h-7 ${metric.iconColor}`} />
                  </div>
                  <div className="flex items-center space-x-1">
                    {metric.isPositive ? (
                      <TrendingDown className="w-4 h-4 text-dark-positive rotate-180" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-dark-negative" />
                    )}
                    <span className={`text-sm font-bold ${metric.isPositive ? 'text-dark-positive' : 'text-dark-negative'}`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-dark-primary mb-2">{metric.value}</h3>
                  <p className="text-sm font-medium text-dark-secondary">{metric.title}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-dark-primary mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <button 
                  key={action.title}
                  className="dark-card hover:dark-shadow-lg transition-all duration-300 hover:-translate-y-1 text-left group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="dark-tag bg-dark-cta">
                      {action.count}
                    </div>
                  </div>
                  <h3 className="font-bold text-dark-primary mb-2 group-hover:text-dark-cta transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-sm text-dark-secondary">{action.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Charts and Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <EmailCategoryChart />
          <UnsubscribeStats />
        </div>

        {/* Recent Activity */}
        <RecentActivity />
      </main>
    </>
  );
}