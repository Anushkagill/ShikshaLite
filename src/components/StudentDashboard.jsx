"use client"

import { useState } from "react"
import { Card } from "./ui/Card"
import { Button } from "./ui/Button"
import { Badge } from "./ui/Badge"
import {
  ClockIcon,
  UsersIcon,
  BookOpenIcon,
  ArrowRightOnRectangleIcon, // replaced LogOutIcon with ArrowRightOnRectangleIcon
  HomeIcon,
  AcademicCapIcon,
  ChartBarIcon,
  CogIcon,
  VideoCameraIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline"

export default function StudentDashboard({ onJoinClass, onLogout }) {
  const [activeNav, setActiveNav] = useState("dashboard")

  const upcomingClasses = [
    {
      id: 1,
      subject: "Mathematics",
      topic: "Calculus Fundamentals",
      teacher: "Prof. Smith",
      time: "10:00 AM",
      date: "Today",
      duration: "1 hour",
      hasNotes: true,
    },
    {
      id: 2,
      subject: "Physics",
      topic: "Quantum Mechanics",
      teacher: "Dr. Johnson",
      time: "2:00 PM",
      date: "Today",
      duration: "1.5 hours",
      hasNotes: true,
    },
    {
      id: 3,
      subject: "Chemistry",
      topic: "Organic Compounds",
      teacher: "Prof. Davis",
      time: "11:00 AM",
      date: "Tomorrow",
      duration: "1 hour",
      hasNotes: false,
    },
    {
      id: 4,
      subject: "Biology",
      topic: "Cell Structure",
      teacher: "Dr. Wilson",
      time: "3:00 PM",
      date: "Tomorrow",
      duration: "45 minutes",
      hasNotes: true,
    },
  ]

  const navigationItems = [
    { id: "dashboard", label: "Dashboard", icon: HomeIcon },
    { id: "classes", label: "My Classes", icon: AcademicCapIcon },
    { id: "schedule", label: "Schedule", icon: CalendarIcon },
    { id: "grades", label: "Grades", icon: ChartBarIcon },
    { id: "settings", label: "Settings", icon: CogIcon },
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-700 text-white flex flex-col">
        <div className="p-6 border-b border-blue-600">
          <h1 className="text-xl font-bold">ShikshaLite</h1>
          <p className="text-blue-200 text-sm mt-1">Student Portal</p>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveNav(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg shiksha-transition ${
                      activeNav === item.id
                        ? "bg-blue-600 text-white"
                        : "text-blue-100 hover:bg-blue-600 hover:text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-blue-600">
          <button
            onClick={onLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-blue-100 hover:bg-blue-600 hover:text-white shiksha-transition"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5" /> {/* updated icon component name */}
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black">Welcome back, Student!</h1>
            <p className="text-gray-600 mt-1">Ready to learn something new today?</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 rounded-xl shadow-md bg-white shiksha-transition shiksha-hover-lift shiksha-hover-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Enrolled Classes</p>
                  <p className="text-2xl font-bold text-black mt-1">8</p>
                </div>
                <div className="p-3 bg-blue-100 rounded-lg">
                  <BookOpenIcon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6 rounded-xl shadow-md bg-white shiksha-transition shiksha-hover-lift shiksha-hover-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Hours Attended</p>
                  <p className="text-2xl font-bold text-black mt-1">42</p>
                </div>
                <div className="p-3 bg-orange-100 rounded-lg">
                  <ClockIcon className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6 rounded-xl shadow-md bg-white shiksha-transition shiksha-hover-lift shiksha-hover-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Assignments</p>
                  <p className="text-2xl font-bold text-black mt-1">15</p>
                </div>
                <div className="p-3 bg-green-100 rounded-lg">
                  <UsersIcon className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6 rounded-xl shadow-md bg-white shiksha-transition shiksha-hover-lift shiksha-hover-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Average Grade</p>
                  <p className="text-2xl font-bold text-black mt-1">A-</p>
                </div>
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <ChartBarIcon className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </Card>
          </div>

          {/* Upcoming Classes */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">Upcoming Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {upcomingClasses.map((classItem) => (
                <Card
                  key={classItem.id}
                  className="p-6 rounded-xl shadow-md bg-white shiksha-transition shiksha-hover-lift shiksha-hover-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">{classItem.subject}</Badge>
                    <span className="text-sm text-gray-500">{classItem.date}</span>
                  </div>

                  <h3 className="font-bold text-black text-lg mb-2">{classItem.topic}</h3>
                  <p className="text-gray-600 text-sm mb-4">by {classItem.teacher}</p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600 text-sm">
                      <ClockIcon className="h-4 w-4 mr-2" />
                      <span>
                        {classItem.time} • {classItem.duration}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      onClick={onJoinClass}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-xl shadow-md shiksha-transition hover:scale-110 active:scale-95 flex items-center justify-center space-x-2"
                    >
                      <VideoCameraIcon className="h-5 w-5" />
                      <span>Join Class</span>
                    </Button>

                    <Button
                      disabled={!classItem.hasNotes}
                      className={`w-full shiksha-primary-btn shiksha-transition shiksha-hover-lift active:scale-95 flex items-center justify-center space-x-2 ${
                        !classItem.hasNotes ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      <ArrowDownTrayIcon className="h-5 w-5" />
                      <span>Download Notes</span>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
