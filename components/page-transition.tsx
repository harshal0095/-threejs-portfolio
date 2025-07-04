"use client"

import type { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
  isTransitioning: boolean
}

export default function PageTransition({ children, isTransitioning }: PageTransitionProps) {
  return (
    <div
      className={`
        transition-all duration-700 ease-in-out
        ${
          isTransitioning
            ? "opacity-0 scale-90 blur-md transform translate-y-8"
            : "opacity-100 scale-100 blur-0 transform translate-y-0"
        }
      `}
    >
      {children}
    </div>
  )
}
