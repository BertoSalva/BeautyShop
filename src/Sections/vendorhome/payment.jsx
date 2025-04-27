// src/Sections/Payment.jsx

import React from 'react';

const Payment = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
        
        {/* Paystack logo */}
        <div className="absolute top-4 left-4">
          {/* Placeholder for the logo */}
          <div className="bg-[#f273f2] w-8 h-8 rounded-sm flex items-center justify-center">
            <div className="w-5 h-5 bg-white"></div>
          </div>
        </div>

        {/* Payment Info */}
        <div className="text-right text-gray-700 text-sm font-medium mb-6">
          <div>hendrycklamar99@icloud...</div>
          <div className="text-[#f273f2] font-semibold">Pay ZAR 399</div>
        </div>

        {/* Enter card details */}
        <h2 className="text-center text-lg font-semibold mb-6 text-gray-800">
          Enter your card details to pay
        </h2>

        {/* Card Number Input */}
        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1">CARD NUMBER</label>
          <input
            type="text"
            placeholder="0000 0000 0000 0000"
            className="w-full border rounded-md px-4 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#f273f2]"
          />
        </div>

        {/* Expiry and CVV */}
        <div className="flex gap-4 mb-6">
          <div className="w-1/2">
            <label className="block text-xs text-gray-500 mb-1">CARD EXPIRY</label>
            <input
              type="text"
              placeholder="MM / YY"
              className="w-full border rounded-md px-4 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#f273f2]"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-xs text-gray-500 mb-1">CVV</label>
            <input
              type="text"
              placeholder="123"
              className="w-full border rounded-md px-4 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#f273f2]"
            />
          </div>
        </div>

        {/* Pay Button */}
        <button className="w-full bg-[#f273f2] hover:bg-pink-500 text-white font-semibold py-3 rounded-md text-sm transition">
          Pay ZAR 1
        </button>

        {/* Footer */}
        <div className="mt-6 text-center text-gray-400 text-xs">
          Secured by <span className="font-semibold text-gray-600">paystack</span>
        </div>

      </div>
    </div>
  );
};

export default Payment;
