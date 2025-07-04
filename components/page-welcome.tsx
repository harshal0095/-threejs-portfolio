"use client"

import { useEffect, useState, useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { Suspense } from "react"
import { Home, User, Briefcase, Mail, Award } from "lucide-react"
import type * as THREE from "three"

interface PageWelcomeProps {
  page: string
}

function PageWelcomeParticles({ page }: { page: string }) {
  const particlesRef = useRef<THREE.Points>(null)

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3)
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12
    }
    return positions
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  const getParticleColor = () => {
    switch (page) {
      case "home":
        return "#00ff88"
      case "about":
        return "#ff6b6b"
      case "projects":
        return "#4ecdc4"
      case "contact":
        return "#ffe66d"
      default:
        return "#00ff88"
    }
  }

  return (
    <group>
      <Points ref={particlesRef} positions={particlesPosition} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={getParticleColor()}
          size={0.01}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.9}
        />
      </Points>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color={getParticleColor()} />
    </group>
  )
}

export default function PageWelcome({ page }: PageWelcomeProps) {
  const [textVisible, setTextVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextVisible(true)
    }, 200)
    return () => clearTimeout(timer)
  }, [])

  const getPageInfo = () => {
    switch (page) {
      case "home":
        return {
          title: "Welcome Home",
          subtitle: "Let's explore together",
          icon: Home,
          gradient: "from-green-400 to-blue-500",
        }
      case "about":
        return {
          title: "About Me",
          subtitle: "Get to know me better",
          icon: User,
          gradient: "from-red-400 to-pink-500",
        }
      case "projects":
        return {
          title: "My Projects",
          subtitle: "See what I've built",
          icon: Briefcase,
          gradient: "from-cyan-400 to-teal-500",
        }
      case "contact":
        return {
          title: "Let's Connect",
          subtitle: "Get in touch with me",
          icon: Mail,
          gradient: "from-yellow-400 to-orange-500",
        }
      case "experience":
        return {
          title: "My Experience",
          subtitle: "Professional journey",
          icon: Award,
          gradient: "from-purple-400 to-indigo-500",
        }
      default:
        return {
          title: "Welcome",
          subtitle: "Loading...",
          icon: Home,
          gradient: "from-green-400 to-blue-500",
        }
    }
  }

  const pageInfo = getPageInfo()
  const IconComponent = pageInfo.icon

  return (
    <div className="fixed inset-0 z-40 bg-black">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
          <Suspense fallback={null}>
            <PageWelcomeParticles page={page} />
          </Suspense>
        </Canvas>
      </div>

      {/* Welcome Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          {/* Icon */}
          <div
            className={`
              mb-8 transition-all duration-800 ease-out
              ${textVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-75"}
            `}
          >
            <div className={`inline-flex p-6 rounded-full bg-gradient-to-r ${pageInfo.gradient} shadow-2xl`}>
              <IconComponent className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Title */}
          <h1
            className={`
              text-4xl md:text-6xl font-bold text-white mb-4
              transition-all duration-1000 ease-out delay-200
              ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            {pageInfo.title}
          </h1>

          {/* Subtitle */}
          <p
            className={`
              text-xl md:text-2xl text-gray-300
              transition-all duration-1000 ease-out delay-400
              ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            {pageInfo.subtitle}
          </p>

          {/* Loading animation */}
          <div
            className={`
              mt-8 transition-opacity duration-500 delay-600
              ${textVisible ? "opacity-100" : "opacity-0"}
            `}
          >
            <div className="flex justify-center space-x-1">
              <div className={`w-2 h-2 bg-gradient-to-r ${pageInfo.gradient} rounded-full animate-bounce`}></div>
              <div
                className={`w-2 h-2 bg-gradient-to-r ${pageInfo.gradient} rounded-full animate-bounce animation-delay-200`}
              ></div>
              <div
                className={`w-2 h-2 bg-gradient-to-r ${pageInfo.gradient} rounded-full animate-bounce animation-delay-400`}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated border */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute inset-0 border-4 border-gradient-to-r ${pageInfo.gradient} opacity-20 animate-pulse`}
        ></div>
      </div>
    </div>
  )
}
