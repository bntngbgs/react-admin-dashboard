import { BsBoxSeam } from 'react-icons/bs';
import { BiCategoryAlt } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { LiaClipboardListSolid } from 'react-icons/lia';

const Home = () => {
  return (
    <section className="mt-8 sm:mt-10 px-4 md:px-8 flex flex-wrap gap-3 sm:gap-4">
      <div className="border-2 basis-[246px] py-4 px-6 mx-auto rounded border-custom-blue-2 flex-1 bg-blue-50">
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl text-custom-blue-3">
            Total Products
          </h3>
          <BsBoxSeam size={18} className="text-custom-blue-3" />
        </div>
        <h2 className="text-2xl sm:text-3xl mt-2 font-extrabold text-custom-blue-2">
          23
        </h2>
      </div>
      <div className="border-2 basis-[246px] py-4 px-6 mx-auto rounded border-custom-blue-2 flex-1 bg-blue-50">
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl text-custom-blue-3">
            Total Orders
          </h3>
          <LiaClipboardListSolid size={22} className="text-custom-blue-3" />
        </div>
        <h2 className="text-2xl sm:text-3xl mt-2 font-extrabold text-custom-blue-2">
          276
        </h2>
      </div>
      <div className="border-2 basis-[246px] py-4 px-6 mx-auto rounded border-custom-blue-2 flex-1 bg-blue-50">
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl text-custom-blue-3">
            All Categories
          </h3>
          <BiCategoryAlt size={20} className="text-custom-blue-3" />
        </div>
        <h2 className="text-2xl sm:text-3xl mt-2 font-extrabold text-custom-blue-2">
          8
        </h2>
      </div>
      <div className="border-2 basis-[246px] py-4 px-6 mx-auto rounded border-custom-blue-2 flex-1 bg-blue-50">
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl text-custom-blue-3">No. of User</h3>
          <FiUsers size={18} className="text-custom-blue-3" />
        </div>
        <h2 className="text-2xl sm:text-3xl mt-2 font-extrabold text-custom-blue-2">
          17
        </h2>
      </div>
    </section>
  );
};
export default Home;
