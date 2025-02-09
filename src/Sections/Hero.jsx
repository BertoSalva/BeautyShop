import React, { useEffect } from 'react'
import heroimg from '../assets/images/hero.jpg'
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaHeadphones } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import sissor from '../assets/images/sissor.png'
import menshair from '../assets/images/menshair.png'
import trimmer from '../assets/images/trimmer.png'
import womenhair from '../assets/images/womenhair.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

  useEffect(() => {
    AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-sine',
        delay: 100,
    });
}, [])

  return (
    <>
      {/* Hero Section */}
      <section id='hero' className='w-full md:px-[120px] px-10 py-10 flex flex-col md:flex-row justify-center items-center gap-20'>
        <div id='content-box' className='flex flex-col justify-center items-start gap-10'>
          <h1 data-aos="zoom-in" className='text-2xl text-black font-semibold'>WELCOME TO</h1>
          <h1 data-aos="zoom-in" className='text-6xl text-black font-bold'>South Africa's Leading<br /> Online Beauty Store</h1>
          <p data-aos="zoom-in" className='text-lg text-gray-700 font-medium'>
            Discover premium beauty products and self-care essentials—all available for delivery across South Africa.  
            Shop skincare, haircare, and luxury fragrances at unbeatable prices!
          </p>
          
          {/* Contact Information */}
          <div data-aos="slide-up" id='icon-list' className='flex flex-col justify-center items-start gap-6'>
            <div id='icon-box' className='flex justify-center items-center gap-3'>
              <FaLocationDot className='text-black size-6' />
              <h1 className='text-xl text-gray-800 font-semibold'>Nationwide Delivery Across South Africa</h1>
            </div>
            <div id='icon-box' className='flex justify-center items-center gap-3'>
              <MdOutlinePhoneAndroid className='text-black size-6' />
              <h1 className='text-xl text-gray-800 font-semibold'>+27 123 456 789 / +27 987 654 321</h1>
            </div>
            <div id='icon-box' className='flex justify-center items-center gap-3'>
              <MdEmail className='text-black size-6' />
              <h1 className='text-xl text-gray-800 font-semibold'>support@beautyshop.co.za</h1>
            </div>
            <div id='icon-box' className='flex justify-center items-center gap-3'>
              <FaHeadphones className='text-black size-6' />
              <h1 className='text-xl text-gray-800 font-semibold'>Live Chat Support Available 24/7</h1>
            </div>
          </div>

          {/* Call To Action */}
          <button data-aos="zoom-in" className='px-10 py-4 rounded-xl border-2 border-[#f273f2] text-black font-semibold text-lg hover:bg-[#f273f2] hover:text-white'>
            SHOP NOW
          </button>
        </div>

        {/* Hero Image */}
        <div data-aos="zoom-in" id='image-box' className='md:w-[50%] w-full'>
          <img src={heroimg} alt="Beauty Store" className='rounded-xl w-full md:h-[700px] h-[500px]' />
        </div>
      </section>

      {/* Featured Beauty Categories */}
      <section className='grid grid-cols-1 md:grid-cols-4 justify-center items-start w-full md:px-[120px] px-10 py-10 gap-10'>
        <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-4'>
          <img src={sissor} alt="Skincare" className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
          <h1 className='text-2xl text-black font-semibold'>Luxury Skincare</h1>
          <button className='px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-[#f273f2] hover:text-black cursor-pointer'>SHOP NOW</button>
        </div>
        <div data-aos="zoom-in" data-aos-delay="400" className='flex flex-col justify-center items-center gap-4'>
          <img src={menshair} alt="Makeup" className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
          <h1 className='text-2xl text-black font-semibold'>Makeup Essentials</h1>
          <button className='px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-[#f273f2] hover:text-black cursor-pointer'>SHOP NOW</button>
        </div>
        <div data-aos="zoom-in" data-aos-delay="600" className='flex flex-col justify-center items-center gap-4'>
          <img src={trimmer} alt="Haircare" className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
          <h1 className='text-2xl text-black font-semibold'>Professional Haircare</h1>
          <button className='px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-[#f273f2] hover:text-black cursor-pointer'>SHOP NOW</button>
        </div>
        <div data-aos="zoom-in" data-aos-delay="800" className='flex flex-col justify-center items-center gap-4'>
          <img src={womenhair} alt="Fragrance" className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
          <h1 className='text-2xl text-black font-semibold'>Luxury Fragrances</h1>
          <button className='px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-[#f273f2] hover:text-black cursor-pointer'>SHOP NOW</button>
        </div>
      </section>
    </>
  )
}

export default Hero;
