import React, { useEffect, useState } from "react";
import barberImage from "../../../assets/images/barber1.jpg"; // Replace with actual barber image

const BarberList = () => {
  const [barbers, setBarbers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    // Fetch users with role "Barber"
    fetch(`${API_BASE_URL}/auth/users/role/Barber`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch barbers.");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched barber data:", data); // Log entire response
        data.forEach((barber, index) => {
          console.log(`Barber ${index + 1}:`, barber); // Log each individual barber
        });
        setBarbers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [API_BASE_URL]);

  return (
    <section className="w-full flex flex-col md:flex-row items-stretch bg-white">
      {/* Left Side - Image */}
      <div
        className="w-full md:w-[40%] h-[50vh] md:h-[84vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${barberImage})` }}
      ></div>

      {/* Right Side - Barber Listing */}
      <div className="w-full md:w-[60%] p-6 md:p-10 bg-gray-100 md:h-[84vh] flex flex-col">
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          Find Your Perfect Barber
        </h2>
        <p className="text-md md:text-lg text-gray-700 mt-3">
          From Joburg’s sharp fades to Cape Town’s classic cuts—we speak every barber style in SA.
        </p>
        {/* Centered Button */}
        <div className="mt-4 flex justify-center">
          <button className="bg-black text-white px-6 py-3 font-semibold rounded-lg hover:bg-gray-700 transition">
            View More
          </button>
        </div>

        {/* Overflow container for Barber Cards */}
        <div className="flex-1 mt-6 overflow-auto">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {barbers.map((barber) => (
                <div key={barber.id} className="bg-white shadow-lg rounded-lg p-4 text-center">
                  <img
                    src={barber.profilePictureUrl || "https://via.placeholder.com/64"}
                    alt={barber.fullName || "Barber"}
                    className="w-16 h-16 mx-auto rounded-full object-cover mb-4"
                  />
                  <h3 className="text-lg font-bold mt-2">{barber.fullName}</h3>
                  {barber.location && (
                    <p className="text-sm text-gray-500">{barber.location}</p>
                  )}
                  <p className="text-sm text-gray-500">⭐ 5/5</p>
                  <p className="text-sm text-gray-600">Clients Served: 300</p>
                  <div className="mt-4 flex justify-center gap-2">
                    <button className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm">
                      Book Now
                    </button>
                    <button className="border border-gray-700 text-gray-700 px-4 py-2 rounded-lg text-sm">
                      View Portfolio
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BarberList;
