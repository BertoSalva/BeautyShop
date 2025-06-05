// Dashboard.jsx (not generated yet)
import Sidebar from '../components/Dashboard/Sidebar';
import SalesSummary from '../components/Dashboard/SalesSummary'
import VisitsSummary from '../components/Dashboard/VisitsSummary';
import Invoices from '../components/Dashboard/Invoices';
import Appointments from '../components/Dashboard/Appointments';

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard Body */}
      <div className="ml-64 flex-1 bg-gray-50 p-6 min-h-screen">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column (Charts + Invoices) */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Charts Row */}
            <div className="flex flex-wrap gap-12">
              <SalesSummary />
              <VisitsSummary />
            </div>
            {/* Invoices Below */}
            <Invoices />
          </div>

          {/* Right Column (Appointments) */}
          <div className="w-full lg:w-[500px]">
            <Appointments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;