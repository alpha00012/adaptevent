import React from 'react';
import '../layout/prospectusStyle.css'; // Ensure the correct path
import DefaultLayout from '../layout/DefaultLayout.jsx';

const ExhibitingProspectus2024 = () => {
  return (
    <DefaultLayout>
      <div className="prospectus-container">
        <main className="prospectus-main">

          <section className="prospectus-section event-calendar">
            <h2>ADAPT AFRICA Congress Calendar</h2>
            <p>Prestigious attendance and influential decision-makers are anticipated at the ADAPT AFRICA congress, showcasing a keen interest in business continuity solutions.</p>
          </section>

          <section className="prospectus-section event-attendance">
            <h2>Prestigious Attendance and Decision-Makers at ADAPT AFRICA</h2>
            <p>Esteemed attendees and influential decision-makers are anticipated at the ADAPT AFRICA congress, exhibiting a keen interest in the exposition aspect of the conference.</p>
          </section>

          <section className="prospectus-section exhibiting-benefits">
            <h2>Advantages of Exhibiting at ADAPT AFRICA</h2>
            <ul>
              <li>Showcase your company's message directly to targeted BC/DR directors and executives.</li>
              <li>Expand your professional network by connecting with numerous BC/DR experts.</li>
              <li>Publicize your latest innovations to a keenly interested audience.</li>
            </ul>
          </section>

          <section className="prospectus-section exhibitor-benefits">
            <h2>Support for Your Arrival and Stay</h2>
            <p>Our dedicated logistics team will provide comprehensive support from your arrival in the country to your departure, ensuring a smooth experience throughout the conference.</p>
          </section>

          <section className="prospectus-section staff-benefits">
            <h2>Benefits for Your Team</h2>
            <ul>
              <li>Complimentary passes to the conference program.</li>
              <li>Additional passes for booth personnel at a 30% reduced rate.</li>
              <li>Exhibition access passes for clients, potential customers, and team members at no extra cost.</li>
            </ul>
          </section>

          <section className="prospectus-section marketing-exposure">
            <h2>Marketing and Promotional Opportunities</h2>
            <p>Enjoy significant marketing and advertising benefits, including a company profile in the official program guide and access to exclusive sponsorship opportunities.</p>
          </section>

          <section className="prospectus-section pricing">
            <h2>Pricing Details</h2>
            <p>A standard 4m x 4m booth is available for $1000. This package includes unlimited booth personnel, a designated exhibit space, and a company description in the conference materials.</p>
          </section>

        </main>
      </div>
    </DefaultLayout>
  );
};

export default ExhibitingProspectus2024;
