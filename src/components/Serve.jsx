'use client';
import Image from 'next/image';

const results = [
  {
    image: '/tileIcon-1.svg',
    title: 'Upto 2-3 inch loss',
    text: 'with diet and self healing workshop',
  },
  {
    image: '/tileIcon-2.svg',
    title: 'Up to 10 kgs weight loss',
    text: 'and reduction in blood pressure medication',
  },
  {
    image: '/tileIcon-3.svg',
    title: 'Relief from hot flashes & mood swings',
    text: 'without any allopathic medication',
  },
  {
    image: '/tileIcon-4.svg',
    title: 'Reversing diabetes naturally',
    text: 'and reduction in PCOD symptoms',
  },
  {
    image: '/tileIcon-5.svg',
    title: 'Natural healthy pregnancy',
    text: 'after failed IUI and IVF cycles',
  },
];

export default function ClientResults() {
  return (
    <section className="bg-gradient-to-b from-[#F97874] via-[#F97874]/90 to-[#F97874]/80 py-20 px-6">
      {/* Heading */}
      <div className="text-center text-white mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-2 drop-shadow-md">
          We are here to Serve
        </h2>
        <h3 className="text-3xl md:text-4xl font-serif font-semibold mb-4 leading-snug">
          People to Return Back to <span className="block text-white/90 italic">Health</span>
        </h3>
        <p className="text-xl font-light text-white/90">Our clients have seen</p>
      </div>

      {/* Result Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {results.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 mb-4 relative">
              <Image
                src={item.image}
                alt={`Icon ${index}`}
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>
            <h4 className="text-[#2D1B1B] font-serif text-lg font-semibold mb-2 leading-snug">
              {item.title}
            </h4>
            <p className="text-[#4B2E2E] font-serif text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
