import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Process />
      <FAQ />
      <Contact />
      
      <footer className="py-12 px-6 bg-charcoal text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold tracking-tighter">ERIC GOMEZ</h3>
            <p className="text-white/50 text-sm">UGC Creator • 2026</p>
          </div>
          <div className="flex gap-6 text-sm font-medium text-white/70">
            <a href="#work" className="hover:text-cobalt transition-colors">Work</a>
            <a href="#about" className="hover:text-cobalt transition-colors">About</a>
            <a href="#contact" className="hover:text-cobalt transition-colors">Contact</a>
          </div>
          <p className="text-white/30 text-xs italic">
            GOOD CONTENT GETS SEEN. GREAT CONTENT GETS REMEMBERED.
          </p>
        </div>
      </footer>
    </main>
  );
}
