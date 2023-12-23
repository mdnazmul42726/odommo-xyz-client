import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import s1 from '../assets/s1.jpg';
import s2 from '../assets/2.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

const Slider = () => {
    return (
        <div className="">
            <div>
                <Carousel>
                    <div>
                        <img className="" src={banner2} />
                    </div>
                    <div>
                        <img className="" src={banner3} />
                    </div>
                    <div>
                        <img className="" src={s2} />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Slider;