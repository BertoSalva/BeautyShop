import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// Import components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import sections
import Hero from "./Sections/Hero";
import WhyChoose from "./Sections/WhyChoose";
import Services from "./Sections/Services";
import Gallery from "./Sections/Gallery";
import Testimonial from "./Sections/Testimonial";
import Contact from "./Sections/Contact";

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

        <Route path="/appointment" element={<YourAppointment />} />
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
      </Routes>

     

      {!isLoggedIn && <Footer />}
      </>
  );
};

export default App;
