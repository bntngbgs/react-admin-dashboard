import { BsBoxSeam } from 'react-icons/bs';
import { BiCategoryAlt } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { LiaClipboardListSolid } from 'react-icons/lia';
import Pagination from '../components/Pagination';
import DisplayCard from '../components/DisplayCard';
import Table from '../components/Table';

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
    heading: 'Created',
    width: 'min-w-32',
  },
  {
    heading: 'Updated',
    width: 'min-w-32',
  },
];

const tableData = [
  'CD037',
  'Baju Kemeja Flanel XL',
  'Rp. 129.000',
  'Pakaian',
  '01 Maret 2025',
  '01 Maret 2025',
];

const Home = () => {
  return (
    <section className="px-4 md:px-8">
      <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
        <DisplayCard title={'Total products'} qty={23}>
          <BsBoxSeam size={18} className="text-custom-blue-3" />
        </DisplayCard>
        <DisplayCard title={'Total orders'} qty={276}>
          <LiaClipboardListSolid size={22} className="text-custom-blue-3" />
        </DisplayCard>
        <DisplayCard title={'All categories'} qty={8}>
          <BiCategoryAlt size={20} className="text-custom-blue-3" />
        </DisplayCard>
        <DisplayCard title={'No. of users'} qty={17}>
          <FiUsers size={18} className="text-custom-blue-3" />
        </DisplayCard>
      </div>
      <h1 className="mt-8 mb-4 text-3xl font-bold text-custom-blue-2">
        Recent Products
      </h1>
      <div className="overflow-auto rounded @container shadow-md">
        <Table columns={columns} data={tableData} />
      </div>
      <Pagination />
    </section>
  );
};
export default Home;
