import Sidebar from "../../components/Dashboard/Sidebar";
import * as React from 'react';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { jwtDecode } from "jwt-decode";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Tooltip } from "recharts";

function GenerateInvoice() {
  const [rows, setRows] = useState([
    { id: Date.now(), service: "", price: "", quantity: "", lineTotal: "R 00.00" }
  ]);

  const [error, setError] = useState("");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const ServiceInputRow = ({ index, row, onRemove }) => (
    <div className="flex flex-row gap-2 pb-2 items-center">
      <div className="flex-2">
        <TextField
          type="text"
          label="Service name"

          size="small"
          fullWidth
        />
      </div>
      <div className="flex-1">
        <TextField
          type="number"
          inputProps={{ min: 0, max: 9999 }}
          label="Price"

          size="small"
          fullWidth
        />
      </div>
      <div className="flex-1">
        <TextField
          type="number"
          inputProps={{ min: 0, max: 9999 }}
          label="Quantity"

          size="small"
          fullWidth
        />
      </div>
      <div className="flex-1">
        <TextField
          type="text"
          disabled
 
          size="small"
          fullWidth
        />
      </div>
      <div>
        {index !== 0 && (
          <button onClick={onRemove} className="text-red-500 hover:text-red-700 text-xl font-bold">
            ×
          </button>
        )}
      </div>
    </div>
  );



  function addRow() {
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      if (
        !row.service ||
        !row.price ||
        !row.quantity ||
        parseFloat(row.price) <= 0 || parseInt(row.quantity) <= 0
      ) {
        console.log(row.service, row.price, row.quantity);
        alert("Please fill in all the existing line items before adding a new one.");
        return;
      }
    }

    setRows(prev => [...prev, { id: Date.now() + Math.random(), service: "", price: "", quantity: "", lineTotal: "R 00.00" }]);
  }

  function removeRow(idToRemove) {
    if (rows[0].id === idToRemove) return;
    setRows(prev => prev.filter(row => row.id !== idToRemove));
  }

  function calculateLineTotal(price, quantity) {
    const total = parseFloat(price || 0) * parseInt(quantity || 0);
    return isNaN(total) ? "R 00.00" : `R ${total.toFixed(2)}`;
  }


  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("User not logged in");
      setLoading(false);
      return;
    }

    const { nameid } = jwtDecode(token);
    const url = `${API_BASE_URL}/Invoices/addInvoice`;
  }, [API_BASE_URL]);

  const card = (
    <React.Fragment>
      <CardContent>
        <div className="pb-4">Date: {Date().toString().split('T')[0]}</div>
        <hr />
        <br />
        <div className="pb-4">
          <TextField type="text" label="Customer name." id="customer-name" placeholder="Enter customer name..." size="small" fullWidth />
        </div>
        <div className="pb-4">
          <TextField type="text" label="Customer email." id="customer-email" placeholder="Enter customer email..." size="small" fullWidth />
        </div>
        <div id="invoice-items">
          {rows.map((row, index) => (
            <ServiceInputRow
              key={row.id}
              index={index}
              row={row}
              onRemove={() => removeRow(row.id)}
            />
          ))}
        </div>


        <div>
          <button onClick={addRow} className="bg-[#53cf48] px-4 py-2 rounded-full hover:bg-[#7ae070] hover:text-white font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer" variant="primary">
            <FaPlus />
          </button>
        </div>
      </CardContent>
      <hr />
      <CardActions className="flex justify-center pb-4">
        <button disabled className="bg-[#53cf48] px-4 py-2 rounded-full hover:bg-[#7ae070] hover:text-black font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer" variant="primary">
          Save invoice
        </button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <>
      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"></Box>

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* MainInvoice Body*/}
        <div className="ml-64 flex-1 bg-gray-50 p-6 min-h-screen">
          <div className="flex flex-col items-center justify-center pb-8 pt-4">
            <h4 className="text-4xl font-bold text-[#f273f2]">Create Invoice</h4>
            <p className="mt-4 text-xl text-gray-700 font-bold"></p>

            <div>
              <Card sx={{ minWidth: 300, maxWidth: 800 }} className="bg-white rounded-xl shadow-md p-6 w-full">
                {card}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default GenerateInvoice;
