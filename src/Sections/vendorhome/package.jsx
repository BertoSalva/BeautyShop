// src/Sections/Package.jsx

import React from 'react';

const plans = [
  {
    title: "Free",
    price: "R0",
    duration: "forever",
    features: [
      "Basic profile listing",
      "Standard search results",
      "Limited customer reach"
    ],
    buttonText: "Select Free Plan",
    highlight: false
  },
  {
    title: "90-Day Trial",
    price: "R150",
    duration: "90 days",
    features: [
      "Enhanced visibility",
      "Improved search ranking",
      "90-day enhanced features"
    ],
    buttonText: "Start 90-Day Trial",
    highlight: false
  },
  {
    title: "Paid",
    price: "R399",
    duration: "year",
    features: [
      "Top-tier visibility",
      "Priority in search results",
      "Maximum customer exposure",
      "Full year of advanced features"
    ],
    buttonText: "Select Paid Plan",
    highlight: true
  }
];

const Package = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-12 bg-[#f273f2] text-white">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">You're almost there</h1>
        <p className="text-md">
          Choose the plan that works best for you. <br />
          By joining us you agree to our <a href="#" className="underline">terms of service</a>.
        </p>
      </div>

      {/* Plans Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white text-gray-800 rounded-xl p-6 w-[280px] flex flex-col justify-between shadow-lg relative`}
          >
            {/* Highlight Ribbon */}
            {plan.highlight && (
              <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold text-gray-800 px-2 py-1 rounded-tr-xl rounded-bl-xl">
                RECOMMENDED
              </div>
            )}

            {/* Plan Content */}
            <div className="flex flex-col items-center mb-6">
              <h2 className="text-xl font-bold">{plan.title}</h2>
              <p className="text-2xl font-extrabold mt-2">{plan.price}</p>
              <p className="text-sm text-gray-500">{plan.duration}</p>
            </div>

            <ul className="text-sm text-gray-600 mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span className="w-2 h-2 bg-[#ff00ff] rounded-full mr-2"></span> {feature}
                </li>
              ))}
            </ul>

            <button className="bg-[#ff00ff] hover:bg-pink-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <p className="mt-10 text-sm text-gray-200">
        Questions about our plans? <a href="#" className="underline">Contact our support team</a>
      </p>
    </div>
  );
};

export default Package;
