import React from 'react';

const AcutouchTherapySection = () => {
  return (
    <section className="px-6 md:px-20 py-16 text-[#222] bg-[#FDFBF9]">
      {/* Section Title */}
      <h1 className="text-4xl md:text-5xl font-semibold text-center mb-16 font-serif">
        Acutouch Therapy
      </h1>

      {/* What is Acutouch Therapy */}
      <div className="mb-16 space-y-6">
        <h2 className="text-2xl md:text-3xl font-serif font-medium text-[#5E2B2B]">
          What is Acutouch Therapy?
        </h2>
        <p className="text-lg leading-relaxed">
          When there's an imbalance in the energy flow between internal organs, it results in
          discomfort—often perceived as disease. Through <strong>pulse diagnosis</strong> or{' '}
          <strong>emotional diagnosis</strong>, Acutouch therapy identifies energy imbalances and
          stimulates specific points with gentle, conscious touch. For online treatments, patients
          are guided to hold the point while healing is directed through focused intent.
        </p>
        <p className="text-lg leading-relaxed">
          Disturbed energy distribution affects the normal functioning of organs. These disturbances
          manifest in various forms and are often misinterpreted as diseases. Acutouch therapy aims
          to restore the natural energy flow using <strong>specific Acutouch points</strong> located
          on the skin’s surface. These points are gently activated using conscious fingertip touch,
          helping to harmonize internal systems and promote holistic healing.
        </p>
      </div>

      {/* Doctor Bio Section 1 - Image Left */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          <img
            src="/doctor-image1.png"
            alt="Dr. Fazlur Rahman"
            className="rounded-xl w-full max-w-sm mx-auto shadow-md"
          />
        </div>
        <div className="text-lg leading-relaxed space-y-4">
          <p>
            <strong>Dr. Fazlur Rahman</strong> completed his M.B.B.S. in 1979 and pursued
            post-graduation in medicine (M.D.) by 1982. However, in 1984, after six years of
            practicing allopathic medicine, he turned his full attention to Acutouch therapy.
          </p>
          <p>
            Reviving this ancient technique from China, Dr. Rahman identified and refined the most
            effective single energy points for healing. His dedication led to the successful
            treatment of over <strong>200,000 patients</strong>, establishing the credibility of this
            natural, non-invasive approach.
          </p>
        </div>
      </div>

      {/* Doctor Bio Section 2 - Image Right */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1 text-lg leading-relaxed space-y-4">
          <p>
            Dr. Rahman actively shared his expertise across India and internationally, training
            practitioners in the art and science of Acutouch therapy. His teachings emphasized
            self-awareness, inner healing, and balance.
          </p>
          <p>
            Deeply rooted in <strong>natural healing philosophy</strong>, his work bridged ancient
            wisdom and modern energy diagnosis, offering a comprehensive path to holistic wellness.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <img
            src="/doctor-image2.png"
            alt="Dr. Fazlur Rahman teaching"
            className="rounded-xl w-full max-w-sm mx-auto shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AcutouchTherapySection;
