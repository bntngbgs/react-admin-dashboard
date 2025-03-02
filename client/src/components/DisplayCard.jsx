const DisplayCard = ({ title, qty, children }) => {
  return (
    <div className="border-1 basis-[246px] py-3 px-5 sm:py-4 sm:px-6 mx-auto rounded border-custom-blue-2 flex-1 bg-blue-50 shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-lg sm:text-xl text-custom-blue-3">{title}</h3>
        {children}
      </div>
      <h2 className="text-2xl sm:text-3xl sm:mt-2 font-extrabold text-custom-blue-2">
        {qty}
      </h2>
    </div>
  );
};
export default DisplayCard;
