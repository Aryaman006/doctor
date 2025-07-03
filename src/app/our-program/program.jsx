'use client';
import Image from 'next/image';

export default function ProgramHero() {
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/our-programs.jpg"
        alt="Our Programs Background"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 md:px-24 text-white">
        <h2 className="text-2xl md:text-4xl font-light">our</h2>
        <h1 className="text-5xl md:text-7xl font-serif">PROGRAMS</h1>
      </div>

      {/* Curved bottom using SVG */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0] rotate-180">
       
      </div>
    </section>
  );
}
