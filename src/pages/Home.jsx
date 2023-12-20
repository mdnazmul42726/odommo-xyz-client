import Slider from "../components/Slider";
import aboutLogo from '../assets/icon[2176].png';
import webService from '../assets/websiteservice.svg';
import corporateWebsite from '../assets/corporatewebsite.svg';
import businessWebsite from '../assets/businesswebsite.svg';
import eCommerceWebsite from '../assets/ecommercewebsite.svg';
import emailService from '../assets/emailservice.svg';
import enterpriseemail from '../assets/enterpriseemail.png';
import zimbramailserver from '../assets/zimbramailserver.png';
import sslservice from '../assets/sslservice.svg';
import gsuite from '../assets/gsuite.png';
import cmsWebsite from '../assets/cmswebsite.svg';
import officeLicense from '../assets/office-165-license.png';
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
                                        Welcome to Odommo XYZ!  A growing digital agency  founded in 2020. We are a specialized  web development, Android app development, graphics design, business solutions, digital marketing, UI/UX designing, and data analysis service provider in Bangladesh. Our team of experts is dedicated to helping your businesses establish a strong online presence and achieve your growth goals. With our use of the latest technologies and knowledge of recent business trends, we offer professional and creative solutions tailored to your business needs.
                                    </p>
                                    <p className="mt-2">
                                        We believe in the power of technology and innovation to drive business success. With years of experience in the industry, our team of skilled professionals is committed to delivering high-quality services that exceed our client`s expectations. We understand that each business is unique, so we work closely with our clients to provide customized solutions that align with their objectives. Let`s  pave the way for your business to thrive in the digital era.
                                    </p>
                                </div>
                                <div />
                            </div> :
                                <div className="">
                                    <h1 className="text-3xl font-bold"><span className="text-blue-500">ব্যবসা এবং আইটি</span> সার্ভিস এখন বাংলাদেশে</h1>
                                    <div className="text-xl opacity-75">
                                        <p className="mt-5">
                                            Odommo XYZ-এ স্বাগতম! ২০২০ সালে প্রতিষ্ঠিত একটি  দ্রুত বর্ধনশীল ডিজিটাল এজেন্সি। আমরা বাংলাদেশ ভিত্তিক একটি এজেন্সি যেখানে  ওয়েব ডেভেলপমেন্ট, অ্যান্ড্রয়েড অ্যাপ ডেভেলপমেন্ট, গ্রাফিক্স ডিজাইন, বিজনেস সলিউশন, ডিজিটাল মার্কেটিং, UI/UX ডিজাইনিং এবং ডেটা অ্যানালাইসিস পরিষেবা প্রদানকরে থাকি। আমাদের বিশেষজ্ঞদের টিম আপনার ব্যবসার একটি শক্তিশালী অনলাইন উপস্থিতি প্রতিষ্ঠা করতে এবং আপনার ব্যবসায়িক লক্ষ্য অর্জনে সহায়তা করার জন্য নিবেদিত৷ আমারা সাম্প্রতিক প্রযুক্তি এবং সাম্প্রতিক ব্যবসায়িক ট্রেন্ড ব্যবহার করে, ক্লায়েন্টের ব্যবসার প্রয়োজন অনুসারে আমরা একটি প্রফেশনাল এবং সৃজনশীল সমাধান অফার করি।
                                        </p>
                                        <p className="mt-2">
                                            আমরা ব্যবসায়িক সাফল্যের জন্য প্রযুক্তি এবং উদ্ভাবনের শক্তিতে বিশ্বাস করি। আমাদের দক্ষ পেশাদার টিম আপানাকে  উচ্চ-মানের পরিষেবা সরবরাহ করতে প্রতিশ্রুতিবদ্ধ যা আমাদের ক্লায়েন্টদের প্রত্যাশাকে অতিক্রম করে। আমরা বুঝি যে প্রতিটি ব্যবসা অনন্য, তাই আমরা আমাদের ক্লায়েন্টদের সাথে ঘনিষ্ঠভাবে কাজ করি যাতে কাস্টমাইজড সমাধান প্রদান করা যায় যা তাদের উদ্দেশ্যের সাথে সামঞ্জস্যপূর্ণ হয়। আসুন ডিজিটাল যুগে আপনার ব্যবসার উন্নতির পথ প্রশস্ত করি।
                                        </p>
                                    </div>
                                </div>}
                        </div>
                    </div>
                </div>
            </div >

            {/* Web Sevise */}
            <div className="md:flex mt-20 md:my-36 px-3 md:px-10 py-10 bg-[#F5F5F5]">
                <div className="md:flex items-center gap-4">
                    <div className="md:w-[40%]">
                        <img src={webService} alt="" />
                    </div>
                    <div className="md:w-[60%]">
                        <h1 className="text-4xl font-bold uppercase"><span className="text-blue-500">Website Design</span> For Your Business</h1>
                        <p className="my-5 text-xl opacity-75">Transform your ideas into a stunning online presence with our expert web development services. We create user-friendly and visually appealing websites that are optimized for performance and functionality, providing your business with a strong online presence.
                            <Link className="text-blue-500 hover:underline">Learn More...</Link></p>
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

            {/* Email service */}
            <div className=" md:flex  md:my-36 px-3 md:px-10 py-10 justify-center">
                <div className=" md:flex items-center gap-4">
                    <div className="md:w-[60%]">
                        <h1 className="text-4xl font-bold uppercase"><span className="text-[#FF4949]">Business Email</span> in Bangladesh</h1>
                        <p className="my-5 text-xl opacity-75">Odommo XYZ brings the most advanced Email Solutions to Companies and Enterprises in Bangladesh. Your Emails can be hosted in Bangladesh or the USA. It`s a Low-cost Email Solution for your company. Buy Email Hosting in Bangladesh from Alpha Net. Low price, various payment options, and volume discount available.
                            <Link className="text-blue-500 hover:underline ml-2">Learn More...</Link></p>
                        <div className="">
                            <div className="md:w-[40%] flex md:hidden">
                                <img src={emailService} alt="" />
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mx-auto">

                                {/* Corporate */}
                                <Link> <div className="w-36 shadow-md hover:scale-105 transition-all cursor-pointer">
                                    <div className="pt-5 bg-[#FF4949] justify-center">
                                        <h3 className=" font-bold text-white flex justify-center mb-5 uppercase">Business email</h3>
                                        <div className="bg-white">
                                            <img src={enterpriseemail} alt="" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center my-4 cursor-pointer hover:underline">
                                        <p className="font-semibold flex justify-center">View Details</p>
                                        <MdKeyboardDoubleArrowRight />
                                    </div>
                                </div></Link>

                                {/* Business */}
                                <Link><div className="w-36 shadow-md hover:scale-105 transition-all cursor-pointer">
                                    <div className="pt-5 bg-[#FF4949] justify-center">
                                        <h3 className=" font-bold text-white flex justify-center mb-5 uppercase"> Zimbra Server</h3>
                                        <div className="bg-white">
                                            <img src={zimbramailserver} alt="" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center my-4 cursor-pointer hover:underline">
                                        <p className="font-semibold flex justify-center">View Details</p>
                                        <MdKeyboardDoubleArrowRight />
                                    </div>
                                </div></Link>

                                {/* eCommerce */}
                                <Link><div className="w-36 shadow-md hover:scale-105 transition-all cursor-pointer">
                                    <div className="pt-5 bg-[#FF4949] justify-center">
                                        <h3 className=" font-bold text-white flex justify-center mb-5 uppercase"> G Workspace</h3>
                                        <div className="bg-white">
                                            <img src={gsuite} alt="" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center my-4 cursor-pointer hover:underline">
                                        <p className="font-semibold flex justify-center">View Details</p>
                                        <MdKeyboardDoubleArrowRight />
                                    </div>
                                </div></Link>

                                {/* CMS */}
                                <Link> <div className="w-36 shadow-md hover:scale-105 transition-all cursor-pointer">
                                    <div className="pt-5 bg-[#FF4949] justify-center">
                                        <h3 className=" font-bold text-white flex justify-center mb-5 uppercase">Office 365</h3>
                                        <div className="bg-white flex justify-center">
                                            <img className="w-[47%]" src={officeLicense} alt="" />
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
                    <div className="md:w-[40%] hidden md:flex">
                        <img src={emailService} alt="" />
                    </div>
                </div>

            </div>

            {/* SSL Sevise */}
            <div className="md:flex mt-20 md:my-36 px-3 md:px-10 py-10 bg-[#F5F5F5]">
                <div className="md:flex items-center gap-4">
                    <h1 className="text-4xl font-bold uppercase md:hidden "><span className="text-[#99C33D]">SSL Certificate</span> in Bangladesh</h1>
                    <div className="md:w-[40%]">
                        <img src={sslservice} alt="" />
                    </div>
                    <div className="md:w-[60%]">
                        <h1 className="text-4xl font-bold uppercase hidden md:block"><span className="text-[#99C33D]">SSL Certificate</span> in Bangladesh</h1>
                        <p className="my-5 text-xl opacity-75">An SSL Certificate is essential for encrypted communication between client web browsers and your Website. SSL ensures the security of sensitive customer information when transmitted over the Internet. SSL is also necessary to integrate with Social Networking services like FaceBook, Twitter, etc. Enabling SSL may also boost your Website`s Search Engine Ranking. Increase your Website`s security, credibility & search engine ranking with an SSL Certificate from Odommo XYZ. </p>
                        <div className="">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                <Link><button className="btn bg-[#99C33D] text-white font-bold hover:bg-transparent hover:text-black">View Details</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;