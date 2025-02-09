import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const nailTechs = [
  { name: 'Lesego Mabena', rating: 4.9, jobsDone: 150, isOnline: true },
  { name: 'Kwena Phadu', rating: 4.6, jobsDone: 120, isOnline: true },
  { name: 'Pfano Balibali', rating: 5.0, jobsDone: 200, isOnline: true },
  { name: 'Katlego Thwala', rating: 4.7, jobsDone: 95, isOnline: false },
];

const WhyChoose = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <section 
      id='about' 
      className='w-full md:px-20 px-10 md:py-20 py-10 flex flex-col items-center gap-10'
      style={{ background: 'linear-gradient(to right,  #f273f2, #fbd0fb)' }}
    >
      
      {/* Section Title */}
      <h1 data-aos="zoom-in" className='text-5xl font-bold text-center text-white drop-shadow-lg'>
        Why Choose <span className="text-[#ffdbf2]">Nail Tech?</span>
      </h1>

      {/* Nail Tech Profiles */}
      <div className='grid md:grid-cols-3 grid-cols-1 gap-10 w-full max-w-6xl'>
        {nailTechs.map((tech, index) => (
          <div 
            key={index} 
            className='bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105'
          >
            {/* Online Status & Name */}
            <div className="w-full flex items-center justify-between">
              <h2 className='text-2xl font-bold text-black'>{tech.name}</h2>
              <span className={`w-4 h-4 rounded-full ${tech.isOnline ? 'bg-green-500' : 'bg-red-500'}`} />
            </div>

            {/* Rating */}
            <p className='text-lg text-gray-600 mt-2'>⭐ {tech.rating}/5</p>

            {/* Jobs Done */}
            <p className='text-md text-gray-500 mb-4'>Jobs Completed: <span className="font-semibold text-black">{tech.jobsDone}</span></p>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-4 w-full">
              <button className='bg-[#f273f2] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#d95cd6] transition w-full shadow-md'>
                Book Now
              </button>
              <button className='bg-white text-[#f273f2] border-2 border-[#f273f2] px-6 py-3 rounded-full font-semibold hover:bg-[#f273f2] hover:text-white transition w-full shadow-md'>
                View Portfolio
              </button>
            </div>

            {/* Service Selection Dropdown */}
            <select className='mt-6 px-4 py-3 border rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f273f2] shadow-sm w-full'>
              <option>Select a Service</option>
              <option>Manicure</option>
              <option>Pedicure</option>
              <option>Full Set Acrylics</option>
            </select>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
