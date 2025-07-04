"use client"

import { Button } from "@/components/ui/button"
import { Home, User, Briefcase, Mail, Award } from "lucide-react"

interface BottomNavigationProps {
  currentPage: string
  onPageChange: (page: string) => void
  isTransitioning: boolean
}

export default function BottomNavigation({ currentPage, onPageChange, isTransitioning }: BottomNavigationProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Award },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-t border-white/20">
      <div className="flex justify-around items-center px-2 py-3 max-w-md mx-auto">
        {navItems.map(({ id, label, icon: Icon }) => (
          <Button
            key={id}
            variant="ghost"
            size="sm"
            onClick={() => onPageChange(id)}
            disabled={isTransitioning}
            className={`
              flex flex-col items-center justify-center gap-1 p-2 h-auto min-w-0 flex-1 max-w-none
              transition-all duration-300 rounded-lg
              ${
                currentPage === id
                  ? "text-white bg-white/20 scale-105"
                  : "text-gray-400 hover:text-white hover:bg-white/10"
              }
            `}
          >
            <div className="relative">
              <Icon className="w-5 h-5" />
              {currentPage === id && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              )}
            </div>
            <span className="text-xs font-medium truncate w-full text-center">{label}</span>
            {currentPage === id && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full" />
            )}
          </Button>
        ))}
      </div>

      {/* Safe area for devices with home indicator */}
      <div className="h-safe-area-inset-bottom bg-black/80" />
    </nav>
  )
}
