'use client';
import Link from 'next/link';

export default function RegisterCard() {
  return (
    <section className="bg-[#F8F1ED] py-12 px-6 flex justify-center">
      <div className="bg-white rounded-3xl shadow-xl px-10 py-8 max-w-2xl w-full text-center border border-[#e4dcd7]">
        <h3 className="text-2xl md:text-3xl font-serif text-[#4B2E2E] mb-4">
          Ready to start your journey?
        </h3>
        <p className="text-md md:text-lg text-[#5A4C4C] mb-6">
          Get personalized help based on your lifestyle and goals.
        </p>
        <Link href="/register">
          <button className="bg-[#A66CFF] hover:bg-[#9256e0] text-white font-semibold py-3 px-6 rounded-xl transition duration-300">
            Register Now
          </button>
        </Link>
      </div>
    </section>
  );
}
