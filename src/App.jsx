import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';

// Import sections
import Hero from './Sections/Hero';
import WhyChoose from './Sections/WhyChoose';
import Pricing from './Sections/Pricing';
import Services from './Sections/Services';
import Gallery from './Sections/Gallery';
import Testimonial from './Sections/Testimonial';
import Contact from './Sections/Contact';

// Import pages
import YourAppointment from './Sections/home/YourAppointment';
import Login from './Sections/home/Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  // ✅ Hide sections if logged in OR navigating to /login or /appointment
  const shouldHideSections = isLoggedIn || location.pathname === "/login" || location.pathname === "/appointment";

  return (
    <>
      {/* ✅ Header is always visible */}
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      {/* ✅ Hide sections when logged in */}
      {!shouldHideSections && (
        <>
          <div id="home"><Hero /></div>
          <div id="about"><WhyChoose /></div>
          <div id="pricing"><Pricing /></div>
          <div id="services"><Services /></div>
          <div id="gallery"><Gallery /></div>
          <div id="testimonial"><Testimonial /></div>
          <div id="contact"><Contact /></div>
        </>
      )}

      {/* ✅ Routes */}
      <Routes>
        <Route path="/appointment" element={<YourAppointment />} />
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
      </Routes>

      {/* ✅ Footer is always visible */}
      <Footer />
    </>
  );
};

export default App;
