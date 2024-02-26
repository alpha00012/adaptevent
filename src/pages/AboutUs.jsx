import React, { useEffect, useState } from 'react';
import logo from '/assets/logos/logo.png';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import DefaultLayout from '../layout/DefaultLayout.jsx';
import ObjectivesList from '../components/ObjectivesList'; // Ensure this is correctly imported

const objectivesData = [
    {
        title: "Raise Awareness",
        content: "To elevate awareness about the significance of business continuity and resilience within the African business landscape, emphasizing their role in sustaining enterprises and fostering long-term growth.",
        image:'/assets/objective/01.png'

      },
      {
        title: "Knowledge Exchange",
        content: "Facilitate a dynamic exchange of ideas, best practices, and case studies, drawing upon the experiences of global experts and regional leaders to inspire innovative solutions tailored to the African context.",
image:'/assets/objective/02.png'
      },
      {
        title: "Implementation Insights",
        content: "Provide practical insights into the implementation of business continuity plans, focusing on challenges unique to Africa and strategies to overcome them.",
      image:'/assets/objective/03.png'
      },
      {
        title: "Technology and Automation",
        content: "Explore the integration of technology, automation, and artificial intelligence in business continuity processes, showcasing cutting-edge solutions to enhance resilience in the face of disruptions.",
      image:'/assets/objective/04.png'
      },
      {
        title: "Legal and Regulatory Framework",
        content: "Examine the legal and regulatory aspects influencing business continuity in Africa, guiding participants on compliance and risk management strategies.",
      image:'/assets/objective/05.png'
      },
      {
        title: "ISO 22301 Implementation",
        content: "Offer a dedicated session on the implementation of ISO 22301, shedding light on the challenges and best practices to align businesses with international standards.",
      image:'/assets/objective/06.png'
      },
      {
        title: "Cyberresilience",
        content: "Address the growing importance of cyberresilience, focusing on safeguarding critical information and systems from cyber threats in the digital age.",
     image:'/assets/objective/07.png'
      },
      {
        title: "Industrial Control Systems Resilience",
        content: "Delve into the resilience of industrial control systems, recognizing their pivotal role in various industries and ensuring their robustness in the face of evolving challenges.",
     image:'/assets/objective/08.png'
      },
      {
        title: "Networking and Collaboration",
        content: "Facilitate extensive networking opportunities, fostering collaboration among participants to build a community dedicated to advancing business continuity and resilience in Africa.",
      image:'/assets/objective/09.png'
      },
      {
        title: "Charting the Future",
        content: "Conclude the congress with a forward-looking perspective, outlining a roadmap for the future of business continuity and resilience in Africa and positioning AdaptAfrica as an annual reference point for industry leaders.",
     image:'/assets/objective/010.png'
      }
  // ... other objectives
];

const AboutUs = () => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            const exBoardItem = document.getElementById('exBoardItem');
            const clickedElement = event.target;

            if (exBoardItem && !exBoardItem.contains(clickedElement)) {
                setActive(0);
            }
        };

        document.body.addEventListener('click', handleOutsideClick);

        return () => {
            document.body.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <DefaultLayout>
            <div>
                <div className="flex md:flex-row flex-col-reverse items-center gap-14 md:h-[50vh] lg:mx-[200px] md:mx[75px] mx-[50px] py-[50px]">
                    <img src={logo} className="md:h-full w-[300px] object-contain" alt="logo"/>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col leading-none">
                            <h2 className="text-secondary text-[32px] font-medium">Who are we?</h2>
                            <h1 className="text-primary text-[40px] font-bold">ADAPT AFRICA</h1>
                        </div>
                        <p className="text-dark-grey text-justify">
                        &quot;AdaptAfrica: Business Continuity &amp; Resilience Congress&quot; is a pioneering conference set against the
backdrop of the picturesque coastal area of Hammamet in Tunisia. This premier event aims to bring
together leaders, professionals, and visionaries from across Africa and the world to engage in insightful
discussions, share knowledge, and foster collaboration in the critical domains of business continuity and
resilience.
In a region where the culture of business continuity is evolving, AdaptAfrica seeks to be a catalyst for
change by providing a platform for thought leaders and industry experts to illuminate the path toward
building resilient businesses. The coastal ambiance of Hammamet serves as an inspiring backdrop,
symbolizing the strength and adaptability that the conference aims to instill in businesses facing an ever-
changing landscape.
&quot;AdaptAfrica: Business Continuity &amp; Resilience Congress&quot; endeavors to inspire a paradigm shift in how
businesses approach continuity and resilience, contributing to the emergence of a robust and adaptive
business landscape across the African continent.
                        </p>
                    </div>
                </div>

                <div className="objectives-section">
                    <h2 className="text-secondary text-[32px] font-medium">Our Objectives</h2>
                    <ObjectivesList objectives={objectivesData} />
                </div>

            </div>
        </DefaultLayout>
    );
};

export default AboutUs;
