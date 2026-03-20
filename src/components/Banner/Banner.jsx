import React from 'react';
import bannerImg from '../../assets/hero (1).png'
import playstoreImg from '../../assets/playstore.png'
import group from '../../assets/Group.png'
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto px-4">

            
            <h1 className='text-3xl md:text-5xl font-bold text-center mt-12 text-[#001941]'>
                We Build <br />
                <span className='text-[#6F41BE]'>Productive</span> Apps
            </h1>

           
            <p className='text-[#627382] text-center mt-6 md:mt-8 max-w-2xl mx-auto'>
                At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>

            
            <div className='flex flex-col sm:flex-row justify-center gap-4 mt-8'>
                <Link to="https://play.google.com/store/games?hl=en">
                    <button className='btn bg-white text-[#627382] border-gray-300 flex items-center gap-2'>
                        <img src={playstoreImg} alt="" className="w-5" />
                        Google Play
                    </button>
                </Link>

                <Link to="https://www.apple.com/app-store/">
                    <button className='btn bg-white text-[#627382] border-gray-300 flex items-center gap-2'>
                        <img src={group} alt="" className="w-5" />
                        App Store
                    </button>
                </Link>
            </div>

           
            <div className="flex justify-center">
                <img className='w-full max-w-md md:max-w-2xl mt-8' src={bannerImg} alt="" />
            </div>

           
            <div className='bg-[#7445bf] rounded-xl py-10 px-4'>
                <h1 className='text-white text-2xl md:text-3xl font-bold text-center'>
                    Trusted by Millions, Built for You
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-center text-white'>

                    <div>
                        <p>Total Downloads</p>
                        <p className='text-3xl md:text-4xl font-bold mt-2'>29.6M</p>
                        <p className='mt-2 text-sm'>21% more than last month</p>
                    </div>

                    <div>
                        <p>Total Reviews</p>
                        <p className='text-3xl md:text-4xl font-bold mt-2'>906K</p>
                        <p className='mt-2 text-sm'>46% more than last month</p>
                    </div>

                    <div>
                        <p>Active Apps</p>
                        <p className='text-3xl md:text-4xl font-bold mt-2'>132+</p>
                        <p className='mt-2 text-sm'>31 more will Launch</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Banner;