import { motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';
import HomeLayout from '../layout/HomeLayout.jsx';

const Home = () => {
    return (
        <HomeLayout>
            <m.div className="flex flex-col gap-8 items-center justify-center h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
                <div className="flex flex-col items-center text-5xl md:text-[64px] text-white font-bold text-center">

                    <div className="flex flex-col ">
                        <span>Welcome To</span>
                        <span className="text-light-primary">ADAPT <span className="text-primary">AFRICA</span> CONGRESS</span>

                    </div>
                </div>
                <Link to="/aboutus"
                    className="px-12 py-2 rounded-3xl border border-light inline-flex items-center justify-center gap-2.5 text-2xl font-bold text-light hover:scale-110 transition-transform">
                    About US
                </Link>
            </m.div>
        </HomeLayout>
    );
};

export default Home;