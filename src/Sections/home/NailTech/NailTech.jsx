import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaEye, FaMoneyBillAlt, FaSearch } from "react-icons/fa";
import nailTechImage from "../../../assets/images/Nail1.jpg";

const NailTech = () => {
  const [nailTechs, setNailTechs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [city, setCity] = useState("");

  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(`${API_BASE_URL}/auth/users/role/NailTech`)
      .then((res) => {
        if (!res.ok) throw new Error("No nail technicians.");
        return res.json();
      })
      .then((data) => {
        setNailTechs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [API_BASE_URL]);

  const filteredTechs = nailTechs.filter((tech) => {
    const matchesSearch = tech.fullName?.toLowerCase().includes(search.toLowerCase());
    const matchesRating = tech.rating >= minRating;
    const matchesCity = city ? tech.location?.toLowerCase() === city.toLowerCase() : true;
    return matchesSearch && matchesRating && matchesCity;
  });

  return (
    <section className="w-full flex flex-col md:flex-row items-stretch bg-white">
      {/* Left Side - Image */}
      <div
        className="w-full md:w-[40%] h-[40vh] md:h-[92vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${nailTechImage})` }}
      ></div>

      {/* Right Side */}
      <div className="w-full md:w-[60%] p-6 md:p-10 bg-pink-50 md:h-[92vh] flex flex-col overflow-hidden">
        {/* Heading */}
        <div className="w-full text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <span className="text-3xl md:text-4xl">💅</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-pink-700">
               Find Your Perfect Nail Technician
            </h2>
            <span className="text-3xl md:text-4xl">💅</span>
          </div>
          <p className="text-base md:text-lg text-gray-700 mt-4 leading-relaxed md:pr-10 max-w-3xl mx-auto md:mx-0">
            From gel, acrylic, or nail art, elevate your hands with top-tier nail techs across South Africa.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
          <div className="flex items-center gap-2 w-full md:w-auto">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search by name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-2 rounded-md border border-gray-300 w-full md:w-52"
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <select
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="p-2 rounded-md border border-gray-300 w-1/2 md:w-36"
            >
              <option value={0}>All Ratings</option>
              <option value={3}>3+ stars</option>
              <option value={4}>4+ stars</option>
              <option value={5}>5 stars</option>
            </select>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="p-2 rounded-md border border-gray-300 w-1/2 md:w-36"
            >
              <option value="">All Cities</option>
              {[...new Set(nailTechs.map((t) => t.location).filter(Boolean))].map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Cards */}
        <div className="flex-1 mt-6 overflow-y-auto px-1">
          {loading ? (
            <p className="text-center text-gray-500 animate-pulse">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTechs.map((tech) => (
                <div
                  key={tech.id}
                  className="bg-white shadow-xl rounded-2xl p-5 w-full max-w-[300px] mx-auto text-center transition transform hover:-translate-y-1 hover:shadow-2xl"
                >
                  <img
                    src={tech.profilePictureUrl || "https://via.placeholder.com/150"}
                    alt={tech.fullName || "Nail Technician"}
                    className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-pink-400 mb-3"
                  />
                  <h3 className="text-md md:text-lg font-semibold text-gray-900">
                    {tech.fullName}
                  </h3>
                  {tech.location && (
                    <p className="text-sm text-gray-500 mb-2">{tech.location}</p>
                  )}

                  {/* Icons */}
                  <div className="mt-3 flex flex-col items-start gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="bg-pink-400 p-2 rounded-full">
                        <FaStar className="text-white size-4" />
                      </div>
                      <p className="text-gray-800">
                        Rating: <span className="font-semibold text-yellow-600">{tech.rating ?? 0}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="bg-pink-400 p-2 rounded-full">
                        <FaEye className="text-white size-4" />
                      </div>
                      <p className="text-gray-800">
                        Visits: <span className="font-semibold text-gray-700">{tech.visits ?? 0}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="bg-pink-400 p-2 rounded-full">
                        <FaMoneyBillAlt className="text-white size-4" />
                      </div>
                      <p className="text-gray-800">
                        Price: <span className="font-semibold text-green-600">R: {tech.serviceCost ?? "0.00"}</span>
                      </p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-5 flex flex-col sm:flex-row justify-center items-center gap-3">
                    <button
                      onClick={() => navigate(`/book/${tech.id}`)}
                      className="bg-[#111] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md hover:bg-pink-400 transition-all duration-300 ease-in-out w-full sm:w-auto"
                    >
                      Book Now
                    </button>
                    <button
                      onClick={() => navigate(`/portfolio/${tech.id}`)}
                      className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-all duration-300 ease-in-out w-full sm:w-auto"
                    >
                      View Portfolio
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex justify-center">
          <button className="bg-black text-white px-6 py-3 font-semibold rounded-lg hover:bg-gray-700 transition">
            View More Techs
          </button>
        </div>
      </div>
    </section>
  );
};

export default NailTech;
