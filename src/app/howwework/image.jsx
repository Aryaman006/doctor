'use client';

import Image from 'next/image';

export default function ImageSection() {
  return (
    <section className="bg-[#F8F1ED] py-16 px-6 flex justify-center">
      <div className="bg-[#7766BA] w-full max-w-3xl rounded-2xl shadow-md border border-[#e4dcd7] p-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
          We have a “5 petal” approach —<br className="hidden md:inline" />
          Air, Water, Wood, Fire, Earth.
        </h2>

        {/* Responsive Image */}
        <div className="relative w-full">
          <Image
            src="/5petal.jpg"
            alt="5-petal-method"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full h-auto object-contain rounded-xl"
          />

          {/* NoScript fallback for non-JS environments */}
          <noscript>
            <img
              src="/5petal.jpg"
              alt="5-petal-method"
              className="w-full h-auto object-contain rounded-xl"
            />
          </noscript>
        </div>
      </div>
    </section>
  );
}
