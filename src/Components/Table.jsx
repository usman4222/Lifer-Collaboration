import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import TableFooter from "../Components/TableFooter";
import TableChild from "../Components/TableChild";
const Table = () => {
  const [showChildTable, setShowChildTable] = useState(false);

  return (
    <>
      <div className="block w-full overflow-x-auto bg-white rounded-lg">
        <table className="bg-transparent w-full overflow-auto">
          <thead>
            <tr>
              <th className="lg:px-4 px-2 align-middle border-b border-solid  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-gray-500">
                ID
              </th>
              <th className="lg:px-4 px-2 align-middle border-b border-solid  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-gray-500">
                DETAILS
              </th>
              <th className="lg:px-4 px-2 align-middle border-b border-solid  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-gray-500">
                DATE
              </th>
              <th className="lg:px-4 px-2 align-middle border-b border-solid  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-gray-500">
                PRICE
              </th>
              <th className="lg:px-4 px-2 align-middle border-b border-solid  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-gray-500">
                RIDER
              </th>
              <th className="lg:px-4 px-2 align-middle border-b border-solid  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-gray-500">
                STATUS
              </th>
              <th className="lg:px-4 px-2 align-middle border-b border-solid  py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-gray-500">
                <IoMdArrowDropdown
                  size={20}
                  className="border border-gray-800 rounded-full"
                />
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-solid">
              <th className="border-t-0 lg:px-4 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-3 text-left text-gray-700">
                argon
              </th>
              <td className="border-t-0 lg:px-4 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-3 text-left text-gray-700">
                4,569
              </td>
              <td className="border-t-0 lg:px-4 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-3 text-left text-gray-700">
                340
              </td>
              <td className="border-t-0 lg:px-4 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-3 text-left text-gray-700">
                46,53%
              </td>
              <td className="border-t-0 lg:px-4 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-3 text-left text-gray-700">
                46,53%
              </td>
              <td className="border-t-0 lg:px-4 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-3 text-left text-green-500">
                Completed
              </td>
              <td className="border-t-0 lg:px-4 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-3 text-left text-gray-700">
                <IoMdArrowDropdown
                  size={20}
                  className="border border-gray-800 rounded-full"
                  onClick={() => setShowChildTable(!showChildTable)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        {showChildTable && <TableChild />}
        <TableFooter />
      </div>
    </>
  );
};

export default Table;
