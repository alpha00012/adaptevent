import React, { useState } from 'react';

const SponsorshipPackage = () => {
  const [openPackage, setOpenPackage] = useState(null);

  const togglePackage = (packageId) => {
    setOpenPackage(openPackage === packageId ? null : packageId);
  };

  return (
    <section className="sponsorship-package">
      <h2>Sponsorship Packages</h2>
      {['Gold', 'Silver', 'Bronze'].map((tier, index) => (
        <div key={index}>
          <button className="package-header" onClick={() => togglePackage(index)}>
            {tier} Sponsorship
          </button>
          {openPackage === index && (
            <div className="package-details">
              {/* Replace with actual package details */}
              <p>Details of {tier} Sponsorship Package</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default SponsorshipPackage;
