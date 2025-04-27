// src/components/Dashboard/VisitsSummary.jsx

import { PieChart, Pie, Cell } from 'recharts';
import { Link } from 'react-router-dom';

const data = [
  { name: 'Upcoming', value: 7, color: '#06b6d4' },     // teal
  { name: 'Completed', value: 8, color: '#facc15' },    // amber
  { name: 'No shows', value: 3, color: '#6b7280' },      // gray
  { name: 'Cancelled', value: 2, color: '#ef4444' },     // red
];

const VisitsSummary = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-xs">
      <h2 className="text-lg font-semibold text-gray-800 mb-1">Visits</h2>
      <p className="text-xl font-bold text-gray-900 mb-1">20 <span className="text-sm font-medium text-gray-600">Appointments</span></p>

      {/* Donut Chart + Legend */}
      <div className="flex items-center">
        <PieChart width={120} height={120}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={50}
            innerRadius={30}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

        <div className="ml-6 space-y-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <div className="text-sm text-gray-600">{item.name}</div>
              <div className="text-sm font-semibold text-gray-800">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Analytics Link */}
      <div className="mt-4">
        {/* <a href="#" className="text-sm text-blue-500 hover:underline">Analytics</a> */}
        <Link to="/appointment-details" className="text-sm text-blue-500 hover:underline">
          View Appointments
      </Link>
      </div>
    </div>
  );
};

export default VisitsSummary;
