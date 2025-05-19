import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";

const AppointmentItem = ({ time, name, service, price, status }) => {
  const statusStyles = {
    Cancelled: "bg-red-100 text-red-600",
    "No-show": "bg-gray-200 text-gray-600",
  };

  return (
    <div className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-start border border-gray-100">
      <div>
        <div className={`text-sm font-semibold ${status ? "text-red-500" : "text-blue-500"}`}>
          {new Date(time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
        <div className="text-sm font-medium text-gray-800">{name}</div>
        <div className="text-xs text-gray-400">{service}</div>
      </div>
      <div className="text-right">
        {status && (
          <span className={`text-xs px-2 py-1 rounded-full font-semibold ${statusStyles[status]}`}>
            {status}
          </span>
        )}
        <div className="text-sm font-semibold text-gray-800 mt-2">R {price ?? "N/A"}</div>
      </div>
    </div>
  );
};

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("User not logged in");
      setLoading(false);
      return;
    }

    const { role, nameid } = jwtDecode(token);
    const userId = parseInt(nameid);
    const isClient = role.toLowerCase() === "client";

    const url = isClient
      ? `${API_BASE_URL}/bookings/client/${userId}`
      : `${API_BASE_URL}/bookings/stylist/${userId}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch bookings");
        return res.json();
      })
      .then((data) => {
        setAppointments(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [API_BASE_URL]);

  // 👇 Fetch missing prices by looking up stylist info
  useEffect(() => {
    const fetchMissingPrices = async () => {
      const updated = await Promise.all(
        appointments.map(async (appt) => {
          if (appt.price || !appt.stylistId) return appt;
          try {
            const res = await fetch(`${API_BASE_URL}/auth/user/${appt.stylistId}`);
            if (!res.ok) throw new Error("Failed to fetch stylist");
            const stylist = await res.json();
            return { ...appt, price: stylist.serviceCost || 0 };
          } catch {
            return { ...appt, price: 0 };
          }
        })
      );
      setAppointments(updated);
    };

    if (appointments.length > 0) {
      fetchMissingPrices();
    }
  }, [appointments, API_BASE_URL]);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-[500px] max-h-[620px] overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Appointments</h2>
        <button className="text-sm text-blue-500 flex items-center gap-1 hover:underline">
          Add new <FaPlus className="text-xs" />
        </button>
      </div>

      {/* Date selector */}
      <div className="flex items-center gap-2 mb-3 overflow-x-auto">
        <button className="px-2">&lt;</button>
        {["Today", "Tomorrow", "Week"].map((d, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded-lg text-sm ${
              i === 0 ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {d}
          </button>
        ))}
        <button className="px-2">&gt;</button>
      </div>

      {/* Search & Filter */}
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Search customer"
          className="flex-1 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <select className="text-sm border rounded-md px-2 py-2">
          <option>All</option>
        </select>
      </div>

      {/* Appointment List */}
      <div className="space-y-3">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : appointments.length === 0 ? (
          <p className="text-center text-gray-500">No appointments found.</p>
        ) : (
          appointments.map((appt, index) => (
            <AppointmentItem
              key={index}
              time={appt.time}
              name={appt.clientName || appt.stylistName}
              service={appt.service}
              price={appt.serviceCost ?? appt.price ?? 0}
              status={appt.status}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Appointments;
