import { MdInsertChart } from 'react-icons/md';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { LuLayoutDashboard } from 'react-icons/lu';
import { BsBoxSeam } from 'react-icons/bs';
import { BiCategoryAlt } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { LiaClipboardListSolid } from 'react-icons/lia';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { RiListIndefinite } from 'react-icons/ri';
import { NavLink } from 'react-router';

const Sidebar = () => {
  return (
    <div className="p-4 bg-custom-blue-1 h-screen hidden lg:block">
      <div className="flex items-center gap-2">
        <MdInsertChart size={40} color={'#a1e3f9'} />
        <h1 className="text-2xl text-white-smoke font-bold mr-5">
          Admin Dashboard
        </h1>
        <FaArrowCircleLeft
          size={26}
          color={'#f6f5f4'}
          className="cursor-pointer md:hidden"
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
        <button className="btn-logout">
          <RiLogoutBoxRLine size={24} />
          <span className="text-xl">Logout</span>
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
