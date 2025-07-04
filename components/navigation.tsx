"use client"

import { Button } from "@/components/ui/button"
import { Home, User, Briefcase, Mail, Award } from "lucide-react"

interface NavigationProps {
  currentPage: string
  onPageChange: (page: string) => void
  isTransitioning: boolean
}

export default function Navigation({ currentPage, onPageChange, isTransitioning }: NavigationProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Award },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  return (
    <nav className="fixed top-4 sm:top-8 left-1/2 transform -translate-x-1/2 z-50 px-4">
      <div className="flex flex-wrap justify-center space-x-1 sm:space-x-2 bg-black/30 backdrop-blur-lg rounded-full p-2 sm:p-3 border border-white/20 shadow-2xl max-w-fit">
        {navItems.map(({ id, label, icon: Icon }) => (
          <Button
            key={id}
            variant={currentPage === id ? "default" : "ghost"}
            size="sm"
            onClick={() => onPageChange(id)}
            disabled={isTransitioning}
            className={`
              relative overflow-hidden transition-all duration-300 rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm
              ${
                currentPage === id
                  ? "bg-white text-black shadow-lg scale-105 font-semibold"
                  : "text-white hover:bg-white/20 hover:scale-105 border border-white/10 hover:text-white"
              }
            `}
          >
            <Icon className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2" />
            {label}
            {currentPage === id && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
            )}
          </Button>
        ))}
      </div>
    </nav>
  )
}
