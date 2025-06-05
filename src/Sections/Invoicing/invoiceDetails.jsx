// Dashboard.jsx (not generated yet)
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Dashboard/Sidebar';

const InvoiceDetails = () => {
    const { invoiceId } = useParams();
    const [invoice, setInvoice] = useState(null);
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

        // Fetch the specific invoice by ID
        fetch(`${API_BASE_URL}/Invoices/getInvoice/${invoiceId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                if (!res.ok) throw new Error("Failed to fetch invoice");
                return res.json();
            })
            .then(data => {
                setInvoice(data.invoice);
                console.log(data.invoice);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [API_BASE_URL, invoiceId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!invoice) return <div>No invoice found</div>;


    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* MainInvoice Body*/}

            <div className="ml-64 flex-1 bg-gray-50 p-6 min-h-screen">
                <h1 className="text-black text-xl uppercase font-semibold p-2">
                    Invoice: <span className="text-[#f273f2] font-bold">#{invoice.invoiceNumber}</span>
                </h1>
                <div className="bg-white rounded-xl shadow-md p-6 w-full">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Invoice Details</h2>
                    <hr className='pb-2 pt-4'></hr>
                    <p><strong>Date:</strong> {new Date(invoice.invoiceDate).toLocaleDateString()}</p>
                    <p><strong>Amount:</strong> R {invoice.total.toFixed(2)}</p>
                    <p><strong>Status:</strong>
                        <span className={`text-lg font-bold ${invoice.isPaid ? "text-green-600" : "text-red-500"}`}>
                            &nbsp; {invoice.isPaid ? "Paid" : "Unpaid"}
                        </span>
                    </p>
                    <p className='pb-4'><strong>Description:</strong> {invoice.description}</p>

                    <hr className='pb-2 pt-4'></hr>
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Customer Details</h2>
                </div>
            </div>
        </div>
    );
};

export default InvoiceDetails;