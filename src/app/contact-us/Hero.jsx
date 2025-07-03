import React from 'react';

const Banner = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/banner2.jpg')" }}
    >
      {/* Overlay Section */}
      <div className="bg-black/50 py-32 md:py-48 flex justify-center items-center">
        <h2 className="text-4xl md:text-6xl font-serif font-semibold text-center">
          Contact Us
        </h2>
      </div>

      {/* Curved White Section */}
      <div className="bg-white text-gray-800 rounded-t-[100px] -mt-10 pt-20 px-6 md:px-20 pb-16 shadow-lg">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-y-12 gap-x-20 text-sm md:text-base font-light leading-relaxed">
          {/* Left Contact Info */}
          <div className="space-y-4">
            <p>
              <span className="font-medium">Phone</span>:{" "}
              <a href="tel:+919880043717" className="text-indigo-600">
                +91 98800 43717
              </a>
            </p>
            <p>
              <span className="font-medium">Hours</span>: Mon–Fri, 10am–6pm
            </p>
            <p>
              <span className="font-medium">Mail</span>:{" "}
              <a href="mailto:deepta.manu@gmail.com" className="text-indigo-600">
                deepta.manu@gmail.com
              </a>
            </p>
          </div>

          {/* Right Address Info */}
          <div className="space-y-4">
            <p>
              <span className="font-medium">Address</span>: Moonjur Healthcare Pvt Ltd
            </p>
            <p>Plot No -9 KH NO 160 1/2, Eco Option 21,</p>
            <p>Aya Nagar, New Delhi – 110047</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
