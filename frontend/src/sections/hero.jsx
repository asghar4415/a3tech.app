import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-brandOrange/10 rounded-full blur-[140px] -z-10" />

      <div className="text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brandOrange font-mono tracking-[0.3em] uppercase text-xs">
            Innovation in Motion
          </span>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mt-4 mb-8">
            A3 TECH<span className="text-brandOrange">.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="max-w-md mx-auto text-brandBeige/60 text-lg font-light leading-relaxed"
        >
          We build high-performance digital products for the next generation of
          startups.
        </motion.p>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 w-[1px] h-16 bg-gradient-to-b from-brandOrange to-transparent"
      />
    </section>
  );
}
