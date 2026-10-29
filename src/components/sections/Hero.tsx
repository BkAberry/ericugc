"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { siteConfig } from "@/data/site-config";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-cobalt/10 text-cobalt text-xs font-bold tracking-widest mb-6">
            UGC CREATOR • ON-CAMERA TALENT • STORYTELLER
          </span>
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter text-charcoal mb-8">
            CONTENT THAT <br /> 
            <span className="text-cobalt">FEELS REAL.</span> <br />
            CREATIVE THAT <br />
            <span className="text-cobalt">GETS NOTICED.</span>
          </h1>
          <p className="text-lg md:text-xl text-charcoal/70 max-w-lg mb-10 leading-relaxed">
            “I’m Eric — a UGC creator bringing personality, storytelling, and a fresh perspective to brands in health, fitness, lifestyle, tech, and education.”
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg" className="px-10">
              Explore My Work
            </Button>
            <Button variant="outline" size="lg">
              Work With Me
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <Image 
              src={siteConfig.profilePhoto} 
              alt={siteConfig.name} 
              fill 
              className="object-cover"
              priority
            />
          </div>
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-charcoal/5 z-20"
          >
            <p className="text-xs font-bold text-charcoal uppercase tracking-tighter">
              Your Next Creative Partner
            </p>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cobalt/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};
