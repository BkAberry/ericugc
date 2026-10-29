"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const CATEGORIES = ["ALL WORK", "HEALTH & FITNESS", "TECH & APPS", "LIFESTYLE", "EDUCATION", "PRODUCT DEMOS"];

export const Portfolio = () => {
  const [filter, setFilter] = useState("ALL WORK");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === "ALL WORK" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="work" className="py-32 px-6 bg-ivory-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-charcoal mb-6"
          >
            THE WORK SPEAKS FOR ITSELF.
          </motion.h2>
          <p className="text-lg text-charcoal/60 max-w-2xl mx-auto">
            “From scroll-stopping hooks to authentic product storytelling — here’s what I create.”
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-xs font-bold transition-all border",
                filter === cat 
                  ? "bg-cobalt text-white border-cobalt shadow-lg scale-105" 
                  : "bg-white text-charcoal border-charcoal/10 hover:border-cobalt"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[9/16] rounded-3xl overflow-hidden video-card-shadow bg-charcoal">
                  <video 
                    src={project.videoSrc} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    muted 
                    loop 
                    onMouseOver={e => e.currentTarget.play()}
                    onMouseOut={e => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-0 p-6 w-full">
                    <span className="text-[10px] font-bold text-cobalt uppercase tracking-widest mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/70 mt-1">{project.brand}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-charcoal/95 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <video 
                src={selectedProject.videoSrc} 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full text-white flex items-center justify-center hover:bg-white/40 transition-colors"
              >
                <X size={20} />
              </button>
            </motion.div>
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center text-white max-w-md px-6">
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-white/70">{selectedProject.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
