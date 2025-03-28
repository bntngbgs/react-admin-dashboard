const ProductsForm = () => {
  return (
    <section className="px-4 md:px-8 mt-12 sm:mt-16">
      <h1 className="text-3xl text-center font-bold text-custom-blue-2">
        Add Products
      </h1>
      <form className="max-w-lg mx-auto mt-3 sm:mt-8">
        <label htmlFor="code" className="text-lg">
          <p className="mb-0.5">Code :</p>
          <input
            type="text"
            name="code"
            id="code"
            placeholder="product code..."
            className="ring-slate-400 ring-1 w-full py-1.5 pl-3 rounded"
          />
        </label>
        <label htmlFor="name" className="text-lg">
          <p className="mb-0.5 mt-3">Name :</p>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="product name..."
            className="ring-slate-400 ring-1 w-full py-1.5 pl-3 rounded"
          />
        </label>
        <label htmlFor="category" className="text-lg">
          <p className="mb-0.5 mt-3">Category :</p>
          <input
            type="text"
            name="category"
            id="category"
            placeholder="product category..."
            className="ring-slate-400 ring-1 w-full py-1.5 pl-3 rounded"
          />
        </label>
        <label htmlFor="price" className="text-lg">
          <p className="mb-0.5 mt-3">Price :</p>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="product price..."
            className="ring-slate-400 ring-1 w-full py-1.5 pl-3 rounded"
          />
        </label>
        <button
          type="submit"
          className="mt-6 py-2 rounded bg-custom-blue-2 font-semibold tracking-wide text-white-smoke w-full cursor-pointer"
        >
          Add product
        </button>
      </form>
    </section>
  );
};
export default ProductsForm;
