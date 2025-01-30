import React, { useEffect } from 'react'
import servicesimg from '../assets/images/g4.jpg'
import service1 from '../assets/images/ser1.png'
import service2 from '../assets/images/ser2.png'
import service3 from '../assets/images/ser3.png'
import service4 from '../assets/images/ser4.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  return (
    <section id='services' className='w-full flex flex-col md:px-20 px-10 md:py-20 py-10 justify-center items-center gap-16 bg-gray-900'>
      
      {/* Section Title */}
      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 data-aos="zoom-in" className='text-6xl text-white font-bold text-center'>Our Beauty Services</h1>
        <p data-aos="zoom-in" className='text-xl text-slate-200 text-center'>
          Indulge in luxury beauty services tailored for your self-care needs. 
          From expert skincare to professional makeup, we bring beauty to your doorstep.
        </p>
      </div>

      {/* Services Grid */}
      <div className='w-[90%] grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-6'>
        
        {/* Services Image */}
        <div>
          <img data-aos="zoom-in" data-aos-delay="200" src={servicesimg} alt="Beauty Services" className='w-full md:h-[460px] rounded-xl' />
        </div>

        {/* Services List */}
        <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-8'>
          <div data-aos="zoom-out" data-aos-delay="400" className='bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl'>
            <img src={service1} alt="Luxury Facial" className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
            <h1 className='text-black text-[25px] font-bold'>Luxury Facial</h1>
          </div>
          <div data-aos="zoom-out" data-aos-delay="600" className='bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl'>
            <img src={service2} alt="Professional Makeup" className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
            <h1 className='text-black text-[25px] font-bold'>Professional Makeup</h1>
          </div>
          <div data-aos="zoom-out" data-aos-delay="800" className='bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl'>
            <img src={service3} alt="Hair Styling" className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
            <h1 className='text-black text-[25px] font-bold'>Hair Styling</h1>
          </div>
          <div data-aos="zoom-out" data-aos-delay="1000" className='bg-white px-8 py-12 flex flex-col justify-center items-center gap-4 rounded-xl'>
            <img src={service4} alt="Nail Care" className='size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
            <h1 className='text-black text-[25px] font-bold'>Manicure & Pedicure</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;
