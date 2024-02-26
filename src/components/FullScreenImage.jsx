import { useDispatch } from 'react-redux';
import { setShowFullScreen } from '../redux/config-reducer.js';
import { motion as m } from 'framer-motion';

const FullScreenImage = ({ imageUrl }) => {
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(setShowFullScreen({
            showFullScreen: false,
            imageUrl: ''
        }));
    };

    return (

        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="full-screen-overlay"
            onClick={onClose}>
            <img src={imageUrl} alt="Full Screen Image" className="full-screen-image" />
        </m.div>
    );
};

export default FullScreenImage;
