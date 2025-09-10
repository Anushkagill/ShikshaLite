"use client"
import { useState } from "react"

export default function LoginPage({ onLogin = () => {} }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleTeacherLogin = () => {
    onLogin("teacher")
  }

  const handleStudentLogin = () => {
    onLogin("student")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex">
      {/* Left side - Rajasthani themed section */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 overflow-hidden">
        {/* Decorative patterns */}
        <div className="absolute inset-0 opacity-20">
          {/* Mandala pattern */}
          <div className="absolute top-20 left-20 w-64 h-64 border-4 border-white rounded-full flex items-center justify-center">
            <div className="w-48 h-48 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-32 h-32 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Geometric patterns */}
          <div className="absolute bottom-20 right-20 w-48 h-48 transform rotate-45">
            <div className="grid grid-cols-4 gap-2 h-full">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="bg-white rounded-sm opacity-60"></div>
              ))}
            </div>
          </div>
          
          {/* Paisley-like curves */}
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
            <svg width="120" height="300" viewBox="0 0 120 300" className="text-white opacity-30">
              <path d="M10 10 Q50 50 10 100 Q70 120 10 150 Q50 180 10 220 Q70 240 10 280" 
                    stroke="currentColor" strokeWidth="3" fill="none"/>
              <path d="M30 30 Q60 60 30 110 Q80 130 30 160 Q60 190 30 230 Q80 250 30 290" 
                    stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        </div>

        {/* Main illustration area */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full p-12 text-white">
          {/* Rajasthani palace silhouette */}
          <div className="mb-8">
            <svg width="300" height="200" viewBox="0 0 300 200" className="drop-shadow-lg">
              {/* Palace structure */}
              <rect x="50" y="120" width="200" height="80" fill="rgba(255,255,255,0.9)" rx="4"/>
              <rect x="80" y="100" width="140" height="100" fill="rgba(255,255,255,0.8)" rx="4"/>
              <rect x="120" y="80" width="60" height="120" fill="rgba(255,255,255,0.9)" rx="4"/>
              
              {/* Domes */}
              <ellipse cx="150" cy="80" rx="30" ry="20" fill="rgba(255,255,255,0.9)"/>
              <ellipse cx="100" cy="100" rx="20" ry="15" fill="rgba(255,255,255,0.8)"/>
              <ellipse cx="200" cy="100" rx="20" ry="15" fill="rgba(255,255,255,0.8)"/>
              
              {/* Spires */}
              <rect x="148" y="60" width="4" height="20" fill="rgba(255,255,255,0.9)"/>
              <rect x="98" y="85" width="4" height="15" fill="rgba(255,255,255,0.8)"/>
              <rect x="198" y="85" width="4" height="15" fill="rgba(255,255,255,0.8)"/>
              
              {/* Flags */}
              <polygon points="148,60 148,50 158,55" fill="rgba(255,255,255,0.9)"/>
              <polygon points="98,85 98,75 108,80" fill="rgba(255,255,255,0.8)"/>
              <polygon points="198,85 198,75 208,80" fill="rgba(255,255,255,0.8)"/>
              
              {/* Windows and doors */}
              <rect x="140" y="140" width="20" height="40" fill="rgba(59,130,246,0.8)" rx="10"/>
              <circle cx="110" cy="140" r="8" fill="rgba(59,130,246,0.6)"/>
              <circle cx="190" cy="140" r="8" fill="rgba(59,130,246,0.6)"/>
              <rect x="70" y="160" width="12" height="20" fill="rgba(59,130,246,0.6)" rx="6"/>
              <rect x="218" y="160" width="12" height="20" fill="rgba(59,130,246,0.6)" rx="6"/>
            </svg>
          </div>

          {/* Welcome text */}
          <div className="text-center max-w-md">
            <h2 className="text-3xl font-bold mb-4">Welcome to Digital Rajasthan</h2>
            <p className="text-xl mb-2 opacity-90">शिक्षा में नवाचार</p>
            <p className="text-lg opacity-80 leading-relaxed">
              Connecting traditional wisdom with modern learning. Experience education 
              that honors our rich cultural heritage.
            </p>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-8 left-8 opacity-60">
            <svg width="60" height="60" viewBox="0 0 60 60" className="text-white">
              <circle cx="30" cy="30" r="25" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M20 30 L25 35 L40 20" stroke="currentColor" strokeWidth="3" fill="none"/>
            </svg>
          </div>
          
          <div className="absolute top-8 right-8 opacity-40">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-white rounded-full animate-pulse animation-delay-1000"></div>
              <div className="w-3 h-3 bg-white rounded-full animate-pulse animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login component */}
      <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Decorative background elements for mobile */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        
        <div className="w-full max-w-md relative z-10">
          {/* Main card with glassmorphism effect */}
          <div className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 transform hover:scale-[1.02] transition-all duration-300">
            {/* Header section */}
            <div className="text-center mb-8">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                ShikshaLite
              </h1>
              <p className="text-gray-600 font-medium">Virtual Classroom Platform</p>
            </div>

            {/* Form section */}
            <div className="space-y-6">
              <div className="space-y-5">
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
              </div>

              {/* Login buttons */}
              <div className="space-y-4 pt-4">
                <button
                  onClick={handleTeacherLogin}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3.5 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Login as Teacher
                </button>

                <button
                  onClick={handleStudentLogin}
                  className="w-full bg-white/70 backdrop-blur-sm border-2 border-gray-200 text-gray-700 py-3.5 px-6 rounded-2xl font-semibold hover:bg-white/90 hover:border-blue-300 hover:text-blue-700 transform hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  Login as Student
                </button>
              </div>

              {/* Footer links */}
              <div className="text-center pt-4 space-y-2">
                <p className="text-sm text-gray-500">
                  Don't have an account? 
                  <span className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium ml-1">
                    Sign up
                  </span>
                </p>
                <p className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer">
                  Forgot your password?
                </p>
              </div>
            </div>
          </div>

          {/* Additional decorative elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80 animate-bounce animation-delay-1000"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-80 animate-bounce animation-delay-3000"></div>
        </div>
      </div>
    </div>
  )
}