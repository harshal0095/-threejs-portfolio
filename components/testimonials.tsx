"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "John delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise is outstanding.",
    },
    {
      name: "Mike Chen",
      role: "Product Manager, InnovateCorp",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "Working with John was a pleasure. He transformed our complex requirements into a beautiful, functional application.",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, CreativeStudio",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      text: "John's 3D web development skills are incredible. He created an immersive experience that our clients absolutely love.",
    },
  ]

  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 animate-fade-in-up">What Clients Say</h3>
          <p className="text-gray-300 animate-fade-in-up animation-delay-200">
            Testimonials from satisfied clients and collaborators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-green-400 mb-4" />
                </div>

                <p className="text-gray-300 mb-6 text-sm sm:text-base italic">"{testimonial.text}"</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                    />
                    <div>
                      <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                      <p className="text-gray-400 text-xs">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
