"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "MidNight Bloom",
      description: "Responsive Restaurant Website,Designed and developed a fully responsive restaurant website using only HTML and CSS.",
      image: "/MidNightBloom.png?height=200&width=300",
      technologies: ["Html", "Css", "ResponsiveDesign",],
      liveUrl: "https://midnightbloom.netlify.app/",
      // githubUrl: "https://github.com/harshal0095/MidNightBloom.git",
    },
    {
      title: "The Golden Vine",
      description: "Responsive Restaurant Website, Designed and developed a fully responsive restaurant website using only HTML and CSS.",
      image: "/TheGoldenVine.png?height=200&width=300",
      technologies: ["Html", "Css", "ResponsiveDesign"],
      liveUrl: "https://thegoldenvine.netlify.app/",
      // githubUrl: "https://github.com/harshal0095/TheGoldenVine.git",
    },
    {
      title: "CovidTracker",
      description: "Developed a real-time COVID-19 tracker displaying global and country-wise statistics using public APIs, featuring dynamic charts, dark mode, and responsive UI for all devices.",
      image: "/CovidTrack.png?height=200&width=300",
      technologies: ["Html", "Css","JavaScript"],
      liveUrl: "https://covidtrack2025.netlify.app/",
      // githubUrl: "",
    },
    {
      title: "AIChatbuilder",
      description: "Real-time chat app with AI integration and modern UI,Developed a custom AI-powered chatbot builder , enabling users to create intelligent chatbots with personalized behavior and dynamic responses.",
      image: "/AiChat.png?height=200&width=300",
      technologies: ["React", "Groq Api", "Tailwind CSS"],
      liveUrl: "https://aichatbuilder.netlify.app/",
      // githubUrl: "https://github.com/your-ai-chat-repo",
    },
        {
      title: "Location QR Code Generator",
      description: "A clean and user-friendly Location QR Code Generator built using only HTML, CSS, and JavaScript. Users can enter geographic coordinates (latitude and longitude), and the tool instantly generates a scannable QR code that redirects to the entered location on Google Maps.",
      image: "/QrCode.png?height=200&width=300",
      technologies: ["Html", "Css", "JavaScript"],
      liveUrl: "https://locationganaretor.netlify.app/",
      // githubUrl: "https://github.com/your-ai-chat-repo",
    },
  ]

  const handleLiveDemo = (url: string) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  const handleGithubCode = (url: string) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <div className="min-h-full px-4 sm:px-6 lg:px-8 py-16 md:py-20 pb-24 md:pb-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-in-up">
            My Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto animate-fade-in-up animation-delay-200 px-4">
            A showcase of my recent work and creative projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-20">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </CardHeader>

              <CardContent className="p-4 sm:p-6">
                <CardTitle className="text-white mb-3 text-lg sm:text-xl">{project.title}</CardTitle>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-white/10 text-white border-white/20 text-xs sm:text-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="sm"
                    onClick={() => handleLiveDemo(project.liveUrl)}
                    disabled={!project.liveUrl || project.liveUrl === "#"}
                    className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  {/* <Button
                    size="sm"
                    onClick={() => handleGithubCode(project.githubUrl)}
                    disabled={!project.githubUrl || project.githubUrl === "#"}
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
