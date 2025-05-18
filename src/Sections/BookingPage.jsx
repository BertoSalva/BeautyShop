import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


const BookingPage = () => {
  const { stylistId } = useParams(); // 👈 grabs /book/:stylistId
  const [stylist, setStylist] = useState(null);
  const [service, setService] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    // Fetch stylist details (optional, if you want to display info)
    fetch(`${API_BASE_URL}/auth/user/${stylistId}`)
      .then((res) => res.json())
      .then((data) => setStylist(data))
      .catch((err) => console.error(err));
  }, [stylistId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

   const token = localStorage.getItem("token");

if (!token) {
  alert("Please login first!");
  return;
}

const decoded = jwtDecode(token);
const clientId = decoded.nameid;

    const bookingData = {
      clientId: parseInt(clientId),
      stylistId: parseInt(stylistId),
      service,
      time,
    };

    try {
      const res = await fetch(`${API_BASE_URL}/bookings/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (res.ok) {
        alert("Booking successful!");
        navigate("/"); // or to a confirmation page
      } else {
        const error = await res.json();
        alert(error.message || "Failed to create booking.");
      }
    } catch (err) {
      console.error(err);
      alert("Error creating booking.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">Book {stylist?.fullName}</h2>

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
