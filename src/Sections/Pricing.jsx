import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Use the same barber images as per your request
import heroLeft from '../assets/images/building.jpg';
import heroCenter from '../assets/images/building.jpg';
import heroRight from '../assets/images/building.jpg';

const barbers = [
  { name: 'Emma Robinson', rating: 5.0, jobsDone: 200, isOnline: true },
  { name: 'Emma Robinson', rating: 5.0, jobsDone: 200, isOnline: true },
];

const Barbers = () => {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <section className="w-full h-screen flex flex-col relative">
      {/* Top Barber Images */}
      <div className="w-full flex">
        {/* Left Image */}
        <div 
          className="relative w-1/3 h-[65vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${heroLeft})` }}
        ></div>

        {/* Center Image */}
        <div 
          className="relative w-1/3 h-[65vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${heroCenter})` }}
        ></div>

        {/* Right Image */}
        <div 
          className="relative w-1/3 h-[65vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${heroRight})` }}
        ></div>
      </div>

      {/* Center Pink Section (Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[35vh] bg-[#ff00ff] flex flex-col items-center">
        <h1 className="text-6xl font-extrabold text-black text-center mt-4">
          Find Your <br /> Perfect Barber
        </h1>

        {/* Profile Cards Positioned Bottom-Right */}
        <div className="absolute bottom-4 right-24 flex gap-6">
          {barbers.map((barber, index) => (
            <div key={index} className="bg-white text-black shadow-md rounded-lg p-4 w-[190px] text-center">
              {/* Profile Image Placeholder */}
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center shadow-md">
                <span className="text-gray-600 text-xs font-semibold">{barber.name}</span>
              </div>

              <h2 className="text-lg font-bold mt-2">{barber.name}</h2>
              <p className="text-xs text-gray-600 mt-1">⭐ {barber.rating}/5</p>
              <p className="text-xs text-gray-500">Clients: <span className="font-semibold">{barber.jobsDone}</span></p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-1 mt-2">
                <button className="bg-[#ff00ff] text-white px-3 py-1 rounded-full text-xs font-semibold hover:bg-[#d900d9] transition">
                  Book Now
                </button>
                <button className="bg-white text-[#ff00ff] border-2 border-[#ff00ff] px-3 py-1 rounded-full text-xs font-semibold hover:bg-[#ff00ff] hover:text-white transition">
                  View Portfolio
                </button>
              </div>

              {/* Service Selection Dropdown */}
              <select className="mt-2 px-2 py-1 border rounded-full text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff00ff] shadow-sm w-full">
                <option>Select a Service</option>
                <option>Classic Fade</option>
                <option>Beard Trim</option>
                <option>Razor Line-Up</option>
              </select>
            </div>
          ))}
        </div>

        {/* View More Button Positioned Bottom-Right */}
        <button className="absolute bottom-5 right-5 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
          View More
        </button>
      </div>
    </section>
  );
};

export default Barbers;
