import { IoIosCloseCircle } from 'react-icons/io';

const ErrorAuth = ({ errorText }) => {
  return (
    <div className="mt-5 px-4 py-5 rounded bg-red-200 flex items-center gap-2">
      <IoIosCloseCircle size={24} className="text-red-700" />
      <p className="text-red-700">{errorText}</p>
    </div>
  );
};
export default ErrorAuth;
