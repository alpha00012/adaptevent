import { motion as m } from 'framer-motion';
import { useSelector } from 'react-redux';
import FullScreenImage from '../components/FullScreenImage.jsx';
import Header from '../components/Header.jsx';
import NavBar from '../components/NavBar.jsx';

const DefaultLayout = ({ children }) => {
    const { showFullScreen, imageUrl } = useSelector(state => state.config);
    return (
        <div>
            {
                showFullScreen && <FullScreenImage imageUrl={imageUrl}/>
            }
            <div className="background h-[50svh] w-full ">
                <NavBar/>
                <Header/>
            </div>
            <m.div>
                {children}
            </m.div>
        </div>
    );
};

export default DefaultLayout;