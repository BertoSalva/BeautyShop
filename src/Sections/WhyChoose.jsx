import React, { useEffect } from 'react'
import whyimg from '../assets/images/why3.webp'
import { FaAngleDoubleRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChoose = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  return (
    <section id='about' className='w-full md:px-20 px-10 md:py-20 py-10 flex flex-col md:flex-row justify-center items-center gap-20 bg-cover bg-center' style={{ backgroundImage: `url(${whyimg})` }}>
      
      {/* Customer Support Section */}
      <div data-aos="zoom-in" className='flex flex-col justify-center items-center gap-10 bg-white p-10 rounded-xl md:w-[40%] w-full'>
        <h1 className='text-[#f273f2] text-4xl font-bold'>CUSTOMER SUPPORT</h1>
        <p className='text-xl text-black font-medium text-center'>
          Our team is available **24/7** to assist you with any beauty inquiries, order tracking, and skincare advice. 
        </p>
        <div className='flex flex-col justify-center items-center gap-4'>
          <p className='text-xl text-black font-lg'>Monday - Friday: 9AM - 10PM</p>
          <p className='text-xl text-black font-lg'>Saturday: 10AM - 8PM</p>
          <p className='text-xl text-black font-lg'>Sunday: 11AM - 6PM</p>
        </div>

        <button className='px-10 py-4 rounded-xl border-2 border-black text-black font-semibold text-lg hover:bg-[#f273f2] hover:text-white mt-6'>
          CONTACT US
        </button>
      </div>

      {/* Why Choose Us Section */}
      <div data-aos="slide-up" data-aos-delay="200" className='md:w-[40%] w-full flex flex-col justify-center items-start gap-6 h-fit'>
        <h1 className='text-6xl text-white font-bold'>Why Choose Us?</h1>
        <p className='text-2xl font-semibold text-white'>
          Discover why thousands trust **Beautyshop** for their skincare, makeup, and haircare needs.
        </p>
        <div id='icon-list' className='flex flex-col justify-center items-start gap-4'>
          <div id='icon-box' className='flex justify-center items-center gap-3'>
            <FaAngleDoubleRight className='text-white size-6' />
            <h1 className='text-xl text-white font-semibold'>Premium beauty products curated by experts</h1>
          </div>
          <div id='icon-box' className='flex justify-center items-center gap-3'>
            <FaAngleDoubleRight className='text-white size-6' />
            <h1 className='text-xl text-white font-semibold'>Nationwide delivery across South Africa</h1>
          </div>
          <div id='icon-box' className='flex justify-center items-center gap-3'>
            <FaAngleDoubleRight className='text-white size-6' />
            <h1 className='text-xl text-white font-semibold'>Affordable pricing with exclusive discounts</h1>
          </div>
          <div id='icon-box' className='flex justify-center items-center gap-3'>
            <FaAngleDoubleRight className='text-white size-6' />
            <h1 className='text-xl text-white font-semibold'>100% authentic & cruelty-free beauty brands</h1>
          </div>
          <div id='icon-box' className='flex justify-center items-center gap-3'>
            <FaAngleDoubleRight className='text-white size-6' />
            <h1 className='text-xl text-white font-semibold'>Fast & reliable customer support</h1>
          </div>
        </div>

        <button className='text-black px-10 py-4 bg-white hover:bg-[#f273f2] hover:text-black rounded-xl font-semibold text-xl mt-5'>
          SHOP NOW
        </button>
      </div>

    </section>
  )
}

export default WhyChoose;
