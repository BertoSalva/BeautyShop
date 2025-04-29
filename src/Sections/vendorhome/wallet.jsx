import React from 'react';

const transactions = [
  { date: '04/24/2024', type: 'Withdrawal', amount: '-R900.00', status: 'Completed' },
  { date: '04/23/2024', type: 'Order', amount: 'R1,200.00', status: 'Completed' },
  { date: '04/21/2024', type: 'Order', amount: 'R650.00', status: 'Completed' },
  { date: '04/20/2024', type: 'Order', amount: 'R175.00', status: 'Completed' }
];

const Wallet = () => {
  const walletBalance = 2357.00;
  const currency = 'R';
  const vendorName = 'You'; // Could be dynamically fetched based on logged-in user

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-3xl">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-extrabold text-gray-800">Hery's Wallet</h2>
          <p className="text-sm text-gray-500">Hello, {vendorName}. Here's an overview of your balance and transactions.</p>
        </div>

        {/* Balance Section */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">Available Balance</p>
          <p className="text-5xl font-bold text-gray-900 tracking-tight">
            {currency}{walletBalance.toLocaleString('en-ZA')}.00
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="bg-[#f273f2] text-white px-5 py-2 rounded-full font-medium hover:bg-pink-600 transition">Withdrawal</button>
          <button className="bg-white border border-[#f273f2] text-[#f273f2] px-5 py-2 rounded-full font-medium hover:bg-[#f273f2] hover:text-white transition">Add Funds</button>
          <button className="bg-gray-100 px-5 py-2 rounded-full font-medium text-gray-700 hover:bg-gray-200 transition">Payment Settings</button>
        </div>

        {/* Transactions Table */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Transactions</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
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
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{txn.date}</td>
                    <td className="px-4 py-3">{txn.type}</td>
                    <td className="px-4 py-3">{txn.amount}</td>
                    <td className="px-4 py-3">
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
    </div>
  );
};

export default Wallet;