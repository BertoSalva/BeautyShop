import React from 'react';
import { FaMapMarkerAlt, FaRoute } from 'react-icons/fa';

export default function SalonSubDetail() {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-md w-full max-w-lg mx-auto bg-white">
      {/* Salon Image */}
      <img
        src="/images/salon.jpg" // Replace with actual image path
        alt="Salon"
        className="w-1/3 h-28 object-cover"
      />

      {/* Salon Details */}
      <div className="flex flex-col flex-grow p-4">
        {/* Salon Name */}
        <h3 className="font-semibold text-lg text-gray-800 truncate">Serenity Salon</h3>

        {/* Location */}
        <div className="flex items-center text-gray-600 text-sm mt-2">
          <FaMapMarkerAlt className="text-blue-500 mr-2" />
          <span>2464 Royal Ln. Mesa, New ...</span>
        </div>

        {/* Distance */}
        <div className="flex items-center text-gray-600 text-sm mt-2">
          <FaRoute className="text-green-500 mr-2" />
          <span>5 Km</span>
        </div>
      </div>
    </div>
  );
}
