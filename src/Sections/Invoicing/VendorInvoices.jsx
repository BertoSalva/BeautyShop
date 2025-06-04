// Dashboard.jsx (not generated yet)
import Sidebar from '../../components/Dashboard/Sidebar';
import Invoices from '../../components/Dashboard/Invoices';

const VendorInvoices = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* MainInvoice Body*/}
      <div className="ml-64 flex-1 bg-gray-50 p-6 min-h-screen">
        <h1 className="text-black uppercase font-semibold p-2">
          Invoices
        </h1>

        <Invoices />
      </div>
    </div>
  );
};

export default VendorInvoices;