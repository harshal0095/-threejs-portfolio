"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Smartphone, Globe, Palette, Database, Zap } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["Html/css","Php","Javascript", "React Js", "Responsive Design", "Performance Optimization"],
    },
   
    {
      icon: Globe,
      title: "3D Web Experiences",
      description: "Immersive 3D websites and interactive experiences using Three.js",
      features: ["Three.js", "Interactive Animations"],
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Scalable server-side solutions and API development",
      features: ["Node.js", "MySQL"],
    },
  ]

  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 animate-fade-in-up">Services I Offer</h3>
          <p className="text-gray-300 animate-fade-in-up animation-delay-200">
            Comprehensive digital solutions to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={service.title}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in-up group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 group-hover:from-green-400 group-hover:to-blue-500 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h4 className="text-white text-lg font-semibold mb-3">{service.title}</h4>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-gray-400 text-xs flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
