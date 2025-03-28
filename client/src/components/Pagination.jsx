// import { LuChevronLeft } from 'react-icons/lu';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

const Pagination = ({ length, currentPage, setCurrentPage }) => {
  let pageCount = Math.ceil(length / 8) || 1;

  const handleClickArrow = (action) => {
    if (action === 'next') {
      if (currentPage >= pageCount) return;
      console.log(1);

      setCurrentPage(currentPage + 1);
    }

    if (action === 'prev') {
      if (currentPage == 1) return;

      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full mt-6 flex items-center gap-4 justify-center md:justify-end">
      <FaChevronLeft
        size={18}
        className="text-custom-blue-1 cursor-pointer hover:text-blue-200 transition ease-in-out duration-300"
        onClick={() => handleClickArrow('prev')}
      />
      {Array.from(Array(pageCount).keys()).map((_, index) => (
        <span
          className={`${
            currentPage === index + 1 ? 'active-paginate' : ''
          } bg-blue-50 px-3 py-1 rounded-full font-medium cursor-pointer select-none hover:bg-blue-300 transition ease-in-out duration-300`}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </span>
      ))}
      {/* <span className="bg-blue-50 px-3 py-1 rounded-full font-medium cursor-pointer select-none hover:bg-blue-300 transition ease-in-out duration-300">
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
      </span> */}
      <FaChevronRight
        size={18}
        className="text-custom-blue-1 cursor-pointer hover:text-blue-200 transition ease-in-out duration-300"
        onClick={() => handleClickArrow('next')}
      />
    </div>
  );
};
export default Pagination;
