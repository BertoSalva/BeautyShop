import React from 'react'
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <>
      <section className='bg-slate-200 w-full md:px-20 px-10 md:py-20 py-10 flex flex-col justify-center items-center gap-6 border-[20px] border-[#f273f2]'>
        <h1 className='text-black font-bold text-5xl'>Beautyshop <span className='italic text-[#f273f2]'>Salon</span></h1>
        <p className='text-lg text-center font-semibold text-slate-600'>
          Elevate your beauty routine with Beautyshop! Book top-rated beauty services, 
          connect with expert stylists, and experience salon-quality care—all from the comfort of your home. 
          Pampering made easy, just a click away!
        </p>
        
        <div id='icons' className='flex justify-center items-center gap-4'>
          <div id='icon-box' className='bg-[#f273f2] p-4 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300'>
            <FaFacebook className='size-7 fill-white' />
          </div>
          <div id='icon-box' className='bg-[#f273f2] p-4 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300'>
            <FaYoutube className='size-7 fill-white' />
          </div>
          <div id='icon-box' className='bg-[#f273f2] p-4 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300'>
            <FaInstagram className='size-7 fill-white' />
          </div>
          <div id='icon-box' className='bg-[#f273f2] p-4 rounded-full cursor-pointer hover:bg-black hover:text-white transform hover:scale-110 transition-transform duration-300'>
            <FaTwitter className='size-7 fill-white' />
          </div>
        </div>
      </section>

      <div data-aos="slide-right" data-aos-delay="200" id='icon-box' className='bg-[#f273f2] p-4 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-12 bottom-6 right-6 lg:right-6'>
        <Link to='hero' spy={true} offset={-100} smooth={true}>
          <FaArrowUp className='size-8' />
        </Link>
      </div>
    </>
  )
}

export default Footer;
