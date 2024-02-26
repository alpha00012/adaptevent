import { useEffect, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LogoW from '/assets/logos/logo_w.png';

const MobileNavbar = ({ setShowNav }) => {
    const closeNav = (e) => {
        e.preventDefault();
        setShowNav(false);
    };

    const [showAgendaLinks, setShowAgendaLinks] = useState(false);

    const toggleAgendaLinks = () => {
        setShowAgendaLinks(!showAgendaLinks);
    };

    return (
        <div className="navbar-mobile z-50 fixed top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center transition-transform duration-300 transform">
            <IoMenu className="absolute top-4 left-3 text-4xl text-white" onClick={closeNav}/>
            <div className="flex flex-col items-center gap-4 relative text-2xl font-bold">
            <Link to="/">Home</Link>
                    <Link to="/aboutus" >About us</Link>
                    
                    <button onClick={toggleAgendaLinks} className="flex flex-col items-center gap-4 relative text-2xl font-bold">
                    Agenda
                </button>
                {showAgendaLinks && (
                    <div className="flex flex-col agenda-links space-y-2 text-base">
                        <Link to="/events1"  className="text-green-400 ">
                            Day 1
                        </Link>
                        <Link to="/events2"  className="text-green-400">
                            Day 2
                        </Link>
                        <Link to="/events3"  className="text-green-400">
                            Day 3
                        </Link>
                        <Link to="/eventsall"  className="text-green-400">
                            All
                        </Link>
                    </div>
                )}
                    <Link to="/formulaire" >Registration</Link>
                    <Link to="/exhibiting" >Exhibiting</Link>
                    <Link to="/sponsor" >Sponsorship</Link>
                
               
            </div>
        </div>
    );
};

export default MobileNavbar;
