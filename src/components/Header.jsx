import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FaXmark, FaBars } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import logoB from "../assets/images/logoB.png";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { link: "Home", path: "/", type: "router" },
    { link: "Hair", path: "/stylists", type: "router" },
    { link: "Nails", path: "/nail-techs", type: "router" },
    { link: "Barber", path: "/barbers", type: "router" },
    { link: "Make-up", path: "/makeup-artists", type: "router" },
    { link: "About", path: "/about", type: "router" },
    { link: "Follow Us", path: "/socials", type: "router" },
    ...(isLoggedIn ? [{ link: "Manage Account", path: "/stylistAccount", type: "router" }] : [])
  ];

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const loginButton = isLoggedIn ? (
    <button
      onClick={handleLogout}
      className="bg-[#f273f2] px-4 py-1 rounded-full hover:bg-white hover:text-black font-bold transform hover:scale-110 transition-transform duration-300 cursor-pointer"
    >
      Logout
    </button>
  ) : (
    <RouterLink
      to="/login"
      className="bg-[#f273f2] px-4 py-1 rounded-full hover:bg-white hover:text-black font-bold transform hover:scale-110 transition-transform duration-300 cursor-pointer"
    >
      Login/Sign-Up
    </RouterLink>
  );

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.15,
        staggerChildren: 0.08,
        delayChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 100, rotate: 5 },
    visible: { opacity: 1, x: 0, rotate: 0 },
    exit: { opacity: 0, x: 100, rotate: 10 }
  };

  return (
    <nav className="flex justify-between items-center gap-4 bg-black lg:px-10 px-4 py-1 sticky top-0 z-30 border-[6px] border-[#0a040a]">
      {/* Logo */}
      <div id="logo" className="flex items-center gap-3">
        <RouterLink to="/">
          <img src={logoB} alt="myBeautyShop Logo" className="h-12 md:h-14 w-auto object-contain" />
        </RouterLink>
        <h2 className="text-white font-bold text-base md:text-xl">
          myBeauty<span className="italic text-[#f273f2]">Shop</span>
        </h2>
      </div>

      {/* Desktop Nav */}
      <ul className="lg:flex justify-center items-center gap-6 hidden">
        {navItems.map(({ link, path, type }) =>
          type === "scroll" ? (
            <ScrollLink
              key={path}
              className="text-white uppercase font-semibold cursor-pointer p-1 rounded-lg hover:bg-[#f273f2] hover:text-black"
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
              className="text-white uppercase font-semibold cursor-pointer p-1 rounded-lg hover:bg-[#f273f2] hover:text-black"
            >
              {link}
            </RouterLink>
          )
        )}
      </ul>

      {/* Menu Icon */}
      <div className="flex justify-center items-center lg:hidden" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaXmark className="text-white text-2xl cursor-pointer" />
        ) : (
          <FaBars className="text-white text-2xl cursor-pointer" />
        )}
      </div>

      {/* Desktop Login */}
      <div className="hidden lg:flex gap-4">{loginButton}</div>

      {/* Brick Fall Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-16 right-0 h-1/2 w-1/2 bg-black/60 backdrop-blur-xl border-l-4 border-[#f273f2] shadow-2xl z-50 px-4 py-6 rounded-l-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="flex flex-col items-center justify-center gap-3 w-full text-white">
              {navItems.map(({ link, path, type }) => (
                <motion.li
                  key={path}
                  variants={itemVariants}
                  className="w-full text-center text-sm sm:text-base uppercase font-semibold tracking-wide px-3 py-2 rounded-lg hover:bg-[#f273f2] hover:text-black transition-all duration-200"
                >
                  {type === "scroll" ? (
                    <ScrollLink
                      to={path}
                      spy={true}
                      offset={-100}
                      smooth={true}
                      onClick={closeMenu}
                    >
                      {link}
                    </ScrollLink>
                  ) : (
                    <RouterLink to={path} onClick={closeMenu}>
                      {link}
                    </RouterLink>
                  )}
                </motion.li>
              ))}
              <motion.div variants={itemVariants} className="pt-2 w-full flex justify-center">
                {loginButton}
              </motion.div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
