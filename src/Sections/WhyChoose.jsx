import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import the images used in the Hero section
import heroLeft from '../assets/images/building.jpg'; // Left background image
import heroRight from '../assets/images/Mama.jpg'; // Right background image

const nailTechs = [
  { name: 'Emma Robinson', rating: 5.0, jobsDone: 200, isOnline: true, image: '/assets/nailtech1.jpg' },
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
    <section className="w-full h-screen flex">
      {/* Left Side Image Background (heroLeft) */}
      <div 
        className="relative w-1/2 h-full bg-cover bg-center grayscale flex justify-center items-center"
        style={{ backgroundImage: `url(${heroLeft})` }}
      ></div>

      {/* Pink Center Section */}
      <div className="w-1/3 min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-[#ff00ff] text-white text-center">
        <h1 className="text-4xl font-extrabold leading-tight">
          Find Your <br /> Perfect <span className="text-black">Nail Tech</span>
        </h1>
        <p className="text-md mt-2">
          Browse top artists specializing in gel, acrylics, or bespoke SA-inspired designs.
        </p>

        {/* Nail Tech Profile Card */}
        {nailTechs.map((tech, index) => (
          <div key={index} className="bg-white text-black shadow-xl rounded-2xl p-6 w-[280px] text-center mt-6">
            {/* Profile Image Placeholder */}
            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center shadow-md">
              <span className="text-gray-600 font-semibold">{tech.name}</span>
            </div>

            <h2 className="text-xl font-bold mt-3">{tech.name}</h2>
            <p className="text-md text-gray-600 mt-1">⭐ {tech.rating}/5</p>
            <p className="text-sm text-gray-500">Clients Transformed: <span className="font-semibold">{tech.jobsDone}</span></p>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 mt-4">
              <button className="bg-[#ff00ff] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#d900d9] transition">
                Book Now
              </button>
              <button className="bg-white text-[#ff00ff] border-2 border-[#ff00ff] px-5 py-2 rounded-full font-semibold hover:bg-[#ff00ff] hover:text-white transition">
                View Portfolio
              </button>
            </div>

            {/* Service Selection Dropdown */}
            <select className="mt-3 px-3 py-2 border rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#ff00ff] shadow-sm w-full">
              <option>Select a Glam Look</option>
              <option>French Tips</option>
              <option>Acrylic Nail Art</option>
              <option>Gel Manicure</option>
            </select>
          </div>
        ))}
        

        {/* View More Button */}
        <button className="bg-black text-white px-5 py-2 rounded-full font-semibold hover:bg-gray-800 transition mt-4">
          View More
        </button>
      </div>

      {/* Right Side Image Background (heroRight) */}
      <div 
        className="relative w-1/2 h-full bg-cover bg-center grayscale flex justify-center items-center"
        style={{ backgroundImage: `url(${heroRight})` }}
      ></div>
    </section>
  );
};

export default WhyChoose;
