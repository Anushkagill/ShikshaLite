import { useState } from "react"
import LoginPage from "../components/LoginPage"
import TeacherDashboard from "../components/TeacherDashboard"
import StudentDashboard from "../components/StudentDashboard"
import LiveClassPage from "../components/LiveClassPage"
import LandingPage from "../components/LandingPage"

export default function ShikshaLite() {
  const [currentPage, setCurrentPage] = useState("landing-page")
  const [userRole, setUserRole] = useState(null)

  const toLoginPage = ()=>{
    setCurrentPage("login")
  }

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
      case "landing-page":
        return <LandingPage onLogin={toLoginPage} />
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
        return <LandingPage onLogin={toLoginPage} />
    }
  }

  return <div className="min-h-screen bg-gray-100">{renderCurrentPage()}</div>
}
