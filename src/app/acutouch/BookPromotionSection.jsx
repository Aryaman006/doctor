import React from 'react';

const BookPromotionSection = () => {
  return (
    <section className="bg-[#f8f1e9] py-16 text-center px-4">
      <h2 className="text-xl md:text-2xl font-bold font-serif mb-10 text-[#222]">
        To Know more buy my book from Amazon!
      </h2>

      <div className="flex flex-col items-center">
        <img
          src="/cover.png" // Replace with your actual image path
          alt="Six Secrets to Doctor Yourself by Deepta Manohar"
          className="w-[300px] md:w-[350px] shadow-lg border border-gray-200"
        />

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <a
            href="https://www.amazon.in/dp/B0B1VQWJ74?ref_=cm_sw_r_kb_dp_FJRFJN84A1FRMWN33RFT&tag=kp041-21&linkCode=kpe"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#222] text-white text-sm font-semibold rounded shadow hover:bg-black transition"
          >
            BUY ON AMAZON
          </a>
          <a
            href="https://read.amazon.in/kp/embed?linkCode=kpe&ref_=cm_sw_r_kb_dp_FJRFJN84A1FRMWN33RFT&asin=B0B1VQWJ74&tag=kp041-21&amazonDeviceType=A2CLFWBIMVSE9N&hideShare=true&from=Bookcard&preview=newtab&reshareId=S8WX1EQ1YQ5E7M1G0HHH&reshareChannel=system"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-gray-400 text-sm text-[#222] font-semibold rounded hover:bg-gray-200 transition"
          >
            FREE PREVIEW
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookPromotionSection;
