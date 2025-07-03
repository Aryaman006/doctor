'use client';

import React from 'react';

const ElementalBalanceSection = () => {
  return (
    <section className="bg-[#f9f2e8] py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column: Explanation of Elements */}
        <div className="text-[#3d2f2f] space-y-6 text-[1.05rem] leading-[1.9]">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            The Human Body & The Five Elements
          </h2>
          <p>
            All of creation is composed of five elements in different proportions — the human body is no different:
            <strong> 72% water, 12% earth, 6% air, 4% fire,</strong> and the rest is <strong>ether</strong>.
            While the first four stay mostly constant, <em>ether</em> is the only one we can enhance consciously.
          </p>
          <p>
            Each element governs vital structures and functions:
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li><strong>Earth</strong>: bones, muscles, nails, teeth, skin — gives strength and form</li>
              <li><strong>Water</strong>: blood, sweat, semen, urine, saliva — governs fluid systems</li>
              <li><strong>Fire</strong>: hunger, sleep, vision, skin tone — drives metabolic & sensory activities</li>
              <li><strong>Air</strong>: movement, expansion, vibration — powers motion and breath</li>
              <li><strong>Ether</strong>: space and awareness — enhances consciousness and energy</li>
            </ul>
          </p>
        </div>

        {/* Right Column: Card-Like Differentiator Box */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-[#3d2f2f]">
          <h3 className="text-2xl md:text-3xl font-serif font-medium mb-6 leading-snug">
            The current medical system treats symptoms.<br />
            <span className="text-[#6c4eb6] font-semibold">We treat the root.</span>
          </h3>
          <ul className="space-y-4 text-base leading-relaxed">
            <li>✅ Customized diet plans tailored to your unique body constitution.</li>
            <li>✅ Track your healing journey via supportive online community groups.</li>
            <li>✅ Continuous guidance to promote true mind-body balance.</li>
            <li>✅ Engaging activities & group exercises to boost morale.</li>
            <li>✅ Distant healing support throughout your recovery journey.</li>
          </ul>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block bg-[#6c4eb6] text-white text-sm font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#5a3e9b] transition duration-200"
            >
              Speak to Our Health Coach
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElementalBalanceSection;
