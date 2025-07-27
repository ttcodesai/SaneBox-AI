import { useState } from "react";
import { Trash2, Shield, CheckCircle, AlertTriangle, Zap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const unsubscribeSuggestions = [
  {
    id: 1,
    sender: "promotional@retailstore.com",
    name: "RetailStore Daily Deals",
    emailCount: 47,
    lastEmail: "2 days ago",
    reason: "High frequency, low engagement",
    confidence: 95,
    category: "Promotions"
  },
  {
    id: 2,
    sender: "newsletter@techblog.com", 
    name: "TechBlog Weekly",
    emailCount: 23,
    lastEmail: "1 week ago",
    reason: "Never opened in 3 months",
    confidence: 88,
    category: "News"
  },
  {
    id: 3,
    sender: "offers@fashionbrand.com",
    name: "Fashion Brand Offers",
    emailCount: 34,
    lastEmail: "1 day ago", 
    reason: "Duplicates from same company",
    confidence: 92,
    category: "Promotions"
  },
  {
    id: 4,
    sender: "updates@socialmedia.com",
    name: "Social Media Notifications",
    emailCount: 156,
    lastEmail: "1 hour ago",
    reason: "Excessive notification frequency",
    confidence: 97,
    category: "Social"
  }
];

const blockSuggestions = [
  {
    id: 1,
    sender: "noreply@suspicious-domain.com",
    name: "Suspicious Sender",
    emailCount: 12,
    lastEmail: "3 hours ago",
    reason: "Potential spam/phishing",
    confidence: 99,
    risk: "High"
  },
  {
    id: 2,
    sender: "random@unknown-sender.net",
    name: "Unknown Sender",
    emailCount: 5,
    lastEmail: "1 day ago",
    reason: "Unrecognized domain",
    confidence: 85,
    risk: "Medium"
  }
];

export function UnsubscribePage() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleSelection = (id: number) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const selectAll = (items: any[]) => {
    const allIds = items.map(item => item.id);
    setSelectedItems(prev => [...prev, ...allIds]);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-dark-bg border-b border-dark-color px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-dark-primary">Unsubscribe Manager</h1>
            <p className="text-sm text-dark-secondary mt-1">Batch unsubscribe and block unwanted emails</p>
          </div>
          <div className="flex items-center space-x-4">
            {selectedItems.length > 0 && (
              <div className="dark-tag bg-dark-cta">
                {selectedItems.length} selected
              </div>
            )}
            <button className="dark-button-primary gap-2 flex items-center">
              <Zap className="w-4 h-4" />
              Scan for More
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-8 bg-dark-bg">
        <Tabs defaultValue="unsubscribe" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 max-w-sm bg-dark-tag border border-dark-color">
            <TabsTrigger value="unsubscribe" className="text-sm font-semibold data-[state=active]:bg-dark-cta data-[state=active]:text-white text-dark-secondary">
              Unsubscribe ({unsubscribeSuggestions.length})
            </TabsTrigger>
            <TabsTrigger value="block" className="text-sm font-semibold data-[state=active]:bg-dark-cta data-[state=active]:text-white text-dark-secondary">
              Block ({blockSuggestions.length})
            </TabsTrigger>
          </TabsList>

          {/* Unsubscribe Tab */}
          <TabsContent value="unsubscribe" className="space-y-6">
            <div className="dark-card">
              <div className="flex items-center justify-between pb-6">
                <div>
                  <h3 className="text-xl font-bold text-dark-primary mb-2">Unsubscribe Suggestions</h3>
                  <p className="text-dark-secondary font-medium">AI-identified senders you may want to unsubscribe from</p>
                </div>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => selectAll(unsubscribeSuggestions)}
                    className="dark-button-secondary text-sm"
                  >
                    Select All
                  </button>
                  <button 
                    className="dark-button-primary text-sm"
                    disabled={selectedItems.length === 0}
                  >
                    Unsubscribe Selected
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                {unsubscribeSuggestions.map((suggestion) => (
                  <div 
                    key={suggestion.id} 
                    className={`p-4 rounded-xl border transition-all duration-200 ${
                      selectedItems.includes(suggestion.id) 
                        ? 'border-dark-cta bg-dark-hover' 
                        : 'border-dark-color hover:border-dark-cta'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(suggestion.id)}
                        onChange={() => toggleSelection(suggestion.id)}
                        className="mt-1 w-4 h-4 text-dark-cta bg-dark-card border-dark-border rounded focus:ring-dark-cta"
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <h4 className="font-semibold text-dark-primary">{suggestion.name}</h4>
                            <div className="dark-tag text-xs">
                              {suggestion.category}
                            </div>
                            <span className="text-xs text-dark-positive font-medium">
                              {suggestion.confidence}% confidence
                            </span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="text-sm text-dark-secondary">{suggestion.emailCount} emails</span>
                            <span className="text-xs text-dark-secondary">{suggestion.lastEmail}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-dark-secondary mb-2">{suggestion.sender}</p>
                        <div className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-orange-400" />
                          <span className="text-sm text-dark-secondary">{suggestion.reason}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Block Tab */}
          <TabsContent value="block" className="space-y-6">
            <div className="dark-card">
              <div className="flex items-center justify-between pb-6">
                <div>
                  <h3 className="text-xl font-bold text-dark-primary mb-2">Block Suggestions</h3>
                  <p className="text-dark-secondary font-medium">Suspicious or harmful senders to block immediately</p>
                </div>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => selectAll(blockSuggestions)}
                    className="dark-button-secondary text-sm"
                  >
                    Select All
                  </button>
                  <button className="dark-button-primary text-sm bg-red-600 hover:bg-red-500">
                    Block Selected
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                {blockSuggestions.map((suggestion) => (
                  <div 
                    key={suggestion.id} 
                    className={`p-4 rounded-xl border transition-all duration-200 ${
                      selectedItems.includes(suggestion.id) 
                        ? 'border-red-500 bg-red-900/20' 
                        : 'border-dark-color hover:border-red-500'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(suggestion.id)}
                        onChange={() => toggleSelection(suggestion.id)}
                        className="mt-1 w-4 h-4 text-red-500 bg-dark-card border-dark-border rounded focus:ring-red-500"
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <h4 className="font-semibold text-dark-primary">{suggestion.name}</h4>
                            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                              suggestion.risk === 'High' 
                                ? 'bg-red-600 text-white' 
                                : 'bg-orange-600 text-white'
                            }`}>
                              {suggestion.risk} Risk
                            </div>
                            <span className="text-xs text-dark-positive font-medium">
                              {suggestion.confidence}% confidence
                            </span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="text-sm text-dark-secondary">{suggestion.emailCount} emails</span>
                            <span className="text-xs text-dark-secondary">{suggestion.lastEmail}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-dark-secondary mb-2">{suggestion.sender}</p>
                        <div className="flex items-center space-x-2">
                          <Shield className="w-4 h-4 text-red-400" />
                          <span className="text-sm text-dark-secondary">{suggestion.reason}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Action Summary */}
        {selectedItems.length > 0 && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 dark-card border border-dark-cta p-4 dark-shadow-lg">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-dark-cta" />
                <span className="font-medium text-dark-primary">{selectedItems.length} items selected</span>
              </div>
              <div className="flex space-x-3">
                <button 
                  onClick={() => setSelectedItems([])}
                  className="dark-button-secondary text-sm"
                >
                  Cancel
                </button>
                <button className="dark-button-primary text-sm">
                  Execute Actions
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}