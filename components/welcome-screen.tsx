"use client"

import { useEffect, useState, useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { Suspense } from "react"
import type * as THREE from "three"

function WelcomeParticles() {
  const particlesRef = useRef<THREE.Points>(null)

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(3000 * 3)
    for (let i = 0; i < 3000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    return positions
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1
      particlesRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.15) * 0.1
    }
  })

  return (
    <group>
      <Points ref={particlesRef} positions={particlesPosition} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00ff88"
          size={0.008}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
    </group>
  )
}

export default function WelcomeScreen() {
  const [textVisible, setTextVisible] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Show text after 500ms
    const textTimer = setTimeout(() => {
      setTextVisible(true)
    }, 500)

    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 2500)

    return () => {
      clearTimeout(textTimer)
      clearTimeout(fadeTimer)
    }
  }, [])

  return (
    <div
      className={`fixed inset-0 z-50 bg-black transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <Suspense fallback={null}>
            <WelcomeParticles />
          </Suspense>
        </Canvas>
      </div>

      {/* Welcome Text */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h1
            className={`
              text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4
              transition-all duration-1000 ease-out
              ${textVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}
            `}
          >
            Welcome to my
          </h1>
          <h2
            className={`
              text-5xl md:text-7xl lg:text-8xl font-bold 
              bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 
              bg-clip-text text-transparent
              transition-all duration-1000 ease-out delay-300
              ${textVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}
            `}
          >
            Portfolio
          </h2>

          {/* Animated dots */}
          <div
            className={`flex justify-center space-x-2 mt-8 transition-opacity duration-500 delay-1000 ${textVisible ? "opacity-100" : "opacity-0"}`}
          >
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse animation-delay-200"></div>
            <div className="w-3 h-3 bg-purple-600 rounded-full animate-pulse animation-delay-400"></div>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 pointer-events-none" />
    </div>
  )
}
