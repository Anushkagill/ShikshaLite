"use client"

import { useState } from "react"
import { Card } from "./ui/Card"
import { Button } from "./ui/Button"
import { Input } from "./ui/Input"
import { Label } from "./ui/Label"

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleTeacherLogin = () => {
    onLogin("teacher")
  }

  const handleStudentLogin = () => {
    onLogin("student")
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 rounded-xl shadow-lg bg-white">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">ShikshaLite</h1>
          <p className="text-gray-600">Virtual Classroom Platform</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-gray-700 font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 shiksha-transition focus:ring-2 focus:ring-blue-500 rounded-xl"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-gray-700 font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 shiksha-transition focus:ring-2 focus:ring-blue-500 rounded-xl"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Button
              onClick={handleTeacherLogin}
              className="w-full shiksha-primary-btn shiksha-transition shiksha-hover-lift active:scale-95"
            >
              Login as Teacher
            </Button>

            <Button
              onClick={handleStudentLogin}
              variant="outline"
              className="w-full shiksha-outline-btn shiksha-transition shiksha-hover-lift active:scale-95 bg-transparent"
            >
              Login as Student
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
