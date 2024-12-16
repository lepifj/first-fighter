"use client";

import { ContactForm } from "@/components/ui/contact-form";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Create Something Amazing
            </h2>
            <p className="text-gray-400 mb-8">
              Ready to bring your vision to life? We're here to help make it happen.
              Share your project details with us, and we'll get back to you within 24 hours.
            </p>
            <div className="aspect-[16/9] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80"
                alt="Film Production"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="bg-black/40 p-8 rounded-lg backdrop-blur-sm border border-primary/20">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}