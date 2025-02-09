import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const barbers = [
  { name: 'Michael Johnson', rating: 4.9, jobsDone: 150, isOnline: true, image: '/assets/barber1.jpg' },
  { name: 'David Smith', rating: 4.7, jobsDone: 120, isOnline: true, image: '/assets/barber2.jpg' },
  { name: 'James Anderson', rating: 5.0, jobsDone: 200, isOnline: true, image: '/assets/barber3.jpg' },
  { name: 'Daniel Thompson', rating: 4.6, jobsDone: 95, isOnline: false, image: '/assets/barber4.jpg' },
];

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <section 
      id='pricing' 
      className='w-full md:px-20 px-10 md:py-20 py-10 flex flex-col items-center gap-10 bg-white'
    >
      
      {/* Section Title */}
      <h1 data-aos="zoom-in" className='text-5xl font-bold text-center text-black'>
        Why Choose <span className="text-[#f273f2]">Our Barbers?</span>
      </h1>

      {/* Subheading & Description */}
      <p data-aos="fade-up" className='text-lg text-gray-700 text-center max-w-3xl'>
        Experience precision grooming with our expert barbers. Whether you're looking for a **fresh fade, beard trim, or a classic haircut**, 
        our professionals ensure **top-quality service** tailored to your style.
      </p>

      {/* Barber Profiles */}
      <div className='grid md:grid-cols-3 grid-cols-1 gap-10 w-full max-w-6xl'>
        {barbers.map((barber, index) => (
          <div 
            key={index} 
            className='bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105'
          >
            {/* Profile Image */}
            <img 
              src={barber.image} 
              alt={barber.name} 
              className='w-24 h-24 rounded-full mb-3 border-4 border-gray-200 object-cover'
            />

            {/* Online Status & Name */}
            <div className="w-full flex items-center justify-between">
              <h2 className='text-2xl font-bold text-black'>{barber.name}</h2>
              <span className={`w-4 h-4 rounded-full ${barber.isOnline ? 'bg-green-500' : 'bg-red-500'}`} />
            </div>

            {/* Rating */}
            <p className='text-lg text-gray-600 mt-2'>⭐ {barber.rating}/5</p>

            {/* Jobs Done */}
            <p className='text-md text-gray-500 mb-4'>Jobs Completed: <span className="font-semibold text-black">{barber.jobsDone}</span></p>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-4 w-full">
              <button className='bg-[#f273f2] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#d95cd6] transition w-full shadow-md'>
                Book Now
              </button>
              <button className='bg-white text-[#f273f2] border-2 border-[#f273f2] px-6 py-3 rounded-full font-semibold hover:bg-[#f273f2] hover:text-white transition w-full shadow-md'>
                View Portfolio
              </button>
            </div>

            {/* Service Selection Dropdown */}
            <select className='mt-6 px-4 py-3 border rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f273f2] shadow-sm w-full'>
              <option>Select a Service</option>
              <option>Classic Haircut</option>
              <option>Beard Trim</option>
              <option>Hot Towel Shave</option>
              <option>Full Grooming Package</option>
            </select>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className='mt-10 text-center'>
        <h2 className='text-3xl font-semibold text-black'>Book Your Appointment Today</h2>
        <p className='text-lg text-gray-700 max-w-2xl mx-auto'>
          Get a **sharp, clean cut** from our expert barbers. Easy online booking, skilled professionals, and a perfect look **every time**.
        </p>
        <button className='bg-[#f273f2] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#d95cd6] transition mt-4 shadow-md'>
          Find a Barber
        </button>
      </div>

    </section>
  );
};

export default Pricing;
