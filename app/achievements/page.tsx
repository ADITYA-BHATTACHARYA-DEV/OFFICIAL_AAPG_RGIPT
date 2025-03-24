import React from "react";
import ImageDisplay from "../components/ImageDisplay";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Calendar, ChevronRight } from "lucide-react";

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "IMPERIAL BARREL AWARD",
      year: "2023",
      category: "Competition",
      highlight: "3rd Rank in Asia Pacific Region",
      prize: "$500 Scholarship",
      description: "Congratulations Team AAPG RGIPT on securing the 3rd rank in the Imperial Barrel Award Asia Pacific region semifinals and winning a $500 scholarship. Your hard work, dedication, and teamwork have paid off, and we are proud of your achievement. Special shoutout to team members Mr.Pawan Khatri, Mr.Jitendra Argal, Mr.Abul Aas, Mr.Mohit Singh, Mr.Animesh Raghuvanshi for their outstanding contributions. This accomplishment in the Asia Pacific region semifinals is a stepping stone towards greater heights. May this success inspire you to reach new milestones and conquer even greater challenges in your future endeavors.",
      imageUrl: process.env.NEXT_PUBLIC_ACHIEVEMENT_IMAGE_URL_1 || "/iba award.jpg",
    },
    {
      title: "L AUSTIN WEEK'S UNDERGRADUATE GRANT",
      year: "2024",
      category: "Research Grant",
      highlight: "Prestigious Research Funding",
      prize: "USD 500",
      description: "It is with immense pride that we announce the commendable achievement of securing the prestigious L Austin Week's Grant, a substantial USD 500 endorsement, fueling the passion and dedication of our adept team members to delve deeper into the fascinating realm of petroleum geology and embark on their groundbreaking project.",
      imageUrl: process.env.NEXT_PUBLIC_ACHIEVEMENT_IMAGE_URL_2 || "/l austin grant 1.jpg",
    },
    {
      title: "SWITCH ENERGY CASE STUDY COMPETITION",
      year: "2024",
      category: "Case Competition",
      highlight: "Semifinalist",
      description: "The Switch Competition will challenge and make you think critically about how the world can transition to a sustainable, equitable energy future. You do not need to have technical experience or knowledge. Instead, the Switch Competition places a premium on multidisciplinary solutions, and is appropriate for students pursuing any academic discipline. There is no entry fee.",
      imageUrl: process.env.NEXT_PUBLIC_ACHIEVEMENT_IMAGE_URL_2 || "/semifinalist switch energy 2.jpg",
    },
    {
      title: "SUSTAINABLE DEVELOPMENT ENERGY COMPETITION",
      year: "2024",
      category: "Sustainability",
      highlight: "Innovation in Energy",
      description: "The Sustainable Energy Competition will challenge and make you think critically about how the world can transition to a sustainable, equitable energy future. You do not need to have technical experience or knowledge. Instead, the Switch Competition places a premium on multidisciplinary solutions, and is appropriate for students pursuing any academic discipline. There is no entry fee.",
      imageUrl: process.env.NEXT_PUBLIC_ACHIEVEMENT_IMAGE_URL_2 || "/sdc comp.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating excellence and innovation in petroleum geosciences
            </p>
          </div>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <div className="relative">
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium">
                    {achievement.category}
                  </span>
                </div>
                <ImageDisplay
                  src={achievement.imageUrl}
                  alt={achievement.title}
                  width={800}
                  height={400}
                  className="object-cover w-full h-64"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center gap-2 text-blue-600 mb-4">
                  <Trophy className="w-5 h-5" />
                  <span className="font-medium">{achievement.highlight}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {achievement.title}
                </h2>
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{achievement.year}</span>
                  {achievement.prize && (
                    <>
                      <span className="mx-2">•</span>
                      <span className="text-green-600 font-medium">{achievement.prize}</span>
                    </>
                  )}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;