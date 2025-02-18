import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Using the same image repeatedly as per your request
import heroLeft from '../assets/images/building.jpg';
import heroBottomLeft from '../assets/images/building.jpg';
import heroRight from '../assets/images/building.jpg';

const makeupArtists = [
  { name: 'Emma Robinson', rating: 5.0, jobsDone: 200, isOnline: true },
  { name: 'Emma Robinson', rating: 5.0, jobsDone: 200, isOnline: true },
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
    <section className="w-full h-screen flex flex-col relative">
      {/* Top Section with Two Images */}
      <div className="w-full flex">
        {/* Left Image */}
        <div 
          className="relative w-1/2 h-[60vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${heroLeft})` }}
        ></div>

        {/* Right Image */}
        <div 
          className="relative w-1/2 h-[100vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${heroRight})` }}
        ></div>
      </div>

      {/* Bottom Left Image */}
      <div 
        className="absolute left-0 bottom-[1%] w-1/2 h-[40vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBottomLeft})` }}
      ></div>

      {/* Right Pink Section (Text & Profiles) */}
      <div className="absolute right-0 top-0 h-full w-[30%] bg-[#ff00ff] flex flex-col items-center px-6 py-10 text-white text-center">
        <h1 className="text-3xl font-extrabold leading-tight">
          Find Your <br /> Perfect Make-Up <span className="text-black">Artist</span>
        </h1>
        <p className="text-md mt-2">
          Flawless for Every Shade: Mzansi’s Top Artists at Your Service.
        </p>

        {/* Two Profile Cards in a Column */}
        <div className="mt-6 flex flex-col gap-6">
          {makeupArtists.map((artist, index) => (
            <div key={index} className="bg-white text-black shadow-md rounded-lg p-4 w-[230px] text-center">
              {/* Profile Image Placeholder */}
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center shadow-md">
                <span className="text-gray-600 text-xs font-semibold">{artist.name}</span>
              </div>

              <h2 className="text-lg font-bold mt-2">{artist.name}</h2>
              <p className="text-xs text-gray-600 mt-1">⭐ {artist.rating}/5</p>
              <p className="text-xs text-gray-500">Clients: <span className="font-semibold">{artist.jobsDone}</span></p>

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
                <option>Runway Glam</option>
                <option>Soft Romantic Look</option>
                <option>HD & Airbrush Magic</option>
              </select>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <button className="mt-4 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
          View More
        </button>
      </div>
    </section>
  );
};

export default Services;
