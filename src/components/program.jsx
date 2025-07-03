'use client';
import Image from 'next/image';
import Link from 'next/link';

const programs = [
  {
    title: 'Diabetes',
    image: '/dia.jpg',
    link: '/diabetes',
  },
  {
    title: 'Healthy Pregnancy',
    image: '/pregnancy.jpg',
    link: '/pregnancy',
  },
  {
    title: 'Blood Pressure',
    image: '/BP.jpg',
    link: '/blood-pressure',
  },
  {
    title: 'Weight Loss',
    image: '/weightloss.jpg',
    link: '/weight-loss',
  },
  {
    title: 'Thyroid',
    image: '/Thyroid.jpg',
    link: '/weight-loss',
  },
  {
    title: 'Menupaese',
    image: '/periods.webp',
    link: '/weight-loss',
  },
];

export default function OurPrograms() {
  return (
    <section className="bg-[#8b72c9] text-white py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif mb-2">Our Programs</h2>
        <p className="text-xl font-light font-serif">Return to Health</p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((program) => (
          <Link
            href={program.link}
            key={program.title}
            className="bg-white text-[#4B2E2E] rounded-xl overflow-hidden flex shadow-md hover:shadow-xl transition"
          >
            {/* Image side */}
            <div className="w-1/3 h-40 relative">
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text side */}
            <div className="w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-xl font-serif mb-1">{program.title}</h3>
              <span className="text-[#8b72c9] font-semibold text-sm tracking-wide uppercase">
                Learn More
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
