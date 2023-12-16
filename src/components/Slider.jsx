import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <div>
            <div>
                <Carousel>
                    <div>
                        {/* <img src={img1} /> */}
                        <p>slider 1</p>
                    </div>
                    <div>
                        {/* <img src={img2} /> */}
                        <p>slider 2</p>
                    </div>
                    <div>
                        {/* <img src={img3} /> */}
                        <p>slider 3</p>
                    </div>
                    <div>
                        {/* <img src={img4} /> */}
                    </div>
                    <div>
                        {/* <img src={img5} /> */}
                    </div>
                    <div>
                        {/* <img src={img6} /> */}
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Slider;