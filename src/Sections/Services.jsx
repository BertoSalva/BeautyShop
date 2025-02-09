import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const makeupArtists = [
  { name: 'Sophia Carter', rating: 4.9, jobsDone: 150, isOnline: true, image: '/assets/makeup1.jpg' },
  { name: 'Isabella Lee', rating: 4.8, jobsDone: 120, isOnline: true, image: '/assets/makeup2.jpg' },
  { name: 'Emma Robinson', rating: 5.0, jobsDone: 200, isOnline: true, image: '/assets/makeup3.jpg' },
  { name: 'Olivia Brown', rating: 4.7, jobsDone: 95, isOnline: false, image: '/assets/makeup4.jpg' },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 1000,
      easing: 'ease-in-out',
      delay: 100,
    });
  }, []);

  return (
    <section 
      id='services' 
      className='w-full flex flex-col md:px-20 px-10 md:py-20 py-10 relative overflow-hidden'
      style={{ background: '#fbd0fb' }}
    >
      
      {/* Floating Sparkle Decorations */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-white opacity-30 rounded-full blur-3xl animate-float1"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 bg-[#f273f2] opacity-40 rounded-full blur-3xl animate-float2"></div>

      {/* Section Title */}
      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 data-aos="fade-down" className='text-5xl text-black font-extrabold text-center tracking-wide'>
        ✨ Discover <span className="text-[#f273f2]">Top Makeup Artists</span>✨ 
        </h1>
        
        <p data-aos="fade-up" className='text-lg text-gray-800 text-center max-w-3xl italic'>
          Whether you're attending a **high-profile event**, a **romantic dinner**, or a **wedding**,  
          our **elite makeup artists** are here to craft a look that **speaks confidence & elegance.**
        </p>
      </div>

      {/* Makeup Artist Profiles */}
      <div className='grid md:grid-cols-2 grid-cols-1 gap-12 w-full max-w-6xl mt-12'>
        {makeupArtists.map((artist, index) => (
          <div 
            key={index} 
            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            className={`bg-white shadow-2xl rounded-2xl p-8 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}
          >
            {/* Profile Image */}
            <img 
              src={artist.image}  
              alt={artist.name} 
              className='w-28 h-28 rounded-full mb-4 border-4 border-gray-300 object-cover shadow-lg'
            />

            {/* Online Status & Name */}
            <div className="w-full flex items-center justify-between">
              <h2 className='text-2xl font-bold text-black'>{artist.name}</h2>
              <span className={`w-4 h-4 rounded-full ${artist.isOnline ? 'bg-green-500' : 'bg-red-500'}`} />
            </div>

            {/* Rating */}
            <p className='text-lg text-gray-600 mt-2'>⭐ {artist.rating}/5</p>

            {/* Jobs Done */}
            <p className='text-md text-gray-500 mb-4'>Clients Transformed: <span className="font-semibold text-black">{artist.jobsDone}</span></p>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-4 w-full">
              <button className='bg-[#f273f2] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#d95cd6] transition w-full shadow-md animate-bounce'>
                Book Now
              </button>
              <button className='bg-white text-[#f273f2] border-2 border-[#f273f2] px-6 py-3 rounded-full font-semibold hover:bg-[#f273f2] hover:text-white transition w-full shadow-md'>
                View Portfolio
              </button>
            </div>

            {/* Service Selection Dropdown */}
            <select className='mt-6 px-4 py-3 border rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f273f2] shadow-sm w-full'>
              <option>Select a Glam Look</option>
              <option>Bridal Glow</option>
              <option>Runway Glam</option>
              <option>Soft Romantic Look</option>
              <option>HD & Airbrush Magic</option>
            </select>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className='mt-16 text-center' data-aos="zoom-in">
        <h2 className='text-3xl font-bold text-black'>
          **Flawless Beauty Starts Here** 💖
        </h2>
        <p className='text-lg text-gray-800 max-w-2xl mx-auto mt-3'>
          **Let our top-tier artists craft a masterpiece on your face.**  
          **Book a session now & get pampered like royalty!**
        </p>
        <button className='bg-[#f273f2] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#d95cd6] transition mt-6 shadow-lg animate-pulse'>
          Find Your Makeup Artist
        </button>
      </div>

    </section>
  );
};

export default Services;
