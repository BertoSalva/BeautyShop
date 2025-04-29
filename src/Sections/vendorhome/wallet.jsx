import React from 'react';

const transactions = [
  { date: '04/24/2024', type: 'Withdrawal', amount: '-$900.00', status: 'Completed' },
  { date: '04/23/2024', type: 'Order', amount: '$1,200.00', status: 'Completed' },
  { date: '04/21/2024', type: 'Order', amount: '$650.00', status: 'Completed' },
  { date: '04/20/2024', type: 'Order', amount: '$175.00', status: 'Completed' }
];

const Wallet = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Vendor Wallet</h2>

        <p className="text-sm text-gray-600">Available Balance</p>
        <p className="text-4xl font-bold text-gray-900 mb-6">$2,357.00</p>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="bg-gray-200 px-4 py-2 rounded-lg font-medium hover:bg-gray-300">Withdrawal</button>
          <button className="bg-gray-200 px-4 py-2 rounded-lg font-medium hover:bg-gray-300">Add Funds</button>
          <button className="bg-gray-200 px-4 py-2 rounded-lg font-medium hover:bg-gray-300">Payment Settings</button>
        </div>

        {/* Transactions */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Transactions</h3>

        <div className="overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn, idx) => (
                <tr key={idx} className="border-b">
                  <td className="px-4 py-2">{txn.date}</td>
                  <td className="px-4 py-2">{txn.type}</td>
                  <td className="px-4 py-2">{txn.amount}</td>
                  <td className="px-4 py-2">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {txn.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
