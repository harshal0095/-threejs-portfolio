"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Zap } from "lucide-react"

export default function AboutPage() {
  const skills = [
    "HTML/CSS",
    "MQ_BT",
    "DSA/C++",
    "Php",
    "JavaScript",
    "BasicReact.js",
    "BasicThree.js",
    "BasicMYsQL",
  ]

  return (
    <div className="flex items-center justify-center min-h-full px-4 sm:px-6 lg:px-8 py-16 md:py-20 pb-24 md:pb-8 relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-in-up">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto animate-fade-in-up animation-delay-200 px-4">
            Passionate developer with 1 years of experience creating innovative digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="animate-fade-in-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">My Story</h3>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base">
              <p>
                I started my journey in web development 1 years ago, driven by curiosity and a passion for creating
                beautiful, functional digital experiences. What began as a hobby quickly evolved into a career.
              </p>
              <p>
                I specialize in full-stack development with a focus on modern JavaScript frameworks, 3D web experiences,
                and scalable backend architectures.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects,
                or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-right">
            <div className="grid gap-4 sm:gap-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Code className="w-6 sm:w-8 h-6 sm:h-8 text-green-400 mr-3" />
                    <h4 className="text-lg sm:text-xl font-semibold text-white">Frontend Development</h4>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Creating responsive, interactive user interfaces with Html/Css,Javascript,React Js, and Three js.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-blue-400 mr-3" />
                    <h4 className="text-lg sm:text-xl font-semibold text-white">Backend Development</h4>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Building scalable APIs and server-side applications and cloud services
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Palette className="w-6 sm:w-8 h-6 sm:h-8 text-purple-400 mr-3" />
                    <h4 className="text-lg sm:text-xl font-semibold text-white">3D & Animation</h4>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Crafting immersive 3D experiences and smooth animations for web applications
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="animate-fade-in-up animation-delay-600 mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
            {skills.map((skill, index) => (
              <Badge
                key={skill}
                variant="secondary"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-sm sm:text-base px-3 py-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
