import React from "react";
import { Globe, Users, Book, Award, NewspaperIcon, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const Home = () => {
  const content = {
    hero: {
      title: "AAPG RGIPT Student Chapter",
      subtitle: "Rajiv Gandhi Institute of Petroleum Technology",
      description: "Empowering the next generation of petroleum geoscientists through innovation, education, and collaboration."
    },
    features: [
      {
        icon: <Globe className="w-8 h-8 text-blue-600" />,
        title: "Global Network",
        description: "Connect with petroleum professionals and students worldwide"
      },
      {
        icon: <Users className="w-8 h-8 text-blue-600" />,
        title: "Professional Development",
        description: "Access to workshops, conferences, and technical sessions"
      },
      {
        icon: <Book className="w-8 h-8 text-blue-600" />,
        title: "Research Excellence",
        description: "Opportunities to showcase research and gain industry insights"
      }
    ],
    highlights: [
      {
        icon: <Trophy className="w-8 h-8 text-yellow-500" />,
        title: "Outstanding Student Chapter Award",
        description: "RGIPT AAPG Student Chapter recognized for excellence in geological education and research initiatives",
        date: "2024",
        link: "/achievements/outstanding-chapter"
      },
      {
        icon: <Award className="w-8 h-8 text-green-500" />,
        title: "Research Publication Success",
        description: "Our members published 15+ research papers in prestigious international journals",
        date: "2023-2024",
        link: "/research/publications"
      },
      {
        icon: <NewspaperIcon className="w-8 h-8 text-purple-500" />,
        title: "Industry Collaborations",
        description: "New partnerships established with leading petroleum companies for student development",
        date: "Ongoing",
        link: "/partnerships"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center transform transition-all duration-300 ease-in-out">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              {content.hero.title}
            </h1>
            <h2 className="text-2xl text-gray-600 mb-6">
              {content.hero.subtitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {content.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.features.map((feature, index) => (
              <div key={index} className="transform transition duration-300 hover:scale-105">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Highlights Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Latest News & Highlights
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Celebrating our achievements and milestones in advancing geological education and research
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.highlights.map((highlight, index) => (
              <div key={index} className="transform transition duration-300 hover:-translate-y-1">
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-gray-50 rounded-lg">
                        {highlight.icon}
                      </div>
                      <span className="text-sm text-blue-600 font-medium">
                        {highlight.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {highlight.description}
                    </p>
                    <Link 
                      href={highlight.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300 group font-medium"
                    >
                      Read more
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;