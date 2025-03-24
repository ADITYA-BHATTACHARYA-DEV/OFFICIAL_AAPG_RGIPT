"use client"

import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Users, Target, Book, Award } from "lucide-react"

const About: React.FC = () => {
  const missionPoints = [
    {
      icon: <Book className="w-6 h-6 text-blue-600" />,
      title: "Scientific Research",
      description: "Foster cutting-edge research in petroleum geosciences"
    },
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: "Technology Advancement",
      description: "Promote innovative technologies in the field"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Professional Development",
      description: "Support student growth and career advancement"
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      title: "Excellence",
      description: "Inspire high professional conduct and standards"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About AAPG RGIPT SC</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The premier forum for petroleum geoscience excellence at RGIPT
          </p>
        </motion.div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              The purpose of the AAPG RGIPT Student Chapter is to provide an effective forum for offering chances for AAPG, RGIPT, and other members. India's colleges are spread out. Dr. Satish Kumar Sinha, the HOD of Petroleum, served as their mentor.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With Engineering and Geosciences serving as our chapter's faculty advisor, we want to reach heights never before attained by a student organisation. The AAPG Student Chapter at RGIPT is the official forum for students studying chemical and petroleum engineering, providing them with a stage to display their abilities to the entire petroleum community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about aapg.jpg"
                alt="AAPG RGIPT"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full opacity-50 z-0" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 z-0" />
          </motion.div>
        </div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Mission</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missionPoints.map((point, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-gray-50 hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            To foster scientific research, advance the science of geology, promote technology, and inspire
            high professional conduct in the fields of petroleum geosciences.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default About