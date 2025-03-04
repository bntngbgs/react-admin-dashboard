const OrderForm = () => {
  return (
    <section className="px-4 md:px-8 mt-12 sm:mt-16">
      <h1 className="text-3xl text-center font-bold text-custom-blue-2">
        Add Orders
      </h1>
      <form className="max-w-lg mx-auto mt-3 sm:mt-8">
        <label htmlFor="product-id" className="text-lg">
          <p className="mb-0.5">Product Id :</p>
          <input
            type="text"
            name="product-id"
            id="product-id"
            placeholder="product id..."
            className="ring-slate-400 ring-1 w-full py-1.5 pl-3 rounded"
          />
        </label>
        <label htmlFor="amount" className="text-lg">
          <p className="mb-0.5 mt-3">Order Amount :</p>
          <input
            type="text"
            name="amount"
            id="amount"
            placeholder="order amount..."
            className="ring-slate-400 ring-1 w-full py-1.5 pl-3 rounded"
          />
        </label>

        <button
          type="submit"
          className="mt-6 py-2 rounded bg-custom-blue-2 font-semibold tracking-wide text-white-smoke w-full cursor-pointer"
        >
          Add orders
        </button>
      </form>
    </section>
  );
};
export default OrderForm;
