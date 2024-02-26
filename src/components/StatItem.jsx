import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const StatItem = ({ label, value }) => {
    const [isCounting, setCounting] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setCounting(true)} className="flex flex-col items-center justify-center">
            <div className="lg:text-5xl text-4xl font-bold text-white">
                {isCounting ? <CountUp end={value} duration={2} separator="" /> : 0}
            </div>
            <div className="lg:text-lg text-md text-center font-light text-white">{label}</div>
        </ScrollTrigger>
    );
};

export default StatItem;