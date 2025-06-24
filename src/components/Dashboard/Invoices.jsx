// src/components/Dashboard/Invoices.jsx
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Link } from 'react-router-dom';
import Loader from "../common/loader";
import GenerateInvoiceBtn from "../common/GenerateInvoiceBtn";

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [userRole, setUserRole] = useState("");

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


    const { role } = jwtDecode(token);
    setUserRole(role.replace(/([A-Z])/g, ' $1').trim());

    const url = `${API_BASE_URL}/Invoices/getVendorInvoices/${userId}`; // Adjust the route to your actual API route

    // Fetch invoices for the logged-in user
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        if (!res.ok) throw new Error("No invoices");
        return res.json();
      })
      .then((data) => {
        setInvoices(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [API_BASE_URL]);


  if (loading) return (
    <>
      <div className="ml-0 flex-1 bg-gray-50 p-6 min-h-screen">
        <div className="flex flex-col items-center justify-center pb-8 pt-20">
          <h1 className="text-6xl font-bold text-[#f273f2]"><Loader /></h1>
          <p className="mt-4 text-xl text-gray-700 font-bold"></p>
          <p className="mt-2 text-gray-500"><b>Loading Invoice...</b></p>
        </div>
      </div>
    </>
  );

  if (!invoices || invoices.length === 0) return (
    <div className="ml-0 flex-1 bg-gray-50 p-6 min-h-screen">
      <div className="flex flex-col items-center justify-center pb-8 pt-20">
        <h1 className="text-4xl font-bold text-[#f273f2]">No invoices found.</h1>
        <p className="mt-2 text-gray-500 pb-2 font-bold">Would you like to generate a new invoice?</p>
        <div>
          <button className="bg-[#53cf48] px-2 py-2 display-flex rounded-full hover:bg-[#7ae070] hover:text-black font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer" variant="primary">
            <Link to={`/generate-invoice`} className="text-white display-flex">
              Generate Invoice
            </Link>
          </button>
        </div>
      </div>
    </div>
  );

  if (error) return <p className="text-red-500">{error}</p>;


  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{userRole} Invoices</h2>

        <GenerateInvoiceBtn />
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
                <div className="text-gray-800 font-semibold">Invoice total: R {invoice.total}</div>
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
                  <tr>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1"></td>
                    <td className="px-2 py-1 text-right font-bold">TOTAL R {invoice.total.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <button className="bg-[#f273f2] px-4 py-2 rounded-full hover:bg-[#fa8cfa] hover:text-black font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer" variant="primary">
                <Link to={`/invoices-details/${invoice.id}/${invoice.userId}`} className="text-white">
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
