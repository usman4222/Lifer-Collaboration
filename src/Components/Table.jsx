import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import TableFooter from "../Components/TableFooter";
import { BsThreeDots } from "react-icons/bs";
import { IoMdPrint } from "react-icons/io";
const Table = ({ tableRows, tableData }) => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (id) => {
    setSelectedRow(id === selectedRow ? null : id);
  };

  return (
    <>
      <div className="overflow-x-auto bg-white rounded-md mx-5 lg:mx-0">
        <table className="table-auto min-w-full">
          <thead>
            <tr className="text-center border-b">
              {/* <th className="px-4 py-2">ID</th> */}
              {tableRows.map((item, index) => (
                <th key={index} className="px-4 py-2">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <React.Fragment key={item.id}>
                <tr className="text-center border-b">
                  <td className="px-4 py-2">{item.id}</td>
                  <td className="px-4 py-2 truncate">{item.details}</td>
                  <td className="px-4 py-2">{item.created}</td>
                  <td className="px-4 py-2">${item.price}</td>
                  <td className="px-4 py-2">{item.assignedRider}</td>
                  <td className="px-4 py-2">{item.status}</td>
                  <td className="px-4 py-2">
                    <IoMdArrowDropdown
                      size={20}
                      className="cursor-pointer border rounded-full"
                      onClick={() => handleRowClick(item.id)}
                    />
                  </td>
                </tr>
                {selectedRow === item.id && (
                  <tr className="text-center">
                    <td colSpan="20" className="p-10">
                      <table className="table-auto w-full h-full">
                        <thead>
                          <tr className="text-center border-b">
                            <th className="px-4 py-2">#</th>
                            <th className="px-4 py-2">SKU</th>
                            <th className="px-4 py-2">NAME</th>
                            <th className="px-4 py-2">PRICE</th>
                            <th className="px-4 py-2">QTY</th>
                            <th className="px-4 py-2">TOTAL</th>
                            <th className="px-4 py-2 flex flex-row gap-x-2 justify-center items-center">
                              <IoMdPrint className="cursor-pointer" />
                              <span>PRINT</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="text-center border-b">
                            <td className="px-4 py-2"></td>
                            <td className="px-4 py-2">{item.id}</td>
                            <td className="px-4 py-2">{item.name}</td>
                            <td className="px-4 py-2">{item.price}</td>
                            <td className="px-4 py-2">{item.quantity}</td>
                            <td className="px-4 py-2">{item.total}</td>
                            <td className="px-4 py-2 flex flex-row justify-center items-center">
                              <BsThreeDots
                                size={22}
                                className="cursor-pointer "
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <TableFooter />
    </>
  );
};

export default Table;
