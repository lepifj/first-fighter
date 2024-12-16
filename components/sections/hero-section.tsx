"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    workSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://plus.unsplash.com/premium_photo-1673448391222-be6d528034f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cinematic camera equipment in dark moody lighting"
          fill
          priority
          className="object-cover object-center brightness-50"
          quality={100}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Capturing Stories That Move
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Premium videography and film production for those who demand excellence
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-black"
            onClick={scrollToWork}
          >
            Our Work
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-black"
            onClick={scrollToContact}
          >
            Contact Me
          </Button>
        </div>
      </motion.div>
    </section>
  );
}