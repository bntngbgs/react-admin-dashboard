import { FaPen } from 'react-icons/fa';
import AddButton from '../components/AddButton';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import { IoTrashSharp } from 'react-icons/io5';
import Pagination from '../components/Pagination';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
// import axios from '../api/axios';
// import useAuth from '../hooks/useAuth';
import useInterceptors from '../hooks/useInterceptors';

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
    heading: 'Created At',
    width: 'min-w-24',
  },
  {
    heading: 'Last Update',
    width: 'min-w-24',
  },
  {
    heading: 'Action',
    width: 'min-w-16',
  },
];

// const tableData = ['CD037', 'Baju Kemeja Flanel XL', 'Rp. 129.000', 'Pakaian'];

const Categories = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const axiosPrivate = useInterceptors();
  // const { user } = useAuth();

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const categoryLength = await axiosPrivate.get('/api/category');
        const data = await axiosPrivate.get(
          `/api/category?skip=${(currentPage - 1) * 8}`
        );

        setCategoryData(data.data.data);
        setDataLength(categoryLength.data.count);

        console.log(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategoryData();
  }, [currentPage, categoryData.length]);

  const handleDelete = async (e) => {
    const id = e.target.parentElement.parentElement.id;

    // console.log(id);
    try {
      const response = await axiosPrivate.delete(`/api/category/delete/${id}`);
      // const response = await axios.delete(`/api/category/delete/${id}`, {
      //   headers: {
      //     Authorization: `Bearer ${user.accessToken}`,
      //   },
      //   withCredentials: true,
      // });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (query) => {
    const searchResult = categoryData.filter(
      // (item) => item.category_name.toLowerCase() == query.toLowerCase()
      (item) => item.category_name.toLowerCase().includes(query)
    );

    setSearchQuery(searchResult);
    if (query == '') {
      console.log(1);
      setDataLength(categoryData.length);
    } else {
      setDataLength(searchResult.length);
      console.log(dataLength);
    }
  };

  return (
    <section className="px-4 md:px-8 mt-8">
      <div className="flex items-center justify-between flex-wrap">
        <h1 className="text-2xl sm:text-4xl font-bold text-custom-blue-2">
          Category
        </h1>
        <Link to="/categories/add">
          <AddButton title={'Category'} />
        </Link>
      </div>
      <div className="mt-10 flex items-center gap-4">
        <SearchBar placeholder={'category'} handleSearch={handleSearch} />
      </div>
      <div className="overflow-auto rounded @container shadow-md mt-6">
        <Table
          columns={columns}
          data={searchQuery.length ? searchQuery : categoryData}
        >
          <td className="flex items-center justify-center py-4 whitespace-nowrap gap-2">
            <button className="bg-[#ffc300] text-sm px-2 py-1 rounded flex items-center gap-1.5 text-white-smoke">
              <FaPen size={12} className="pointer-events-none" />
              <span className="pointer-events-none">Edit</span>
            </button>
            <button
              className="bg-[#D22B2B] text-sm px-2 py-1 rounded flex items-center gap-1 text-white-smoke"
              onClick={handleDelete}
            >
              <IoTrashSharp className="pointer-events-none" />
              <span className="pointer-events-none">Delete</span>
            </button>
          </td>
        </Table>
      </div>
      <Pagination
        length={dataLength}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};
export default Categories;
