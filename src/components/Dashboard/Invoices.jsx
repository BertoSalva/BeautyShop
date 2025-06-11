// src/components/Dashboard/Invoices.jsx
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import { Link } from 'react-router-dom';

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("User not logged in");
      setLoading(false);
      return;
    }

    const { nameid } = jwtDecode(token);
    const userId = parseInt(nameid);

    const url = `${API_BASE_URL}/Invoices/getVendorInvoices/${userId}`; // Adjust the route to your actual API route

    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch invoices");
        return res.json();
      })
      .then((data) => {
        setInvoices(data); // Save the API data as-is
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [API_BASE_URL]);

  if (loading) return <p>Loading invoices...</p>;
  if (error) return <p className="text-red-500">{error}</p>;


  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Invoices</h2>
        <button className="text-sm text-blue-500 flex items-center gap-1 hover:underline">
          Generate new <FaPlus className="text-xs" />
        </button>
      </div>

      <div className="space-y-3">
        {invoices.map((invoice) => (
          <details key={invoice.id} className="pa-3 group hover:bg-[lightgrey] transition-transform duration-300">
            <summary className="flex justify-between items-center cursor-pointer list-none pt-2 pb-2 px-4">
              <div>
                <span className="text-blue-600 font-medium">#{invoice.invoiceNumber}</span>
                <div className="text-xs text-gray-500">{new Date(invoice.invoiceDate).toLocaleDateString()}</div>
              </div>
              <div className="text-right">
                <div className="text-gray-800 font-semibold">R {invoice.total}</div>
                <div className={`text-xs ${invoice.isPaid ? "text-green-600" : "text-red-500"}`}>
                  {invoice.isPaid ? "Paid" : "Unpaid"}
                </div>
              </div>
            </summary>
            <hr />
            <div className="mt-3 ml-2 px-2 pb-4">
              <div className="font-bold text-[#f273f2] pl-2">Invoice category description: {invoice.description}</div>
              <table className="w-full text-sm text-left text-gray-600 mt-1">
                <thead className="border-b">
                  <tr>
                    <th className="px-2 py-1">Description</th>
                    <th className="px-2 py-1 text-center">QTY</th>
                    <th className="px-2 py-1 text-right">Price (R)</th>
                  </tr>
                </thead>
                <tbody className="space-y-1">
                  {invoice.items.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="px-2 py-1">{item.name}</td>
                      <td className="px-2 py-1 text-center">{item.quantity}</td>
                      <td className="px-2 py-1 text-right">{item.price.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <br />
              <button className="bg-[#f273f2] px-4 py-2 rounded-full hover:bg-white hover:text-black font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer" variant="primary">
                <Link to={`/invoices-details/${invoice.id}`}>
                  View Details
                </Link>
              </button>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Invoices;
