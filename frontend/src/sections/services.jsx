import { motion } from "framer-motion";
import { Code, Globe, Zap } from "lucide-react";

const services = [
  {
    title: "App Development",
    desc: "Native-feel experiences using modern stacks.",
    icon: <Zap size={32} />,
  },
  {
    title: "UI/UX Design",
    desc: "Minimal interfaces focused on conversion.",
    icon: <Globe size={32} />,
  },
  {
    title: "Cloud Solutions",
    desc: "Scalable infrastructure for growing teams.",
    icon: <Code size={32} />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-32 bg-brandLight text-brandDark px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black tracking-tighter mb-20">
          OUR EXPERTISE<span className="text-brandOrange">.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-0 border-t border-brandDark/10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ backgroundColor: "#F5E7C6" }}
              className="p-12 border-b md:border-b-0 md:border-r border-brandDark/10 transition-colors cursor-default"
            >
              <div className="text-brandOrange mb-8">{s.icon}</div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">
                {s.title}
              </h3>
              <p className="text-brandDark/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
