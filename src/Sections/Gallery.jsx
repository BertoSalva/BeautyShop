import React, { useEffect } from 'react'
import gal1 from '../assets/images/gal1.jpg'
import gal2 from '../assets/images/g2.jpg'
import gal3 from '../assets/images/g1.jpg'
import gal4 from '../assets/images/gal4.jpg'
import gal5 from '../assets/images/g4.jpg'
import gal6 from '../assets/images/gal6.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
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
      <section className='w-full flex flex-col md:px-20 px-10 h-fit pb-[300px] py-20 justify-center items-center gap-16 bg-gray-900 -mb-[200px]'>
        <h1 data-aos="zoom-in" className='text-6xl text-white font-bold text-center'>Experience the Best Hair Do's<br></br> & Shaving Services</h1>
      </section>

      <div className=' w-full m-auto flex flex-col justify-center items-center'>
        <div className='lg:w-[80%] w-full grid md:grid-cols-3 grid-cols-1 justify-center justify-items-center items-center gap-10 md:-mb-[540px]'>
          <img data-aos="zoom-out" data-aos-delay="200" src={gal1} alt="gallery img" className='rounded-xl w-[400px] h-[350px]' />
          <img data-aos="zoom-out" data-aos-delay="400" src={gal2} alt="gallery img" className='rounded-xl w-[400px] h-[350px]' />
          <img data-aos="zoom-out" data-aos-delay="600" src={gal3} alt="gallery img" className='rounded-xl w-[400px] h-[350px]' />
          <img data-aos="zoom-out" data-aos-delay="800" src={gal4} alt="gallery img" className='rounded-xl w-[400px] h-[350px]' />
          <img data-aos="zoom-out" data-aos-delay="1000" src={gal5} alt="gallery img" className='rounded-xl w-[400px] h-[350px]' />
          <img data-aos="zoom-out" data-aos-delay="1200" src={gal6} alt="gallery img" className='rounded-xl w-[400px] h-[350px]' />
        </div>
      </div>
    </>

  )
}

export default Gallery