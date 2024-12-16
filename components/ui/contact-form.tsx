"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add form submission logic here
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Input
            placeholder="Your Name"
            className="bg-black/50 border-primary/30 focus:border-primary"
            required
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Your Email"
            className="bg-black/50 border-primary/30 focus:border-primary"
            required
          />
        </div>
      </div>
      <div>
        <Input
          placeholder="Subject"
          className="bg-black/50 border-primary/30 focus:border-primary"
          required
        />
      </div>
      <div>
        <Textarea
          placeholder="Your Message"
          className="bg-black/50 border-primary/30 focus:border-primary min-h-[150px]"
          required
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-black font-semibold"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </motion.form>
  );
}