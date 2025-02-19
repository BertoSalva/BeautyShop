import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <>
      <section className='bg-slate-200 w-full md:px-10 px-6 md:py-12 py-6 flex flex-col justify-center items-center gap-4 border-[10px] border-[#000000]'>
        <h1 className='text-black font-bold text-4xl md:text-5xl'>
          Beautyshop <span className='italic text-[#f273f2]'>Salon</span>
        </h1>
        <p className='text-sm text-center font-medium text-slate-600 max-w-xl'>
          Elevate your beauty routine with Beautyshop! Book top-rated beauty services, 
          connect with expert stylists, and experience salon-quality care—all from the comfort of your home.
        </p>

        {/* Social Media Icons */}
        <div id='icons' className='flex justify-center items-center gap-3'>
          {[FaFacebook, FaYoutube, FaInstagram, FaTwitter].map((Icon, index) => (
            <div key={index} className='bg-[#f273f2] p-3 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-105 transition-transform duration-300'>
              <Icon className='size-5 fill-white' />
            </div>
          ))}
        </div>
      </section>

      {/* Back to Top Button */}
      <div data-aos="slide-right" data-aos-delay="200" id='icon-box' 
        className='bg-[#f273f2] p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed bottom-4 right-4 lg:bottom-6 lg:right-6'>
        <Link to='hero' spy={true} offset={-100} smooth={true}>
          <FaArrowUp className='size-6' />
        </Link>
      </div>
    </>
  );
};

export default Footer;
