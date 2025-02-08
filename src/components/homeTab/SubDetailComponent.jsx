import React, { useState } from 'react';

const SubDetailComponent = ({ isCoupon = false }) => {
  const [coupon, setCoupon] = useState('');

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md overflow-auto">
      {/* Date & Gender */}
      <div className="flex justify-between p-3 border border-gray-300 rounded-lg mb-4">
        <span className="text-gray-600">Date & Time:</span>
        <span className="font-semibold">Mon, 12 Aug - 10:00 AM</span>
      </div>
      <div className="flex justify-between p-3 border border-gray-300 rounded-lg mb-4">
        <span className="text-gray-600">Gender:</span>
        <span className="font-semibold">Male</span>
      </div>

      {/* Service List */}
      <div className="border border-gray-300 rounded-lg shadow p-4 mb-4">
        <h3 className="font-semibold text-lg mb-2">Service List</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Man’s Short Hair Cut:</span>
            <span>$30</span>
          </div>
          <div className="flex justify-between">
            <span>Hair Spa:</span>
            <span>$15</span>
          </div>
          <div className="flex justify-between">
            <span>Oii Treatment:</span>
            <span>$25</span>
          </div>
          <div className="flex justify-between">
            <span>CGST:</span>
            <span>$5</span>
          </div>
          <div className="flex justify-between">
            <span>SGST:</span>
            <span>$5</span>
          </div>
        </div>
      </div>

      {/* Coupon Section */}
      {isCoupon && (
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2">Apply Coupon</h3>
          <div className="flex border border-gray-300 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Enter coupon"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="w-full px-3 py-2 text-sm border-none outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 text-sm">
              Apply
            </button>
          </div>
        </div>
      )}

      {/* Total Summary */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Total Time:</span>
          <span>55 Minutes</span>
        </div>
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>$85.00</span>
        </div>
        <div className="flex justify-between">
          <span>Coupon Discount:</span>
          <span>-$15.00</span>
        </div>
        <hr className="border-dashed border-gray-400 my-2" />
        <div className="flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>$70.00</span>
        </div>
      </div>
    </div>
  );
};

export default SubDetailComponent;
