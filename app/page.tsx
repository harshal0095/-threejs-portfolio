"use client"

import { useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Navigation from "@/components/navigation"
import BottomNavigation from "@/components/bottom-navigation"
import ThreeBackground from "@/components/three-background"
import HomePage from "@/components/pages/home-page"
import AboutPage from "@/components/pages/about-page"
import ProjectsPage from "@/components/pages/projects-page"
import ContactPage from "@/components/pages/contact-page"
import PageTransition from "@/components/page-transition"
import LoadingSpinner from "@/components/loading-spinner"
import WelcomeScreen from "@/components/welcome-screen"
import PageWelcome from "@/components/page-welcome"
import ExperiencePage from "@/components/pages/experience-page"
import ScrollProgress from "@/components/scroll-progress"
import FloatingActionButton from "@/components/floating-action-button"

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("home")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showInitialWelcome, setShowInitialWelcome] = useState(true)
  const [showPageWelcome, setShowPageWelcome] = useState(false)
  const [welcomePage, setWelcomePage] = useState("")

  // Hide initial welcome screen after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialWelcome(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const handlePageChange = (page: string) => {
    if (page === currentPage || isTransitioning) return

    // Show page welcome screen
    setWelcomePage(page)
    setShowPageWelcome(true)
    setIsTransitioning(true)

    // Hide page welcome and transition to new page
    setTimeout(() => {
      setShowPageWelcome(false)
      setTimeout(() => {
        setCurrentPage(page)
        setTimeout(() => setIsTransitioning(false), 100)
      }, 800)
    }, 1500)
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />
      case "about":
        return <AboutPage />
      case "projects":
        return <ProjectsPage />
      case "contact":
        return <ContactPage />
      case "experience":
        return <ExperiencePage />
      default:
        return <HomePage />
    }
  }

  // Show initial welcome screen
  if (showInitialWelcome) {
    return <WelcomeScreen />
  }

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-black">
      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Three.js Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <ThreeBackground currentPage={currentPage} />
          </Suspense>
        </Canvas>
      </div>

      {/* Top Navigation - Hidden on mobile */}
      <div className="hidden md:block">
        <Navigation currentPage={currentPage} onPageChange={handlePageChange} isTransitioning={isTransitioning} />
      </div>

      {/* Bottom Navigation - Only visible on mobile */}
      <div className="block md:hidden">
        <BottomNavigation currentPage={currentPage} onPageChange={handlePageChange} isTransitioning={isTransitioning} />
      </div>

      {/* Floating Action Button */}
      <FloatingActionButton />

      {/* Page Welcome Screen */}
      {showPageWelcome && <PageWelcome page={welcomePage} />}

      {/* Page Content with Transition */}
      <PageTransition isTransitioning={isTransitioning || showPageWelcome}>
        <div className="relative z-10 pb-20 md:pb-0">{renderCurrentPage()}</div>
      </PageTransition>

      {/* Loading Spinner */}
      {isTransitioning && !showPageWelcome && <LoadingSpinner />}
    </div>
  )
}
