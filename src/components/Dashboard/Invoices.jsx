// src/components/Dashboard/Invoices.jsx

import { FaPlus } from 'react-icons/fa';

const invoiceData = [
  { id: '0000104', name: 'Tarak Mehta', serviceCount: 1, productCount: 1, amount: 3000 },
  { id: '0000103', name: 'Aatmaram Bhide', serviceCount: 3, productCount: 0, amount: 5000 },
  { id: '0000102', name: 'Champaklal Gada', serviceCount: 0, productCount: 2, amount: 1000 },
  { id: '0000101', name: 'Komal Hathi', serviceCount: 2, productCount: 0, amount: 5000 },
  { id: '0000100', name: 'Rita Reporter', serviceCount: 4, productCount: 1, amount: 4000 },
];

const Invoices = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Invoices</h2>
        <button className="text-sm text-blue-500 flex items-center gap-1 hover:underline">
          Generate new <FaPlus className="text-xs" />
        </button>
      </div>

      <div className="space-y-3">
        {invoiceData.map((invoice) => (
          <div key={invoice.id} className="flex items-center justify-between text-sm border-b pb-2">
            <a href="#" className="text-blue-500 font-medium hover:underline">#{invoice.id}</a>
            <span className="text-gray-700 w-40 truncate">{invoice.name}</span>

            {/* Colored indicators */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-teal-400 inline-block"></span>
              {invoice.serviceCount}
              <span className="w-3 h-3 rounded-full bg-amber-400 inline-block ml-4"></span>
              {invoice.productCount}
            </div>

            <span className="font-semibold text-gray-900">₹ {invoice.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Invoices;
