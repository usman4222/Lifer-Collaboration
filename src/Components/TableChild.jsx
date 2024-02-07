import React from "react";
import { BsThreeDots } from "react-icons/bs";

const TableChild = () => {
  return (
    <>
      <table className="lg:w-[60%] md:w-full lg:ml-28 py-5 bg-orange-50 lg:bg-transparent">
        <thead>
          <tr>
            <th className="lg:px-4 px-2 align-middle border-b border-solid  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-gray-500">
              SKU
            </th>
            <th className="lg:px-4 px-2 align-middle border-b border-solid  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-gray-500">
              NAME
            </th>
            <th className="lg:px-4 px-2 align-middle border-b border-solid  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-gray-500">
              PRICE
            </th>
            <th className="lg:px-4 px-2 align-middle border-b border-solid  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-gray-500">
              QTY
            </th>
            <th className="lg:px-4 px-2 align-middle border-b border-solid  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-gray-500">
              TOTAL
            </th>
            <th className="lg:px-4 px-2 align-middle border-b border-solid  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-gray-500">
              PRINT
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b border-solid mb-2">
            <th className="border-t-0 lg:px-4 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-3 text-left text-gray-700 font-normal">
              #6548
            </th>
            <td className="border-t-0 lg:px-4 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-3 text-left text-gray-700 font-bold">
              BBQ CHEESE BURGER
            </td>
            <td className="border-t-0 lg:px-4 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-3 text-left text-gray-700">
              $999.2
            </td>
            <td className="border-t-0 lg:px-4 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-3 text-left text-gray-700">
              x2
            </td>
            <td className="border-t-0 lg:px-4 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-3 text-left text-gray-700">
              $949.5
            </td>
            <td className="border-t-0 lg:px-4 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-3 text-left text-gray-800">
              <BsThreeDots size={20} />
            </td>
          </tr>
          <tr className="border-b border-solid mb-2">
            <th className="border-t-0 lg:px-4 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-3 text-left text-gray-700 font-normal">
              #6548
            </th>
            <td className="border-t-0 lg:px-4 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-3 text-left text-gray-700 font-bold">
              BBQ CHEESE BURGER
            </td>
            <td className="border-t-0 lg:px-4 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-3 text-left text-gray-700">
              $999.2
            </td>
            <td className="border-t-0 lg:px-4 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-3 text-left text-gray-700">
              x2
            </td>
            <td className="border-t-0 lg:px-4 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-3 text-left text-gray-700">
              $949.5
            </td>
            <td className="border-t-0 lg:px-4 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-3 text-left text-gray-800">
              <BsThreeDots size={20} />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex flex-col text-sm pl-10 gap-y-4 text-gray-500 w-full py-2">
        <div className="flex flex-row justify-center items-center gap-x-16">
          <span>Subtotal</span>
          <span className="text-gray-900">$100</span>
        </div>
        <div className="flex flex-row justify-center items-center  gap-x-16">
          <span>Subtotal</span>
          <span className="text-gray-900">$100</span>
        </div>
        <div className="flex flex-row justify-center items-center  gap-x-16">
          <span>Subtotal</span>
          <span className="text-gray-900">$100</span>
        </div>
      </div>
    </>
  );
};

export default TableChild;
