import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Use the same image for consistency
import heroLeft from '../assets/images/building.jpg';

const hairdressers = [
  { name: 'Emma Robinson', rating: 5.0, jobsDone: 200, isOnline: true },
  { name: 'Emma Robinson', rating: 5.0, jobsDone: 200, isOnline: true },
  { name: 'Emma Robinson', rating: 5.0, jobsDone: 200, isOnline: true },
  { name: 'Emma Robinson', rating: 5.0, jobsDone: 200, isOnline: true },
  { name: 'Emma Robinson', rating: 5.0, jobsDone: 200, isOnline: true },
  { name: 'Emma Robinson', rating: 5.0, jobsDone: 200, isOnline: true },
];

const HairStylists = () => {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <section className="w-full h-screen flex flex-row relative">
      {/* Left Image Section */}
      <div 
        className="relative w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroLeft})` }}
      ></div>

      {/* Right Pink Section (Title & Profiles) */}
      <div className="w-1/2 h-full bg-[#ff00ff] flex flex-col items-center px-6 py-10 text-white text-center">
        <h1 className="text-3xl font-extrabold leading-tight text-black">
          Find Your <br /> Perfect <span className="text-black">HairStylist</span>
        </h1>
        <p className="text-md mt-2 text-black font-medium">
          From Joburg’s edgy cuts to Cape Town’s beachy waves—we speak every hair language in SA.
        </p>

        {/* View More Button */}
        <button className="mt-4 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
          View More
        </button>

        {/* Hairdresser Profiles Grid */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          {hairdressers.map((hairdresser, index) => (
            <div key={index} className="bg-white text-black shadow-md rounded-lg p-4 w-[200px] text-center">
              {/* Profile Image Placeholder */}
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center shadow-md">
                <span className="text-gray-600 text-xs font-semibold">{hairdresser.name}</span>
              </div>

              <h2 className="text-lg font-bold mt-2">{hairdresser.name}</h2>
              <p className="text-xs text-gray-600 mt-1">⭐ {hairdresser.rating}/5</p>
              <p className="text-xs text-gray-500">Clients: <span className="font-semibold">{hairdresser.jobsDone}</span></p>

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
                <option>Select a Glam Look</option>
                <option>Blowout & Curls</option>
                <option>Hair Extensions</option>
                <option>Balayage & Hair Coloring</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HairStylists;
