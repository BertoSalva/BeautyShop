import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";

function GenerateInvoiceBtn() {
    const token = localStorage.getItem("token");

    if (!token) {
        setError("User not logged in");
        setLoading(false);
        return;
    }

    const { nameid } = jwtDecode(token);
    const { role } = jwtDecode(token);
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    if (role == "Client") {
        return (
            <div className="bg-[#f273f2] text-white px-2 py-2 display-flex font-semibold transform" variant="primary">
               Client
            </div>
        );
    }
    else {
        return (
            <button className="bg-[#53cf48] px-2 py-2 display-flex rounded-full hover:bg-[#7ae070] hover:text-black font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer" variant="primary">
                <Link to={`/generate-invoice`} className="text-white display-flex">
                    Generate Invoice
                </Link>
            </button>
        );
    }

}

export default GenerateInvoiceBtn;