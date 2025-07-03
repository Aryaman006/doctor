import React from 'react';

const ElementalEnergySection = () => {
  return (
    <section className="px-6 md:px-20 py-20 text-[#222]">
      <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="/elements.jpg"
            alt="Panchendriya Elements"
            className="rounded-md border w-full max-w-md"
          />
        </div>

        {/* Right Table */}
        <div className="text-left">
          <h3 className="text-xl font-semibold mb-4">Elements & Their Organs</h3>
          <table className="w-full text-lg">
            <thead>
              <tr>
                <th className="text-left pb-2">Elements</th>
                <th className="text-left pb-2">Elemental Organs</th>
              </tr>
            </thead>
            <tbody className="space-y-4">
              <tr>
                <td className="py-1">Fire</td>
                <td className="py-1 font-medium">Heart, Small Intestine</td>
              </tr>
              <tr>
                <td className="py-1">Earth</td>
                <td className="py-1 font-medium">Spleen, Stomach</td>
              </tr>
              <tr>
                <td className="py-1">Air</td>
                <td className="py-1 font-medium">Lungs, Large Intestine</td>
              </tr>
              <tr>
                <td className="py-1">Water</td>
                <td className="py-1 font-medium">Kidney, Urinary Bladder</td>
              </tr>
              <tr>
                <td className="py-1">Wood</td>
                <td className="py-1 font-medium">Liver, Gall Bladder</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Paragraphs */}
      <div className="text-lg leading-relaxed space-y-6">
        <p>
          Due to the unequal distribution of five elemental energies, the change in the body is the
          reason for disease. When this energy level change is corrected, whatever be the disease,
          there is the possibility of cure by Acutouch. Hence along with Acutouch, there is no need
          to use allopathy, homoeopathy or any other food supplements. Acutouch is capable of curing
          any disease without any medicine.
        </p>
        <p>
          There is a medicine for each disease; similarly, understanding one point for one condition
          is a wrong assumption. Acutouch should not be understood this way.
        </p>
        <p>
          We have to understand the disease and the reason based on Acutouch philosophy. There is no need for any instruments to know the disease-causing imbalance of elemental energy. The Acutouch fundamental theories and pulse diagnosis alone are the correct and complete methods for diagnosis. Understanding the change in energy level, we have to select the appropriate Acutouch point to correct the imbalance in energy. Identifying the correct Acutouch point and application of treatment through the exact point are the basic approch of Acutouch philosophy.
        </p>
        <p>The body absorbs the five-element energy as vital energy from the Universe. During the treatment, if we touch the Acutouch point on the skin, using the fingertip gently for a few seconds, it is enough. By activating the Acutouch point, the block absorbing the energy is removed.</p>
        <p>The function of Acutouch therapy is to correct the energy imbalance of inner organs. When there is proper energy flow in the system, the body eliminates the stagnant wastes and automatically cures itself.</p>
      </div>
    </section>
  );
};

export default ElementalEnergySection;
