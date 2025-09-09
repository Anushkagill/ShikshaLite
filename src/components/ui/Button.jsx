// ui/button.jsx
"use client"

import React from "react"
import clsx from "clsx" // optional, for conditional classNames

export function Button({ children, variant = "default", className, ...props }) {
  // Base styles for all buttons
  const baseStyles =
    "py-2 px-4 rounded-xl font-medium shadow-md transition-transform duration-150 active:scale-95 flex items-center justify-center space-x-2"

  // Variant styles
  const variantStyles = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    accent: "bg-orange-500 text-white hover:bg-orange-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  }

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}
