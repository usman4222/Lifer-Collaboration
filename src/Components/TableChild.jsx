import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { createPortal } from "react-dom";
import { IoCloseSharp } from "react-icons/io5";

const TableChild = ({ row, handleRowClick }) => {
  return createPortal(
    <TableModal row={row} handleRowClick={handleRowClick} />,
    document.getElementById("modal")
  );
};

const TableModal = ({ row, handleRowClick }) => {
  return (
    <>
      <div
        className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-40"
        style={{ zIndex: 1000 }}
      >
        <IoCloseSharp
          className="absolute top-[30%] right-[20%] cursor-pointer text-white"
          size={30}
          onClick={() => handleRowClick(null)}
        />
      </div>
      <div
        className="fixed top-96 left-10 bg-linkBg p-2 overflow-x-auto"
        style={{ zIndex: 1000 }}
      >
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">SKU</th>
              <th className="px-4 py-2">NAME</th>
              <th className="px-4 py-2">PRICE</th>
              <th className="px-4 py-2">QTY</th>
              <th className="px-4 py-2">TOTAL</th>
              <th className="px-4 py-2">PRINT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">#6548</td>
              <td className="border px-4 py-2">Product Name</td>
              {/* Add more td elements for other columns */}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableChild;
