"use client"

import { useState, type FormEvent, type ChangeEvent } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Harshal", // Your name
      }

      // Send email using EmailJS
      const response = await emailjs.send(
        'service_dn35aot', // Correct Service ID
        'template_ppqw5cu', // Correct Template ID
        templateParams,
        'zph9IQOVXV4TObPZR' // Correct Public Key
      )

      if (response.status === 200) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you soon.",
          variant: "default",
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-full px-4 sm:px-6 lg:px-8 py-16 md:py-20 pb-24 md:pb-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <CheckCircle className="w-16 h-16 text-green-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Message Sent!
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Thank you for reaching out. I'll get back to you as soon as possible.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-full px-4 sm:px-6 lg:px-8 py-16 md:py-20 pb-24 md:pb-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-in-up">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto animate-fade-in-up animation-delay-200 px-4">
            Let&#39;s discuss your next project or just say hello.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Let&#39;s Connect</h3>

            <ul className="space-y-4 sm:space-y-6 mb-6 sm:mb-8 text-sm sm:text-base">
              <li className="flex items-center gap-3">
                <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-green-400" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-300">harshalpanchal4517@gmail.com</p>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-300">+91&nbsp;7862813677</p>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-purple-400" />
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-300">Gandhinagar&nbsp;Gujarat,&nbsp;India</p>
                </div>
              </li>
            </ul>

            <p className="text-gray-300 text-sm sm:text-base">
              I&#39;m always interested in new opportunities and exciting projects. Whether you have a question or just
              want to say hi, I&#39;ll try my best to get back to you!
            </p>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-white text-lg sm:text-xl">Send Message</CardTitle>
              </CardHeader>

              <CardContent className="p-4 sm:p-6 pt-0">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-sm sm:text-base"
                    required
                  />

                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-sm sm:text-base"
                    required
                  />

                  <Textarea
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 resize-none text-sm sm:text-base"
                    required
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
