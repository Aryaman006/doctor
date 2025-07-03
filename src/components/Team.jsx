'use client';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Deepta Manohar',
    title: 'Acutouch Therapist and Self Mastery Coach',
    image: '/deepta.jpg', // Make sure to place this image in /public
  },
  {
    name: 'Gowtham Kumar D',
    title: ' Digital Marketer',
    image: '/gowtham.jpg',
  },
  // Add more members here
];

export default function ExpertTeamSection() {
  return (
    <section id="team" className="bg-[#F2EFFA] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-[#2D1B1B] mb-4">
          Your Expert Care Team
        </h2>
        <p className="text-lg md:text-xl text-[#4B2E2E] font-light font-serif">
          Finest care from our top care specialists
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Circular Image */}
            <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-lg border-4 border-white bg-white">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Name and Title */}
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-serif text-[#2D1B1B]">{member.name}</h3>
              <p className="text-[#4B2E2E] mt-2 text-base font-light max-w-xs">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
