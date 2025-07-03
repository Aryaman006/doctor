'use client';
import Image from 'next/image';

const contentBlocks = [
  {
    title: 'Diet',
    text: 'Right food is the basis of all health. We will work with you to help you understand what to eat and what to avoid.',
    image: '/food.png',
    reverse: false,
  },
  {
    title: 'Healthy & Colorful Recipes',
    text: 'In your kitchen sits the wisdom of Ayurvedic herbs and traditional nutrition science. We bring that into your life.',
    image: '/health.png',
    reverse: true,
  },
  {
    title: 'Lifestyle',
    text: 'We give you simple bio-hacks to give your health a head start',
    image: '/image.png',
    reverse: false,
  },
  // Add more blocks if needed
];

export default function HowHealingWorks() {
  return (
    <section className="bg-white py-20 px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-[#2D1B1B] mb-4">
          How we do it?
        </h2>
        <p className="text-lg md:text-xl text-[#4B2E2E] font-light">
            Accutouch Therapy
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-20">
        {contentBlocks.map((block, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              block.reverse ? 'md:flex-row-reverse' : ''
            } items-center gap-10`}
          >
            {/* Text Section */}
            <div className="md:w-1/2">
              <h3 className="text-4xl font-serif text-[#2D1B1B] mb-4">{block.title}</h3>
              <p className="text-lg text-[#4B2E2E] font-light leading-relaxed">
                {block.text}
              </p>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={block.image}
                  alt={block.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
