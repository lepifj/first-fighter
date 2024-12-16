"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Award, Users, Trophy } from 'lucide-react';

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const stats = [
    { icon: <Trophy className="h-6 w-6" />, value: "10+", label: "Years Experience" },
    { icon: <Users className="h-6 w-6" />, value: "200+", label: "Satisfied Clients" },
    { icon: <Award className="h-6 w-6" />, value: "15+", label: "Industry Awards" }
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="grid md:grid-cols-2 gap-12 items-center"
    >
      <div className="relative h-[600px] rounded-lg overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1601506521793-dc748fc80b67?q=80&w=1200"
          alt="John Doe - First Fighter Founder"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Dave Lavaki</h3>
          <p className="text-primary mb-6">Founder & Creative Director</p>
          
          <p className="text-gray-300 mb-6">
            With over a decade of experience in visual storytelling, I've dedicated my career to capturing 
            moments that move people. What started as a passion project has grown into First Fighter, 
            a creative powerhouse that transforms visions into compelling visual narratives.
          </p>
          
          <p className="text-gray-300 mb-8">
            Our approach combines technical excellence with artistic vision, ensuring each project 
            not only meets but exceeds expectations. From award-winning documentaries to viral 
            commercial campaigns, we bring stories to life in ways that resonate and inspire.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center p-4 rounded-lg bg-gray-900/50"
              >
                <div className="flex justify-center mb-2 text-primary">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}