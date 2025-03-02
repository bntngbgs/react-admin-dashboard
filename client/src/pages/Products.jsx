import { TiPlusOutline } from 'react-icons/ti';

const Products = () => {
  return (
    <section className="px-4 md:px-8 mt-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-custom-blue-2">All Products</h1>
        <button className="py-2 px-4 bg-blue-500 flex gap-2 items-center rounded">
          <TiPlusOutline size={26} className="text-white-smoke" />
          <span className="text-lg text-white-smoke">Add Product</span>
        </button>
      </div>
    </section>
  );
};
export default Products;
