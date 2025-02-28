import { LuCircleUser } from 'react-icons/lu';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';

const Header = () => {
  return (
    <header className="shadow-lg flex w-full items-center p-2 py-4 sm:px-4">
      <IoMenu size={30} className="text-arsenic lg:hidden" />
      <h1 className="font-logo text-xl sm:text-2xl md:text-3xl text-custom-blue-1 mx-auto mt-0.5">
        YOUR MARKETPLACE
      </h1>
      <div className="flex items-center md:gap-1">
        <LuCircleUser className="text-gray-400 text-[28px] sm:text-[30px] md:text-[32px]" />
        <IoMdArrowDropdown size={26} className="text-arsenic" />
      </div>
    </header>
  );
};
export default Header;
