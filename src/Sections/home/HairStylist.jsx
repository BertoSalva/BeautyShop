import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import stylistImage from "../../assets/images/hairStlylist1.jpg";

const HairStylist = () => {
  const [hairstylists, setHairstylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${API_BASE_URL}/auth/users/role/HairStylist`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch hairstylists.");
        }
        return res.json();
      })
      .then((data) => {
        setHairstylists(data);
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
        style={{ backgroundImage: `url(${stylistImage})` }}
      ></div>

      {/* Right Side - Hairstylist Listing */}
      <div className="w-full md:w-[60%] p-6 md:p-10 bg-pink-100 md:h-[84vh] flex flex-col">
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          Find Your Perfect HairStylist
        </h2>
        <p className="text-md md:text-lg text-gray-700 mt-3">
          From Joburg’s edgy cuts to Cape Town’s beachy waves—we speak every hair language in SA.
        </p>

        <div className="mt-4 flex justify-center">
          <button className="bg-black text-white px-6 py-3 font-semibold rounded-lg hover:bg-pink-500 transition">
            View More
          </button>
        </div>

        <div className="flex-1 mt-6 overflow-auto">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {hairstylists.map((stylist) => (
                <div key={stylist.id} className="bg-white shadow-lg rounded-lg p-4 text-center">
                  <img
                    src={stylist.profilePictureUrl || "https://via.placeholder.com/64"}
                    alt={stylist.fullName || "Hairstylist"}
                    className="w-16 h-16 mx-auto rounded-full object-cover mb-4"
                  />
                  <h3 className="text-lg font-bold mt-2">{stylist.fullName}</h3>
                  {stylist.location && (
                    <p className="text-sm text-gray-500">{stylist.location}</p>
                  )}
                  <p className="text-sm text-yellow-600">⭐ Rating: {stylist.rating ?? 0}</p>
                  <p className="text-sm text-gray-600">👁️ Visits: {stylist.visits ?? 0}</p>
                  <div className="mt-4 flex justify-center gap-2">
                    <button
                      onClick={() => navigate(`/book/${stylist.id}`)}
                      className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Book Now
                    </button>
                    <button className="border border-pink-600 text-pink-600 px-4 py-2 rounded-lg text-sm">
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

export default HairStylist;
