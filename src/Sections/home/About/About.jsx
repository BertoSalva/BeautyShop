import React from "react";
import { Link } from "react-router-dom";
import aboutBackground from "../../../assets/images/about-bg.jpg"; // Replace with your actual image

const About = () => {
  return (
    <section
      className="w-full h-screen flex justify-center items-center text-center bg-cover bg-center relative px-4 md:px-8"
      style={{ backgroundImage: `url(${aboutBackground})` }}
    >
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Section */}
      <div className="relative z-10 max-w-3xl text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">Our Story</h1>
        <p className="text-sm md:text-base leading-relaxed drop-shadow-md">
          Born and bred in Mzansi, My Beauty Shop is more than a platform—it’s a movement to celebrate South African beauty in all its forms. 
          We’re on a mission to make top-tier hair, makeup, and nail services accessible to everyone, from the bustling streets of Jozi to the serene coasts of the Western Cape.
        </p>

        <h2 className="text-2xl md:text-4xl font-bold mt-8 drop-shadow-lg">What We Offer</h2>
        <p className="text-sm md:text-base leading-relaxed mt-2 drop-shadow-md">
          Your All-in-One Beauty Hub <br />
          Your Style, Your Rules <br />
          Seamless & Secure
        </p>

        <h2 className="text-2xl md:text-4xl font-bold mt-8 drop-shadow-lg">Why Choose Us?</h2>
        <p className="text-sm md:text-base leading-relaxed mt-2 drop-shadow-md">
          Ubuntu in Action – We treat every client like family. <br />
          Easy & Secure – Seamless bookings, real-time updates, and 24/7 support. <br />
          A portion of every purchase supports local beauty entrepreneurs.
        </p>

        <h2 className="text-2xl md:text-4xl font-bold mt-8 drop-shadow-lg">Need Help?</h2>
        <p className="text-sm md:text-base leading-relaxed mt-2 drop-shadow-md">
          Our team at <a href="mailto:support@mybeautyshop.co.za" className="underline text-yellow-300 hover:text-yellow-500">
          support@mybeautyshop.co.za</a> is here to answer questions, resolve issues, or just chat beauty tips.
        </p>

        {/* Link to Reviews Page */}
        <div className="mt-6">
          <Link to="/reviews" className="text-lg font-semibold text-yellow-300 hover:text-yellow-500 transition">
            Read What Our Clients Say →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
