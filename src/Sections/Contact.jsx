import React, { useEffect } from 'react'
import contactimg from '../assets/images/contactimg.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  return (
    <section id='contact' className='w-full h-fit grid grid-cols-1 lg:grid-cols-2 justify-center items-start'>
      <div data-aos="zoom-in" id='img-box' className='w-full bg-cover bg-center h-[700px]' style={{ backgroundImage: `url(${contactimg})` }}>
      </div>
      <div id='form-box' className='bg-gray-900 p-16 flex flex-col justify-center items-center gap-12 w-full h-[700px]'>
        <h1 data-aos="zoom-in" data-aos-delay="200" className='text-white text-6xl font-bold text-center'>Contact Us</h1>
        <div data-aos="zoom-out" data-aos-delay="400" id='form' className='w-full flex flex-col justify-center items-center gap-4'>
          <input type="text" placeholder='Enter your full name' className='w-full p-3 text-black font-semibold' />
          <input type="email" placeholder='Enter your valid email' className='w-full p-3 text-black font-semibold' />
          <textarea name="" id="" cols="30" rows="5" placeholder='Enter your message here...' className='w-full p-3'></textarea>
          <input type="submit" value="SUBMIT" className='bg-[#f9b9f9] hover:bg-[#f15bf1] cursor-pointer w-full font-semibold text-lg text-black p-3' />
        </div>
      </div>
    </section>
  )
}

export default Contact