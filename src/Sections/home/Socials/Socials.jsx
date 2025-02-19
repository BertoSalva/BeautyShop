import React from "react";
import backgroundImage from "../../../assets/images/cpt1.jpg"; // Replace with actual image
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaTiktok } from "react-icons/fa";

const Socials = () => {
  return (
    <section
      className="w-full h-screen flex flex-col justify-center items-center text-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Container */}
      <div className="relative z-10 px-6 md:px-10 bg-white bg-opacity-15 rounded-lg p-8 shadow-lg">
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          <span className="text-white">my</span>
          <span className="text-pink-500">BeautyShop</span>
        </h1>
        <p className="text-white text-md md:text-lg mt-4 max-w-2xl">
          Elevate your beauty routine with myBeautyShop. Book top-rated beauty services, connect with expert stylists,
          and experience salon-quality care—all from the comfort of your home. Pampering made easy, just a click away!
        </p>

        {/* Social Media Icons */}
        <div className="flex gap-6 mt-6 justify-center">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-pink-500 transition">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-pink-500 transition">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-pink-500 transition">
            <FaLinkedin />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-pink-500 transition">
            <FaTiktok />
          </a>
        </div>

        {/* Call to Action */}
        <p className="text-white text-md md:text-lg mt-4 italic">Follow us on social media for the latest updates! 💖</p>
      </div>
    </section>
  );
};

export default Socials;
