import React from 'react';
import bannerImg from '../../assets/hero (1).png'
import playstoreImg from '../../assets/playstore.png'
import group from '../../assets/Group.png'

const Banner = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold text-center mt-12 text-[#001941]'>We Build <br></br> <span className='text-[#6F41BE]'>Productive</span> Apps</h1>
            <p className='text-[#627382] text-center mt-8'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br></br>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex gap-3 ml-130 mt-8'>
                <div>
                    <button className='btn bg-white text-[#627382] border-gray-300'><img src={playstoreImg} alt="" />Google Play</button>
                </div>
                <div>
                    <button className='btn bg-white text-[#627382] border-gray-300'><img src={group} alt="" />App Store</button>
                </div>
            </div>
            <img className='w-150 mt-8 ml-90' src={bannerImg} alt="" />
            <div className='bg-[#7445bf]'>
              <h1 className='text-white text-3xl font-bold text-center pt-8'>Trusted by Millions, Built for You</h1>
              <div className='flex justify-between'>
                <div className='text-white ml-100 mt-12'>
                    <p className='ml-4'>Total Downloads</p>
                    <p className='text-4xl font-bold mt-4'>29.6M</p>
                    <p className='mt-4'>21% more than last month</p>
                </div>
                <div className='mt-12'>
                    <p className='ml-4'>Total Reviews</p>
                    <p className='text-4xl font-bold mt-4'>906K</p>
                    <p className='mt-4'>46% more than last month</p>
                </div>
                <div className='mr-90 mt-12 mb-16'>
                    <p className='ml-4'>Active Apps</p>
                    <p className='text-4xl font-bold mt-4'>132+</p>
                    <p className='mt-4'>31 more will Launch</p>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Banner; 