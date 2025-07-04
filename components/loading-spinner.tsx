"use client"

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-20 h-20 border-4 border-white/10 border-t-white rounded-full animate-spin"></div>

        {/* Middle ring */}
        <div className="absolute inset-2 w-16 h-16 border-4 border-transparent border-r-green-400 rounded-full animate-spin animation-delay-150"></div>

        {/* Inner ring */}
        <div className="absolute inset-4 w-12 h-12 border-4 border-transparent border-b-blue-500 rounded-full animate-spin animation-delay-300"></div>

        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Loading text */}
      <div className="absolute mt-32 text-white text-lg font-medium animate-pulse">Loading...</div>
    </div>
  )
}
