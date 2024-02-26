import React from 'react';
import '../layout/all.css'; // Assurez-vous de lier votre fichier CSS ici
import DefaultLayout from '../layout/DefaultLayout.jsx';

const Events = () => {
  return (
    <DefaultLayout>
      <div className="agenda-container">
        <h2 className="agenda-title">Conference Agenda</h2>
        
        {/* Day 1 */}
        <div className="agenda-item">
          <h3 className="day-subtitle">Day 1: Building Awareness</h3>
          <ul>
            <li>8:30 AM - 9:00 AM: Registration and Networking</li>
            <li>9:00 AM - 9:30 AM: Welcome Address and Conference Overview</li>
            <li>9:30 AM - 10:30 AM: Keynote Speaker - "The Importance of Business Continuity in Today's Global Environment"</li>
            <li>10:30 AM - 11:00 AM: Coffee Break and Networking</li>
            <li>11:00 AM - 12:30 PM: Panel Discussion - "Global Trends in Business Continuity"</li>
            <li>12:30 PM - 2:00 PM: Lunch Break</li>
            <li>2:00 PM - 2:45 PM: Case Studies - Successful Business Continuity Implementations in Africa</li>
            <li>2:45 PM - 3:30 PM: Panel discussion - "Building a Business Continuity Culture in Your Organization"</li>
            <li>3:30 PM - 4:00 PM: Networking Break</li>
            <li>4:00 PM - 6:00 PM: Simultaneous Workshops - Workshop 1: Operational Resilience and Business Continuity, Workshop 2: Legal and Regulatory Framework, Workshop 3: Challenges and Opportunities for Business Continuity in Africa</li>
          </ul>
        </div>
        
        {/* Day 2 */}
        <div className="agenda-item">
          <h3 className="day-subtitle">Day 2: Practical Strategies</h3>
          <ul>
            <li>8:30 AM - 9:30 AM: Keynote Speaker - "Effective Business Continuity Planning: Tools and Techniques"</li>
            <li>9:30 AM - 10:30 AM: Panel Discussion - "Practical Approaches to Business Continuity"</li>
            <li>10:30 AM - 11:00 AM: Coffee Break and Networking</li>
            <li>11:00 AM - 12:30 PM: Workshops - "Risk Assessment and Mitigation Strategies"</li>
            <li>12:30 PM - 2:00 PM: Lunch Break</li>
            <li>2:00 PM - 3:30 PM: Panel Discussion - "Learning from Global Success Stories"</li>
            <li>3:30 PM - 4:00 PM: Networking Break</li>
            <li>4:00 PM - 6:00 PM: Simultaneous Workshops - Workshop 1: Business Continuity Simulation Exercise, Workshop 2: Cyberresilience and Business Continuity, Workshop 3: Automatization of the Business Continuity Process</li>
<li>7:00 PM – 11:00 PM: Networking Dinner</li>
</ul>
</div>
    {/* Day 3 */}
    <div className="agenda-item">
      <h3 className="day-subtitle">Day 3: Implementation and Future Directions</h3>
      <ul>
        <li>8:30 AM - 9:30 AM: Keynote Speaker - "Overcoming Challenges: Practical Steps to Implement Business Continuity"</li>
        <li>9:30 AM - 10:30 AM: Panel Discussion - "Roadmap to Implementation: Insights from Industry Leaders"</li>
        <li>10:30 AM - 11:00 AM: Coffee Break and Networking</li>
        <li>11:00 AM - 11:45 AM: Presentation and Panel Discussion - "Ensuring Resilience in Industrial Control Systems: Challenges and Best Practices"</li>
        <li>11:45 AM - 12:30 PM: Roundtable Discussions - "Addressing Specific Challenges in Different Industries"</li>
        <li>12:30 PM - 2:00 PM: Lunch Break</li>
        <li>2:00 PM - 3:00 PM: Closing Keynote - "Charting the Future: Making Business Continuity a Standard Practice in Africa"</li>
        <li>3:00 PM - 4:00 PM: Conference Wrap-up and Acknowledgments</li>
      </ul>
    </div>
  </div>
</DefaultLayout>
);
};

export default Events;
