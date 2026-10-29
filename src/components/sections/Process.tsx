"use client";
import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "LET'S CONNECT",
    desc: "We discuss your brand, goals, audience, and creative direction.",
  },
  {
    num: "02",
    title: "THE CREATIVE PLAN",
    desc: "I develop concepts, hooks, and scripts tailored to your campaign.",
  },
  {
    num: "03",
    title: "PRODUCTION",
    desc: "I film and edit polished content that fits your brand.",
  },
  {
    num: "04",
    title: "DELIVERY",
    desc: "You receive the finished assets in the agreed formats, ready for review and use.",
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-32 px-6 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-charcoal mb-6">
            HOW IT WORKS
          </h2>
          <p className="text-lg text-charcoal/60 max-w-2xl mx-auto">
            A streamlined workflow designed for efficiency and quality.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative p-8 rounded-3xl bg-white border border-charcoal/5 shadow-sm"
            >
              <span className="text-5xl font-black text-cobalt/20 absolute top-4 right-6">
                {step.num}
              </span>
              <h3 className="text-xl font-bold text-charcoal mb-4 relative z-10">
                {step.title}
              </h3>
              <p className="text-charcoal/60 leading-relaxed relative z-10">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
