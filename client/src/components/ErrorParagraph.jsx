import { PiWarningCircleLight } from 'react-icons/pi';

const ErrorParagraph = ({ errorText }) => {
  return (
    <div className="mt-0.5 flex items-center gap-1">
      <PiWarningCircleLight className="text-red-500" />
      <span className="text-base text-red-500">{errorText}</span>
    </div>
  );
};
export default ErrorParagraph;
