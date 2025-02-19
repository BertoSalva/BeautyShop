import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

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
import ManageAccount from "./Sections/vendorhome/ManageAccount";
import HairStylist from "./Sections/home/HairStylist"; // ✅ Import the component
import BarberList from "./Sections/home/Barber/BarberList";
import NailTech from "./Sections/home/NailTech/NailTech";
import Socials from "./Sections/home/Socials/Socials";
import MakeupArtist from "./Sections/home/MakeupArtist/MakeupArtist";
import About from "./Sections/home/About/About";
import Reviews from "./Sections/home/About/Reviews";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  // ✅ Hide sections if logged in OR navigating to /login or /appointment
  const shouldHideSections =
    isLoggedIn || location.pathname === "/login" || location.pathname === "/appointment";

  return (
    <>
      {/* ✅ Header is always visible */}
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      {/* ✅ Hide sections when logged in */}
      {!shouldHideSections && (
        <>
          <div id="home">
            <Hero />
          </div>
          <div id="about">
            <WhyChoose />
          </div>
          
          <div id="services">
            <Services />
          </div>
          <div id="gallery">
            <Gallery />
          </div>
          <div id="testimonial">
            <Testimonial />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </>
      )}

      {/* ✅ Routes */}
      <Routes>
        <Route path="/appointment" element={<YourAppointment />} />
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/stylist" element={<VendorHome />} />
        <Route path="/stylistAccount" element={<ManageAccount />} />
        <Route path="/stylists" element={<HairStylist />} /> {/* ✅ Corrected Route */}
        <Route path="/barbers" element={<BarberList />} />
        <Route path="/nail-techs" element={<NailTech />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/makeup-artists" element={<MakeupArtist />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />


      </Routes>

      {/* ✅ Footer is always visible */}
      <Footer />
    </>
  );
};

export default App;
