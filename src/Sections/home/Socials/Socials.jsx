import backgroundImage from "../../../assets/images/cpt1.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Socials = () => {
  return (
    <section
      className="w-full min-h-[80vh] bg-cover bg-center relative flex justify-center items-center px-4 sm:px-6 lg:px-10 py-10"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50 z-0"></div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-xl sm:max-w-2xl md:max-w-3xl text-center p-6 sm:p-8 md:p-10 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4"
        >
          <span className="text-white">my</span>
          <span className="text-pink-500">BeautyShop</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto mb-6"
        >
          Elevate your beauty routine with <strong>myBeautyShop</strong>. Book top-rated beauty services,
          connect with expert stylists, and experience salon-quality care, all from the comfort of your home.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-2"
        >
          {[
            { icon: <FaFacebook />, label: "Facebook", href: "https://www.facebook.com" },
            { icon: <FaInstagram />, label: "Instagram", href: "https://www.instagram.com" },
            { icon: <FaTwitter />, label: "Twitter", href: "https://www.twitter.com" },
            { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com" },
            { icon: <FaTiktok />, label: "TikTok", href: "https://www.tiktok.com" },
          ].map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-white hover:text-pink-400 transition transform hover:scale-110"
            >
              <div className="text-2xl sm:text-3xl mb-1">{icon}</div>
              <span className="text-xs sm:text-sm font-medium">{label}</span>
            </a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-6 sm:mt-8 text-yellow-300 text-xs sm:text-sm italic"
        >
          Join the journey. Be the first to know. Be the first to glow.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Socials;
