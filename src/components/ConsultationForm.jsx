import React from 'react';

const ConsultationForm = () => {
  return (
    <section className="bg-[#7d6bb3] text-white py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-3">
          Book a Free Consultation
        </h2>
        <p className="text-lg md:text-xl font-light">
          Ask our Health Coach!
        </p>
      </div>

      {/* Form */}
      <form className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Inputs */}
        <div className="space-y-6">
          {[
            { label: 'Name', type: 'text', name: 'name' },
            { label: 'Mobile Number', type: 'tel', name: 'mobile' },
            { label: 'Email', type: 'email', name: 'email' },
            { label: 'City', type: 'text', name: 'city' },
          ].map(({ label, type, name }) => (
            <div key={name}>
              <label htmlFor={name} className="block text-sm font-medium mb-1">
                {label}
              </label>
              <input
                id={name}
                name={name}
                type={type}
                className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
              />
            </div>
          ))}
        </div>

        {/* Right Questions */}
        <div className="space-y-10">
          <div>
            <p className="text-sm font-medium mb-2">
              Do you believe food can be medicine?
            </p>
            <div className="flex items-center gap-6">
              <label className="flex items-center">
                <input type="radio" name="foodMedicine" value="yes" className="mr-2" />
                Yes
              </label>
              <label className="flex items-center">
                <input type="radio" name="foodMedicine" value="no" className="mr-2" />
                No
              </label>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-2">
              Are you comfortable with an online health program?
            </p>
            <div className="flex items-center gap-6">
              <label className="flex items-center">
                <input type="radio" name="onlineComfort" value="yes" className="mr-2" />
                Yes
              </label>
              <label className="flex items-center">
                <input type="radio" name="onlineComfort" value="no" className="mr-2" />
                No
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center mt-6">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#f7945b] to-[#f7797d] text-white text-base font-semibold tracking-wide px-10 py-3 rounded shadow-lg hover:opacity-90 transition-all"
          >
            Book a free consultation with a Health Coach
          </button>
        </div>
      </form>
    </section>
  );
};

export default ConsultationForm;
