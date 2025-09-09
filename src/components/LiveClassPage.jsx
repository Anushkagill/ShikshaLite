"use client"

import { useState } from "react"
import { Card } from "./ui/Card"
import { Button } from "./ui/Button"
import { Input } from "./ui/Input"
import {
  HandRaisedIcon,
  MicrophoneIcon,
  VideoCameraIcon,
  SpeakerWaveIcon,
  ArrowLeftIcon,
  PaperAirplaneIcon,
  PhoneXMarkIcon,
  CogIcon,
  UsersIcon,
} from "@heroicons/react/24/outline"
import {
  MicrophoneIcon as MicrophoneIconSolid,
  VideoCameraIcon as VideoCameraIconSolid,
  SpeakerWaveIcon as SpeakerWaveIconSolid,
} from "@heroicons/react/24/solid"

export default function LiveClassPage({ onLeaveClass }) {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Prof. Smith",
      content: "Welcome everyone! Today we'll be covering Calculus Fundamentals.",
      time: "10:00 AM",
      isCurrentUser: false,
    },
    {
      id: 2,
      sender: "You",
      content: "Thank you, Professor! Looking forward to the lesson.",
      time: "10:01 AM",
      isCurrentUser: true,
    },
    {
      id: 3,
      sender: "Alice Johnson",
      content: "Could you please share the presentation slides?",
      time: "10:02 AM",
      isCurrentUser: false,
    },
    {
      id: 4,
      sender: "Prof. Smith",
      content: "Of course! I'll share them now. You should see them on your screen.",
      time: "10:03 AM",
      isCurrentUser: false,
    },
  ])

  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)
  const [isSpeakerOff, setIsSpeakerOff] = useState(false)
  const [handRaised, setHandRaised] = useState(false)

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "You",
        content: message,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isCurrentUser: true,
      }
      setMessages([...messages, newMessage])
      setMessage("")
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              onClick={onLeaveClass}
              variant="outline"
              className="shiksha-transition hover:bg-gray-50 active:scale-95 bg-transparent"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Leave Class
            </Button>
            <div>
              <h1 className="text-xl font-bold text-black">Mathematics - Calculus Fundamentals</h1>
              <p className="text-gray-600 text-sm">Prof. Smith • 24 participants</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" className="shiksha-transition hover:bg-gray-50 active:scale-95 bg-transparent">
              <UsersIcon className="h-5 w-5 mr-2" />
              Participants
            </Button>
            <Button variant="outline" className="shiksha-transition hover:bg-gray-50 active:scale-95 bg-transparent">
              <CogIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Video Area */}
        <div className="flex-1 p-6">
          <div className="h-full flex flex-col">
            {/* Main Video */}
            <Card className="flex-1 rounded-xl shadow-lg bg-gray-900 mb-4 overflow-hidden">
              <div className="h-full flex items-center justify-center relative">
                <div className="text-center text-white">
                  <VideoCameraIcon className="h-24 w-24 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Professor's Screen</p>
                  <p className="text-gray-300">Sharing presentation slides</p>
                </div>

                {/* Video Controls Overlay */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center space-x-3 bg-black bg-opacity-50 rounded-xl px-4 py-3">
                    <Button
                      onClick={() => setIsMuted(!isMuted)}
                      className={`p-3 rounded-lg shiksha-transition active:scale-95 ${
                        isMuted ? "bg-red-500 hover:bg-red-600 text-white" : "bg-gray-700 hover:bg-gray-600 text-white"
                      }`}
                    >
                      {isMuted ? <MicrophoneIconSolid className="h-5 w-5" /> : <MicrophoneIcon className="h-5 w-5" />}
                    </Button>

                    <Button
                      onClick={() => setIsVideoOff(!isVideoOff)}
                      className={`p-3 rounded-lg shiksha-transition active:scale-95 ${
                        isVideoOff
                          ? "bg-red-500 hover:bg-red-600 text-white"
                          : "bg-gray-700 hover:bg-gray-600 text-white"
                      }`}
                    >
                      {isVideoOff ? (
                        <VideoCameraIconSolid className="h-5 w-5" />
                      ) : (
                        <VideoCameraIcon className="h-5 w-5" />
                      )}
                    </Button>

                    <Button
                      onClick={() => setIsSpeakerOff(!isSpeakerOff)}
                      className={`p-3 rounded-lg shiksha-transition active:scale-95 ${
                        isSpeakerOff
                          ? "bg-red-500 hover:bg-red-600 text-white"
                          : "bg-gray-700 hover:bg-gray-600 text-white"
                      }`}
                    >
                      {isSpeakerOff ? (
                        <SpeakerWaveIconSolid className="h-5 w-5" />
                      ) : (
                        <SpeakerWaveIcon className="h-5 w-5" />
                      )}
                    </Button>

                    <Button
                      onClick={() => setHandRaised(!handRaised)}
                      className={`p-3 rounded-lg shiksha-transition active:scale-95 ${
                        handRaised
                          ? "bg-orange-500 hover:bg-orange-600 text-white"
                          : "bg-gray-700 hover:bg-gray-600 text-white"
                      }`}
                    >
                      <HandRaisedIcon className="h-5 w-5" />
                    </Button>

                    <Button
                      onClick={onLeaveClass}
                      className="p-3 rounded-lg bg-red-500 hover:bg-red-600 text-white shiksha-transition active:scale-95"
                    >
                      <PhoneXMarkIcon className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Participant Videos */}
            <div className="grid grid-cols-4 gap-3 h-32">
              {[1, 2, 3, 4].map((participant) => (
                <Card key={participant} className="rounded-lg shadow-md bg-gray-800 overflow-hidden">
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-1">
                        <span className="text-sm font-medium">
                          {participant === 1 ? "Y" : participant === 2 ? "A" : participant === 3 ? "B" : "C"}
                        </span>
                      </div>
                      <p className="text-xs">
                        {participant === 1 ? "You" : participant === 2 ? "Alice" : participant === 3 ? "Bob" : "Carol"}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Panel */}
        <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-bold text-black">Class Chat</h3>
            <p className="text-sm text-gray-600">24 participants</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isCurrentUser ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-xl ${
                    msg.isCurrentUser
                      ? "bg-blue-500 text-white rounded-br-sm"
                      : "bg-gray-200 text-gray-800 rounded-bl-sm"
                  }`}
                >
                  {!msg.isCurrentUser && <p className="text-xs font-medium mb-1 opacity-75">{msg.sender}</p>}
                  <p className="text-sm">{msg.content}</p>
                  <p className={`text-xs mt-1 ${msg.isCurrentUser ? "text-blue-100" : "text-gray-500"}`}>{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="flex-1 rounded-xl shiksha-transition focus:ring-2 focus:ring-blue-500"
              />
              <Button
                onClick={handleSendMessage}
                className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl shiksha-transition active:scale-95"
              >
                <PaperAirplaneIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
