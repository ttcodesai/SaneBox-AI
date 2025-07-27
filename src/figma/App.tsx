import { useState, useEffect } from "react";
import { LoginPage } from "./components/pages/LoginPage";
import { Dashboard } from "./components/Dashboard";

// Mock authentication state - in real app this would use Google OAuth
const mockUser = {
  id: "user123",
  email: "user@example.com",
  name: "John Doe",
  picture: "https://via.placeholder.com/40",
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking authentication status
    const checkAuth = () => {
      const savedAuth = localStorage.getItem("sanebox-auth");
      if (savedAuth) {
        setIsAuthenticated(true);
        setUser(mockUser);
      }
      setIsLoading(false);
    };

    setTimeout(checkAuth, 1000);
  }, []);

  const handleLogin = () => {
    // Mock Gmail OAuth login
    localStorage.setItem("sanebox-auth", "true");
    setIsAuthenticated(true);
    setUser(mockUser);
  };

  const handleLogout = () => {
    localStorage.removeItem("sanebox-auth");
    setIsAuthenticated(false);
    setUser(null);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-dark-bg">
        <div className="dark-card p-8 text-center">
          <div className="w-8 h-8 border-2 border-dark-cta border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-dark-secondary">
            Loading SaneBox-AI...
          </p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return <Dashboard user={user} onLogout={handleLogout} />;
}