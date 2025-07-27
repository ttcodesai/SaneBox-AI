import { Mail, Shield, Zap, Users } from "lucide-react";

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Hero Content */}
        <div className="space-y-8">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center dark-shadow-lg">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-dark-primary">SaneBox-AI</h1>
              <p className="text-dark-secondary font-medium">Restore sanity to your inbox</p>
            </div>
          </div>

          {/* Hero Text */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-primary leading-tight">
              Stop drowning in email.
              <br />
              <span className="text-dark-cta">Start focusing</span> on what matters.
            </h2>
            <p className="text-lg text-dark-secondary leading-relaxed max-w-md">
              AI-powered email management that automatically classifies, organizes, and helps you batch-unsubscribe from unwanted emails.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-xl bg-dark-tag flex items-center justify-center">
                <Zap className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-dark-primary">AI Classification</h3>
                <p className="text-sm text-dark-secondary">Automatically sort emails into smart categories</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-xl bg-dark-tag flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-dark-primary">Privacy First</h3>
                <p className="text-sm text-dark-secondary">Your data stays private and secure</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-xl bg-dark-tag flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-dark-primary">Batch Actions</h3>
                <p className="text-sm text-dark-secondary">Unsubscribe from multiple senders at once</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-xl bg-dark-tag flex items-center justify-center">
                <Mail className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <h3 className="font-semibold text-dark-primary">Daily Highlights</h3>
                <p className="text-sm text-dark-secondary">Never miss important emails again</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Card */}
        <div className="flex justify-center">
          <div className="dark-card max-w-sm w-full">
            <div className="text-center space-y-6">
              <div>
                <h3 className="text-xl font-bold text-dark-primary mb-2">Get Started</h3>
                <p className="text-dark-secondary">Connect your Gmail account to begin organizing your inbox</p>
              </div>

              {/* Gmail Login Button */}
              <button
                onClick={onLogin}
                className="w-full flex items-center justify-center space-x-3 bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-6 rounded-xl transition-all duration-200 border border-gray-200 hover:border-gray-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Continue with Gmail</span>
              </button>

              {/* Privacy Note */}
              <div className="bg-dark-hover rounded-xl p-4 border border-dark-border">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-dark-primary mb-1">Privacy Protected</h4>
                    <p className="text-xs text-dark-secondary leading-relaxed">
                      We only access your emails to classify and organize them. No email content is stored on our servers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <p className="text-xs text-dark-secondary">
                By continuing, you agree to our{" "}
                <a href="#" className="text-dark-cta hover:underline">Terms of Service</a>
                {" "}and{" "}
                <a href="#" className="text-dark-cta hover:underline">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}