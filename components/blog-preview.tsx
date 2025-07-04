"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, Eye } from "lucide-react"

export default function BlogPreview() {
  const articles = [
    {
      title: "Building Interactive 3D Websites with Three.js",
      excerpt: "Learn how to create stunning 3D web experiences that engage users and stand out from the crowd.",
      date: "Dec 15, 2023",
      readTime: "8 min read",
      category: "Tutorial",
      image: "/placeholder.svg?height=200&width=300",
      views: "2.1k",
    },
    {
      title: "The Future of Web Development in 2024",
      excerpt: "Exploring upcoming trends, technologies, and best practices that will shape web development.",
      date: "Dec 10, 2023",
      readTime: "6 min read",
      category: "Insights",
      image: "/placeholder.svg?height=200&width=300",
      views: "1.8k",
    },
    {
      title: "Optimizing React Performance: Tips & Tricks",
      excerpt: "Practical strategies to make your React applications faster and more efficient.",
      date: "Dec 5, 2023",
      readTime: "10 min read",
      category: "Tutorial",
      image: "/placeholder.svg?height=200&width=300",
      views: "3.2k",
    },
  ]

  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 animate-fade-in-up">Latest Articles</h3>
          <p className="text-gray-300 animate-fade-in-up animation-delay-200">
            Sharing knowledge and insights about web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {articles.map((article, index) => (
            <Card
              key={article.title}
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in-up group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className={`${
                      article.category === "Tutorial"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-blue-500/20 text-blue-400"
                    } border-0`}
                  >
                    {article.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                  <Eye className="w-3 h-3 text-white" />
                  <span className="text-white text-xs">{article.views}</span>
                </div>
              </div>

              <CardContent className="p-4 sm:p-6">
                <h4 className="text-white text-lg font-semibold mb-3 line-clamp-2">{article.title}</h4>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{article.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{article.date}</span>
                  </div>
                  <span>{article.readTime}</span>
                </div>

                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:text-green-400 hover:bg-white/10 p-0 h-auto group"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold backdrop-blur-sm"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </div>
  )
}
