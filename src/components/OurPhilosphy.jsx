'use client';
import Image from 'next/image';

export default function OurPhilosophy() {
  return (
    <section className="relative bg-[#fd7266] py-20 px-4 md:px-8 overflow-hidden">
      {/* Main Card */}
      <div className="relative bg-[#fca77e] max-w-6xl mx-auto rounded-[3rem] px-8 py-12 shadow-xl text-white">
        {/* Leaf Illustration - Bottom Left */}
        {/* Flower Illustration - Bottom Right */}
        <Image
          src="/plant.svg" // replace with your flower
          alt="Flowers"
          width={180}
          height={180}
          className="absolute bottom-0 right-0 hidden md:block"
        />

        {/* Text Content */}
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-2">
            Our Philosophy
          </h2>
          <h3 className="text-2xl font-serif font-light text-white mb-6">
            Is Unlearn and Relearn
          </h3>
          <p className="text-lg md:text-xl font-light font-serif leading-relaxed text-white">
            We go beyond symptoms, we listen to what your body is telling us – with pulse diagnosis and understanding the symptoms which are experienced by your body. We identify your root cause and we help you heal inside out, through Accutouch therapy.
          </p>
          <button className="mt-6 px-6 py-2 border border-white rounded-md text-white hover:bg-white hover:text-[#fca77e] transition-all font-serif">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
