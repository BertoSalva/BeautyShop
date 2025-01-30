import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Pricing = () => {

  useEffect(() => {
    AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-sine',
        delay: 100,
    });
}, [])

  return (
    <section id='pricing' className='w-full md:px-20 px-10 md:py-20 py-10 flex flex-col justify-center items-center gap-24'>
      <h1 data-aos="zoom-in" className='text-6xl font-bold text-black'>Our Pricing</h1>
      <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-20 w-[85%]'>

        <div data-aos="zoom-out" data-aos-delay="200" className='flex justify-between items-center gap-6 border-b-2 border-[#a69f7d] pb-10'>
          <h1 className='text-3xl text-gray-900 font-bold'>Luxury Facial Treatment</h1>
          <h1 className='text-[#a69f7d] text-4xl font-bold'>R450</h1>
        </div>
        <div data-aos="zoom-out" data-aos-delay="400" className='flex justify-between items-center gap-6 border-b-2 border-[#a69f7d] pb-10'>
          <h1 className='text-3xl text-gray-900 font-bold'>Professional Makeup</h1>
          <h1 className='text-[#a69f7d] text-4xl font-bold'>R600</h1>
        </div>
        <div data-aos="zoom-out" data-aos-delay="600" className='flex justify-between items-center gap-6 border-b-2 border-[#a69f7d] pb-10'>
          <h1 className='text-3xl text-gray-900 font-bold'>Bridal Makeup Package</h1>
          <h1 className='text-[#a69f7d] text-4xl font-bold'>R1,200</h1>
        </div>
        <div data-aos="zoom-out" data-aos-delay="800" className='flex justify-between items-center gap-6 border-b-2 border-[#a69f7d] pb-10'>
          <h1 className='text-3xl text-gray-900 font-bold'>Hair Wash & Blow-Dry</h1>
          <h1 className='text-[#a69f7d] text-4xl font-bold'>R350</h1>
        </div>
        <div data-aos="zoom-out" data-aos-delay="1000" className='flex justify-between items-center gap-6 border-b-2 border-[#a69f7d] pb-10'>
          <h1 className='text-3xl text-gray-900 font-bold'>Deep Conditioning Treatment</h1>
          <h1 className='text-[#a69f7d] text-4xl font-bold'>R500</h1>
        </div>
        <div data-aos="zoom-out" data-aos-delay="1200" className='flex justify-between items-center gap-6 border-b-2 border-[#a69f7d] pb-10'>
          <h1 className='text-3xl text-gray-900 font-bold'>Full Body Massage</h1>
          <h1 className='text-[#a69f7d] text-4xl font-bold'>R750</h1>
        </div>
        <div data-aos="zoom-out" data-aos-delay="1400" className='flex justify-between items-center gap-6 border-b-2 border-[#a69f7d] pb-10'>
          <h1 className='text-3xl text-gray-900 font-bold'>Manicure & Pedicure</h1>
          <h1 className='text-[#a69f7d] text-4xl font-bold'>R550</h1>
        </div>
        <div data-aos="zoom-out" data-aos-delay="1600" className='flex justify-between items-center gap-6 border-b-2 border-[#a69f7d] pb-10'>
          <h1 className='text-3xl text-gray-900 font-bold'>Luxury Skincare Package</h1>
          <h1 className='text-[#a69f7d] text-4xl font-bold'>R1,800</h1>
        </div>

      </div>

    </section>
  )
}

export default Pricing;
