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
import { useNavigate } from "react-router-dom";
import AutoCompleteClientSelect from "../../components/common/AutoCompleteClientSelect";
import BtnLoader from "../../components/common/btnLoader";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CustomSnackbar from "../../components/common/snackbar";

function GenerateInvoice() {
  const [rows, setRows] = useState([
    { id: Date.now(), service: "", price: "", quantity: "", lineTotal: "R 00.00" }
  ]);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [total, setTotal] = useState("R 00.00");

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [description, setDescription] = useState("");
  const [isSaving, setIsSaving] = useState(false);


  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
  };

  const ServiceInputRow = ({ index, row, onRemove, onBlurRow }) => (
    <div className="flex flex-row gap-2 pb-2 items-center">
      <div className="flex-2">
        <TextField
          type="text"
          label="Service name"
          size="small"
          fullWidth
          defaultValue={row.service}
          onBlur={(e) => onBlurRow(index, "service", e.target.value)}
        />
      </div>
      <div className="flex-1">
        <TextField
          type="number"
          inputProps={{ min: 0, max: 9999 }}
          label="Price"
          size="small"
          fullWidth
          defaultValue={row.price}
          onBlur={(e) => onBlurRow(index, "price", e.target.value)}
        />
      </div>
      <div className="flex-1">
        <TextField
          type="number"
          inputProps={{ min: 0, max: 9999 }}
          label="Quantity"
          size="small"
          fullWidth
          defaultValue={row.quantity}
          onBlur={(e) => onBlurRow(index, "quantity", e.target.value)}
        />
      </div>
      <div className="flex-1">
        <TextField
          type="text"
          disabled
          size="small"
          fullWidth
          value={calculateLineTotal(row.price, row.quantity)}
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

  function onBlurRow(index, field, value) {
    setRows(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };

      // Recalculate totals
      const newTotal = updated.reduce((sum, row) => {
        const price = parseFloat(row.price || 0);
        const qty = parseInt(row.quantity || 0);
        const lineTotal = isNaN(price) || isNaN(qty) ? 0 : price * qty;
        return sum + lineTotal;
      }, 0);

      setTotal(`R ${newTotal.toFixed(2)}`);
      return updated;
    });
  }

  function removeRow(idToRemove) {
    if (rows[0].id === idToRemove) return;
    setRows(prev => prev.filter(row => row.id !== idToRemove));
  }

  function calculateLineTotal(price, quantity) {
    const total = parseFloat(price || 0) * parseInt(quantity || 0);
    return isNaN(total) ? "R 00.00" : `R ${total.toFixed(2)}`;
  }


  async function saveInvoice() {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("User not logged in");
      return;
    }

    const decoded = jwtDecode(token);
    const userId = decoded?.nameid;

    const invoiceItems = rows.map(row => ({
      id: 0,
      name: row.service,
      quantity: Number(row.quantity),
      price: Number(row.price),
      description: row.service,
      createdDate: new Date().toISOString(),
      InvoiceNumber: 0
    }));

    const invoicePayload = {
      invoiceDate: new Date().toISOString(),
      total: invoiceItems.reduce((sum, item) => sum + item.quantity * item.price, 0),
      description,
      isPaid: false,
      userId: 7,
      VendorId: userId,
      invoiceItems
    };

    console.log("Invoice Payload:", invoiceItems.length);

    if (invoiceItems[0].name == "") {
      showSnackbar('Please add at least one service item to the invoice.', 'error')
      return;
    }

    try {
      setIsSaving(true);
      const response = await fetch(`${API_BASE_URL}/Invoices/addInvoice`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(invoicePayload)
      });

      if (!response.ok) {
        throw new Error("Failed to save invoice.");
      }

      showSnackbar('Invoice saved successfully.', 'success')
      setTimeout(() => {
        navigate("/vendor-invoices");
      }, 2000);

    } catch (err) {
      console.error(err);
      showSnackbar('There was a problem saving the invoice.', 'error')
    } finally {
      setIsSaving(false);
    }
  }

  const card = (
    <React.Fragment>
      <CardContent>
        <div className="pb-4">Fill out the details below to create a new invoice for your client and their booking.</div>
        <hr />
        <br />
        <div className="pb-4">
          <AutoCompleteClientSelect />
        </div>
        <div className="pb-4">
        </div>
        <div id="invoice-items">
          {rows.map((row, index) => (
            <ServiceInputRow
              key={row.id}
              index={index}
              row={row}
              onRemove={() => removeRow(row.id)}
              onBlurRow={onBlurRow}
            />
          ))}
        </div>

        <div className="flex flex-row gap-4 pb-2 items-center">
          <div className="flex-1">
            <span sx={{ width: "100%" }}></span>
          </div>
          <div className="flex-1">
            <span sx={{ width: "100%" }}></span>
          </div>
          <div className="flex-1">
            <span sx={{ width: "100%" }}></span>
          </div>
          <div className="pt-4 pb-2 pr-2 flex-1 justify-end">
            <TextField
              label="Total"
              size="small"
              value={total}
              disabled
            />
          </div>
        </div>

        <div>
          <button onClick={addRow} className="bg-[#53cf48] px-4 py-2 rounded-full hover:bg-[#7ae070] hover:text-white font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer" variant="primary">
            <FaPlus />
          </button>
        </div>
      </CardContent>
      <hr />
      <CardActions className="flex justify-center pb-4">
        <button
          onClick={saveInvoice}
          disabled={isSaving}
          className="bg-[#53cf48] px-4 py-2 rounded-full hover:bg-[#7ae070] hover:text-black font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer">
          {isSaving ? `Saving...` : "Save Invoice"}
        </button>
        <div>
          {isSaving ? <BtnLoader /> : " "}
        </div>
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

              <CustomSnackbar
                open={snackbarOpen}
                onClose={handleClose}
                message={snackbarMessage}
                severity={snackbarSeverity}
              />
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default GenerateInvoice;
