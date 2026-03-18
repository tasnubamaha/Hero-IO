import React from 'react';
import logo from '../../assets/logo.png'
import fb from '../../assets/fb.png'
import thread from '../../assets/thread.png'
import linkedln from '../../assets/linkedln.png'

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-[#001931] text-neutral-content p-10">
 <div className='flex'>
     <div>
    <img className='w-15 h-15 ml-40' src={logo} alt="" />
  </div>
  <div>
    <h2 className='mt-6'>HERO.IO</h2>
  </div>
 </div>
 <div>
    <h4 className='mt-30'>© {new Date().getFullYear()} AppStore. All rights reserved.</h4>
 </div>
  <nav>
    <h6 className="footer-title">Social Links</h6>
    <div className="grid grid-flow-col gap-4">
      <a>
        <img src={thread} alt="" />
      </a>
      <a>
        <img src={linkedln} alt="" />
      </a>
      <a>
        <img src={fb} alt="" />
      </a>
    </div>
  </nav>
</footer>
    );
};

export default Footer;