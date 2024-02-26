import { useDispatch } from 'react-redux';
import { setShowFullScreen } from '../redux/config-reducer.js';

const Award = ({ award, index, awardTitle }) => {
    const dispatch = useDispatch();

    const openFullScreen = () => {
        dispatch(setShowFullScreen({
            showFullScreen: true,
            imageUrl: award
        }));
    };

    return (

        <div key={index} className="carousel-item relative">
            <img
                src={award}
                alt={`Award ${index + 1}`}
                className="h-[300px] w-[450px] object-cover object-center cursor-pointer"
                onClick={openFullScreen}
                onDragStart={e => e.preventDefault()}
            />
            <h2 className="text-lg font-bold text-dark-grey text-center">{awardTitle}</h2>

        </div>

    );
};

export default Award;
