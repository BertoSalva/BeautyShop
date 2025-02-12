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

const clients = [
  { name: 'Lisa Gomez', service: 'Braids', stylist: 'Tasha Curls', status: 'Pending' },
  { name: 'Daniel Smith', service: 'Beard Trim', stylist: 'Chris Fade', status: 'Approved' },
  { name: 'Sophia Turner', service: 'Acrylic Nails', stylist: 'Nia Nails', status: 'Pending' },
  { name: 'Jake Donovan', service: 'Fade Cut', stylist: 'Jake Styles', status: 'Approved' },
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
      {/* Header Section */}
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-4xl font-bold text-black'>Welcome to Your Account ✂️💅</h1>
        {token && (
         <button
         className="bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition"
         onClick={() => navigate('/stylistAccount')} 
       >
         Manage Account
       </button>
       
        )}
      </div>

      {/* Debugging Token Display */}
      {token && (
        <div className='bg-white p-6 rounded-lg shadow-md mb-6'>
          <h2 className='text-xl font-bold text-black'>Token Data:</h2>
          <p className='text-gray-700 break-words'>{token}</p>
        </div>
      )}

    

      {/* Clients & Appointments Section */}
      <h2 className='text-3xl font-bold text-black mt-16'>Upcoming Client Appointments</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 w-full max-w-4xl mt-6">
        {clients.map((client, index) => (
          <div 
            key={index}
            data-aos="fade-up"
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-black">{client.name}</h3>
            <p className="text-gray-600 mt-2">{client.service}</p>
            <p className="text-gray-500 mt-1">Stylist: <span className="font-bold text-black">{client.stylist}</span></p>
            <span className={`mt-3 px-4 py-2 text-sm font-bold rounded-full ${
              client.status === "Approved" ? "bg-green-500 text-white" : "bg-yellow-500 text-black"
            }`}>
              {client.status}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
};

export default VendorHome;
