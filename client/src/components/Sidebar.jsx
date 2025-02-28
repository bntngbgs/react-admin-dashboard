import { MdInsertChart } from 'react-icons/md';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { LuLayoutDashboard } from 'react-icons/lu';
import { BsBoxSeam } from 'react-icons/bs';
import { BiCategoryAlt } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { LiaClipboardListSolid } from 'react-icons/lia';
import { RiLogoutBoxRLine } from 'react-icons/ri';

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
        <div className="flex items-center gap-4 text-white-smoke cursor-pointer">
          <LuLayoutDashboard size={30} />
          <p className="text-xl">Dashboard</p>
        </div>
        <div className="flex items-center gap-4 text-white-smoke cursor-pointer mt-8">
          <BsBoxSeam size={30} />
          <p className="text-xl">Products</p>
        </div>
        <div className="flex items-center gap-4 text-white-smoke cursor-pointer mt-8">
          <BiCategoryAlt size={30} />
          <p className="text-xl">Categories</p>
        </div>
        <div className="flex items-center gap-4 text-white-smoke cursor-pointer mt-8">
          <LiaClipboardListSolid size={32} />
          <p className="text-xl">Orders</p>
        </div>
        <div className="flex items-center gap-4 text-white-smoke cursor-pointer mt-8">
          <FiUsers size={30} />
          <p className="text-xl">Users</p>
        </div>
      </div>
      <div className="mt-8 mx-auto flex justify-center">
        <button className="w-full flex gap-3 items-center justify-center rounded bg-red-700 text-white-smoke px-6 py-2.5">
          <RiLogoutBoxRLine size={24} />
          <span className="text-xl">Logout</span>
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
