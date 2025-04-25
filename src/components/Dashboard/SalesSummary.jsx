// src/components/Dashboard/SalesSummary.jsx

import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Services', value: 14400, color: '#06b6d4' }, // teal
  { name: 'Products', value: 3600, color: '#f59e0b' },  // amber
];

const SalesSummary = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-xs">
      <h2 className="text-lg font-semibold text-gray-800 mb-1">Sales</h2>
      <p className="text-3xl font-bold text-gray-900 mb-4">R18000</p>

      {/* Pie Chart + Legend */}
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

        <div className="ml-6 space-y-3">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <div className="text-sm text-gray-600">{item.name}</div>
              <div className="text-sm font-semibold text-gray-800">R{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Analytics Link */}
      <div className="mt-5">
        <a href="#" className="text-sm text-blue-500 hover:underline">Analytics</a>
      </div>
    </div>
  );
};

export default SalesSummary;
