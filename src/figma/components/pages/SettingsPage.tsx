import { useState } from "react";
import { Shield, Mail, Bell, User, Save, Plus, Trash2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const whitelistEntries = [
  { id: 1, email: "boss@company.com", name: "My Boss", added: "2 weeks ago" },
  { id: 2, email: "team@company.com", name: "Team Updates", added: "1 month ago" },
  { id: 3, email: "noreply@bank.com", name: "Bank Notifications", added: "3 weeks ago" },
  { id: 4, email: "family@gmail.com", name: "Family Group", added: "2 months ago" },
];

const blacklistEntries = [
  { id: 1, email: "spam@marketing.com", name: "Spam Sender", added: "1 week ago" },
  { id: 2, email: "promotions@store.com", name: "Unwanted Promos", added: "2 weeks ago" },
  { id: 3, email: "newsletter@random.com", name: "Random Newsletter", added: "1 month ago" },
];

export function SettingsPage() {
  const [newWhitelistEmail, setNewWhitelistEmail] = useState("");
  const [newBlacklistEmail, setNewBlacklistEmail] = useState("");

  return (
    <>
      {/* Header */}
      <header className="bg-dark-bg border-b border-dark-color px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-dark-primary">Settings</h1>
            <p className="text-sm text-dark-secondary mt-1">Manage your email preferences and rules</p>
          </div>
          <button className="dark-button-primary gap-2 flex items-center">
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-8 bg-dark-bg">
        <Tabs defaultValue="lists" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 max-w-lg bg-dark-tag border border-dark-color">
            <TabsTrigger value="lists" className="text-sm font-semibold data-[state=active]:bg-dark-cta data-[state=active]:text-white text-dark-secondary">Lists</TabsTrigger>
            <TabsTrigger value="classification" className="text-sm font-semibold data-[state=active]:bg-dark-cta data-[state=active]:text-white text-dark-secondary">AI</TabsTrigger>
            <TabsTrigger value="notifications" className="text-sm font-semibold data-[state=active]:bg-dark-cta data-[state=active]:text-white text-dark-secondary">Alerts</TabsTrigger>
            <TabsTrigger value="account" className="text-sm font-semibold data-[state=active]:bg-dark-cta data-[state=active]:text-white text-dark-secondary">Account</TabsTrigger>
          </TabsList>

          {/* Whitelist/Blacklist Tab */}
          <TabsContent value="lists" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Whitelist */}
              <div className="dark-card">
                <div className="pb-6">
                  <h3 className="text-xl font-bold text-dark-primary mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-400" />
                    Whitelist
                  </h3>
                  <p className="text-dark-secondary font-medium">
                    Emails from these senders will always be marked as important
                  </p>
                </div>
                
                {/* Add new whitelist entry */}
                <div className="flex gap-2 mb-6">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    value={newWhitelistEmail}
                    onChange={(e) => setNewWhitelistEmail(e.target.value)}
                    className="flex-1 bg-dark-hover border border-dark-border rounded-xl px-4 py-2 text-sm text-dark-primary placeholder-dark-secondary"
                  />
                  <button className="dark-button-primary px-4 py-2">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="space-y-3">
                  {whitelistEntries.map((entry) => (
                    <div key={entry.id} className="flex items-center justify-between p-3 rounded-xl border border-dark-color hover:bg-dark-hover transition-colors">
                      <div>
                        <div className="font-medium text-dark-primary">{entry.name}</div>
                        <div className="text-sm text-dark-secondary">{entry.email}</div>
                        <div className="text-xs text-dark-secondary">Added {entry.added}</div>
                      </div>
                      <button className="p-2 rounded-lg hover:bg-red-600 transition-colors">
                        <Trash2 className="w-4 h-4 text-red-400" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Blacklist */}
              <div className="dark-card">
                <div className="pb-6">
                  <h3 className="text-xl font-bold text-dark-primary mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-red-400" />
                    Blacklist
                  </h3>
                  <p className="text-dark-secondary font-medium">
                    Emails from these senders will be automatically blocked
                  </p>
                </div>
                
                {/* Add new blacklist entry */}
                <div className="flex gap-2 mb-6">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    value={newBlacklistEmail}
                    onChange={(e) => setNewBlacklistEmail(e.target.value)}
                    className="flex-1 bg-dark-hover border border-dark-border rounded-xl px-4 py-2 text-sm text-dark-primary placeholder-dark-secondary"
                  />
                  <button className="dark-button-primary px-4 py-2 bg-red-600 hover:bg-red-500">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="space-y-3">
                  {blacklistEntries.map((entry) => (
                    <div key={entry.id} className="flex items-center justify-between p-3 rounded-xl border border-dark-color hover:bg-dark-hover transition-colors">
                      <div>
                        <div className="font-medium text-dark-primary">{entry.name}</div>
                        <div className="text-sm text-dark-secondary">{entry.email}</div>
                        <div className="text-xs text-dark-secondary">Added {entry.added}</div>
                      </div>
                      <button className="p-2 rounded-lg hover:bg-red-600 transition-colors">
                        <Trash2 className="w-4 h-4 text-red-400" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* AI Classification Settings */}
          <TabsContent value="classification" className="space-y-6">
            <div className="dark-card">
              <div className="pb-6">
                <h3 className="text-xl font-bold text-dark-primary mb-2">AI Classification Settings</h3>
                <p className="text-dark-secondary font-medium">Configure how AI classifies your emails</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-xl border border-dark-color">
                  <div>
                    <h4 className="font-semibold text-dark-primary">Enable AI Classification</h4>
                    <p className="text-sm text-dark-secondary">Automatically categorize incoming emails</p>
                  </div>
                  <div className="w-12 h-6 bg-green-500 rounded-full relative">
                    <div className="w-6 h-6 bg-white rounded-full absolute translate-x-6 transition-transform" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-xl border border-dark-color">
                  <div>
                    <h4 className="font-semibold text-dark-primary">Learn from Actions</h4>
                    <p className="text-sm text-dark-secondary">Improve accuracy based on your behavior</p>
                  </div>
                  <div className="w-12 h-6 bg-green-500 rounded-full relative">
                    <div className="w-6 h-6 bg-white rounded-full absolute translate-x-6 transition-transform" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-xl border border-dark-color">
                  <div>
                    <h4 className="font-semibold text-dark-primary">Auto-suggest Unsubscribes</h4>
                    <p className="text-sm text-dark-secondary">Automatically suggest senders to unsubscribe from</p>
                  </div>
                  <div className="w-12 h-6 bg-gray-600 rounded-full relative">
                    <div className="w-6 h-6 bg-white rounded-full absolute transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications" className="space-y-6">
            <div className="dark-card">
              <div className="pb-6">
                <h3 className="text-xl font-bold text-dark-primary mb-2">Notification Settings</h3>
                <p className="text-dark-secondary font-medium">Choose how you want to be notified</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-xl border border-dark-color">
                  <div>
                    <h4 className="font-semibold text-dark-primary">Daily Highlights Email</h4>
                    <p className="text-sm text-dark-secondary">Receive daily summary of important emails</p>
                  </div>
                  <div className="w-12 h-6 bg-green-500 rounded-full relative">
                    <div className="w-6 h-6 bg-white rounded-full absolute translate-x-6 transition-transform" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-xl border border-dark-color">
                  <div>
                    <h4 className="font-semibold text-dark-primary">Unsubscribe Notifications</h4>
                    <p className="text-sm text-dark-secondary">Get notified when new unsubscribe suggestions are available</p>
                  </div>
                  <div className="w-12 h-6 bg-green-500 rounded-full relative">
                    <div className="w-6 h-6 bg-white rounded-full absolute translate-x-6 transition-transform" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 rounded-xl border border-dark-color">
                  <div>
                    <h4 className="font-semibold text-dark-primary">Security Alerts</h4>
                    <p className="text-sm text-dark-secondary">Immediate notifications for security-related emails</p>
                  </div>
                  <div className="w-12 h-6 bg-green-500 rounded-full relative">
                    <div className="w-6 h-6 bg-white rounded-full absolute translate-x-6 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Account Settings */}
          <TabsContent value="account" className="space-y-6">
            <div className="dark-card">
              <div className="pb-6">
                <h3 className="text-xl font-bold text-dark-primary mb-2">Account Settings</h3>
                <p className="text-dark-secondary font-medium">Manage your account and privacy settings</p>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 rounded-xl border border-dark-color">
                  <h4 className="font-semibold text-dark-primary mb-2">Connected Account</h4>
                  <div className="flex items-center space-x-3">
                    <img src="https://via.placeholder.com/40" alt="Gmail" className="w-10 h-10 rounded-full" />
                    <div>
                      <div className="font-medium text-dark-primary">user@example.com</div>
                      <div className="text-sm text-dark-secondary">Connected via Gmail OAuth</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 rounded-xl border border-dark-color">
                  <h4 className="font-semibold text-dark-primary mb-2">Data Privacy</h4>
                  <p className="text-sm text-dark-secondary mb-4">
                    Your email content is processed locally and never stored on our servers. 
                    Only classification metadata is retained to improve accuracy.
                  </p>
                  <button className="dark-button-secondary text-sm">
                    View Privacy Policy
                  </button>
                </div>
                
                <div className="p-4 rounded-xl border border-red-500 bg-red-900/20">
                  <h4 className="font-semibold text-red-400 mb-2">Danger Zone</h4>
                  <p className="text-sm text-dark-secondary mb-4">
                    Permanently delete your account and all associated data.
                  </p>
                  <button className="bg-red-600 hover:bg-red-500 text-white font-semibold px-4 py-2 rounded-xl transition-colors">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}