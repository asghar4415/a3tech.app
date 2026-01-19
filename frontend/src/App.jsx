import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import Services from "./sections/services";
import Work from "./sections/work";
import Process from "./sections/process";
import Contact from "./sections/contact";
import { Linkedin, Github, Instagram, X } from "lucide-react";

function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Work />
      <Process />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-brand-dark min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        {/* Unified Footer: Removed the duplicate from Home() */}
        <footer className="py-16 bg-brand-dark border-t border-white/5 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
            {/* Brand */}
            <div className="text-2xl font-black tracking-tighter text-brand-light">
              A3<span className="text-brand-orange">.</span>
            </div>

            {/* Copyright */}
            <p className="text-brand-beige/20 text-[10px] tracking-[0.3em] uppercase font-bold text-center">
              © 2025 A3 Technologies • a3tech.app
            </p>

            {/* Footer Socials */}
            <div className="flex gap-6 text-brand-beige/40">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-orange transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-orange transition-colors"
              >
                <X size={18} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-orange transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-orange transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
