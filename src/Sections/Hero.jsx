import React, { useEffect } from 'react';
import heroLeft from '../assets/images/building.jpg'; // Cityscape image
import heroRight from '../assets/images/Mama.jpg'; // Grayscale portrait image
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
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
      id="hero"
      className="w-full h-screen flex flex-col md:flex-row relative overflow-hidden"
    >
      {/* Left Side - Content with Background Overlay */}
      <div
        className="relative md:absolute md:top-0 md:left-0 md:w-[70%] h-full bg-cover bg-center flex flex-col justify-center items-start px-4 md:px-10 max-w-3xl"
        style={{ backgroundImage: `url(${heroLeft})` }}
      >
        <h1 data-aos="zoom-in" className="text-4xl md:text-5xl font-bold text-white">
          Welcome to <span className="text-pink-500">myBeautyShop</span>
        </h1>
        <br />
        <h2
          data-aos="fade-up"
          className="text-lg md:text-xl font-medium text-white"
          style={{ textShadow: '1px 4px 4px purple' }}
        >
          Where Beauty Meets Convenience, South African Style.
        </h2>
        <br />
        <br />
        <div className="bg-black bg-opacity-50 p-4 md:p-6 rounded-lg">
          <p className="text-base md:text-lg text-yellow-300">
            Step into a world where glamour meets authenticity and let your beauty shine with the vibrant
            spirit of Mzansi! Whether you're prepping for a special occasion, a bold everyday look, or just
            treating yourself to some self-love, we've got you covered—from head to toe!
          </p>
        </div>
      </div>

      {/* Right Side - Search Bar */}
      <div
        className="relative md:absolute md:top-0 md:right-0 md:w-[45%] h-auto md:h-full bg-cover bg-center grayscale flex justify-center items-center pt-10 md:pt-20"
        style={{ backgroundImage: `url(${heroRight})` }}
      >
        <div
          data-aos="fade-up"
          className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg w-full max-w-lg mx-4"
        >
          <input
            type="text"
            placeholder="City, suburb, province"
            className="w-full p-4 text-gray-700 focus:outline-none border-none"
          />
          <button className="bg-black text-white px-6 py-4 font-semibold hover:bg-pink-500 transition rounded-r-lg">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
