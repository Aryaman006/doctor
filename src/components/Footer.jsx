'use client';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#7766BA] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">

        {/* Leaf Icon */}
        <div>
          <Image
            src="/leaf.png" // Place this image in your public folder
            alt="Leaf"
            width={120}
            height={120}
          />
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm text-[#DAD6F1]">
          {/* Column 1 - Our Programs */}
          <div>
            <h3 className="font-bold text-white mb-3">OUR PROGRAMS</h3>
            <ul className="space-y-1">
              <li>Polycystic Ovary Disorder</li>
              <li>Weight Loss</li>
              <li>Cystic Acne</li>
              <li>Painful Periods</li>
              <li>Pregnancy</li>
              <li>Fertility</li>
            </ul>
          </div>

          {/* Column 2 - Health Guide */}
          <div>
            <h3 className="font-bold text-white mb-3">HEALTH GUIDE</h3>
            <ul className="space-y-1">
              <li>Acid Reflux</li>
              <li>Allergies</li>
              <li>Alzheimer’s</li>
              <li>Arthritis</li>
              <li>Asthma</li>
              <li>Constipation</li>
              <li>CFS</li>
              <li>Hypothyroidism</li>
              <li>Immunity</li>
              <li>Living Well</li>
              <li>Menopause</li>
              <li>Mental Health</li>
              <li>Sleep</li>
              <li>Osteoporosis</li>
            </ul>
          </div>

          {/* Column 3 - About */}
          <div>
            <h3 className="font-bold text-white mb-3">ABOUT</h3>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>FAQ</li>
              <li>Terms and Conditions</li>
              <li>Disclaimer</li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-bold text-white mb-3">CONTACT US</h3>
            <p className="mb-2">Phone: +91 98800 43717</p>
            <p className="mb-2">Mon–Fri: 10am–6pm</p>
            <p>Mail: deepta.manu@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
