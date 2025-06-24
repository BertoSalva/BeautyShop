import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import {
  FaUserCog,
  FaCalendarCheck,
  FaCut,
  FaClipboardList,
} from 'react-icons/fa';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const VendorHome = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [userId, setUserId] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    AOS.init();
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
        console.error("No bookings:", err);
      }
    };

    fetchBookings();
  }, [token, userId, userRole]);

  return (
    <section
      className='w-full flex flex-col md:px-20 px-10 md:py-20 py-10 relative overflow-hidden'
      style={{ background: '#fbd0fb' }}
    >
      {/* Header */}
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

      {/* Live Bookings */}
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

      {/* Dashboard Links */}
      <div className="bg-white shadow-md rounded-lg p-4 mt-20">
        <h2 className="text-xl font-semibold text-black mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <button
            onClick={() => navigate('/stylistAccount')}
            className="flex flex-col items-center justify-center bg-[#fff0f8] text-black border-2 border-black p-4 rounded-lg hover:bg-pink-100"
          >
            <FaUserCog className="text-2xl mb-2" />
            <span className="text-sm font-semibold">Manage Account</span>
          </button>
          <button
            onClick={() => navigate('/manage-bookings')}
            className="flex flex-col items-center justify-center bg-[#fff0f8] text-black border-2 border-black p-4 rounded-lg hover:bg-pink-100"
          >
            <FaCalendarCheck className="text-2xl mb-2" />
            <span className="text-sm font-semibold">Manage Bookings</span>
          </button>
          <button
            onClick={() => navigate('/service-management')}
            className="flex flex-col items-center justify-center bg-[#fff0f8] text-black border-2 border-black p-4 rounded-lg hover:bg-pink-100"
          >
            <FaCut className="text-2xl mb-2" />
            <span className="text-sm font-semibold">Service Management</span>
          </button>
          <button
            onClick={() => navigate('/more-options')}
            className="flex flex-col items-center justify-center bg-[#fff0f8] text-black border-2 border-black p-4 rounded-lg hover:bg-pink-100"
          >
            <FaClipboardList className="text-2xl mb-2" />
            <span className="text-sm font-semibold">More Options</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VendorHome;
