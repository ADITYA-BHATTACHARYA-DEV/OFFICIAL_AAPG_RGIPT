"use client";
import type React from "react";
import ImageDisplay from "../components/ImageDisplay";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Events: React.FC = () => {
  const events = [
    {
      title: "Field Trip: Dehradun",
      date: "2024-10-08",
      description:
        "The AAPG RGIPT Student Chapter embarked on a field trip to Dehradun, exploring the Himalayan and Vindhayan foothills. From ancient quartzite formations, including the remarkable Nakhthat, to landscapes spanning the Cambrian and pre-Cambrian eras, the trip brought Earth's history to life. A highlight was a tilted temple, explained by our professor as a testament to Earth's dynamic forces.",
      imageUrl:
        process.env.NEXT_PUBLIC_EVENT_IMAGE_URL_2 || "/field trip collage.png",
    },
    {
      title: "GEOSPRINT 2024",
      date: "2025-02-11",
      description:
        "AAPG RGIPT SC proudly presents GEOSPRINT — a dynamic event offering students a platform to showcase their knowledge and abilities. Teams of four will compete on topics such as current affairs, mathematics, reasoning, and energy sustainability. The top teams will be rewarded with prizes worth up to Rs. 2000.",
      imageUrl:
        process.env.NEXT_PUBLIC_EVENT_IMAGE_URL_1 || "/geosprint collage.jpg",
    },
    {
      title: "QUEST ADVENTURE",
      date: "2024-08-26",
      description:
        "Quest Adventure blends exploration, problem-solving, and communication. The first part challenges participants' general knowledge and observation skills, while the second part focuses on teamwork, crisis management, and analytical thinking.",
      imageUrl:
        process.env.NEXT_PUBLIC_EVENT_IMAGE_URL_1 || "/quest adventure 1.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-10 text-center">
          Upcoming Events
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          Stay updated with our latest events, designed to inspire learning,
          leadership, and personal growth for every aspiring professional.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="rounded-2xl shadow-xl hover:shadow-2xl">
                <ImageDisplay
                  src={event.imageUrl || "/placeholder.svg"}
                  alt={event.title}
                  width={800}
                  height={300}
                />
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {event.title}
                  </h2>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {event.description}
                  </p>
                  <p className="text-sm text-blue-600 font-semibold">
                    Date: {new Date(event.date).toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;