import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Footer = () => {
  const linkClass =
    "relative inline-block after:content-[''] after:block after:h-[2px] after:bg-[#f273f2] after:w-0 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <>
      <section className='bg-black w-full px-6 md:px-16 py-10 text-white border-t-2 border-[#1a1a1a]'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Branding + Socials */}
          <div className='flex flex-col gap-4'>
            <div>
              <h1 className='text-2xl md:text-3xl font-bold'>
                Beautyshop <span className='italic text-[#f273f2]'>Salon</span>
              </h1>
              <p className='text-sm text-gray-400 mt-1'>Visit Help Center</p>
            </div>
            <div className='flex gap-3 mt-2'>
              {[FaFacebook, FaYoutube, FaInstagram, FaTwitter].map((Icon, index) => (
                <div
                  key={index}
                  className='bg-[#f273f2] p-2 rounded-full cursor-pointer hover:bg-white hover:text-black transition-transform transform hover:scale-105'
                >
                  <Icon className='size-4 fill-white' />
                </div>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className='font-semibold mb-2'>Company</h3>
            <ul className='space-y-1 text-gray-400 text-sm'>
              {["About us", "Our offerings", "Newsroom", "Investors", "Careers"].map((item, i) => (
                <li key={i}>
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className='font-semibold mb-2'>Services</h3>
            <ul className='space-y-1 text-gray-400 text-sm'>
              {["Hair", "Nails", "Barber", "Makeup"].map((item, i) => (
                <li key={i}>
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + App Store */}
          <div className='flex flex-col gap-4'>
            <div>
              <h3 className='font-semibold mb-2'>Contact</h3>
              <ul className='space-y-1 text-gray-400 text-sm'>
                {["Instagram", "Facebook", "WhatsApp"].map((item, i) => (
                  <li key={i}>
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex gap-4 mt-2'>
              <img src="/google-play-badge.png" alt="Google Play" className='h-10' />
              <img src="/app-store-badge.png" alt="App Store" className='h-10' />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='mt-10 border-t border-gray-700 pt-4 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-center'>&copy; 2025 Beautyshop Technologies Inc. All Rights Reserved.</p>
          <div className='flex gap-4 mt-2 md:mt-0'>
            {["Privacy", "Accessibility", "Terms"].map((item, i) => (
              <a
                key={i}
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-white ${linkClass}`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Optional: Back to Top Button */}
      {/* <div className='bg-[#f273f2] p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed bottom-4 right-4 lg:bottom-6 lg:right-6'>
        <Link to='hero' spy={true} offset={-100} smooth={true}>
          <FaArrowUp className='size-6' />
        </Link>
      </div> */}
    </>
  );
};

export default Footer;
