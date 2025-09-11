"use client"

import { useState } from "react"

export default function TeacherDashboard({ onJoinClass = () => {}, onLogout = () => {} }) {
  const [activeNav, setActiveNav] = useState("dashboard")

  const upcomingClasses = [
    {
      id: 1,
      subject: "Mathematics",
      topic: "Calculus Fundamentals",
      time: "10:00 AM",
      date: "Today",
      students: 24,
      duration: "1 hour",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      subject: "VLSI", 
      topic: "Low Power Design Techniques",
      time: "2:00 PM",
      date: "Today",
      students: 18,
      duration: "1.5 hours",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      subject: "Artificial Intelligence",
      topic: "RAG", 
      time: "11:00 AM",
      date: "Tomorrow",
      students: 22,
      duration: "1 hour",
      color: "from-green-500 to-teal-600"
    },
    {
      id: 4,
      subject: "Blockchain",
      topic: "Energy Trading",
      time: "3:00 PM", 
      date: "Tomorrow",
      students: 20,
      duration: "45 minutes",
      color: "from-orange-500 to-red-600"
    },
  ]

  const navigationItems = [
    { 
      id: "dashboard", 
      label: "Dashboard", 
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
        </svg>
      )
    },
    { 
      id: "classes", 
      label: "My Classes", 
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    { 
      id: "students", 
      label: "Students", 
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    },
    { 
      id: "analytics", 
      label: "Analytics", 
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    { 
      id: "settings", 
      label: "Settings", 
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
  ]

  const stats = [
    {
      label: "Total Classes",
      value: "12",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50"
    },
    {
      label: "Active Students", 
      value: "84",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      color: "from-orange-500 to-red-600", 
      bgColor: "bg-orange-50"
    },
    {
      label: "Hours Taught",
      value: "156", 
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50"
    },
    {
      label: "Avg. Rating",
      value: "4.8",
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 flex relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>

      {/* Sidebar */}
      <div className="w-72 bg-gradient-to-b from-blue-700 via-indigo-800 to-purple-900 text-white flex flex-col shadow-2xl relative overflow-hidden">
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white rounded-full"></div>
        </div>

        <div className="p-8 border-b border-blue-600/30 relative z-10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                ShikshaLite
              </h1>
              <p className="text-blue-200 text-sm">Teacher Portal</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-6 relative z-10">
          <ul className="space-y-3">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveNav(item.id)}
                  className={`w-full flex items-center space-x-4 px-4 py-4 rounded-2xl transition-all duration-300 group ${
                    activeNav === item.id
                      ? "bg-white/20 backdrop-blur-lg text-white shadow-lg border border-white/20"
                      : "text-blue-100 hover:bg-white/10 hover:text-white hover:translate-x-2"
                  }`}
                >
                  <div className={`transition-transform group-hover:scale-110 ${
                    activeNav === item.id ? 'text-white' : 'text-blue-300'
                  }`}>
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-6 border-t border-blue-600/30 relative z-10">
          <button
            onClick={onLogout}
            className="w-full flex items-center space-x-4 px-4 py-4 rounded-2xl text-blue-100 hover:bg-red-500/20 hover:text-white transition-all duration-300 group hover:translate-x-2"
          >
            <svg className="h-5 w-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-2">
                Welcome back, Professor! 🙏
              </h1>
              <p className="text-gray-600 text-lg">Manage your classes and connect with students</p>
            </div>

            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200 flex items-center space-x-3 group">
              <svg className="w-5 h-5 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Schedule New Class</span>
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`${stat.bgColor} backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl p-8 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}>
                {/* Decorative background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide">{stat.label}</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                    </div>
                    <div className={`p-4 bg-gradient-to-br ${stat.color} rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow`}>
                      <div className="text-white">
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full transform translate-x-0 group-hover:translate-x-1 transition-transform duration-700`}
                      style={{ width: `${Math.min(parseInt(stat.value) * 2, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Classes */}
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-8">
              Upcoming Classes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {upcomingClasses.map((classItem, index) => (
                <div
                  key={classItem.id}
                  className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl p-8 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group cursor-pointer"
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${classItem.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div className={`px-4 py-2 bg-gradient-to-r ${classItem.color} text-white rounded-xl font-semibold text-sm shadow-lg`}>
                        {classItem.subject}
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium text-gray-500">{classItem.date}</span>
                        <div className="w-3 h-3 bg-green-400 rounded-full mt-1 ml-auto animate-pulse"></div>
                      </div>
                    </div>

                    <h3 className="font-bold text-gray-900 text-xl mb-6 group-hover:text-blue-700 transition-colors">
                      {classItem.topic}
                    </h3>

                    {/* Details */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center text-gray-600">
                        <svg className="h-5 w-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">
                          {classItem.time} • {classItem.duration}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg className="h-5 w-5 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                        </svg>
                        <span className="font-medium">{classItem.students} students enrolled</span>
                      </div>
                    </div>

                    <button
                      onClick={onJoinClass}
                      className={`w-full bg-gradient-to-r ${classItem.color} text-white py-4 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 group`}
                    >
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-6-10h.01M12 5h.01M18 12h.01" />
                      </svg>
                      Start Class
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}