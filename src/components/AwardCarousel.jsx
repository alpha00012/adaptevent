import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Award from './Award.jsx';

const AwardCarousel = ({ awards }) => {
    const { isMobile, isTablet } = useSelector(state => state.config);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 1 : isTablet ? 1 : 3,
        slidesToScroll: isMobile ? 1 : isTablet ? 1 : 2,
        draggable: false,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div className="carousel-container">
            {
                awards.length > 0 && (
                    <Slider {...settings} >
                        {
                            awards.map((award, index) =>{
                                let awardTitle = award.default.split('/').pop().split('.')[0];
                                if (awardTitle.includes('-'))
                                    awardTitle = awardTitle.split('-')[0];

                                if (awardTitle.includes('none'))
                                    awardTitle = '';
                                return (
                                    <Award key={index} award={award.default} index={index} awardTitle={awardTitle}/>
                                );
                            })
                        }
                    </Slider>

                )
            }
        </div>
    );
};

export default AwardCarousel;
