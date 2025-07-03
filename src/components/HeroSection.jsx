'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden font-serif">
      {/* Background Image */}
      <img
        src="/pho3.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Stylish Angled Overlay */}
      <div
        className="absolute right-0 top-0 h-full w-1/2 z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(128,90,213,0.5), rgba(79,70,229,0.3))', // purple-indigo tones
          clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 30% 100%)',
        }}
      />

      {/* Bottom Curve (optional) */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-[#8b5cf6] z-20 rounded-t-[100%]" />

      {/* Text Content */}
      <div className="relative z-30 h-full flex items-center px-6 md:px-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-left max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl text-black/80">Learn</h2>
          <h1 className="text-6xl md:text-7xl  text-black mt-1 leading-none">
            Deepta <br /> Manohar's
          </h1>
          <p className="text-2xl mt-3 text-black/70">way!</p>
        </motion.div>
      </div>
    </section>
  );
}
