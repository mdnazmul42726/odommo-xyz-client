import Slider from "../components/Slider";
import aboutLogo from '../assets/icon[2176].png';
import webService from '../assets/websiteservice.svg';
import corporateWebsite from '../assets/corporatewebsite.svg';
import businessWebsite from '../assets/businesswebsite.svg';
import eCommerceWebsite from '../assets/ecommercewebsite.svg';
import cmsWebsite from '../assets/cmswebsite.svg';
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const Home = () => {
    const [isBangla, setIsBangla] = useState(false)

    function handleChooseLanguage() {
        setIsBangla(!isBangla)
    }

    return (
        <div>
            <Slider />
            {/* about us */}
            <div className="w-[90%] mt-20 mx-auto">
                <div className="md:flex items-center">
                    <div className="md:w-[40%] hidden md:flex">
                        <img className="w-full" src={aboutLogo} alt="" />
                    </div>
                    <div className="md:w-[60%]">
                        <div className="flex gap-3 mb-4">
                            <p className="text-black text-xl">Switch to Bangla</p>
                            <input onChange={handleChooseLanguage} type="checkbox" className="toggle toggle-primary" />
                        </div>

                        <div className="">
                            {!isBangla ? < div className="">
                                <h1 className="text-4xl font-bold uppercase"><span className="text-blue-500"> Business and IT</span> Solutions in Bangladesh</h1>
                                <div className="mt-5 text-xl opacity-75">
                                    <p>
                                        Welcome to Odommo, the leading provider of comprehensive IT solutions in Bangladesh. Nestled in the heart of this vibrant nation, Odommo is your dedicated partner in unlocking the full potential of technology for your business.
                                    </p>
                                    <p className="mt-2">
                                        Founded in 2023, Odommo has been on a mission to redefine the landscape of IT services in Bangladesh. Our journey began with a vision to offer versatile and top-notch solutions, empowering businesses to thrive in the digital era. From Dhaka to every corner of the country, we`ve been instrumental in driving innovation and success.
                                    </p>
                                    <p className="mt-2">
                                        At Odommo, our mission is simple yet powerful – to seamlessly integrate technology into your business DNA. We aim to be the catalyst for your growth, providing cutting-edge web and mobile development, strategic digital marketing, captivating graphic and UI/UX design, and a suite of services designed to propel your brand to new heights.
                                    </p>
                                </div>
                                <div />
                            </div> :
                                <div className="">
                                    <h1 className="text-3xl font-bold"><span className="text-blue-500">ব্যবসা এবং আইটি</span> সার্ভিস এখন বাংলাদেশে</h1>
                                    <div className="text-xl opacity-75">
                                        <p className="mt-5">
                                            বাংলাদেশে ব্যাপক আইটি সলিউশনের নেতৃস্থানীয় প্রদানকারী Odommo-এ স্বাগতম। এই প্রাণবন্ত জাতির হৃদয়ে অবস্থিত, Odommo হল আপনার ব্যবসার জন্য প্রযুক্তির পূর্ণ সম্ভাবনা আনলক করার জন্য আপনার নিবেদিত অংশীদার।
                                        </p>
                                        <p className="mt-2">
                                            2023 সালে প্রতিষ্ঠিত, Odommo বাংলাদেশে আইটি পরিষেবার ল্যান্ডস্কেপকে নতুন করে সংজ্ঞায়িত করার লক্ষ্যে কাজ করেছে। আমাদের যাত্রা শুরু হয়েছিল বহুমুখী এবং শীর্ষস্থানীয় সমাধানগুলি অফার করার একটি দৃষ্টিভঙ্গি নিয়ে, ডিজিটাল যুগে ব্যবসাগুলিকে সমৃদ্ধ করার ক্ষমতায়ন। ঢাকা থেকে দেশের প্রতিটি কোণে, আমরা উদ্ভাবন এবং সাফল্যের ড্রাইভিং সহায়ক ভূমিকা পালন করেছি।
                                        </p>
                                        <p className="mt-2">
                                            Odommo-এ, আমাদের লক্ষ্য সহজ কিন্তু শক্তিশালী - আপনার ব্যবসার DNA-তে প্রযুক্তিকে নির্বিঘ্নে সংহত করা। আমরা আপনার বৃদ্ধির জন্য অনুঘটক হওয়ার লক্ষ্য রাখি, অত্যাধুনিক ওয়েব এবং মোবাইল ডেভেলপমেন্ট, কৌশলগত ডিজিটাল মার্কেটিং, চিত্তাকর্ষক গ্রাফিক এবং UI/UX ডিজাইন এবং আপনার ব্র্যান্ডকে নতুন উচ্চতায় নিয়ে যাওয়ার জন্য ডিজাইন করা পরিষেবাগুলির একটি স্যুট প্রদান করা।
                                        </p>
                                    </div>
                                </div>}
                        </div>
                    </div>
                </div>
            </div >

            {/* Web Sevise */}
            <div className="md:flex my-36 px-3 md:px-10 py-10 bg-[#F5F5F5]">
                <div className="md:flex items-center gap-4">
                    <div className="md:w-[40%]">
                        <img src={webService} alt="" />
                    </div>
                    <div className="md:w-[60%]">
                        <h1 className="text-4xl font-bold"><span className="text-blue-500">Website Design</span> For Your Business</h1>
                        <p className="my-5 text-xl">Let us help you establish a Website. Odommo`s expert Web design team will study your requirements and design a Website that turns your concept into reality. Our prices are reasonable, and quality is guaranteed. <Link className="text-blue-500 hover:underline">Learn More...</Link></p>
                        <div className="">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

                                {/* Corporate */}
                                <Link> <div className="w-36 shadow-md hover:scale-105 transition-all cursor-pointer">
                                    <div className="pt-5 bg-blue-500 justify-center">
                                        <h3 className=" font-bold text-white flex justify-center mb-5 uppercase">Corporate</h3>
                                        <div className="bg-white">
                                            <img src={corporateWebsite} alt="" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center my-4 cursor-pointer hover:underline">
                                        <p className="font-semibold flex justify-center">View Details</p>
                                        <MdKeyboardDoubleArrowRight />
                                    </div>
                                </div></Link>

                                {/* Business */}
                                <Link><div className="w-36 shadow-md hover:scale-105 transition-all cursor-pointer">
                                    <div className="pt-5 bg-blue-500 justify-center">
                                        <h3 className=" font-bold text-white flex justify-center mb-5 uppercase">Business</h3>
                                        <div className="bg-white">
                                            <img src={businessWebsite} alt="" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center my-4 cursor-pointer hover:underline">
                                        <p className="font-semibold flex justify-center">View Details</p>
                                        <MdKeyboardDoubleArrowRight />
                                    </div>
                                </div></Link>

                                {/* eCommerce */}
                                <Link><div className="w-36 shadow-md hover:scale-105 transition-all cursor-pointer">
                                    <div className="pt-5 bg-blue-500 justify-center">
                                        <h3 className=" font-bold text-white flex justify-center mb-5 uppercase">eCommerce</h3>
                                        <div className="bg-white">
                                            <img src={eCommerceWebsite} alt="" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center my-4 cursor-pointer hover:underline">
                                        <p className="font-semibold flex justify-center">View Details</p>
                                        <MdKeyboardDoubleArrowRight />
                                    </div>
                                </div></Link>

                                {/* CMS */}
                                <Link> <div className="w-36 shadow-md hover:scale-105 transition-all cursor-pointer">
                                    <div className="pt-5 bg-blue-500 justify-center">
                                        <h3 className=" font-bold text-white flex justify-center mb-5 uppercase">CMS</h3>
                                        <div className="bg-white">
                                            <img src={cmsWebsite} alt="" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center my-4 cursor-pointer hover:underline">
                                        <p className="font-semibold flex justify-center">View Details</p>
                                        <MdKeyboardDoubleArrowRight />
                                    </div>
                                </div></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Home;