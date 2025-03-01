import { BsBoxSeam } from 'react-icons/bs';
import { BiCategoryAlt } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { LiaClipboardListSolid } from 'react-icons/lia';
import Pagination from '../components/Pagination';

const Home = () => {
  return (
    <section className="px-4 md:px-8">
      <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
        <div className="border-2 basis-[246px] py-3 px-5 sm:py-4 sm:px-6 mx-auto rounded border-custom-blue-2 flex-1 bg-blue-50">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl text-custom-blue-3">
              Total Products
            </h3>
            <BsBoxSeam size={18} className="text-custom-blue-3" />
          </div>
          <h2 className="text-2xl sm:text-3xl sm:mt-2 font-extrabold text-custom-blue-2">
            23
          </h2>
        </div>
        <div className="border-2 basis-[246px]  py-3 px-5 sm:py-4 sm:px-6 mx-auto rounded border-custom-blue-2 flex-1 bg-blue-50">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl text-custom-blue-3">
              Total Orders
            </h3>
            <LiaClipboardListSolid size={22} className="text-custom-blue-3" />
          </div>
          <h2 className="text-2xl sm:text-3xl sm:mt-2 font-extrabold text-custom-blue-2">
            276
          </h2>
        </div>
        <div className="border-2 basis-[246px]  py-3 px-5 sm:py-4 sm:px-6 mx-auto rounded border-custom-blue-2 flex-1 bg-blue-50">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl text-custom-blue-3">
              All Categories
            </h3>
            <BiCategoryAlt size={20} className="text-custom-blue-3" />
          </div>
          <h2 className="text-2xl sm:text-3xl sm:mt-2 font-extrabold text-custom-blue-2">
            8
          </h2>
        </div>
        <div className="border-2 basis-[246px] py-3 px-5 sm:py-4 sm:px-6 mx-auto rounded border-custom-blue-2 flex-1 bg-blue-50">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl text-custom-blue-3">
              No. of User
            </h3>
            <FiUsers size={18} className="text-custom-blue-3" />
          </div>
          <h2 className="text-2xl sm:text-3xl sm:mt-2 font-extrabold text-custom-blue-2">
            17
          </h2>
        </div>
      </div>
      <h1 className="mt-8 mb-4 text-3xl font-bold text-custom-blue-2">
        Recent Products
      </h1>
      <div className="overflow-auto rounded @container">
        <table className="min-w-full font-ibm">
          <thead className="bg-custom-blue-4">
            <tr className="text-custom-blue-2 text-lg ">
              <th className="min-w-20 sm:min-w-full py-3 tracking-wide">
                Code
              </th>
              <th className="min-w-56 md:min-w-full py-3 tracking-wide">
                Name
              </th>
              <th className="min-w-32 md:min-w-full py-3 tracking-wide">
                Price
              </th>
              <th className="min-w-24 md:min-w-full py-3 tracking-wide">
                Category
              </th>
              <th className="min-w-32 md:min-w-full py-3 tracking-wide">
                Created
              </th>
              <th className="min-w-32 md:min-w-full py-3 tracking-wide">
                Updated
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="py-4 whitespace-nowrap">CD037</td>
              <td className="py-4 whitespace-nowrap">Baju Kemeja Flanel XL</td>
              <td className="py-4 whitespace-nowrap">Rp. 129.000</td>
              <td className="py-4 whitespace-nowrap">Pakaian</td>
              <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
              <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
            </tr>
            <tr className="text-center bg-gray-50">
              <td className="py-4 whitespace-nowrap">CD037</td>
              <td className="py-4 whitespace-nowrap">Baju Kemeja Flanel XL</td>
              <td className="py-4 whitespace-nowrap">Rp. 129.000</td>
              <td className="py-4 whitespace-nowrap">Pakaian</td>
              <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
              <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
            </tr>
            <tr className="text-center">
              <td className="py-4 whitespace-nowrap">CD037</td>
              <td className="py-4 whitespace-nowrap">Baju Kemeja Flanel XL</td>
              <td className="py-4 whitespace-nowrap">Rp. 129.000</td>
              <td className="py-4 whitespace-nowrap">Pakaian</td>
              <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
              <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
            </tr>
            <tr className="text-center bg-gray-50">
              <td className="py-4 whitespace-nowrap">CD037</td>
              <td className="py-4 whitespace-nowrap">Baju Kemeja Flanel XL</td>
              <td className="py-4 whitespace-nowrap">Rp. 129.000</td>
              <td className="py-4 whitespace-nowrap">Pakaian</td>
              <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
              <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
            </tr>
            <tr className="text-center">
              <td className="py-4 whitespace-nowrap">CD037</td>
              <td className="py-4 whitespace-nowrap">Baju Kemeja Flanel XL</td>
              <td className="py-4 whitespace-nowrap">Rp. 129.000</td>
              <td className="py-4 whitespace-nowrap">Pakaian</td>
              <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
              <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
            </tr>
            <tr className="text-center bg-gray-50">
              <td className="py-4 whitespace-nowrap">CD037</td>
              <td className="py-4 whitespace-nowrap">Baju Kemeja Flanel XL</td>
              <td className="py-4 whitespace-nowrap">Rp. 129.000</td>
              <td className="py-4 whitespace-nowrap">Pakaian</td>
              <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
              <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination />
    </section>
  );
};
export default Home;
