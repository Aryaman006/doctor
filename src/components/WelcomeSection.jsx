'use client';

export default function WelcomeSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#603F8B] to-[#A66CFF] text-white py-24 px-6 text-center overflow-hidden">
      
      {/* Sparkle or Decorative Star - optional */}
      <div className="absolute top-10 left-10 text-5xl opacity-20 rotate-12 select-none">✨</div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
          Welcome to <span className="italic font-extralight">Doctor Yourself</span>
        </h2>
        <p className="text-lg md:text-xl font-light mb-16">
          A platform to help you understand and treat yourself better — guided by Deepta Manohar.
        </p>
      </div>

      {/* Bottom Wave Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="w-full h-24 md:h-32 lg:h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#F8F1ED"
            fillOpacity="1"
            d="M0,224L60,202.7C120,181,240,139,360,117.3C480,96,600,96,720,128C840,160,960,224,1080,229.3C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}
