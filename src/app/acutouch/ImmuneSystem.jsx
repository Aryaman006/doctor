import React from 'react';

const AcutouchImmuneSection = () => {
  return (
    <section className="bg-[#f8f0e1] bg-[url('/path/to/background-texture.png')] bg-repeat text-[#222] px-6 md:px-20 py-20">
      <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center mb-12">
        How does Acutouch Therapy help gain Immune power?
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left - Image */}
        <div className="flex justify-center">
          <img
            src="/body.png"
            alt="The Main Meridian Channels"
            className="rounded-lg shadow-md max-w-xs md:max-w-sm"
          />
        </div>

        {/* Right - Text */}
        <div className="text-lg leading-relaxed space-y-6">
          <p>
            The 12 internal organs in our body absorb the universal energy through our skin. Since energy absorption takes place through the skin, the meridians of 12 internal organs are within the skin. The energy absorption takes place through the Acutouch points on these meridians.
          </p>
          <p>
            In our system, blood circulation takes place through a blood vessel. In our skin, Energy circulation takes place through the meridians.
          </p>
          <p>
            Blood and blood vessels can be seen through the eyes. Energy cannot be seen through the eyes, so we cannot see the invisible meridians. In this way, the hidden energy is absorbed, combined with the visible organs and builds the immune power of our system.
          </p>
          <p>
            Immunity is reduced in the body due to morbid stagnation. Due to the unnatural habits, improper diet, morbid stagnates in the organs. When an organ is affected by morbid stagnation, it is reflected in its meridian. The Acutouch point in the meridians will become weaker, and because of this, the energy circulation becomes weaker.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AcutouchImmuneSection;
