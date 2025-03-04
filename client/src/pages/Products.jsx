import { FaPen } from 'react-icons/fa';
import { IoTrashSharp } from 'react-icons/io5';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import Pagination from '../components/Pagination';
import Dropdown from '../components/Dropdown';
import AddButton from '../components/AddButton';
import { Link } from 'react-router';

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
    width: 'min-w-16',
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
        <Link to="/products/add">
          <AddButton title={'Product'} />
        </Link>
      </div>
      <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
        <SearchBar placeholder={'product'} />
        <Dropdown />
      </div>
      <div className="overflow-auto rounded @container shadow-md mt-6">
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
