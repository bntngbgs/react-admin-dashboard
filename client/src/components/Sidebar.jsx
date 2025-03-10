import { MdInsertChart } from 'react-icons/md';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { LuLayoutDashboard } from 'react-icons/lu';
import { BsBoxSeam } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { LiaClipboardListSolid } from 'react-icons/lia';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { RiListIndefinite } from 'react-icons/ri';
import { NavLink } from 'react-router';
import { useContext, useEffect } from 'react';
import SidebarContext from '../context/SidebarContext';
import useWindowSize from '../hooks/useWindowSize';
import useAuth from '../hooks/useAuth';
import axios from '../api/axios';

const Sidebar = () => {
  const width = useWindowSize();
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { setUser } = useAuth();

  useEffect(() => {
    if (width < 1024) {
      setIsOpen(false);
    }
  }, [width]);

  const handleLogout = async () => {
    setUser({});

    try {
      await axios.get('api/auth/logout', { withCredentials: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`${
        isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
      } absolute transform -translate-x-full lg:translate-x-0 lg:static p-4 bg-custom-blue-1 min-h-full h-screen lg:block transition ease-in-out duration-300`}
    >
      <div className="flex items-center gap-2">
        <MdInsertChart size={40} color={'#a1e3f9'} />
        <h1 className="text-[22px] sm:text-2xl text-white-smoke font-bold mr-5">
          Admin Dashboard
        </h1>
        <FaArrowCircleLeft
          size={26}
          color={'#f6f5f4'}
          className="cursor-pointer lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <div className="mt-16 border-b-2 border-white-smoke pb-8">
        <NavLink to="/" className="nav-link">
          <LuLayoutDashboard size={30} />
          <p className="text-lg">Dashboard</p>
        </NavLink>
        <NavLink to="products" className="nav-link mt-3">
          <BsBoxSeam size={28} />
          <p className="text-lg">Products</p>
        </NavLink>
        <NavLink to="categories" className="nav-link mt-3">
          <RiListIndefinite size={32} />
          <p className="text-lg">Categories</p>
        </NavLink>
        <NavLink to="orders" className="nav-link mt-3">
          <LiaClipboardListSolid size={32} />
          <p className="text-lg">Orders</p>
        </NavLink>
        <NavLink to="users" className="nav-link mt-3">
          <FiUsers size={30} />
          <p className="text-lg">Users</p>
        </NavLink>
      </div>
      <div className="mt-8 mx-auto flex justify-center">
        <button className="btn-logout" onClick={handleLogout}>
          <RiLogoutBoxRLine size={24} />
          <span className="text-xl">Logout</span>
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
