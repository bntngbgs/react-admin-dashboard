// import { LuChevronLeft } from 'react-icons/lu';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

const Pagination = () => {
  return (
    <div className="w-full mt-6 flex items-center gap-4 justify-center md:justify-end">
      <FaChevronLeft
        size={18}
        className="text-custom-blue-1 cursor-pointer hover:text-blue-200 transition ease-in-out duration-300"
      />
      <span className="bg-blue-50 px-3 py-1 rounded-full font-medium cursor-pointer select-none hover:bg-blue-300 transition ease-in-out duration-300">
        1
      </span>
      <span className="bg-blue-50 px-3 py-1 rounded-full font-medium cursor-pointer select-none hover:bg-blue-300 transition ease-in-out duration-300">
        2
      </span>
      <span className="bg-blue-50 px-3 py-1 rounded-full font-medium cursor-pointer select-none hover:bg-blue-300 transition ease-in-out duration-300">
        3
      </span>
      <span className="bg-blue-50 px-3 py-1 rounded-full font-medium cursor-pointer select-none hover:bg-blue-300 transition ease-in-out duration-300">
        4
      </span>
      <FaChevronRight
        size={18}
        className="text-custom-blue-1 cursor-pointer hover:text-blue-200 transition ease-in-out duration-300"
      />
    </div>
  );
};
export default Pagination;
