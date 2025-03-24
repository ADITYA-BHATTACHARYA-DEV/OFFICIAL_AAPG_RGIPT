"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail } from "lucide-react"

const profiles = [
  {
    name: "Dr. Satish Kumar Sinha",
    role: "Faculty Advisor",
    description: `HOD, Petroleum Engineering and GeoEngineering, is our 
chapter's faculty advisor, leading us to reach heights never before attained by a student 
organization. The American Association of Petroleum Geologists (AAPG) student 
chapter at Rajiv Gandhi Institute of Petroleum Technology (RGIPT) is dedicated to 
promoting Geoscience Education and Research.`,
    imgUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Kishan Raj",
    role: "President",
    description:
      "Full-stack developer specializing in React and Node.js. Love turning complex problems into simple solutions.",
    imgUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Abhishek Pandey",
    role: "Vice President",
    description:
      "Digital marketing expert with a focus on growth strategies and brand development across global markets.",
    imgUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Devesh Vishwakarma",
    role: "Secretary",
    description: "Certified PMP with experience in leading cross-functional teams and delivering enterprise solutions.",
    imgUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Anik Bera",
    role: "Vice Secretary",
    description: "Creating compelling content strategies that engage audiences and drive meaningful conversations.",
    imgUrl: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Arun Kumar",
    role: "Treasurer",
    description: "Transforming complex data into actionable insights. Expertise in Python and data visualization.",
    imgUrl: "/placeholder.svg?height=400&width=400",
  },
]

const ProfileCards = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Meet the talented individuals behind our success</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={profile.imgUrl} alt={profile.name} />
                      <AvatarFallback>
                        {profile.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900">{profile.name}</h2>
                      <p className="text-blue-600 font-medium">{profile.role}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{profile.description}</p>
                </CardContent>

                <CardFooter className="bg-gray-50 px-6 py-4">
                  <div className="flex space-x-4 w-full">
                    <Button className="flex-1">
                      <Linkedin className="mr-2 h-4 w-4" /> Connect
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Mail className="mr-2 h-4 w-4" /> Contact
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileCards

