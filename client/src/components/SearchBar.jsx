const SearchBar = ({ placeholder }) => {
  return (
    <div className="flex flex-1">
      <input
        type="text"
        name="search-product"
        id="search-product"
        placeholder={`Search ${placeholder}...`}
        className="border-2 border-slate-300 border-r-0 flex-1 px-2 py-1.5 rounded-tl-sm rounded-bl-sm"
      />
      <button
        type="submit"
        className="border-2 border-custom-blue-2 bg-custom-blue-2 font-medium tracking-wide text-white-smoke px-3 rounded-tr-sm rounded-br-sm"
      >
        Search
      </button>
    </div>
  );
};
export default SearchBar;
