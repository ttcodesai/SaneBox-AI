import { useState } from "react";
import { Star, Clock, User, Calendar, Filter, Settings } from "lucide-react";

const todaysHighlights = [
  {
    id: 1,
    sender: "Microsoft Teams",
    subject: "Urgent: Product Launch Meeting - Tomorrow 2PM",
    preview: "Don't forget our critical product launch meeting tomorrow at 2PM. Please review the attached documents before the meeting...",
    time: "1 hour ago",
    priority: "High",
    reason: "Contains urgent deadline",
    category: "Work"
  },
  {
    id: 2,
    sender: "Bank of America",
    subject: "Security Alert: New device sign-in detected",
    preview: "We detected a sign-in to your account from a new device. If this wasn't you, please contact us immediately...",
    time: "3 hours ago",
    priority: "High",
    reason: "Security-related content",
    category: "Finance"
  },
  {
    id: 3,
    sender: "Dr. Sarah Wilson",
    subject: "Appointment confirmation for March 15th",
    preview: "This is to confirm your appointment on March 15th at 10:30 AM. Please bring your insurance card and arrive 15 minutes early...",
    time: "5 hours ago",
    priority: "Medium",
    reason: "Appointment reminder",
    category: "Personal"
  },
  {
    id: 4,
    sender: "GitHub",
    subject: "Security vulnerability found in your repository",
    preview: "A security vulnerability has been detected in your project dependencies. Please review and update the affected packages...",
    time: "6 hours ago",
    priority: "High",
    reason: "Security vulnerability",
    category: "Work"
  },
  {
    id: 5,
    sender: "Emma Thompson",
    subject: "Happy Anniversary! 💕",
    preview: "Can't believe it's been 5 years already! I made dinner reservations for tonight at our favorite restaurant...",
    time: "8 hours ago",
    priority: "Medium",
    reason: "Personal milestone",
    category: "Personal"
  }
];

const highlightRules = [
  {
    id: 1,
    name: "Urgent Work Emails",
    description: "Emails containing 'urgent', 'deadline', or 'ASAP'",
    active: true,
    matches: 23
  },
  {
    id: 2,
    name: "Security Alerts",
    description: "Emails about account security or suspicious activity",
    active: true,
    matches: 7
  },
  {
    id: 3,
    name: "Meeting Reminders",
    description: "Calendar invitations and meeting confirmations",
    active: true,
    matches: 12
  },
  {
    id: 4,
    name: "Financial Notifications",
    description: "Banking, payment, and financial alerts",
    active: false,
    matches: 5
  }
];

export function HighlightsPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-600";
      case "Medium":
        return "bg-orange-600";
      case "Low":
        return "bg-green-600";
      default:
        return "bg-gray-600";
    }
  };

  const filteredHighlights = selectedFilter === "all" 
    ? todaysHighlights 
    : todaysHighlights.filter(h => h.priority.toLowerCase() === selectedFilter);

  return (
    <>
      {/* Header */}
      <header className="bg-dark-bg border-b border-dark-color px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-dark-primary">Daily Highlights</h1>
            <p className="text-sm text-dark-secondary mt-1">Important emails that need your attention</p>
          </div>
          <div className="flex items-center space-x-4">
            <select 
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="bg-dark-card border border-dark-color rounded-xl px-4 py-2 text-sm text-dark-primary"
            >
              <option value="all">All Priorities</option>
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>
            <button className="dark-button-secondary gap-2 flex items-center">
              <Settings className="w-4 h-4" />
              Manage Rules
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-8 bg-dark-bg">
        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="dark-card text-center">
            <Star className="w-8 h-8 text-orange-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-dark-primary mb-1">{todaysHighlights.length}</div>
            <div className="text-sm text-dark-secondary">Today's Highlights</div>
          </div>
          <div className="dark-card text-center">
            <div className="w-8 h-8 bg-red-600 rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-white text-sm font-bold">H</span>
            </div>
            <div className="text-2xl font-bold text-dark-primary mb-1">
              {todaysHighlights.filter(h => h.priority === "High").length}
            </div>
            <div className="text-sm text-dark-secondary">High Priority</div>
          </div>
          <div className="dark-card text-center">
            <div className="w-8 h-8 bg-orange-600 rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-white text-sm font-bold">M</span>
            </div>
            <div className="text-2xl font-bold text-dark-primary mb-1">
              {todaysHighlights.filter(h => h.priority === "Medium").length}
            </div>
            <div className="text-sm text-dark-secondary">Medium Priority</div>
          </div>
          <div className="dark-card text-center">
            <Clock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-dark-primary mb-1">4.2</div>
            <div className="text-sm text-dark-secondary">Avg Response Time (hrs)</div>
          </div>
        </div>

        {/* Highlights List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="dark-card">
              <div className="pb-6">
                <h3 className="text-xl font-bold text-dark-primary mb-2">Today's Highlights</h3>
                <p className="text-dark-secondary font-medium">
                  {filteredHighlights.length} important emails requiring your attention
                </p>
              </div>
              
              <div className="space-y-4">
                {filteredHighlights.map((highlight) => (
                  <div 
                    key={highlight.id} 
                    className="p-4 rounded-xl border border-dark-color hover:border-dark-cta hover:bg-dark-hover transition-all duration-200 group cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${getPriorityColor(highlight.priority)}`} />
                        <h4 className="font-semibold text-dark-primary group-hover:text-dark-cta transition-colors">
                          {highlight.sender}
                        </h4>
                        <div className="dark-tag text-xs">
                          {highlight.category}
                        </div>
                      </div>
                      <span className="text-xs text-dark-secondary">{highlight.time}</span>
                    </div>
                    
                    <h5 className="font-medium text-dark-primary mb-2 leading-snug">
                      {highlight.subject}
                    </h5>
                    
                    <p className="text-sm text-dark-secondary mb-3 line-clamp-2 leading-relaxed">
                      {highlight.preview}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-orange-400" />
                        <span className="text-xs text-dark-secondary">{highlight.reason}</span>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getPriorityColor(highlight.priority)}`}>
                        {highlight.priority}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rules Sidebar */}
          <div className="dark-card">
            <div className="pb-6">
              <h3 className="text-xl font-bold text-dark-primary mb-2">Highlight Rules</h3>
              <p className="text-dark-secondary font-medium">
                Customize what emails get highlighted
              </p>
            </div>
            
            <div className="space-y-4">
              {highlightRules.map((rule) => (
                <div key={rule.id} className="p-4 rounded-xl border border-dark-color">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-dark-primary">{rule.name}</h4>
                    <div className={`w-6 h-3 rounded-full relative transition-colors ${
                      rule.active ? 'bg-green-500' : 'bg-gray-600'
                    }`}>
                      <div className={`w-3 h-3 bg-white rounded-full absolute transition-transform ${
                        rule.active ? 'translate-x-3' : 'translate-x-0'
                      }`} />
                    </div>
                  </div>
                  <p className="text-sm text-dark-secondary mb-3">{rule.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-dark-secondary">{rule.matches} matches</span>
                    <button className="text-xs text-dark-cta hover:underline">Edit</button>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full dark-button-primary mt-6">
              Create New Rule
            </button>
          </div>
        </div>
      </main>
    </>
  );
}