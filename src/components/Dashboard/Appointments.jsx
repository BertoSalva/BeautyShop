// src/components/Dashboard/Appointments.jsx
import React from 'react';
import { FaPlus } from 'react-icons/fa';

const appointments = [
  { time: '11:49 AM', name: 'Tarak Mehta', service: 'Hair Cut by Bagha', price: 500 },
  { time: '12:15 PM', name: 'Krishnan Iyer', service: 'Hair Cut by Bagha', price: 1000, status: 'Cancelled' },
  { time: '1:00 PM', name: 'Sundar Lall', service: 'Hair Cut by Bagha', price: 500, status: 'No-show' },
  { time: '2:30 PM', name: 'Pinku', service: 'Hair Cut by Bagha', price: 500 },
  { time: '2:30 PM', name: 'Patrakaar Popatlal', service: 'Hair Cut by Bagha', price: 100 },
  { time: '3:00 PM', name: 'Asit Kumar Modi', service: 'Hair Cut by Bagha', price: 500 },
];

const AppointmentItem = ({ time, name, service, price, status }) => {
  const statusStyles = {
    'Cancelled': 'bg-red-100 text-red-600',
    'No-show': 'bg-gray-200 text-gray-600'
  };

  return (
    <div className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-start border border-gray-100">
      <div>
        <div className={`text-sm font-semibold ${status ? 'text-red-500' : 'text-blue-500'}`}>
          {time}
        </div>
        <div className="text-sm font-medium text-gray-800">{name}</div>
        <div className="text-xs text-gray-400">{service} <span className="bg-gray-200 px-1 rounded text-gray-500 text-[10px] ml-1">3</span></div>
      </div>
      <div className="text-right">
        {status && (
          <span className={`text-xs px-2 py-1 rounded-full font-semibold ${statusStyles[status]}`}>
            {status}
          </span>
        )}
        <div className="text-sm font-semibold text-gray-800 mt-2">₹ {price}</div>
      </div>
    </div>
  );
};

const Appointments = () => {
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
        {['26 Tue', '27 Wed', '28 Thu', '29 Fri', '30 Sat'].map((d, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded-lg text-sm ${
              i === 0 ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'
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
        {appointments.map((appt, index) => (
          <AppointmentItem key={index} {...appt} />
        ))}
      </div>
    </div>
  );
};

export default Appointments;
