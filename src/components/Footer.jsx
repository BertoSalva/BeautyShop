import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <>
<section className='bg-slate-200 w-full md:px-8 px-4 md:py-6 py-3 flex flex-col justify-center items-center gap-2 border-[2px] border-black'>
  <h1 className='text-black font-bold text-2xl md:text-3xl'>
    Beautyshop <span className='italic text-[#f273f2]'>Salon</span>
  </h1>

  {/* Social Media Icons */}
  <div id='icons' className='flex justify-center items-center gap-2 mt-2'>
    {[FaFacebook, FaYoutube, FaInstagram, FaTwitter].map((Icon, index) => (
      <div key={index} className='bg-[#f273f2] p-2 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-105 transition-transform duration-300'>
        <Icon className='size-4 fill-white' />
      </div>
    ))}
  </div>
</section>



      {/* Back to Top Button */}
      {/* <div data-aos="slide-right" data-aos-delay="200" id='icon-box' 
        className='bg-[#f273f2] p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed bottom-4 right-4 lg:bottom-6 lg:right-6'>
        <Link to='hero' spy={true} offset={-100} smooth={true}>
          <FaArrowUp className='size-6' />
        </Link>
      </div> */}
    </>
  );
};

export default Footer;
