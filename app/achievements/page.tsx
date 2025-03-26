"use client";

import React from "react";
import ImageDisplay from "../components/ImageDisplay";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "IMPERIAL BARREL AWARD",
      year: "2023",
      category: "Competition",
      highlight: "3rd Rank in Asia Pacific Region",
      prize: "$500 Scholarship",
      description:
        "Team AAPG RGIPT secured 3rd rank in the Imperial Barrel Award Asia Pacific semifinals, earning a $500 scholarship. Congratulations to all team members for their dedication and excellence.",
      imageUrl: process.env.NEXT_PUBLIC_ACHIEVEMENT_IMAGE_URL_1 || "/iba award.jpg",
    },
    {
      title: "L AUSTIN WEEK'S UNDERGRADUATE GRANT",
      year: "2024",
      category: "Research Grant",
      highlight: "Prestigious Research Funding",
      prize: "USD 500",
      description:
        "Proud to announce the securing of the L Austin Week's Grant — a USD 500 funding that fuels innovative petroleum geology research projects.",
      imageUrl: process.env.NEXT_PUBLIC_ACHIEVEMENT_IMAGE_URL_2 || "/l austin grant 1.jpg",
    },
    {
      title: "SWITCH ENERGY CASE STUDY COMPETITION",
      year: "2024",
      category: "Case Competition",
      highlight: "Semifinalist",
      description:
        "A proud moment for AAPG RGIPT as semifinalists in the Switch Energy Competition — fostering multidisciplinary, innovative solutions for a sustainable energy future.",
      imageUrl: process.env.NEXT_PUBLIC_ACHIEVEMENT_IMAGE_URL_2 || "/semifinalist switch energy 2.jpg",
    },
    {
      title: "SMART INDIA HACKATHON",
      year: "2024",
      category: "Practical Solution-Oriented Hackathon",
      highlight: "Semifinalist",
      description:
        "Team MYSTIQUE's journey at Smart India Hackathon 2024 showcased remarkable innovation, developing an advanced facial recognition technology for Madhya Pradesh Police using AI and decentralized storage. Their diverse six-member team from different engineering disciplines worked intensively during the 36-hour hackathon at LNCT Group of Colleges in Bhopal. Though they didn't win, the experience was transformative, offering invaluable lessons in teamwork, technological problem-solving, and pushing innovative boundaries.",
      imageUrl: process.env.NEXT_PUBLIC_ACHIEVEMENT_IMAGE_URL_2 || "/vaibhav sih.jpg",
    },
    {
      title: "SUSTAINABLE DEVELOPMENT ENERGY COMPETITION",
      year: "2024",
      category: "Sustainability",
      highlight: "Innovation in Energy",
      description:
        "Recognition for participation in the Sustainable Energy Competition, promoting critical thinking and impactful solutions for global energy challenges.",
      imageUrl: process.env.NEXT_PUBLIC_ACHIEVEMENT_IMAGE_URL_2 || "/sdc comp.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in-up">
          Our Achievements
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
          Celebrating excellence, innovation, and dedication in petroleum geosciences
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 bg-white">
              <div className="relative">
                <span className="absolute top-4 right-4 px-4 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold rounded-full shadow-md">
                  {achievement.category}
                </span>
                <ImageDisplay
                  src={achievement.imageUrl}
                  alt={achievement.title}
                  width={800}
                  height={400}
                  className="object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-blue-700 mb-3">
                  <Trophy className="w-5 h-5" />
                  <span className="font-semibold">{achievement.highlight}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {achievement.title}
                </h2>
                <div className="flex items-center gap-2 text-gray-500 mb-4 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{achievement.year}</span>
                  {achievement.prize && (
                    <>
                      <span className="mx-2">•</span>
                      <span className="text-green-600 font-medium">
                        {achievement.prize}
                      </span>
                    </>
                  )}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center py-16">
        <p className="text-gray-700 text-lg">
          Inspired? Stay connected with AAPG RGIPT for more milestones and
          opportunities.
        </p>
      </div>
    </div>
  );
};

export default Achievements;
