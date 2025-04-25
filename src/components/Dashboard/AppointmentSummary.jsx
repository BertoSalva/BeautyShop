import React from "react";
import Sidebar from "./Sidebar";

const AppointmentsData = {
    upcoming: 7,
    completed: 8,
    noShow: 3,
    cancelled: 2
};

const AppointmentDetails = () => {
    return (     
        <div className="p-8 bg-gray-100 min-h-screen">
            {/* Sidebar on the left */}
            
            <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                    Appointment Breakdown
                </h2>
                <p className="text-md md:text-lg text-gray-600 mt-1">
                    Dive into the details of each appointment—status, timing, and totals.
                </p>
            </div>
            {/* Appointment Types Bar */}
            <div className="flex flex-wrap md:flex-nowrap gap-4 bg-white p-4 rounded shadow mb-8">
        {[
            { label: 'Upcoming', count: AppointmentsData.upcoming, bg: 'bg-blue-100', ring: 'border-blue-500 ring-4 ring-blue-200' },
            { label: 'Completed', count: AppointmentsData.completed, bg: 'bg-orange-100', ring: 'border-orange-500 ring-4 ring-orange-200' },
            { label: 'No Show', count: AppointmentsData.noShow, bg: 'bg-gray-300', ring: 'border-gray-700 ring-4 ring-gray-400' },
            { label: 'Cancelled', count: AppointmentsData.cancelled, bg: 'bg-yellow-200', ring: 'border-red-500 ring-4 ring-yellow-300' },
        ].map((item, idx) => (
            <div key={idx} className={`flex items-center gap-2 w-full sm:w-[calc(50%-0.5rem)] md:w-auto px-4 py-3 ${item.bg} rounded shadow-sm`}>
            {/* Donut-style indicator */}
            <span className={`w-5 h-5 rounded-full border-4 ${item.ring} inline-block`}></span>
            <span className="font-bold">{item.count}</span>
            <span className="text-gray-700">{item.label}</span>
            </div>
        ))}
        </div>

      {/* Detail Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Upcoming */}
        <div className="bg-white p-6 rounded shadow">
            <div className="flex items-center gap-2 mb-4">
                <span className="w-4 h-4 bg-blue-500 rounded-full inline-block"></span>
                <h3 className="text-lg font-semibold">Upcoming ({AppointmentsData.upcoming})</h3>
            </div>
            <table className="w-full text-left mt-2">
            <thead className="border-b-2 border-black">
                <tr>
                    <th className="py-2">Name</th>
                    <th className="py-2">Location</th>
                    <th className="py-2">Amount</th>
                </tr>
            </thead>
            <tbody>
              {/* Sample Rows - Replace with dynamic data */}
                {[...Array(5)].map((_, idx) => (
                <tr key={idx} className="border-b">
                    <td className="py-2">Customer {idx + 1}</td>
                    <td className="py-2">Salon Branch</td>
                    <td className="py-2">R 500</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>

        {/* Completed */}
        <div className="bg-white p-6 rounded shadow">
            <div className="flex items-center gap-2 mb-4">
                <span className="w-4 h-4 bg-orange-500 rounded-full inline-block"></span>
                <h3 className="text-lg font-semibold">Completed ({AppointmentsData.completed})</h3>
            </div>
            <table className="w-full text-left mt-2">
                <thead className="border-b-2 border-black">
                    <tr>
                        <th className="py-2">Invoice No.</th>
                        <th className="py-2">Name</th>
                        <th className="py-2">Amount</th>
                    </tr>
                </thead>
                <tbody>
              {/* Sample Rows - Replace with dynamic data */}
                {[...Array(5)].map((_, idx) => (
                <tr key={idx} className="border-b">
                    <td className="py-2">#00{idx + 101}</td>
                    <td className="py-2">Customer {idx + 1}</td>
                    <td className="py-2">R 800</td>
                </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    );

}

export default AppointmentDetails;