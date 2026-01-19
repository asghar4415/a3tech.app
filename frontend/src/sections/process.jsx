import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    name: "Analyze",
    desc: "We deep-dive into your problem set using structured A3 thinking.",
  },
  {
    id: "02",
    name: "Architect",
    desc: "Building scalable, future-proof blueprints for your digital product.",
  },
  {
    id: "03",
    name: "Accelerate",
    desc: "Rapid deployment and continuous optimization for market lead.",
  },
];

export default function Process() {
  return (
    <section className="py-32 bg-brand-beige text-brand-dark px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black tracking-tighter mb-20 text-center">
          THE A3 METHOD<span className="text-brand-orange">.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-16">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <span className="text-8xl font-black text-brand-dark/5 absolute -top-10 -left-4 select-none">
                {step.id}
              </span>
              <h3 className="text-2xl font-bold mb-4 relative z-10">
                {step.name}
              </h3>
              <p className="text-brand-dark/60 leading-relaxed relative z-10">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
