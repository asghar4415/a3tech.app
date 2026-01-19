import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Linkedin, Github, Instagram, X } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 mix-blend-difference"
    >
      <Link to="/" className="text-2xl font-black tracking-tighter text-white">
        A3<span className="text-brand-orange">.</span>
      </Link>

      <div className="flex items-center gap-10">
        <div className="hidden md:flex space-x-10 text-[10px] uppercase tracking-[0.2em] font-bold text-white">
          <a href="#services" className="hover:text-brand-orange transition">
            Services
          </a>
          <a href="#work" className="hover:text-brand-orange transition">
            Work
          </a>
          <a href="#contact" className="hover:text-brand-orange transition">
            Contact
          </a>
        </div>

        <div className="hidden lg:flex items-center gap-5 border-l border-white/20 pl-10 text-white">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-orange transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-orange transition-colors"
          >
            <X size={16} />
          </a>
          {/* Added Instagram to match the other sections */}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-orange transition-colors"
          >
            <Instagram size={16} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-orange transition-colors"
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
