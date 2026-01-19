import { motion } from "framer-motion";

const projects = [
  {
    title: "Vantage Dashboard",
    category: "SaaS & Analytics",
    // Clean, high-res tech dashboard image
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Pulse Fitness",
    category: "Mobile Application",
    // Modern mobile UI feel
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Aura Retail",
    category: "E-Commerce Platform",
    // Minimalist retail/fashion store feel
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Zenith Consult",
    category: "Corporate Web Experience",
    // Professional clean corporate architecture
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-32 bg-brand-dark px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-orange font-mono text-xs uppercase tracking-[0.3em]"
          >
            Case Studies
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-brand-light mt-4"
          >
            RECENT PROJECTS<span className="text-brand-orange">.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="flex flex-col cursor-default"
            >
              {/* Image Container - No Link */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white/5 border border-white/10">
                <img
                  src={project.img}
                  alt={project.title}
                  className="object-cover w-full h-full grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700 ease-in-out"
                />
              </div>

              {/* Content */}
              <div className="mt-8">
                <div className="flex items-center gap-4 mb-2">
                  <span className="h-[1px] w-8 bg-brand-orange"></span>
                  <p className="text-brand-orange font-mono text-[10px] uppercase tracking-widest leading-none">
                    {project.category}
                  </p>
                </div>
                <h3 className="text-3xl font-bold text-brand-light tracking-tight">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
