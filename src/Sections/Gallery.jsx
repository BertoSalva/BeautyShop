import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Hairdresser Profiles
const hairdressers = [
  { name: 'Jessica Williams', rating: 4.9, jobsDone: 180, isOnline: true, image: '/assets/hairdresser1.jpg' },
  { name: 'Emily Davis', rating: 4.7, jobsDone: 140, isOnline: true, image: '/assets/hairdresser2.jpg' },
  { name: 'Sophia Miller', rating: 5.0, jobsDone: 220, isOnline: true, image: '/assets/hairdresser3.jpg' },
  { name: 'Olivia Taylor', rating: 4.6, jobsDone: 110, isOnline: false, image: '/assets/hairdresser4.jpg' },
];

const Gallery = () => {
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
      id='hairdressers' 
      className='w-full md:px-20 px-10 md:py-20 py-10 flex flex-col items-center gap-10 bg-white'
    >
      
      {/* Section Title */}
      <h1 data-aos="zoom-in" className='text-5xl font-bold text-center text-black'>
        Why Choose <span className="text-[#f273f2]">Our Hairdressers?</span>
      </h1>

      {/* Subheading & Description */}
      <p data-aos="fade-up" className='text-lg text-gray-700 text-center max-w-3xl'>
        Elevate your style with our expert hairdressers. Whether you're looking for a **chic bob, long curls, hair extensions, or a stunning balayage**, our professionals specialize in making your dream look a reality.
      </p>

      {/* Hairdresser Profiles */}
      <div className='grid md:grid-cols-3 grid-cols-1 gap-10 w-full max-w-6xl'>
        {hairdressers.map((hairdresser, index) => (
          <div 
            key={index} 
            className='bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105'
          >
            {/* Profile Image */}
            <img 
              src={hairdresser.image} 
              alt={hairdresser.name} 
              className='w-24 h-24 rounded-full mb-3 border-4 border-gray-200 object-cover'
            />

            {/* Online Status & Name */}
            <div className="w-full flex items-center justify-between">
              <h2 className='text-2xl font-bold text-black'>{hairdresser.name}</h2>
              <span className={`w-4 h-4 rounded-full ${hairdresser.isOnline ? 'bg-green-500' : 'bg-red-500'}`} />
            </div>

            {/* Rating */}
            <p className='text-lg text-gray-600 mt-2'>⭐ {hairdresser.rating}/5</p>

            {/* Jobs Done */}
            <p className='text-md text-gray-500 mb-4'>Clients Styled: <span className="font-semibold text-black">{hairdresser.jobsDone}</span></p>

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
              <option>Haircut & Styling</option>
              <option>Blowout & Curls</option>
              <option>Hair Extensions</option>
              <option>Balayage & Hair Coloring</option>
            </select>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className='mt-10 text-center'>
        <h2 className='text-3xl font-semibold text-black'>Transform Your Hair Today</h2>
        <p className='text-lg text-gray-700 max-w-2xl mx-auto'>
          Let our skilled hairdressers bring your **hair goals to life**. Book a **custom styling session** and feel fabulous!
        </p>
        <button className='bg-[#f273f2] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#d95cd6] transition mt-4 shadow-md'>
          Find a Hairdresser
        </button>
      </div>

    </section>
  );
};

export default Gallery;
