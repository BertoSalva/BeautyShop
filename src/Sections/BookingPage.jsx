import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const BookingPage = () => {
  const { stylistId } = useParams();
  const [stylist, setStylist] = useState(null);
  const [service, setService] = useState("");
  const [time, setTime] = useState("");
  const [serviceCost, setServiceCost] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchStylist = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/auth/user/${stylistId}`);
        if (!res.ok) throw new Error("Failed to fetch stylist info");
        const data = await res.json();

        setStylist(data);
        setServiceCost(data.serviceCost ? parseFloat(data.serviceCost) : null);
      } catch (err) {
        console.error("Error loading stylist:", err);
        setStylist(null);
        setServiceCost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchStylist();
  }, [API_BASE_URL, stylistId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first!");
      return;
    }

    const decoded = jwtDecode(token);
    const clientId = parseInt(decoded.nameid);

    const bookingData = {
      clientId,
      stylistId: parseInt(stylistId),
      service,
      time,
      serviceCost: parseFloat(serviceCost) || 0,
    };

    try {
      const res = await fetch(`${API_BASE_URL}/bookings/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (res.ok) {
        alert("Booking successful!");
        navigate("/");
      } else {
        const error = await res.json();
        alert(error.message || "Failed to create booking.");
      }
    } catch (err) {
      console.error(err);
      alert("Error creating booking.");
    }
  };

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto p-8">
        <p className="text-gray-600 text-center">Loading stylist information...</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">
        Book {stylist?.fullName || "Stylist"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 font-semibold">Service</label>
          <input
            type="text"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
            className="w-full border px-4 py-2 rounded-lg"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Time</label>
          <input
            type="datetime-local"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="w-full border px-4 py-2 rounded-lg"
          />
        </div>

        {typeof serviceCost === "number" && !isNaN(serviceCost) ? (
          <p className="text-sm text-green-600 font-semibold">
            💰 Price: R{serviceCost.toFixed(2)}
          </p>
        ) : (
          <p className="text-sm text-gray-500 italic">Price not available</p>
        )}

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-700"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
