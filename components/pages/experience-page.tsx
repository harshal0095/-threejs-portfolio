"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, Award, TrendingUp } from "lucide-react"

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Frontend Developer / Tesiting Product",
      company: "Curateit",
      location: "London",
      duration: "2024 - 2025",
      type: "Full-time",
      description: [
        "Contributed to the development of both the CurateIt web platform and browser extension, and modern UI practices",
        "Designed and implemented responsive, user-centric interfaces for seamless functionality across desktop and browser extension environments",
        "Identified UX/UI issues and bugs, and collaborated with developers/designers to implement necessary fixes and enhancements",
        "Performed rigorous manual and automated testing on both platforms to ensure smooth performance, bug-free user flows, and cross-browser/device compatibility.",
      ],
      technologies: ["React", "Next.js", "TypeScript","ManualTesting" ],
      achievements: [""],
    },

  
  ]

  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript","PHP","React", "Next.js","TypeScript", "Tailwind CSS"] },
    { category: "Database", items: ["MySQL","Firebase"] },
    { category: "Tools & Others", items: ["Testing"] },
  ]

  return (
    <div className="min-h-full px-4 sm:px-6 lg:px-8 py-16 md:py-20 pb-24 md:pb-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-in-up">
            My Experience
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto animate-fade-in-up animation-delay-200 px-4">
            A journey through my professional career and the skills I've developed
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 text-center animate-fade-in-up animation-delay-400">
            Professional Journey
          </h3>

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-white text-lg sm:text-xl mb-2">{exp.title}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-300 text-sm sm:text-base">
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col lg:items-end gap-2">
                      <div className="flex items-center gap-1 text-gray-300 text-sm sm:text-base">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <Badge
                        variant="secondary"
                        className={`${exp.type === "Full-time" ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400"} border-0 text-xs sm:text-sm w-fit`}
                      >
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-4 sm:p-6 pt-0">
                  <ul className="space-y-2 mb-4 sm:mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-2 text-sm sm:text-base">
                        <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10 text-xs sm:text-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Key Achievements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement) => (
                        <div key={achievement} className="flex items-center gap-1 text-yellow-400">
                          <Award className="w-4 h-4" />
                          <span className="text-xs sm:text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="animate-fade-in-up animation-delay-800 mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skillGroup, index) => (
              <Card
                key={skillGroup.category}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <CardHeader className="p-4 sm:p-6 pb-3">
                  <CardTitle className="text-white text-base sm:text-lg">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all duration-300 text-xs sm:text-sm mr-2 mb-2"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
