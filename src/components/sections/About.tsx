"use client";
import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site-config";
import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <Image 
              src={siteConfig.profilePhoto} 
              alt={siteConfig.name} 
              fill 
              className="object-cover"
            />
          </div>
          <div className="absolute -top-6 -right-6 bg-cobalt text-white p-6 rounded-2xl shadow-xl font-bold rotate-6 hidden md:block">
            Biomedical Sciences
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-charcoal mb-8">
            HEY, I’M ERIC.
          </h2>
          <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
            <p>
              “I’m a biomedical sciences graduate, aspiring physician, and creative storyteller who loves turning ideas into engaging content. My interests span health, fitness, technology, and education — and I bring that curiosity into every video I create.”
            </p>
            <p>
              “I believe great UGC should feel human, not scripted. My approach combines research, personality, and thoughtful editing to help brands communicate naturally with their audiences.”
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-ivory-dark border border-charcoal/5">
              <h4 className="font-bold text-charcoal mb-2">Expertise</h4>
              <p className="text-sm text-charcoal/60">Health, Tech, Fitness, EdTech</p>
            </div>
            <div className="p-6 rounded-2xl bg-ivory-dark border border-charcoal/5">
              <h4 className="font-bold text-charcoal mb-2">Education</h4>
              <p className="text-sm text-charcoal/60">B.S. Biomedical Sciences</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
