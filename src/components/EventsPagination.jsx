import { useState } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { useSelector } from 'react-redux';
import events_json from '../assets/events.json';
import Event from './Event.jsx';

const EventsPagination = () => {
    const { isMobile, isTablet } = useSelector(state => state.config);

    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 6;
    const lastIndex = currentPage * eventsPerPage;
    const firstIndex = lastIndex - eventsPerPage;
    const eventsKeys = Object.keys(events_json);
    const events = [];
    eventsKeys.map((key) =>{
        events.push(events_json[key]);
    });
    const data = events.reverse().slice(firstIndex, lastIndex);
    const totalPagesNum = Math.ceil(events.length / eventsPerPage);
    const pages = new Array(totalPagesNum).fill(null).map((v, i) => i + 1);

    const prevPage = () => {
        if (currentPage === 1) return;
        setCurrentPage(currentPage - 1);
    };

    const nextPage = () => {
        if (currentPage === totalPagesNum) return;
        setCurrentPage(currentPage + 1);
    };

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="flex flex-col justify-center items-center ">
            <div className={`${(isMobile || isTablet) ? 'mx-3 justify-center' : 'mx-[200px] justify-between' } gap-x-3 gap-y-12 py-[50px] items-center flex flex-row flex-wrap `}>
                {
                    data.map((event, index) =>{
                        return (
                            <Event
                                key={index}
                                title={event.title}
                                date={event.date}
                                place={event.location}
                                description={event.description}
                                img={event.img}
                            />
                        );
                    })
                }
            </div>
            <ul className="flex flex-row items-center justify-between gap-5 shadow-lg px-4 py-2 rounded-xl text-darken-blue select-none">
                <MdNavigateBefore className={`cursor-pointer h-7 w-7 ${currentPage === 1 && 'text-gray-300 cursor-auto'}`} onClick={prevPage}/>
                {pages.map((page, index) => (
                    <li className={`cursor-pointer px-3 py-1 ${currentPage === page && 'bg-light-secondary text-white rounded-md'}`} key={index} onClick={() => goToPage(page)}>{page}</li>
                ))}
                <MdNavigateNext className={`cursor-pointer h-7 w-7 ${currentPage === totalPagesNum && 'text-gray-300 cursor-auto'}`} onClick={nextPage}/>
            </ul>
        </div>
    );
};

export default EventsPagination;