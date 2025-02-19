import React from "react";
import nailTechImage from "../../../assets/images/Nail1.jpg"; // Replace with actual image

const NailTech = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center bg-white">
      {/* Left Side - Image */}
      <div className="w-full md:w-[40%] h-[50vh] md:h-[92vh] bg-cover bg-center" 
           style={{ backgroundImage: `url(${nailTechImage})` }}>
      </div>

      {/* Right Side - Nail Technician Listing */}
      <div className="w-full md:w-[60%] p-6 md:p-10 bg-pink-100">
        <h2 className="text-3xl md:text-5xl font-bold text-black">Find Your Perfect Nail Technician</h2>
        <p className="text-md md:text-lg text-gray-700 mt-3">
          Whether it's a fresh set of acrylics, classic gel nails, or intricate nail art—we've got your style covered.
        </p>

        {/* Centered Button */}
        <div className="mt-4 flex justify-center">
          <button className="bg-black text-white px-6 py-3 font-semibold rounded-lg hover:bg-pink-500 transition">
            View More
          </button>
        </div>

        {/* Nail Technician Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 text-center">
              <div className="w-16 h-16 mx-auto bg-gray-300 rounded-full"></div>
              <h3 className="text-lg font-bold mt-2">Sophia Martinez</h3>
              <p className="text-sm text-gray-500">⭐ 5/5</p>
              <p className="text-sm text-gray-600">Nails Styled: 150</p>
              <div className="mt-4 flex justify-center gap-2">
                <button className="bg-pink-500 text-white px-4 py-2 rounded-lg text-sm">Book Now</button>
                <button className="border border-pink-500 text-pink-500 px-4 py-2 rounded-lg text-sm">View Portfolio</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NailTech;
