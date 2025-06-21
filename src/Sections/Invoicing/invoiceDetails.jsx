// Dashboard.jsx (not generated yet)
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Dashboard/Sidebar';
import { Link } from 'react-router-dom';
import Loader from '../../components/common/loader';

const InvoiceDetails = () => {
    const { invoiceId, userId } = useParams();
    const [invoice, setInvoice] = useState(null);
    const [user, setUser] = useState(null);
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
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });


        fetch(`${API_BASE_URL}/Auth/user/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch user.");
                return res.json();
            })
            .then((data) => {
                setUser(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });

    }, [API_BASE_URL, invoiceId, userId]);

    if (loading) return (
        <div className="ml-64 flex-1 bg-gray-50 p-6 min-h-screen">
            <div className="flex flex-col items-center justify-center pb-8 pt-20">
                <h1 className="text-6xl font-bold text-[#f273f2] pb-2"><Loader /></h1>
                <p className="mt-2 text-gray-500">Loader...</p>
            </div>
        </div>
    );

    if (error) return (
        <div className="ml-64 flex-1 bg-gray-50 p-6 min-h-screen">
            <div className="flex flex-col items-center justify-center pb-8 pt-20">
                <h1 className="text-6xl font-bold text-[#f273f2] pb-2">Error.</h1>
                <p className="mt-2 text-gray-500">{error}</p>
            </div>
        </div>
    );

    if (!invoice) return (
        <div className="ml-64 flex-1 bg-gray-50 p-6 min-h-screen">
            <div className="flex flex-col items-center justify-center pb-8 pt-20">
                <h1 className="text-6xl font-bold text-[#f273f2] pb-2">Loading.</h1>
                <p className="mt-2 text-gray-500">Invoice details Loading...</p>
            </div>
        </div>
    );

    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* MainInvoice Body*/}

            <div className="ml-64 flex-1 bg-gray-50 p-6 min-h-screen">
                <h1 className="text-black text-xl uppercase font-bold p-2">
                    Invoice details:
                </h1>
                <div className="bg-white rounded-xl shadow-md p-6 w-full">
                    <div className="flex items-center">
                        <h1 className="text-lg font-bold text-gray-800 mb-4 pl-2">
                            <span className="text-[#f273f2] font-bold">#{invoice.invoiceNumber}</span>
                        </h1>
                        <div className="size-14 grow ..."></div>
                        <button className="bg-[#f273f2] px-4 py-2 rounded-full hover:bg-[#fa8cfa] hover:text-black font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer" variant="primary">
                            <Link to={`#`} className="text-white">
                                Send Invoice
                            </Link>
                        </button>
                        <span className='pr-4' />
                        <button className="bg-[#53cf48] px-4 py-2 rounded-full hover:bg-[#7ae070] hover:text-black font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer" variant="primary">
                            <Link to={`#`} className="text-white">
                                Download Invoice
                            </Link>
                        </button>
                    </div>

                    <hr className='pb-2 pt-4'></hr>

                    <div className="grid grid-cols-3 gap-4 pr-0 pl-2">
                        <div>
                            <p className='pb-4'><strong>Description:</strong> {invoice.description}</p>
                            <p><strong>Date:</strong> {new Date(invoice.invoiceDate).toLocaleDateString()}</p>
                            <p><strong>Amount:</strong> R {invoice.total.toFixed(2)}</p>
                            <p><strong>Status:</strong>
                                <span className={`text-lg font-bold ${invoice.isPaid ? "text-green-600" : "text-red-500"}`}>
                                    &nbsp; {invoice.isPaid ? "Paid" : "Unpaid"}
                                </span>
                            </p>
                        </div>
                        <div>

                        </div>
                        <div>
                            <p className='pb-4'><strong>Customer Details</strong></p>
                            <p><strong>Name: </strong>{user?.fullname || "N/A"}</p>
                            <p><strong>Phone: </strong>{user?.phonenumber || "N/A"}</p>
                            <p><strong>Email: </strong>{user?.email || "N/A"}</p>
                        </div>
                    </div>

                    <hr className='pb-2 pt-4'></hr>
                    <h1 className="text-lg font-bold text-gray-800 mb-4 pl-2">
                        Invoice category description: {invoice.description}
                    </h1>

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
                </div>
            </div>
        </div>
    );
};

export default InvoiceDetails;