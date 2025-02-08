import React, { useState, useRef } from 'react';
import { FaTimesCircle, FaCreditCard, FaRegCircle, FaDotCircle } from 'react-icons/fa';

const paymentMethodData = [
  { id: 1, title: "Visa Card", iconImage: "/visa.png" },
  { id: 2, title: "MasterCard", iconImage: "/mastercard.png" },
  { id: 3, title: "PayPal", iconImage: "/paypal.png" },
];

export default function ChoosePayment({ SheetRef }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onPressClose = () => setIsModalOpen(false);
  const onPressSelectCard = (id) => setSelectedCard(id);
  const onPressAddNew = () => alert("Redirect to Add New Card Page");
  const onPressPayNow = () => alert("Payment Successful!");

  // Open modal when SheetRef is triggered
  if (SheetRef) {
    SheetRef.current = {
      show: () => setIsModalOpen(true),
    };
  }

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Payment Methods</h2>
              <button onClick={onPressClose} className="text-red-500 text-2xl">
                <FaTimesCircle />
              </button>
            </div>

            {/* Payment Options */}
            <div className="space-y-4">
              {paymentMethodData.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer ${
                    selectedCard === item.id ? "border-blue-500 bg-blue-100" : "border-gray-300"
                  }`}
                  onClick={() => onPressSelectCard(item.id)}
                >
                  <div className="flex items-center gap-3">
                    <img src={item.iconImage} alt={item.title} className="w-10 h-6" />
                    <span className="text-md">{item.title}</span>
                  </div>
                  {selectedCard === item.id ? (
                    <FaDotCircle className="text-blue-500 text-xl" />
                  ) : (
                    <FaRegCircle className="text-gray-500 text-xl" />
                  )}
                </div>
              ))}
            </div>

            {/* Add New & Pay Now Buttons */}
            <div className="mt-6 flex justify-between items-center">
              <button onClick={onPressAddNew} className="text-blue-500">
                + Add New
              </button>
              <button
                onClick={onPressPayNow}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
              >
                Pay Now ($70.00)
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
