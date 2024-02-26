import React from 'react';
import '../layout/sponsorshipStyle.css'; // Assurez-vous du chemin correct
import DefaultLayout from '../layout/DefaultLayout.jsx';
import image4 from '/assets/logos/4.png';
// puis dans votre JSX


const Sponsor = () => {
  return (
    <DefaultLayout> 
      <div className="prospectus-container">
        <main className="prospectus-main">
        
       
          <section className="prospectus-section header">
            <h1>Sponsorship Opportunities at ADAPT AFRICA Congress</h1>
            <p>Join us in shaping the future of business resilience in Africa and beyond. Discover the benefits of being a sponsor at this premier event set in the picturesque coastal area of Hammamet, Tunisia.</p>
          </section>
          
          <section className="prospectus-section testimonials">
            <h2>Comparing Sponsorship Levels</h2>
            
            <iframe
              src="https://drive.google.com/file/d/1eTNw7GyRFCnx9a0pTFDTDMAxek3vYyPQ/preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              width="100%"
              height="358px" // Ajustez la hauteur au besoin
            ></iframe>  
          </section>

          <section className="prospectus-section contact-info">
            <h2>Sponsorship Proposal</h2>
            <p></p>
            <iframe
              src="https://drive.google.com/file/d/1dAik-b6_k0uvoafi_Nwzv6bEn8AuNQOh/preview"
              
              title="PDF Viewer"
              width="100%"
              height="530px" // Ajustez la hauteur au besoin
            ></iframe>
          </section>

          <section className="prospectus-section footer">
            <h2>Become a Sponsor</h2>
            <p>Join the ranks of our esteemed sponsors and make a lasting impact at the ADAPT AFRICA Congress.</p>
          </section>
          

          <a href="https://forms.office.com/r/n18u2Pcxq3" className="registration-button-link">
            <button className="registration-button">Become a Sponsor</button>
          </a>
        </main>
      </div>
    </DefaultLayout>
  );
};

export default Sponsor;
