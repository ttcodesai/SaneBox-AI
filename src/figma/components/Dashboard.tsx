import { useState } from "react";
import { 
  Home, 
  Mail, 
  UnlockIcon, 
  Star, 
  Settings, 
  Shield,
  LogOut,
  User
} from "lucide-react";
import { Separator } from "./ui/separator";
import { DashboardPage } from "./pages/DashboardPage";
import { ClassificationPage } from "./pages/ClassificationPage";
import { UnsubscribePage } from "./pages/UnsubscribePage";
import { HighlightsPage } from "./pages/HighlightsPage";
import { SettingsPage } from "./pages/SettingsPage";

const navItems = [
  { icon: Home, label: "Dashboard", id: "dashboard" },
  { icon: Mail, label: "Email Classification", id: "classification" },
  { icon: UnlockIcon, label: "Unsubscribe Manager", id: "unsubscribe" },
  { icon: Star, label: "Daily Highlights", id: "highlights" },
  { icon: Settings, label: "Settings", id: "settings" },
];

interface DashboardProps {
  user: any;
  onLogout: () => void;
}

export function Dashboard({ user, onLogout }: DashboardProps) {
  const [activePage, setActivePage] = useState("dashboard");

  const renderNavItem = (item: any, isActive: boolean) => {
    const Icon = item.icon;
    return (
      <button
        key={item.id}
        onClick={() => setActivePage(item.id)}
        className={`dark-nav-item w-full text-left ${
          isActive ? "dark-nav-item-active" : ""
        }`}
      >
        <Icon className={`w-5 h-5 ${isActive ? "text-dark-primary" : "text-dark-secondary"}`} />
        <span>{item.label}</span>
      </button>
    );
  };

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return <DashboardPage />;
      case "classification":
        return <ClassificationPage />;
      case "unsubscribe":
        return <UnsubscribePage />;
      case "highlights":
        return <HighlightsPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex h-screen bg-dark-bg" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Sidebar */}
      <div className="w-80 bg-dark-bg border-r border-dark-color flex flex-col">
        {/* Logo */}
        <div className="p-8 border-b border-dark-color">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center dark-shadow-lg">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-dark-primary">SaneBox-AI</h1>
              <p className="text-xs text-dark-secondary font-medium">Email Management</p>
            </div>
          </div>
        </div>
        
        {/* User Info */}
        <div className="p-6 border-b border-dark-color">
          <div className="flex items-center space-x-3">
            <img 
              src={user?.picture || "https://via.placeholder.com/40"} 
              alt={user?.name} 
              className="w-10 h-10 rounded-full border-2 border-dark-border"
            />
            <div className="flex-1">
              <p className="text-sm font-semibold text-dark-primary">{user?.name}</p>
              <p className="text-xs text-dark-secondary">{user?.email}</p>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => renderNavItem(item, activePage === item.id))}
        </nav>

        {/* Bottom Section */}
        <div className="p-6 space-y-4 border-t border-dark-color">
          {/* Privacy Badge */}
          <div className="bg-dark-hover rounded-xl p-3 border border-dark-border">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-xs font-medium text-dark-primary">Privacy Protected</span>
            </div>
            <p className="text-xs text-dark-secondary mt-1">Your emails are processed securely and not stored.</p>
          </div>

          {/* Logout Button */}
          <button 
            onClick={onLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium text-dark-secondary hover:text-dark-negative hover:bg-dark-hover transition-all duration-200"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {renderContent()}
      </div>
    </div>
  );
}