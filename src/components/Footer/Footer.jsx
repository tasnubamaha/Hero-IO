import React from 'react';
import logo from '../../assets/logo.png'
import fb from '../../assets/fb.png'
import thread from '../../assets/thread.png'
import linkedln from '../../assets/linkedln.png'

const Footer = () => {
    return (
        <footer className="bg-[#001931] text-white py-10">
            
            <div className="max-w-7xl mx-auto px-4">

                
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    
                    <div className="flex items-center gap-3">
                        <img className='w-10 h-10' src={logo} alt="logo" />
                        <h2 className='text-xl font-semibold'>HERO.IO</h2>
                    </div>

                   
                    <div className="text-center md:text-right">
                        <h6 className="font-semibold mb-2">Social Links</h6>
                        <div className="flex justify-center md:justify-end gap-4">
                            <img className="w-6 cursor-pointer" src={thread} alt="" />
                            <img className="w-6 cursor-pointer" src={linkedln} alt="" />
                            <img className="w-6 cursor-pointer" src={fb} alt="" />
                        </div>
                    </div>

                </div>

               
                <div className="text-center mt-8 text-sm text-gray-400">
                    © {new Date().getFullYear()} AppNest. All rights reserved.
                </div>

            </div>

        </footer>
    );
};

export default Footer;