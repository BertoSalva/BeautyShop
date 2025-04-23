import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const VendorHome = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [userId, setUserId] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 1000,
      easing: 'ease-in-out',
      delay: 100,
    });

    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);

      try {
        const decoded = jwtDecode(storedToken);
        setUserId(decoded.nameid);
        setUserRole(decoded.role);
      } catch (err) {
        console.error("Token decode failed:", err);
      }
    }
  }, []);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!token || !userId) return;

      try {
        const endpoint =
          userRole?.toLowerCase() === "client"
            ? `/bookings/client/${userId}`
            : `/bookings/stylist/${userId}`;

        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        setBookings(data);
      } catch (err) {
        console.error("Failed to fetch bookings:", err);
      }
    };

    fetchBookings();
  }, [token, userId, userRole]);

  return (
    <section 
      className='w-full flex flex-col md:px-20 px-10 md:py-20 py-10 relative overflow-hidden'
      style={{ background: '#fbd0fb' }}
    >
      {/* Header Section */}
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-4xl font-bold text-black'>Welcome to Your Account ✂️💅</h1>
        {token && (
          <button
            className="bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition"
            onClick={() => navigate('/stylistAccount')} 
          >
            Manage Account
          </button>
        )}
      </div>

      {/* Token Debug Display (optional) */}
      {/* {token && (
        <div className='bg-white p-6 rounded-lg shadow-md mb-6'>
          <h2 className='text-xl font-bold text-black'>Token Data:</h2>
          <p className='text-gray-700 break-words'>{token}</p>
        </div>
      )} */}

      {/* Live Bookings Display */}
      <h2 className='text-3xl font-bold text-black mt-16'>Upcoming Appointments</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 w-full max-w-4xl mt-6">
        {bookings.length === 0 ? (
          <p className="text-gray-700 text-lg col-span-full">No bookings yet.</p>
        ) : (
          bookings.map((b, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-black">
                {userRole?.toLowerCase() === "client" ? b.stylistName : b.clientName}
              </h3>
              <p className="text-gray-600 mt-2">{b.service || "—"}</p>
              <p className="text-gray-500 mt-1">Date: {new Date(b.time).toLocaleString()}</p>
              <span className={`mt-3 px-4 py-2 text-sm font-bold rounded-full ${
                b.status === "Approved" || b.status === "Confirmed"
                  ? "bg-green-500 text-white"
                  : b.status === "Pending"
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-400 text-white"
              }`}>
                {b.status}
              </span>
              {b.rating && (
                <p className="mt-2 text-sm text-purple-700 font-semibold">
                  Rated: {b.rating} ⭐
                </p>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default VendorHome;
