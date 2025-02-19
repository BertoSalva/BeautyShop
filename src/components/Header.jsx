import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FaXmark, FaBars } from "react-icons/fa6";
import logoB from "../assets/images/logoB.png"; // Import the logo

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setTimeout(() => setIsMenuOpen(false), 150); // ✅ Smooth closing effect

  // Updated navigation items with external routing
  const navItems = [
    { link: "Home", path: "/", type: "router" },
    { link: "Hair", path: "/stylists", type: "router" },
    { link: "Nails", path: "/nail-techs", type: "router" },
    { link: "Barber", path: "/barbers", type: "router" },
    { link: "Make-up", path: "/makeup-artists", type: "router" },
    { link: "About", path: "/about", type: "router" },
    { link: "Follow Us", path: "/socials", type: "router" },

    ...(isLoggedIn ? [
      { link: "Manage Account", path: "/stylistAccount", type: "router" }
    ] : [
    ])
  ];

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const loginButton = isLoggedIn ? (
    <button
      onClick={handleLogout}
      className="bg-[#f273f2] px-6 py-2 rounded-full hover:bg-white hover:text-black font-bold transform hover:scale-110 transition-transform duration-300 cursor-pointer"
    >
      Logout
    </button>
  ) : (
    <RouterLink
      to="/login"
      className="bg-[#f273f2] px-6 py-2 rounded-full hover:bg-white hover:text-black font-bold transform hover:scale-110 transition-transform duration-300 cursor-pointer"
    >
      Login/Sign-Up
    </RouterLink>
  );

  return (
    <nav className="flex justify-between items-center gap-4 bg-black lg:px-10 px-4 py-2 sticky top-0 z-30 border-[6px] border-[#0a040a]">
      {/* Logo + Text */}
      <div id="logo" className="flex items-center gap-3">
        <RouterLink to="/">
          <img src={logoB} alt="myBeautyShop Logo" className="h-24 md:h-28 w-auto object-contain" />
        </RouterLink>
        <h2 className="text-white font-bold text-xl md:text-3xl">
          myBeauty<span className="italic text-[#f273f2]">Shop</span>
        </h2>
      </div>

      {/* Desktop Navigation */}
      <ul className="lg:flex justify-center items-center gap-6 hidden">
        {navItems.map(({ link, path, type }) =>
          type === "scroll" ? (
            <ScrollLink
              key={path}
              className="text-white uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-[#f273f2] hover:text-black"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
            >
              {link}
            </ScrollLink>
          ) : (
            <RouterLink
              key={path}
              to={path}
              className="text-white uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-[#f273f2] hover:text-black"
            >
              {link}
            </RouterLink>
          )
        )}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="flex justify-center items-center lg:hidden" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaXmark className="text-white text-2xl cursor-pointer" />
        ) : (
          <FaBars className="text-white text-2xl cursor-pointer" />
        )}
      </div>

      {/* Desktop Login/Logout Button */}
      <div className="hidden lg:flex gap-4">{loginButton}</div>

      {/* Mobile Menu */}
      <div
        className={`${isMenuOpen ? "flex" : "hidden"} w-full h-fit bg-slate-800 p-4 absolute top-[70px] left-0`}
        onClick={closeMenu}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map(({ link, path, type }) =>
            type === "scroll" ? (
              <ScrollLink
                key={path}
                className="text-white uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-[#aa9e5f] hover:text-black w-full text-center"
                to={path}
                spy={true}
                offset={-100}
                smooth={true}
                onClick={closeMenu}
              >
                {link}
              </ScrollLink>
            ) : (
              <RouterLink
                key={path}
                to={path}
                className="text-white uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-[#aa9e5f] hover:text-black w-full text-center"
                onClick={closeMenu}
              >
                {link}
              </RouterLink>
            )
          )}
          <div className="mt-2">{loginButton}</div>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
