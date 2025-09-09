import { useState } from "react"
import LoginPage from "../components/LoginPage"
import TeacherDashboard from "../components/TeacherDashboard"
import StudentDashboard from "../components/StudentDashboard"
import LiveClassPage from "../components/LiveClassPage"

export default function ShikshaLite() {
  const [currentPage, setCurrentPage] = useState("login")
  const [userRole, setUserRole] = useState(null)

  const handleLogin = (role) => {
    setUserRole(role)
    setCurrentPage(role === "teacher" ? "teacher-dashboard" : "student-dashboard")
  }

  const navigateToLiveClass = () => {
    setCurrentPage("live-class")
  }

  const navigateToLogin = () => {
    setCurrentPage("login")
    setUserRole(null)
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "login":
        return <LoginPage onLogin={handleLogin} />
      case "teacher-dashboard":
        return <TeacherDashboard onJoinClass={navigateToLiveClass} onLogout={navigateToLogin} />
      case "student-dashboard":
        return <StudentDashboard onJoinClass={navigateToLiveClass} onLogout={navigateToLogin} />
      case "live-class":
        return (
          <LiveClassPage
            onLeaveClass={() => setCurrentPage(userRole === "teacher" ? "teacher-dashboard" : "student-dashboard")}
          />
        )
      default:
        return <LoginPage onLogin={handleLogin} />
    }
  }

  return <div className="min-h-screen bg-gray-100">{renderCurrentPage()}</div>
}
