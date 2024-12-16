"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  thumbnail: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Urban Chronicles",
    category: "Documentary",
    thumbnail: "https://images.unsplash.com/photo-1605639156481-244775d6f803?q=80&w=800",
    description: "A deep dive into city life and culture"
  },
  {
    title: "Nature's Whisper",
    category: "Short Film",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800",
    description: "Environmental storytelling at its finest"
  },
  {
    title: "The Last Dance",
    category: "Music Video",
    thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800",
    description: "Choreographed perfection in motion"
  },
  {
    title: "Tech Revolution",
    category: "Corporate",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800",
    description: "Innovation through the lens"
  },
  {
    title: "Street Stories",
    category: "Documentary",
    thumbnail: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=800",
    description: "Tales from the urban jungle"
  },
  {
    title: "Ocean's Call",
    category: "Short Film",
    thumbnail: "https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=800",
    description: "A journey beneath the waves"
  }
];

export function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
      {projects.map((project, index) => (
        <PortfolioItem key={index} project={project} index={index} />
      ))}
    </div>
  );
}

function PortfolioItem({ project, index }: { project: Project; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg"
    >
      <div className="relative h-[400px] w-full">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
            <Play className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-2">{project.category}</p>
            <p className="text-center text-sm">{project.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}