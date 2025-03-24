import type React from "react"
import ImageDisplay from "../components/ImageDisplay"

const Events: React.FC = () => {
  // This could be fetched from an API or CMS in a real application
  const events = [
    {
      title: "Field Trip: Dehradoon",
      date: "2024-10-08",
      description: "A hands-on field trip to Dehradoon",
      imageUrl: process.env.NEXT_PUBLIC_EVENT_IMAGE_URL_2 || "/field trip 4.jpg",
    },
    {
      title: "GEOSPRINT 2024",
      date: "2025-02-11",
      description: "AAPG RGIPT SC proudly presents GEOSPRINT. An exciting event that gives students a platform to showcase their mental and physical abilities.Participants are required to make teams of 4. Participants are required to prepare on topics such as Current affairs, Basic Mathematics, Reasoning, Energy and sustainability.Taking part in this event will enrich the participants experience and contribute to their personal growth. The top performing teams will be awarded with prizes worth upto Rs. 2000.",
      imageUrl: process.env.NEXT_PUBLIC_EVENT_IMAGE_URL_1 || "/geosprint collage.jpg",
    },
    {
      title: "QUEST ADVENTURE",
      date: "2024-08-26",
      description: "An adventure quest aims at combining explorations, character development skills together with problem-solving abilities hence the event has two parts.The first part requires testing of your general knowledge, you answer the questions correctly get clues for finding the next place in this case, test your photo identification ability and for the second one there have complex topics that require communication skills together with crisis handling capabilities.",
      imageUrl: process.env.NEXT_PUBLIC_EVENT_IMAGE_URL_1 || "/quest adventure 1.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8"> Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <ImageDisplay src={event.imageUrl || "/placeholder.svg"} alt={event.title} width={800} height={300} />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <p className="text-sm text-gray-500">Date: {event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Events

