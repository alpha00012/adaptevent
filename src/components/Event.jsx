import { IoLocationOutline } from 'react-icons/io5';
import { MdAccessTime } from 'react-icons/md';
import EventImg from '/assets/event.jpg';

const Event = ({ title, date, place, description, img }) => {
    const formatSuperscript = (dateString) => {
        return dateString.replace(/(\d+)(st|nd|rd|th)/g, '$1<sup>$2</sup>');
    };
    return (
        <div className="w-[300px] h-[400px] hover:scale-110 p-[15px] rounded-xl border-dark-grey border-[1px] flex flex-col gap-2.5 ">
            <img src={img ? `/assets/events/${img}` : EventImg} alt="event" className="w-full min-h-[150px] object-left object-cover rounded-xl" />
            <div className="flex flex-col justify-between h-full ">
                <div className="flex flex-col gap-2.5">
                    <h2 className="text-xl font-bold">{title.toUpperCase()}</h2>
                    <div className="text-sm text-dark">
                        <div className="flex flex-row items-center gap-2.5">
                            <MdAccessTime className="h-[15px]" />
                            <p><span dangerouslySetInnerHTML={{ __html: formatSuperscript(date.toString()) }} /></p>
                        </div>
                        
                    </div>
                    <p className="text-sm text-darken-blue font-light overflow-hidden line-clamp-3">
                        {description}
                    </p>
                </div>
               
            </div>
        </div>
    );
};

export default Event;
