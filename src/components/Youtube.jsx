'use client';

export default function YoutubeSection() {
  return (
    <section className="bg-[#F8F1ED] py-12 px-6 flex justify-center">
      <div className="w-full max-w-4xl h-[450px] md:h-[550px] rounded-2xl overflow-hidden shadow-lg border border-[#e4dcd7]">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/YDhMV1FBO80?si=E8fS-KIKTFxvRbaS"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
