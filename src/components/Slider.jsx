import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import s1 from '../assets/s1.jpg';
import s2 from '../assets/2.jpg';

const Slider = () => {
    return (
        <div className="">
            <div>
                <Carousel>
                    <div>
                        <img className="" src={s2} />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Slider;