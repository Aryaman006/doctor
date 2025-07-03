'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function AppPromoSection() {
  return (
    <section className="bg-[#f9796e] py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Text Side */}
        <div className="text-white text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Want to know more about programs?
          </h2>
          <p className="text-xl font-serif mb-8">
            Install our app from the Playstore now!
          </p>

          {/* Play Store Button */}
          <Link
            href="https://play.google.com/store/apps/details?id=com.app.deeptamanohar" // replace with your actual app link
            target="_blank"
          >
            <Image
              src="/playstore.png" // Add this image to your /public folder
              alt="Get it on Google Play"
              width={200}
              height={60}
              className="mx-auto md:mx-0"
            />
          </Link>
        </div>

        {/* Right App Mockup Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/app.jpg" // Add this image to your /public folder
            alt="App Promo"
            width={400}
            height={500}
            className="rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
