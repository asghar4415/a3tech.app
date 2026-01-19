import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram, // FIXED: Added missing import
  X, // FIXED: Added missing import
  Loader2,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const API_URL = import.meta.env.VITE_API_URL;

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-brand-dark text-brand-light px-6 md:px-12 relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
            LET'S WORK
            <br />
            TOGETHER<span className="text-brand-orange">.</span>
          </h2>
          <p className="text-brand-beige/60 text-lg mb-12 max-w-md font-light leading-relaxed">
            Have a project in mind? We’re currently accepting new clients for
            2025.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="p-3 border border-brand-beige/10 rounded-full group-hover:bg-brand-orange transition-all duration-300">
                <Mail size={20} className="group-hover:text-brand-dark" />
              </div>
              <span className="text-brand-beige font-medium font-mono text-sm">
                asghar778788@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 border border-brand-beige/10 rounded-full">
                <MapPin size={20} />
              </div>
              <span className="text-brand-beige font-medium">
                Remote / Global
              </span>
            </div>
          </div>

          <div className="flex gap-6 mt-12">
            {/* Added target="_blank" to keep users on your site when they click socials */}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="p-3 border border-brand-beige/10 rounded-full text-brand-beige/40 hover:text-brand-orange hover:border-brand-orange transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="p-3 border border-brand-beige/10 rounded-full text-brand-beige/40 hover:text-brand-orange hover:border-brand-orange transition-all"
            >
              <X size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="p-3 border border-brand-beige/10 rounded-full text-brand-beige/40 hover:text-brand-orange hover:border-brand-orange transition-all"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="p-3 border border-brand-beige/10 rounded-full text-brand-beige/40 hover:text-brand-orange hover:border-brand-orange transition-all"
            >
              <Github size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <input
              required
              type="text"
              placeholder="YOUR NAME"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-transparent border-b border-brand-beige/20 py-4 outline-none focus:border-brand-orange transition-colors placeholder:text-brand-beige/20 text-sm tracking-widest uppercase font-bold"
            />
            <input
              required
              type="email"
              placeholder="EMAIL ADDRESS"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-transparent border-b border-brand-beige/20 py-4 outline-none focus:border-brand-orange transition-colors placeholder:text-brand-beige/20 text-sm tracking-widest uppercase font-bold"
            />
            <textarea
              required
              rows="4"
              placeholder="TELL US ABOUT THE PROJECT"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-transparent border-b border-brand-beige/20 py-4 outline-none focus:border-brand-orange transition-colors placeholder:text-brand-beige/20 text-sm tracking-widest uppercase font-bold resize-none"
            />

            <button
              disabled={status === "loading"}
              className="group flex items-center gap-3 bg-brand-orange text-brand-dark px-8 py-4 rounded-full font-black text-sm tracking-widest uppercase hover:scale-105 transition-all disabled:opacity-50"
            >
              {status === "loading" ? (
                <Loader2 className="animate-spin" />
              ) : status === "success" ? (
                "Sent!"
              ) : (
                "Send Message"
              )}
              {status === "idle" && <ArrowUpRight size={18} />}
            </button>

            {status === "error" && (
              <p className="text-red-400 text-xs font-bold">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
