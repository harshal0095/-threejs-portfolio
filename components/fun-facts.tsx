"use client"

import { useEffect, useState } from "react"
// import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Clock, Users, Award } from "lucide-react"

export default function FunFacts() {
  const [counters, setCounters] = useState({
    projects: 0,
    hours: 0,
    clients: 0,
    awards: 0,
  })

  const finalValues = {
    projects: 50,
    hours: 5000,
    clients: 30,
    awards: 8,
  }

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    const intervals = Object.keys(finalValues).map((key) => {
      const finalValue = finalValues[key as keyof typeof finalValues]
      const increment = finalValue / steps

      return setInterval(() => {
        setCounters((prev) => {
          const newValue = Math.min(prev[key as keyof typeof prev] + increment, finalValue)
          return { ...prev, [key]: Math.floor(newValue) }
        })
      }, stepDuration)
    })

    setTimeout(() => {
      intervals.forEach(clearInterval)
      setCounters(finalValues)
    }, duration)

    return () => intervals.forEach(clearInterval)
  }, [])

  const facts = [
    {
      icon: Award,
      value: counters.projects,
      suffix: "+",
      label: "Projects Completed",
      color: "text-green-400",
    },
    {
      icon: Clock,
      value: counters.hours,
      suffix: "+",
      label: "Hours Coded",
      color: "text-blue-400",
    },
    {
      icon: Users,
      value: counters.clients,
      suffix: "+",
      label: "Happy Clients",
      color: "text-purple-400",
    },
    {
      icon: Coffee,
      value: counters.awards,
      suffix: "",
      label: "Awards Won",
      color: "text-yellow-400",
    },
  ]

  // return (
    // <div className="py-16 sm:py-20">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
        {/* <div className="text-center mb-12 sm:mb-16"> */}
          {/* <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 animate-fade-in-up">Fun Facts & Numbers</h3>
          <p className="text-gray-300 animate-fade-in-up animation-delay-200">
            Some interesting statistics about my journey
          </p> */}
        // </div>

        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8"> */}
          {/* {facts.map((fact, index) => { */}
            {/* // const IconComponent = fact.icon
            return ( */}
              {/* <Card */}
                {/* // key={fact.label}
                // className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                // style={{ animationDelay: `${index * 200}ms` }} */}
              {/* > */}
                {/* <CardContent className="p-4 sm:p-6 text-center">
                  <div className="mb-3 sm:mb-4">
                    <IconComponent className={`w-8 h-8 mx-auto ${fact.color}`} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {fact.value}
                    {fact.suffix}
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm">{fact.label}</p>
                </CardContent> */}
              {/* </Card> */}
            {/* ) */}
          {/* })} */}
        // </div>
      // </div>
    // </div>
  // )
}
