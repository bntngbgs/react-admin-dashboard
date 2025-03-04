import { TiPlusOutline } from 'react-icons/ti';

const AddButton = ({ title }) => {
  return (
    <button className="py-1.5 sm:py-2 px-2 sm:px-4 bg-blue-500 flex gap-1 sm:gap-2 items-center rounded cursor-pointer">
      <TiPlusOutline className="text-white-smoke text-[22px] sm:text-[26px]" />
      <span className="text-base sm:text-lg text-white-smoke">Add {title}</span>
    </button>
  );
};
export default AddButton;
