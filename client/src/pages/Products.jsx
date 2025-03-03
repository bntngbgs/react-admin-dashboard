import { FaPen } from 'react-icons/fa';
import { IoTrashSharp } from 'react-icons/io5';
import { TiPlusOutline } from 'react-icons/ti';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import Pagination from '../components/Pagination';
import Dropdown from '../components/Dropdown';

const columns = [
  {
    heading: 'Code',
    width: 'min-w-20',
  },
  {
    heading: 'Name',
    width: 'min-w-56',
  },
  {
    heading: 'Price',
    width: 'min-w-32',
  },
  {
    heading: 'Category',
    width: 'min-w-24',
  },
  {
    heading: 'Action',
    width: 'w-2xs',
  },
];

const tableData = ['CD037', 'Baju Kemeja Flanel XL', 'Rp. 129.000', 'Pakaian'];

const Products = () => {
  return (
    <section className="px-4 md:px-8 mt-8">
      <div className="flex items-center justify-between flex-wrap">
        <h1 className="text-2xl sm:text-4xl font-bold text-custom-blue-2">
          All Products
        </h1>
        <button className="py-1.5 sm:py-2 px-2 sm:px-4 bg-blue-500 flex gap-1 sm:gap-2 items-center rounded">
          <TiPlusOutline className="text-white-smoke text-[22px] sm:text-[26px]" />
          <span className="text-base sm:text-lg text-white-smoke">
            Add Product
          </span>
        </button>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <SearchBar />
        <Dropdown />
      </div>
      <div className="overflow-auto rounded @container shadow-md mt-8">
        <Table columns={columns} data={tableData}>
          <td className="flex items-center justify-center py-4 whitespace-nowrap gap-2">
            <button className="bg-[#ffc300] text-sm px-2 py-1 rounded flex items-center gap-1.5 text-white-smoke">
              <FaPen size={12} />
              <span>Edit</span>
            </button>
            <button className="bg-[#D22B2B] text-sm px-2 py-1 rounded flex items-center gap-1 text-white-smoke">
              <IoTrashSharp />
              <span>Delete</span>
            </button>
          </td>
        </Table>
      </div>
      <Pagination />
    </section>
  );
};
export default Products;
