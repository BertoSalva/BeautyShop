import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-16 text-white"
      style={{ backgroundImage: 'url("/src/assets/images/about-bg.jpg")' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Hero animation */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
        >
          My Beauty Shop
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10"
        >
          Born and bred in Mzansi, we're not just a platform, we're a movement
          celebrating African beauty in all its glory. From Jozi's streets to
          Cape Town's coastlines, we bring top-tier hair, makeup, and nail
          services right to you.
        </motion.p>

        {/* Section Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Original Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 p-6 rounded-xl backdrop-blur-md"
          >
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">What We Offer</h3>
            <ul className="space-y-2 text-sm text-gray-100">
              <li>✓ Your All-in-One Beauty Hub</li>
              <li>✓ Your Style, Your Rules</li>
              <li>✓ Seamless & Secure</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white/10 p-6 rounded-xl backdrop-blur-md"
          >
            <h3 className="text-xl font-semibold mb-3 text-pink-400">Why Choose Us?</h3>
            <ul className="space-y-2 text-sm text-gray-100">
              <li>✓ Ubuntu in Action — You’re family here</li>
              <li>✓ 24/7 Real-Time Booking & Support</li>
              <li>✓ We uplift local beauty entrepreneurs</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white/10 p-6 rounded-xl backdrop-blur-md"
          >
            <h3 className="text-xl font-semibold mb-3 text-green-300">Need Help?</h3>
            <p className="text-sm text-gray-100">
              Reach us anytime at{' '}
              <a
                href="mailto:support@mybeautyshop.co.za"
                className="text-yellow-300 underline"
              >
                support@mybeautyshop.co.za
              </a>
              . We’re here for tips, support, or just a quick chat.
            </p>
          </motion.div>

          {/* New Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-white/10 p-6 rounded-xl backdrop-blur-md"
          >
            <h3 className="text-xl font-semibold mb-3 text-yellow-300">Newsroom</h3>
            <ul className="space-y-2 text-sm text-gray-100">
              <li>✓ Latest trends & product updates</li>
              <li>✓ Community stories & artist spotlights</li>
              <li>✓ Industry insights across SA beauty</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-white/10 p-6 rounded-xl backdrop-blur-md"
          >
            <h3 className="text-xl font-semibold mb-3 text-green-400">Investors</h3>
            <ul className="space-y-2 text-sm text-gray-100">
              <li>✓ Transparent growth strategy</li>
              <li>✓ Backing women-led tech & beauty</li>
              <li>✓ Let’s grow South Africa’s next big platform</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="bg-white/10 p-6 rounded-xl backdrop-blur-md"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Careers</h3>
            <ul className="space-y-2 text-sm text-gray-100">
              <li>✓ Join our creative, remote-first team</li>
              <li>✓ Shape the future of beauty tech</li>
              <li>✓ We're hiring designers, devs & storytellers</li>
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-10"
        >
          <a
            href="reviews"
            className="text-yellow-400 font-medium hover:underline text-lg"
          >
            Read What Our Clients Say →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
