import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaXmark, FaBars } from 'react-icons/fa6'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'About', path: 'about' },
    { link: 'Pricing', path: 'pricing' },
    { link: 'Services', path: 'services' },
    { link: 'Testimonial', path: 'testimonial' },
    { link: 'Contact', path: 'contact' },
  ]

  return (
    <nav className='flex justify-between items-center gap-4 bg-black lg:px-10 px-4 py-6 sticky top-0 z-30 border-[8px] border-[#a39446]'>
      <div id='logo'>
        <h1 className='text-white font-bold text-5xl'>Beauty<span className='italic text-[#aa9e5f]'>Shop</span></h1>
      </div>

      <ul className='lg:flex justify-center items-center gap-6 hidden'>
        {navItems.map(({ link, path }) => (
          <Link key={path} className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-[#aa9e5f] hover:text-black' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
        ))}
      </ul>

      {/* mobile menu icon  */}
      <div className='flex justify-center itemws-center lg:hidden' onClick={toggleMenu}>

        <div>
          {isMenuOpen ? <FaXmark className='text-white text-2xl cursor-pointer' /> : <FaBars className='text-white text-2xl cursor-pointer' />}
        </div>

      </div>

      <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`} onClick={closeMenu}>
        <ul className='flex flex-col justify-center items-center gap-2 w-full'>
          {navItems.map(({ link, path }) => (
            <Link key={path} className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-[#aa9e5f] hover:text-black w-full text-center' to={path} spy={true} offset={-100} smooth={true} onClick={closeMenu}>{link}</Link>
          ))}
        </ul>
      </div>

      <button className='bg-[#aa9e5f] px-8 py-3 rounded-full hover:bg-white hover:text-black font-bold mt-3 hidden lg:flex transform hover:scale-110 transition-transform duration-300 cursor-pointer'>Login/Sign-Up</button>
    </nav>
  )
}

export default Header