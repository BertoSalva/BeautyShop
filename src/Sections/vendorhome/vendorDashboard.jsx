import { useState } from "react";
import { FaUserCog, FaCalendarCheck, FaCut, FaClipboardList } from "react-icons/fa";

const dummyData = {
  revenue: {
    total: 18000,
    claimable: 12000,
    withdrawn: 6000,
  },
  visits: {
    upcoming: 7,
    completed: 8,
    noShows: 3,
    cancelled: 2,
  },
  appointments: [
    { time: "11:49 AM", name: "Tarak Mehta", price: 500, status: "" },
    { time: "12:15 PM", name: "Krishnan Iyer", price: 1000, status: "Cancelled" },
    { time: "1:00 PM", name: "Sundar Lall", price: 500, status: "No-show" },
    { time: "2:30 PM", name: "Pinku", price: 500, status: "" },
    { time: "2:30 PM", name: "Patrakaar Popatlal", price: 100, status: "" },
    { time: "3:00 PM", name: "Asit Kumar Modi", price: 500, status: "" },
  ],
};

export default function VendorHome() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-[#fbd0fb] min-h-screen">
      {/* Revenue */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold">Revenue</h2>
        <p className="text-2xl mt-2 font-bold text-pink-600">₹{dummyData.revenue.total}</p>
        <div className="text-sm mt-2 space-y-1 text-black">
          <div>Claimable: ₹{dummyData.revenue.claimable}</div>
          <div>Withdrawn: ₹{dummyData.revenue.withdrawn}</div>
        </div>
      </div>

      {/* Customers */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold">Customers</h2>
        <p className="text-2xl mt-2 font-bold text-pink-600">
          {Object.values(dummyData.visits).reduce((a, b) => a + b)} Appointments
        </p>
        <div className="text-sm mt-2 space-y-1 text-black">
          <div>Upcoming: {dummyData.visits.upcoming}</div>
          <div>Completed: {dummyData.visits.completed}</div>
          <div>No-shows: {dummyData.visits.noShows}</div>
          <div>Cancelled: {dummyData.visits.cancelled}</div>
        </div>
      </div>

      {/* Appointments */}
      <div className="bg-white shadow-md rounded-lg p-4 md:row-span-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-black">Appointments</h2>
          <button className="text-sm bg-black text-white px-3 py-1 rounded-full hover:bg-pink-600 transition">Add new</button>
        </div>
        <div className="mt-2 mb-2">
          <input className="w-full p-2 border-2 border-black rounded-full" placeholder="Search customer" />
        </div>
        <div className="space-y-2">
          {dummyData.appointments.map((appt, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center border-2 border-black rounded-lg p-2 text-sm bg-[#fff0f8]"
            >
              <div>
                <div className="font-medium text-black">{appt.time}</div>
                <div className="text-gray-600">{appt.name}</div>
              </div>
              <div className="text-right">
                <div
                  className={`font-bold ${
                    appt.status === "Cancelled"
                      ? "text-red-500"
                      : appt.status === "No-show"
                      ? "text-gray-500"
                      : "text-black"
                  }`}
                >
                  {appt.status || `₹${appt.price}`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dashboard Links */}
      <div className="bg-white shadow-md rounded-lg p-4 md:col-span-2">
        <h2 className="text-xl font-semibold text-black mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <button className="flex flex-col items-center justify-center bg-[#fff0f8] text-black border-2 border-black p-4 rounded-lg hover:bg-pink-100">
            <FaUserCog className="text-2xl mb-2" />
            <span className="text-sm font-semibold">Manage Account</span>
          </button>
          <button className="flex flex-col items-center justify-center bg-[#fff0f8] text-black border-2 border-black p-4 rounded-lg hover:bg-pink-100">
            <FaCalendarCheck className="text-2xl mb-2" />
            <span className="text-sm font-semibold">Manage Bookings</span>
          </button>
          <button className="flex flex-col items-center justify-center bg-[#fff0f8] text-black border-2 border-black p-4 rounded-lg hover:bg-pink-100">
            <FaCut className="text-2xl mb-2" />
            <span className="text-sm font-semibold">Service Management</span>
          </button>
          <button className="flex flex-col items-center justify-center bg-[#fff0f8] text-black border-2 border-black p-4 rounded-lg hover:bg-pink-100">
            <FaClipboardList className="text-2xl mb-2" />
            <span className="text-sm font-semibold">More Options</span>
          </button>
        </div>
      </div>
    </div>
  );
}