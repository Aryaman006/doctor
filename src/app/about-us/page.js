'use client';

import React from 'react';
import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <div className="text-[#2D1B1B]">
      {/* Navbar */}
       

      {/* Banner */}
      {/* Banner with overlay and heading */}
<div className="relative w-full md:h-96 h-64  bg-cover bg-center" style={{ backgroundImage: "url('/banner.jpg')" }}>
  {/* Gray overlay */}
  <div className="relative z-10 flex items-center md:ml-60 h-full">
    <h1 className="text-4xl md:text-8xl  text-white drop-shadow-lg">
      About Us
    </h1>
  </div>
  <div className="absolute inset-0 bg-black/40" />

  {/* Centered heading */}
</div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-16 space-y-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#0055a5]">About Us</h1>

               <p>
          In today's fast-paced world, we often prioritize goals and successes—sometimes at the expense of our well-being. However, true health transcends mere absence of illness; it's about achieving complete physical, mental, and social harmony.
        </p>

        <p>
          "Health," by WHO standards, means full well-being across mind, body & society—not just no sickness. Factors like emotional resilience, spiritual balance, balanced nutrition, quality sleep, and mindful lifestyle all come together to create lasting health.
        </p>

        <p>
          That’s where <strong>Deepta Manohar</strong> and the Acutouch team step in. With over 1,000 individuals treated using ancient Chinese acutouch therapy, our focus is holistic. We don't just relieve symptoms—we address underlying causes and nurture emotional, mental, and physical wellness. Join us—be your own healer.
        </p>

        <h2 className="text-2xl font-semibold text-[#0055a5] mt-10">How We Work</h2>

        <p>Accutouch therapy works on balancing elemental energy ie air, water, wood, fire and earth. Accutouch therapy helps in releasing the blockages meridiansof the body. Meridians are nothing but energy pathway.An individual is likely to start facing problems whenever there is a blockage in these meridians. These blockages may occur due to various reasons such as emotional imbalance, unhealthy lifestyle and improper diet.</p>

        <p>
            It all starts with pulse diagnosis in which our expert suspects which element is disturbed and here the treatment starts. We then stimulate that particular point with the index finger and it releases the blockage and helps fix it. This is a holistic therapy as it works both mentally and physically. Unlike other systems of medicine treatment, we address the root cause of the issue rather than mere symptoms. Our program is available in both online and offline modes.
        </p>

        <div className="mt-10">
          <h3 className="font-semibold text-lg">Contact Us</h3>
          <p className="mt-2">
            <span className="font-medium">Email:</span>{' '}
            <a href="mailto:deepta.manu@gmail.com" className="text-blue-600 underline">deepta.manu@gmail.com</a><br />
            <span className="font-medium">Phone:</span> +91 98800 43717
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#f3f3f3] py-6 text-center text-sm text-[#333]">
        © 2025 Acutouch Therapy • All rights reserved
      </footer>
    </div>
  );
}

