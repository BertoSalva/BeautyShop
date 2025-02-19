import React from "react";
import barberImage from "../../../assets/images/barber1.jpg"; // Replace with actual barber image

const BarberList = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center bg-white">
      {/* Left Side - Image */}
      <div
        className="w-full md:w-[40%] h-[50vh] md:h-[84vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${barberImage})` }}
      ></div>

      {/* Right Side - Barber Listing */}
      <div className="w-full md:w-[60%] p-6 md:p-10 bg-gray-100">
        <h2 className="text-3xl md:text-5xl font-bold text-black">Find Your Perfect Barber</h2>
        <p className="text-md md:text-lg text-gray-700 mt-3">
          From Joburg’s sharp fades to Cape Town’s classic cuts—we speak every barber style in SA.
        </p>

        {/* Centered Button */}
        <div className="mt-4 flex justify-center">
          <button className="bg-black text-white px-6 py-3 font-semibold rounded-lg hover:bg-gray-700 transition">
            View More
          </button>
        </div>

        {/* Barber Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 text-center">
              <div className="w-16 h-16 mx-auto bg-gray-300 rounded-full"></div>
              <h3 className="text-lg font-bold mt-2">John Doe</h3>
              <p className="text-sm text-gray-500">⭐ 5/5</p>
              <p className="text-sm text-gray-600">Clients Served: 300</p>
              <div className="mt-4 flex justify-center gap-2">
                <button className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm">Book Now</button>
                <button className="border border-gray-700 text-gray-700 px-4 py-2 rounded-lg text-sm">
                  View Portfolio
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BarberList;
