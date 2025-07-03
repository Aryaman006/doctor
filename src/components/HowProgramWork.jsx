'use client';
import Image from 'next/image';

const steps = [
  {
    step: 'STEP 1',
    title: 'Clarity Call',
    description:
      'Have a call with us to know how we work. Make program payment. Start program from comfort of your home.',
    image: '/step1.svg',
  },
  {
    step: 'STEP 2',
    title: 'Register to one of our program',
    description:
      'On your diet, supplements, lifestyle, etc. Explanations sent via text, images & videos.',
    image: '/step2.svg',
  },
  {
    step: 'STEP 3',
    title: 'Connecting the medical history',
    description:
      'Fill out a medical history form, do a blood test and have a detailed call with our medical expert.',
    image: '/step3.svg',
  },
  {
    step: 'STEP 4',
    title: 'Follow Up Consults',
    description:
      'Happen each month. Health progress reviewed. Changes made, when needed. Ask questions on chat/mail. (working hours only please)',
    image: '/step4.svg',
  },
];

export default function ProgramSteps() {
  return (
    <section className="bg-[#f7f5f2] py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-[#1e1e1e] mb-4">
          How the Program Works
        </h2>
        {/* Optional subheading if needed */}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition hover:shadow-xl"
          >
            <div className="mb-4 text-xs font-semibold tracking-wider text-purple-800 border border-purple-400 rounded px-2 py-1">
              {step.step}
            </div>

            <div className="relative w-24 h-24 mb-6">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-contain"
              />
            </div>

            <h3 className="text-lg font-serif text-[#1e1e1e] mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
