"use client";

import { Film, Camera, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: <Film className="h-8 w-8" />,
    title: "Film Production",
    description: "Full-scale film production from concept to final cut"
  },
  {
    icon: <Camera className="h-8 w-8" />,
    title: "Commercial Videos",
    description: "High-impact videos that elevate your brand"
  },
  {
    icon: <Play className="h-8 w-8" />,
    title: "Documentary",
    description: "Compelling storytelling that captures reality"
  }
];

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Services
        </h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center p-6 rounded-lg bg-black border border-primary/20 hover:border-primary/50 transition-colors"
            >
              <div className="inline-block p-4 rounded-full bg-primary/10 mb-4 text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}