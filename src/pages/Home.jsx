import Slider from "../components/Slider";
import aboutLogo from '../assets/icon[2176].png';

const Home = () => {
    return (
        <div>
            <Slider />
            {/* about us */}
            <div className="w-[90%] mt-20 mx-auto">
                <div className="flex items-center">
                    <div className="w-[40%]">
                        <img className="w-full" src={aboutLogo} alt="" />
                    </div>
                    <div className="w-[60%]">
                        <h1 className="text-4xl font-bold uppercase"><span className="text-blue-500"> Business and IT</span> Solutions in Bangladesh</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;