"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "What types of brands do you work with?",
    a: "I specialize in Health, Fitness, Lifestyle, Tech, and Education brands that want authentic, human-centric content that connects with their audience.",
  },
  {
    q: "Do you offer individual videos and packages?",
    a: "Yes, I offer everything from single high-converting videos to comprehensive content bundles depending on your campaign needs.",
  },
  {
    q: "Can you write the scripts?",
    a: "Absolutely. I can work from your existing briefs or develop the hooks and scripts from scratch based on your goals.",
  },
  {
    q: "What is your typical turnaround time?",
    a: "Turnaround times vary by project complexity, but we will agree on a delivery schedule during the onboarding process.",
  },
  {
    q: "Are revisions included?",
    a: "Yes, I typically include a set number of revisions per video to ensure the final product aligns perfectly with your vision.",
  },
  {
    q: "How do usage rights work?",
    a: "Usage rights and licensing are agreed upon on a per-project basis to fit your distribution strategy.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-6 bg-ivory-dark">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-charcoal mb-6">
            FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl border border-charcoal/5 overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-charcoal/5 transition-colors"
              >
                <span className="font-bold text-charcoal">{faq.q}</span>
                <ChevronDown className={cn("transition-transform", openIndex === i && "rotate-180")} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-charcoal/70 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
