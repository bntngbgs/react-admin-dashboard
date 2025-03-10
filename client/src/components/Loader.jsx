const Loader = ({ size, borderSize }) => {
  return (
    <div
      className="loader mx-auto"
      style={{ width: `${size}px`, borderWidth: `${borderSize}px` }}
    ></div>
  );
};
export default Loader;
