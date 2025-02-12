import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const vendors = [
  { name: 'Jake Styles', rating: 4.9, jobsDone: 200, isOnline: true, image: '/assets/barber1.jpg' },
  { name: 'Nia Nails', rating: 4.8, jobsDone: 150, isOnline: true, image: '/assets/nails1.jpg' },
  { name: 'Tasha Curls', rating: 5.0, jobsDone: 180, isOnline: true, image: '/assets/hair1.jpg' },
  { name: 'Chris Fade', rating: 4.7, jobsDone: 120, isOnline: false, image: '/assets/barber2.jpg' },
];

const VendorHome = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 1000,
      easing: 'ease-in-out',
      delay: 100,
    });
    
    // Retrieve token from localStorage
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <section 
      className='w-full flex flex-col md:px-20 px-10 md:py-20 py-10 relative overflow-hidden'
      style={{ background: '#fbd0fb' }}
    >
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-4xl font-bold text-black'>Welcome to Vendor Home ✂️💅</h1>
        {token && (
          <button
            className='bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition'
            onClick={() => navigate('/account')}
          >
            Manage Account
          </button>
        )}
      </div>

      {token && (
        <div className='bg-white p-6 rounded-lg shadow-md mb-6'>
          <h2 className='text-xl font-bold text-black'>Token Data:</h2>
          <p className='text-gray-700 break-words'>{token}</p>
        </div>
      )}

      <div className='grid md:grid-cols-2 grid-cols-1 gap-12 w-full max-w-6xl mt-12'>
        {vendors.map((vendor, index) => (
          <div 
            key={index} 
            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            className={`bg-white shadow-2xl rounded-2xl p-8 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}
          >
            <img 
              src={vendor.image}  
              alt={vendor.name} 
              className='w-28 h-28 rounded-full mb-4 border-4 border-gray-300 object-cover shadow-lg'
            />

            <div className="w-full flex items-center justify-between">
              <h2 className='text-2xl font-bold text-black'>{vendor.name}</h2>
              <span className={`w-4 h-4 rounded-full ${vendor.isOnline ? 'bg-green-500' : 'bg-red-500'}`} />
            </div>

            <p className='text-lg text-gray-600 mt-2'>⭐ {vendor.rating}/5</p>
            <p className='text-md text-gray-500 mb-4'>Jobs Completed: <span className="font-semibold text-black">{vendor.jobsDone}</span></p>

            <div className="flex gap-4 mt-4 w-full">
              <button className='bg-[#f273f2] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#d95cd6] transition w-full shadow-md animate-bounce'>
                Book Now
              </button>
              <button className='bg-white text-[#f273f2] border-2 border-[#f273f2] px-6 py-3 rounded-full font-semibold hover:bg-[#f273f2] hover:text-white transition w-full shadow-md'>
                View Portfolio
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VendorHome;
