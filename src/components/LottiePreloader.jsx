import Lottie from 'lottie-react';
import animationData from '../assets/preloader.json';

const LottiePreloader = () => {
    return (
        <div className="lottie-preloader flex justify-center items-center w-screen h-screen">
            <Lottie animationData={animationData} loop={true} className="w-60 " />
        </div>
    );
};

export default LottiePreloader;
