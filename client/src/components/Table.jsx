const Table = ({ columns }) => {
  return (
    <table className="min-w-full font-ibm">
      <thead className="bg-custom-blue-4">
        <tr className="text-custom-blue-2 text-lg ">
          {columns.map((item, index) => (
            <th
              key={index}
              className={`${item.width} md:min-w-full py-3 tracking-wide`}
            >
              {item.heading}
            </th>
          ))}
          {/* <th className="min-w-20 md:min-w-full py-3 tracking-wide">Code</th>
          <th className="min-w-56 md:min-w-full py-3 tracking-wide">Name</th>
          <th className="min-w-32 md:min-w-full py-3 tracking-wide">Price</th>
          <th className="min-w-24 md:min-w-full py-3 tracking-wide">
            Category
          </th>
          <th className="min-w-32 md:min-w-full py-3 tracking-wide">Created</th>
          <th className="min-w-32 md:min-w-full py-3 tracking-wide">Updated</th> */}
        </tr>
      </thead>
      <tbody>
        <tr className="text-center">
          <td className="py-4 whitespace-nowrap">CD037</td>
          <td className="py-4 whitespace-nowrap">Baju Kemeja Flanel XL</td>
          <td className="py-4 whitespace-nowrap">Rp. 129.000</td>
          <td className="py-4 whitespace-nowrap">Pakaian</td>
          <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
          <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
        </tr>
        <tr className="text-center bg-gray-50">
          <td className="py-4 whitespace-nowrap">CD037</td>
          <td className="py-4 whitespace-nowrap">Baju Kemeja Flanel XL</td>
          <td className="py-4 whitespace-nowrap">Rp. 129.000</td>
          <td className="py-4 whitespace-nowrap">Pakaian</td>
          <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
          <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
        </tr>
        <tr className="text-center">
          <td className="py-4 whitespace-nowrap">CD037</td>
          <td className="py-4 whitespace-nowrap">Baju Kemeja Flanel XL</td>
          <td className="py-4 whitespace-nowrap">Rp. 129.000</td>
          <td className="py-4 whitespace-nowrap">Pakaian</td>
          <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
          <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
        </tr>
        <tr className="text-center bg-gray-50">
          <td className="py-4 whitespace-nowrap">CD037</td>
          <td className="py-4 whitespace-nowrap">Baju Kemeja Flanel XL</td>
          <td className="py-4 whitespace-nowrap">Rp. 129.000</td>
          <td className="py-4 whitespace-nowrap">Pakaian</td>
          <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
          <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
        </tr>
        <tr className="text-center">
          <td className="py-4 whitespace-nowrap">CD037</td>
          <td className="py-4 whitespace-nowrap">Baju Kemeja Flanel XL</td>
          <td className="py-4 whitespace-nowrap">Rp. 129.000</td>
          <td className="py-4 whitespace-nowrap">Pakaian</td>
          <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
          <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
        </tr>
        <tr className="text-center bg-gray-50">
          <td className="py-4 whitespace-nowrap">CD037</td>
          <td className="py-4 whitespace-nowrap">Baju Kemeja Flanel XL</td>
          <td className="py-4 whitespace-nowrap">Rp. 129.000</td>
          <td className="py-4 whitespace-nowrap">Pakaian</td>
          <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
          <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
        </tr>
        <tr className="text-center">
          <td className="py-4 whitespace-nowrap">CD037</td>
          <td className="py-4 whitespace-nowrap">Baju Kemeja Flanel XL</td>
          <td className="py-4 whitespace-nowrap">Rp. 129.000</td>
          <td className="py-4 whitespace-nowrap">Pakaian</td>
          <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
          <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
        </tr>
        <tr className="text-center bg-gray-50">
          <td className="py-4 whitespace-nowrap">CD037</td>
          <td className="py-4 whitespace-nowrap">Baju Kemeja Flanel XL</td>
          <td className="py-4 whitespace-nowrap">Rp. 129.000</td>
          <td className="py-4 whitespace-nowrap">Pakaian</td>
          <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
          <td className="py-4 whitespace-nowrap">01 Maret 2025</td>
        </tr>
      </tbody>
    </table>
  );
};
export default Table;
