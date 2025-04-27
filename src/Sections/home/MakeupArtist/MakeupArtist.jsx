import React, { useEffect, useState } from "react";
import makeupImage from "../../../assets/images/Makeup1.jpg"; // Replace with actual image

const MakeupArtist = () => {
  const [makeupArtists, setMakeupArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    // Fetch users with role "MakupArtist" (as per your dropdown)
    fetch(`${API_BASE_URL}/auth/users/role/MakeupArtist`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch makeup artists.");
        }
        return res.json();
      })
      .then((data) => {
        setMakeupArtists(data);
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
        className="w-full md:w-[40%] h-[50vh] md:h-[92vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${makeupImage})` }}
      ></div>

      {/* Right Side - Makeup Artist Listing */}
      <div className="w-full md:w-[60%] p-6 md:p-10 bg-pink-100 md:h-[92vh] flex flex-col">
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          Find Your Perfect Make-up Artist
        </h2>
        <p className="text-md md:text-lg text-gray-700 mt-3">
          Whether you're looking for a soft glam, bold bridal look, or a stunning editorial transformation, our artists have got you covered.
        </p>
        {/* Centered Button */}
        <div className="mt-4 flex justify-center">
          <button className="bg-black text-white px-6 py-3 font-semibold rounded-lg hover:bg-pink-500 transition">
            View More
          </button>
        </div>
        {/* Overflow Container for Makeup Artist Cards */}
        <div className="flex-1 mt-6 overflow-auto">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {makeupArtists.map((artist) => (
                <div key={artist.id} className="bg-white shadow-lg rounded-lg p-4 text-center">
                  <img
                    src={artist.profilePictureUrl || "https://via.placeholder.com/64"}
                    alt={artist.fullName || "Make-up Artist"}
                    className="w-16 h-16 mx-auto rounded-full object-cover mb-4"
                  />
                  <h3 className="text-lg font-bold mt-2">{artist.fullName}</h3>
                  {artist.location && (
                    <p className="text-sm text-gray-500">{artist.location}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MakeupArtist;
