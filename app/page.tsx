'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Globe, Users, Book, Award, NewspaperIcon, Trophy } from 'lucide-react';

const Home = () => {
  const content = {
    hero: {
      title: 'AAPG RGIPT Student Chapter',
      subtitle: 'Rajiv Gandhi Institute of Petroleum Technology',
      description:
        'Empowering the next generation of petroleum geoscientists through innovation, education, and collaboration.',
    },
    heroImages: [
      './aapg field.jpg',
      '/orientation 4.jpg',
      '/workshop.jpg',
    ],
    features: [
      { icon: <Globe className="w-8 h-8 text-blue-600 animate-pulse" />, title: 'Global Network', description: 'Connect with petroleum professionals and students worldwide' },
      { icon: <Users className="w-8 h-8 text-blue-600 animate-pulse" />, title: 'Professional Development', description: 'Access to workshops, conferences, and technical sessions' },
      { icon: <Book className="w-8 h-8 text-blue-600 animate-pulse" />, title: 'Research Excellence', description: 'Opportunities to showcase research and gain industry insights' },
    ],
    highlights: [
      { icon: <Trophy className="w-8 h-8 text-yellow-500" />, title: 'Outstanding Student Chapter Award', description: 'Recognized for excellence in geological education and research initiatives', date: '2024' },
      { icon: <Award className="w-8 h-8 text-green-500" />, title: 'Webinars', description: '10+ webinars featuring expert industrial insights.', date: '2023-2024' },
      { icon: <NewspaperIcon className="w-8 h-8 text-purple-500" />, title: 'Industry Collaborations', description: 'New partnerships established with leading petroleum companies', date: 'Ongoing' },
    ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <motion.section
        className="relative overflow-hidden bg-white py-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 className="text-5xl font-bold text-blue-900 mb-4" initial={{ y: -20 }} animate={{ y: 0 }} transition={{ delay: 0.3 }}>{content.hero.title}</motion.h1>
          <motion.h2 className="text-2xl text-blue-700 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>{content.hero.subtitle}</motion.h2>
          <motion.p className="text-xl text-blue-600 mx-auto max-w-3xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>{content.hero.description}</motion.p>
        </div>

        <div className="max-w-5xl mx-auto mt-12 px-4">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={4000}
            transitionTime={700}
            swipeable
            emulateTouch
            dynamicHeight
          >
            {content.heroImages.map((src, idx) => (
              <motion.div key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <img
                  src={src}
                  alt={`AAPG Event ${idx + 1}`}
                  className="rounded-2xl shadow-xl object-cover w-full h-96"
                />
              </motion.div>
            ))}
          </Carousel>
        </div>
      </motion.section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl shadow p-6 cursor-pointer"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Latest News & Highlights</h2>
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={4000}
            transitionTime={700}
          >
            {content.highlights.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white border-t-4 border-blue-500 rounded-xl shadow p-8 mx-4 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <span className="text-sm text-blue-600 font-medium block mb-4">{item.date}</span>
              </motion.div>
            ))}
          </Carousel>
        </div>
      </section>
    </main>
  );
};

export default Home;