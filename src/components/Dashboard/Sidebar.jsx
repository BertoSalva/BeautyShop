// src/components/Dashboard/Sidebar.jsx
import { NavLink } from 'react-router-dom';
import {
  HiOutlineViewGrid,
  HiOutlineCalendar,
  HiOutlineUser,
  HiOutlineDocumentReport,
  HiOutlineScissors,
  HiOutlineSpeakerphone,
  HiOutlineGlobeAlt,
  HiOutlineCreditCard
} from 'react-icons/hi';

const menuItems = [
  { label: 'Dashboard', icon: <HiOutlineViewGrid />, to: '/dashboard' },
  { label: 'Calendar', icon: <HiOutlineCalendar />, to: '/calendar' },
  { label: 'Customer', icon: <HiOutlineUser />, to: '/customer' },
  { label: 'Invoices', icon: <HiOutlineDocumentReport />, to: '/vendor-invoices' },
  { label: 'Services', icon: <HiOutlineScissors />, to: '/services' },
  { label: 'Promote', icon: <HiOutlineSpeakerphone />, to: '/promote' },
  { label: 'Pricing', icon: <HiOutlineGlobeAlt />, to: '/packages' },
  { label: 'Wallet', icon: <HiOutlineCreditCard />, to: '/wallet' },

];

const Sidebar = () => {
  return (
    <nav className="fixed top-0 left-0 h-full w-64 bg-white shadow-md flex flex-col px-4 py-6">
      <div className="text-2xl font-bold mb-10 text-center text-[#ff00ff]">
        myBeautyShop
      </div>

      <ul className="flex flex-col gap-4 pt-16">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                isActive
                  ? 'bg-[#ff00ff] text-white font-semibold'
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm">{item.label}</span>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
