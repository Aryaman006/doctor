'use client';

const options = [
  { title: 'Diet', emoji: '🥗' },
  { title: 'Exercise', emoji: '🏋️‍♀️' },
  { title: 'Sleep', emoji: '😴' },
  { title: 'Stress', emoji: '🧘' },
];

export default function HelpOptionsSection() {
  return (
    <section className="bg-[#F8F1ED] py-20 px-6 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2D1B1B] mb-12">
        Choose what you need help with
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {options.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 cursor-pointer border border-[#e4dcd7]"
          >
            <div className="text-5xl mb-4">{item.emoji}</div>
            <h3 className="text-xl font-semibold text-[#4B2E2E]">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
