import React from "react";
import makeupImage from "../../../assets/images/Makeup1.jpg"; // Replace with actual image

const MakeupArtist = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center bg-white">
      {/* Left Side - Image */}
      <div className="w-full md:w-[40%] h-[50vh] md:h-[92vh] bg-cover bg-center" 
           style={{ backgroundImage: `url(${makeupImage})` }}>
      </div>

     {/* Right Side - Makeup Artist Listing */}
<div className="w-full md:w-[60%] p-6 md:p-10 bg-pink-100 min-h-[92vh] flex flex-col justify-center">
  <h2 className="text-3xl md:text-5xl font-bold text-black">Find Your Perfect Makeup Artist</h2>
  <p className="text-md md:text-lg text-gray-700 mt-3">
    Whether you're looking for a soft glam, bold bridal look, or a stunning editorial transformation, our artists have got you covered.
  </p>

  {/* Centered Button */}
  <div className="mt-4 flex justify-center">
    <button className="bg-black text-white px-6 py-3 font-semibold rounded-lg hover:bg-pink-500 transition">
      View More
    </button>
  </div>

  {/* Makeup Artist Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
    {[...Array(3)].map((_, index) => (
      <div key={index} className="bg-white shadow-lg rounded-lg p-4 text-center">
        <div className="w-16 h-16 mx-auto bg-gray-300 rounded-full"></div>
        <h3 className="text-lg font-bold mt-2">Isabella Lopez</h3>
        <p className="text-sm text-gray-500">⭐ 5/5</p>
        <p className="text-sm text-gray-600">Makeovers Completed: 200</p>
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

export default MakeupArtist;
