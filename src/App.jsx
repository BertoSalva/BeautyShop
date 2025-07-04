import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState } from "react"; // ✅ FIX: Missing import

// Import components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import sections
import Hero from "./Sections/Hero";

// Import pages
import YourAppointment from "./Sections/home/YourAppointment";
import Login from "./Sections/home/Login";
import VendorHome from "./Sections/vendorhome/VendorHome";
import VendorDashboard from "./Sections/vendorhome/vendorDashboard";
import ManageAccount from "./Sections/vendorhome/ManageAccount";
import HairStylist from "./Sections/home/HairStylist";
import BarberList from "./Sections/home/Barber/BarberList";
import NailTech from "./Sections/home/NailTech/NailTech";
import Socials from "./Sections/home/Socials/Socials";
import MakeupArtist from "./Sections/home/MakeupArtist/MakeupArtist";
import About from "./Sections/home/About/About";
import Reviews from "./Sections/home/About/Reviews";
import AppointmentDetails from "./components/Dashboard/AppointmentSummary";
import Package from "./Sections/vendorhome/package";
import Payment from "./Sections/vendorhome/payment";
import Wallet from "./Sections/vendorhome/wallet";
import Appointment from "./components/Dashboard/Appointments";

// -----For Dashboard -----//
import Dashboard from "./Sections/Dashboard";

import BookingPage from "./Sections/BookingPage"; // adjust path if needed
import VendorInvoices from "./Sections/Invoicing/VendorInvoices";
import InvoiceDetails from "./Sections/Invoicing/invoiceDetails";
import NotFoundError from "./Sections/NotFoundError";
import GenerateInvoice from "./Sections/Invoicing/generateInvoice";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  // ✅ Hide certain sections if logged in OR navigating to login/appointment
  const shouldHideSections = isLoggedIn || ["/login", "/appointment"].includes(location.pathname);

  return (
    <>
      {/* ✅ Header is always visible */}
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      {/* ✅ Routes */}
      <Routes>
        {/* Default Route: Redirect to Hero Page */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Public Pages */}
        <Route path="/home" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/socials" element={<Socials />} />

        {/* Beauty Services */}
        <Route path="/stylists" element={<HairStylist />} />
        <Route path="/barbers" element={<BarberList />} />
        <Route path="/nail-techs" element={<NailTech />} />
        <Route path="/makeup-artists" element={<MakeupArtist />} />

        {/* Vendor (Stylist/Barber) Routes */}
        <Route path="/stylist" element={<VendorHome />} />
        <Route path="/stylistAccount" element={<ManageAccount />} />
        <Route path="/vdashboard" element={<VendorDashboard/>}/>
        <Route path="/appoint" element={<Appointment/>}/>

        <Route path="/appointment" element={<YourAppointment />} />
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/packages" element={<Package />} />

        <Route path="/payment" element={<Payment />} />

        <Route path="/wallet" element={<Wallet />} />
        <Route path="/book/:stylistId" element={<BookingPage />} />

        <Route path="/appointment-details" element={<AppointmentDetails />} />
        <Route path="/vendor-invoices" element={<VendorInvoices/>}/>
        <Route path="/invoices-details/:invoiceId/:userId" element={<InvoiceDetails/>}/>

        <Route path="/generate-invoice" element={<GenerateInvoice/>}/>
        
        <Route path="*" element={<NotFoundError/>} />
      </Routes>

      {!isLoggedIn && <Footer />}
      </>
  );
};

export default App;
