import { useState } from "react";
import { Mail, Filter, RefreshCw, Eye, Archive, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const emailCategories = [
  {
    name: "Promotions",
    count: 1247,
    color: "bg-red-500",
    description: "Marketing emails, newsletters, promotional offers",
    accuracy: 94
  },
  {
    name: "Finance",
    count: 523,
    color: "bg-green-500", 
    description: "Banking, investments, payment confirmations",
    accuracy: 98
  },
  {
    name: "Travel",
    count: 289,
    color: "bg-blue-500",
    description: "Bookings, itineraries, travel updates",
    accuracy: 91
  },
  {
    name: "Personal",
    count: 456,
    color: "bg-purple-500",
    description: "Friends, family, personal communications",
    accuracy: 89
  },
  {
    name: "Work",
    count: 332,
    color: "bg-orange-500",
    description: "Professional emails, meetings, projects",
    accuracy: 96
  }
];

const recentEmails = [
  {
    id: 1,
    sender: "Nike",
    subject: "New Arrivals: Spring Collection 2024",
    category: "Promotions",
    confidence: 96,
    time: "2 min ago",
    preview: "Discover the latest trends in our spring collection..."
  },
  {
    id: 2,
    sender: "Chase Bank",
    subject: "Your monthly statement is ready",
    category: "Finance", 
    confidence: 99,
    time: "5 min ago",
    preview: "Your February statement is now available for review..."
  },
  {
    id: 3,
    sender: "Airbnb",
    subject: "Booking confirmation - Paris apartment",
    category: "Travel",
    confidence: 94,
    time: "12 min ago",
    preview: "Your reservation has been confirmed for March 15-20..."
  },
  {
    id: 4,
    sender: "Sarah Johnson",
    subject: "Happy Birthday! 🎉",
    category: "Personal",
    confidence: 87,
    time: "1 hour ago",
    preview: "Hope you have an amazing day! Can't wait to celebrate..."
  },
  {
    id: 5,
    sender: "Slack",
    subject: "Weekly team updates",
    category: "Work",
    confidence: 92,
    time: "2 hours ago",
    preview: "Here's what your team accomplished this week..."
  }
];

export function ClassificationPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <>
      {/* Header */}
      <header className="bg-dark-bg border-b border-dark-color px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-dark-primary">Email Classification</h1>
            <p className="text-sm text-dark-secondary mt-1">AI-powered email categorization and management</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="dark-button-secondary gap-2 flex items-center">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <button className="dark-button-primary gap-2 flex items-center">
              <RefreshCw className="w-4 h-4" />
              Classify New
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-8 bg-dark-bg">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 max-w-md bg-dark-tag border border-dark-color">
            <TabsTrigger value="overview" className="text-sm font-semibold data-[state=active]:bg-dark-cta data-[state=active]:text-white text-dark-secondary">Overview</TabsTrigger>
            <TabsTrigger value="emails" className="text-sm font-semibold data-[state=active]:bg-dark-cta data-[state=active]:text-white text-dark-secondary">Recent</TabsTrigger>
            <TabsTrigger value="rules" className="text-sm font-semibold data-[state=active]:bg-dark-cta data-[state=active]:text-white text-dark-secondary">Rules</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Category Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {emailCategories.map((category) => (
                <div key={category.name} className="dark-card hover:dark-shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${category.color}`} />
                      <h3 className="font-bold text-dark-primary">{category.name}</h3>
                    </div>
                    <div className="dark-tag bg-dark-cta">
                      {category.count}
                    </div>
                  </div>
                  
                  <p className="text-sm text-dark-secondary mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-dark-secondary">Classification Accuracy</span>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="w-16 bg-dark-tag rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${category.accuracy}%` }}
                          />
                        </div>
                        <span className="text-sm font-bold text-green-400">{category.accuracy}%</span>
                      </div>
                    </div>
                    <button className="dark-button-secondary text-xs px-3 py-1.5">
                      View All
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Insights */}
            <div className="dark-card bg-gradient-to-r from-dark-card to-dark-tag">
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-dark-cta flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-primary mb-1">
                        Classification Insights
                      </h3>
                      <p className="text-sm text-dark-secondary">
                        Your classification accuracy has improved by 12% this month with AI learning
                      </p>
                    </div>
                  </div>
                  <button className="dark-button-primary px-8">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Recent Emails Tab */}
          <TabsContent value="emails" className="space-y-6">
            <div className="dark-card">
              <div className="pb-6">
                <h3 className="text-xl font-bold text-dark-primary mb-2">Recently Classified Emails</h3>
                <p className="text-dark-secondary font-medium">Latest emails processed by AI classification</p>
              </div>
              
              <div className="space-y-4">
                {recentEmails.map((email) => (
                  <div key={email.id} className="p-4 rounded-xl border border-dark-color hover:bg-dark-hover transition-colors group">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-semibold text-dark-primary">{email.sender}</h4>
                          <div className="dark-tag text-xs">
                            {email.category}
                          </div>
                          <span className="text-xs text-dark-positive font-medium">
                            {email.confidence}% confidence
                          </span>
                        </div>
                        <h5 className="text-sm font-medium text-dark-primary mb-2">{email.subject}</h5>
                        <p className="text-sm text-dark-secondary line-clamp-1">{email.preview}</p>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <span className="text-xs text-dark-secondary">{email.time}</span>
                        <div className="flex space-x-1">
                          <button className="p-2 rounded-lg hover:bg-dark-tag transition-colors">
                            <Eye className="w-4 h-4 text-dark-secondary" />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-dark-tag transition-colors">
                            <Archive className="w-4 h-4 text-dark-secondary" />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-dark-tag transition-colors">
                            <Star className="w-4 h-4 text-dark-secondary" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Rules Tab */}
          <TabsContent value="rules" className="space-y-6">
            <div className="text-center py-12">
              <Filter className="w-12 h-12 text-dark-secondary mx-auto mb-4" />
              <h3 className="text-lg font-medium text-dark-primary mb-2">Custom Classification Rules</h3>
              <p className="text-dark-secondary mb-6">Create custom rules to improve email classification accuracy</p>
              <button className="dark-button-primary">
                Create Rule
              </button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}