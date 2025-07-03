'use client';

const testimonials = [
  {
    video: '/testimonial1.mp4',
    name: 'Viasali',
  },
  {
    video: '/Rajiv_Testimonial.mp4',
    name: 'Rajiv',
  },
  {
    video: '/testimonial3.mp4',
    name: 'Meena',
  },
  {
    video: '/Sunitha.mp4',
    name: 'Sunitha',
  },
];

export default function ShortTestimonials() {
  return (
    <section className="bg-[#F8F1ED] py-20 px-4 md:px-6">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-serif text-[#2D1B1B] mb-2">
          What Our Clients Say
        </h2>
        <p className="text-lg md:text-xl text-[#4B2E2E] font-light">
          Watch how real people changed their lives
        </p>
      </div>

      {/* Grid of video testimonials */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-[#e4dcd7] p-5 flex flex-col items-center hover:-translate-y-1 transform duration-300"
          >
            {/* Video container with reduced height */}
            <div className="relative w-full aspect-[9/10] rounded-xl overflow-hidden mb-4 bg-black group">
              <video
                src={t.video}
                controls
                preload="metadata"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Name */}
            <h3 className="text-xl font-serif text-[#4B2E2E] text-center">{t.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
