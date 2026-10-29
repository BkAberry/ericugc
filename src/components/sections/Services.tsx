"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { CheckCircle2 } from "lucide-react";

const SERVICES = [
  {
    title: "Talking-Head UGC",
    desc: "Authentic direct-to-camera videos with strong hooks and clear messaging.",
  },
  {
    title: "Product Demonstrations",
    desc: "Natural demonstrations highlighting product features and real-world use cases.",
  },
  {
    title: "App & Software Walkthroughs",
    desc: "Screen recordings, voiceovers, tutorials, and product explanations.",
  },
  {
    title: "Short-Form Video Ads",
    desc: "Creative concepts designed for TikTok, Instagram Reels, and paid social.",
  },
  {
    title: "Educational Content",
    desc: "Clear, approachable explanations for health, science, education, and technology brands.",
  },
  {
    title: "Creative Packages",
    desc: "Bundled video concepts, scripts, editing, and variations.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 px-6 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            MY SERVICES
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Premium content tailored to convert viewers into customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-cobalt flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button variant="primary" size="lg" className="px-12">
            Request a Custom Package
          </Button>
        </div>
      </div>
    </section>
  );
};
