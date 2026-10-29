"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-ivory/80 backdrop-blur-md rounded-full px-6 py-3 border border-charcoal/10 shadow-sm">
        <div className="text-charcoal font-bold text-xl tracking-tighter">
          ERIC GOMEZ
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-charcoal/70 hover:text-cobalt transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" size="sm" className="text-xs">
            LET'S COLLABORATE
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-charcoal" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-6 right-6 bg-ivory rounded-3xl p-6 shadow-xl border border-charcoal/10 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-charcoal hover:text-cobalt transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button variant="primary" className="w-full">
                LET'S COLLABORATE
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
