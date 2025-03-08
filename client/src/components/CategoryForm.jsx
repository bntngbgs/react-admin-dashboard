// import axios from '../api/axios';
// import useAuth from '../hooks/useAuth';
import useInterceptors from '../hooks/useInterceptors';

const CategoryForm = () => {
  // const { user } = useAuth();
  const axiosPrivate = useInterceptors();
  // const accessToken = user.accessToken;

  const testApi = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosPrivate.get('/api/auth');

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="px-4 md:px-8 mt-12 sm:mt-16">
      <h1 className="text-3xl text-center font-bold text-custom-blue-2">
        Add Category
      </h1>
      <form className="max-w-lg mx-auto mt-3 sm:mt-8">
        <label htmlFor="code" className="text-lg">
          <p className="mb-0.5">Code :</p>
          <input
            type="text"
            name="code"
            id="code"
            placeholder="category code..."
            className="ring-slate-400 ring-1 w-full py-1.5 pl-3 rounded"
          />
        </label>
        <label htmlFor="name" className="text-lg">
          <p className="mb-0.5 mt-3">Name :</p>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="category name..."
            className="ring-slate-400 ring-1 w-full py-1.5 pl-3 rounded"
          />
        </label>

        <button
          type="submit"
          className="mt-6 py-2 rounded bg-custom-blue-2 font-semibold tracking-wide text-white-smoke w-full cursor-pointer"
          onClick={testApi}
        >
          Add category
        </button>
      </form>
    </section>
  );
};
export default CategoryForm;
