"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-charcoal mb-8">
            LET’S MAKE SOMETHING <br />
            <span className="text-cobalt">PEOPLE ACTUALLY WANT TO WATCH.</span>
          </h2>
          <p className="text-xl text-charcoal/60 mb-16 max-w-2xl mx-auto">
            Have a product, campaign, or idea in mind? Let’s talk about creating content that brings it to life.
          </p>
          
          <form className="grid md:grid-cols-2 gap-6 text-left" onSubmit={e => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-charcoal/50 ml-2">Name</label>
              <input type="text" className="w-full p-4 rounded-2xl bg-ivory border border-charcoal/10 focus:border-cobalt outline-none transition-colors" placeholder="Your Name" required />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-charcoal/50 ml-2">Brand / Company</label>
              <input type="text" className="w-full p-4 rounded-2xl bg-ivory border border-charcoal/10 focus:border-cobalt outline-none transition-colors" placeholder="Company Name" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-charcoal/50 ml-2">Email</label>
              <input type="email" className="w-full p-4 rounded-2xl bg-ivory border border-charcoal/10 focus:border-cobalt outline-none transition-colors" placeholder="email@example.com" required />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-charcoal/50 ml-2">Content Type</label>
              <select className="w-full p-4 rounded-2xl bg-ivory border border-charcoal/10 focus:border-cobalt outline-none transition-colors">
                <option>Talking Head</option>
                <option>Product Demo</option>
                <option>App Walkthrough</option>
                <option>Short-Form Ad</option>
                <option>Educational</option>
                <option>Custom Package</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-charcoal/50 ml-2">Project Details</label>
              <textarea className="w-full p-4 rounded-2xl bg-ivory border border-charcoal/10 focus:border-cobalt outline-none transition-colors h-32" placeholder="Tell me about your goals..."></textarea>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <Button variant="primary" size="lg" className="w-full md:w-auto px-16">
                Send Message
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
