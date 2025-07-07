"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Github, Linkedin, Twitter, Code, Palette, Focus , Download, Eye, Mail } from "lucide-react"
import Testimonials from "@/components/testimonials"
import Services from "@/components/services"
import FunFacts from "@/components/fun-facts"
import BlogPreview from "@/components/blog-preview"
import Link from "next/link"

export default function HomePage() {
  const quickStats = [
    { label: "Years Experience", value: "1", icon: Code },
    { label: "Projects Completed", value: "5", icon: Palette },
    { label: "Dedicated Focus", value: "100%", icon: Focus },
  ]

  const handleDownloadCV = () => {
    // CV file का path - आप अपना CV file public folder में रखें
    const cvPath = "/cv/Harshal_Resume.pdf"
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a')
    link.href = cvPath
    link.download = "Harshal_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const featuredSkills = ["HTML/CSS", "MQ_BT","DSA/C++","Php","JavaScript","Basic React", "BasicThree.js","BasicMYsQL",]

  const recentProjects = [
    {
      title: "E-Commerce Platform--Coming soon",
      description: "Full-stack solution with React & Node.js",
      image: "/placeholder.svg?height=150&width=200",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "3D Portfolio --Coming soon",
      description: "Interactive portfolio with Three.js",
      image: "/placeholder.svg?height=150&width=200",
      tech: ["Three.js", "React", "WebGL"],
    },
  ]

  return (
    <div className="min-h-full relative z-10">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-24 md:pb-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-6 sm:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-white/20 mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white text-xs sm:text-sm">Available for work</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 animate-fade-in-up animation-delay-200 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Harshal
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-3 sm:mb-4 animate-fade-in-up animation-delay-400 max-w-4xl mx-auto">
            Full Stack Developer & Creative Technologist
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-600 px-4">
            I create beautiful, interactive web experiences using modern technologies. Specializing in HTML/CSS, JavaScript, Basic ReactJs,
            and scalable Frontend solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 animate-fade-in-up animation-delay-800 px-4">
            {/* <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white border-0 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold shadow-2xl w-full sm:w-auto"
            >
              <Eye className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
              View My Work
            </Button> */}
            <Button
              size="lg"
              onClick={handleDownloadCV}
              className="bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold backdrop-blur-sm w-full sm:w-auto"
            >
              <Download className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
              Download CV
            </Button>
            <Link href="/contact">
              {/* <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold backdrop-blur-sm w-full sm:w-auto"
              >
                <Mail className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                Get In Touch
              </Button> */}
            </Link>
          </div>

          {/* Social Links */}
<div className="flex justify-center space-x-4 sm:space-x-6 mb-12 sm:mb-16 animate-fade-in-up animation-delay-1000">
  <a href="https://github.com/harshal0095" target="_blank" rel="noopener noreferrer">
    <Button
      variant="ghost"
      size="icon"
      className="text-white hover:text-green-400 hover:bg-white/10 w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-white/20"
    >
      <Github className="w-5 sm:w-6 h-5 sm:h-6" />
    </Button>
  </a>
  <a href="https://www.linkedin.com/in/harshal-panchal-a0b402258/" target="_blank" rel="noopener noreferrer">
    <Button
      variant="ghost"
      size="icon"
      className="text-white hover:text-blue-400 hover:bg-white/10 w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-white/20"
    >
      <Linkedin className="w-5 sm:w-6 h-5 sm:h-6" />
    </Button>
  </a>
  <a href="https://x.com/Param_0095" target="_blank" rel="noopener noreferrer">
    <Button
      variant="ghost"
      size="icon"
      className="text-white hover:text-blue-400 hover:bg-white/10 w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-white/20"
    >
      <Twitter className="w-5 sm:w-6 h-5 sm:h-6" />
    </Button>
  </a>
</div>
        </div>

        <div className="absolute bottom-24 md:bottom-8 animate-bounce">
          <ArrowDown className="w-5 sm:w-6 h-5 sm:h-6 text-white/60" />
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {quickStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card
                  key={stat.label}
                  className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="inline-flex p-3 sm:p-4 rounded-full bg-gradient-to-r from-green-500 to-blue-600 mb-3 sm:mb-4">
                      <IconComponent className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{stat.value}</h3>
                    <p className="text-gray-300 text-sm sm:text-base">{stat.label}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Featured Skills */}
          <div className="text-center mb-16 sm:mb-20 animate-fade-in-up animation-delay-600">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Core Technologies</h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-4">
              {featuredSkills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Recent Projects Preview */}
          <div className="animate-fade-in-up animation-delay-800 mb-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">Featured Projects</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {recentProjects.map((project, index) => (
                <Card
                  key={project.title}
                  className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <h4 className="text-white text-lg sm:text-xl font-semibold mb-2">{project.title}</h4>
                    <p className="text-gray-300 mb-4 text-sm sm:text-base">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-white/20 text-white text-xs sm:text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* <div className="text-center"> */}
              {/* <Button */}
              {/* /  size="lg" */}
                {/* className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold backdrop-blur-sm" */}
              {/* > */}
                {/* View All Projects */}
              {/* </Button> */}
            {/* </div> */}
          </div>
        </div>
       </div>

      {/* Fun Facts Section */}
      {/* <FunFacts /> */}

      {/* Services Section */}
      <Services />

      {/* Testimonials Section */}
      {/* <Testimonials /> */}

      {/* Blog Preview Section */}
      {/* <BlogPreview /> */}
    </div>
  )
}
