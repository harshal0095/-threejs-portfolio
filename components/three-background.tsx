"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"

interface ThreeBackgroundProps {
  currentPage: string
}

export default function ThreeBackground({ currentPage }: ThreeBackgroundProps) {
  const ref = useRef<THREE.Points>(null)

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(5000 * 3)
    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1

      // Different animations based on current page
      switch (currentPage) {
        case "home":
          ref.current.rotation.z = state.clock.elapsedTime * 0.05
          break
        case "about":
          ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.2
          break
        case "projects":
          ref.current.rotation.z = state.clock.elapsedTime * 0.1
          break
        case "contact":
          ref.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.08) * 0.15
          break
      }
    }
  })

  const getParticleColor = () => {
    switch (currentPage) {
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
      <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
        <PointMaterial transparent color={getParticleColor()} size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
    </group>
  )
}
