import React, { Fragment } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Wrapper from "../Components/Wrapper";
import HeaderSection from "../Components/HeaderSection";

const Rider = () => {
  return (
    <Wrapper>
      <div className="flex flex-col">
        <HeaderSection heading={"Rider"} para={"Manage your Riders"} />
        <div className="bg-yellow-500 rounded-lg p-5 flex flex-col-reverse md:flex-row justify-center items-center gap-y-5 mx-5 lg:mx-0 mt-5 md:w-72">
          <div className="flex flex-col md:justify-start md:items-start">
            <h6 className="text-white font-medium text-sm pb-2 text-center md:text-left">
              Please, organize your menus through button below
            </h6>
            <button className="bg-gray-300 text-gray-700 rounded-lg py-2 px-4">
              + Add Menu
            </button>
          </div>
          <div>
            <img
              src="/src/assets/rider.png"
              className="w-[90px] md:w-[200px]"
            />
          </div>
        </div>
        <div className="py-8 mx-5 lg:mx-0 lg:mr-5">
          <h3 className="text-2xl font-semibold text-gray-800">All Riders</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {/* Repeat this card block for each rider */}
            <div className="bg-white rounded-2xl shadow-md ">
              <img
                src="/src/assets/rider1.png"
                alt="Rider"
                className="rounded-lg"
              />
              <div className="p-4">
                <div className="flex justify-between mb-2">
                  <div>
                    <h6 className="text-gray-800 font-medium">Name:</h6>
                    <h6 className="text-gray-800 font-medium">Password:</h6>
                    <h6 className="text-gray-800 font-medium">Contact No:</h6>
                    <h6 className="text-gray-800 font-medium">ID:</h6>
                  </div>
                  <div>
                    <h6 className="text-gray-900">Randy Curtis</h6>
                    <h6 className="text-gray-900">**********</h6>
                    <h6 className="text-gray-900">+92 3093432454</h6>
                    <h6 className="text-gray-900">#90354</h6>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <button className="bg-blue-500 text-white px-5 py-1 rounded-md flex items-center">
                      <FiEdit className="mr-1" />
                      Edit
                    </button>
                  </div>
                  <div>
                    <button className="bg-red-500 text-white px-5 py-1 rounded-md flex items-center">
                      <RiDeleteBin6Line className="mr-1" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md ">
              <img
                src="/src/assets/rider1.png"
                alt="Rider"
                className="rounded-lg"
              />
              <div className="p-4">
                <div className="flex justify-between mb-2">
                  <div>
                    <h6 className="text-gray-800 font-medium">Name:</h6>
                    <h6 className="text-gray-800 font-medium">Password:</h6>
                    <h6 className="text-gray-800 font-medium">Contact No:</h6>
                    <h6 className="text-gray-800 font-medium">ID:</h6>
                  </div>
                  <div>
                    <h6 className="text-gray-900">Randy Curtis</h6>
                    <h6 className="text-gray-900">**********</h6>
                    <h6 className="text-gray-900">+92 3093432454</h6>
                    <h6 className="text-gray-900">#90354</h6>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <button className="bg-blue-500 text-white px-5 py-1 rounded-md flex items-center">
                      <FiEdit className="mr-1" />
                      Edit
                    </button>
                  </div>
                  <div>
                    <button className="bg-red-500 text-white px-5 py-1 rounded-md flex items-center">
                      <RiDeleteBin6Line className="mr-1" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md ">
              <img
                src="/src/assets/rider1.png"
                alt="Rider"
                className="rounded-lg"
              />
              <div className="p-4">
                <div className="flex justify-between mb-2">
                  <div>
                    <h6 className="text-gray-800 font-medium">Name:</h6>
                    <h6 className="text-gray-800 font-medium">Password:</h6>
                    <h6 className="text-gray-800 font-medium">Contact No:</h6>
                    <h6 className="text-gray-800 font-medium">ID:</h6>
                  </div>
                  <div>
                    <h6 className="text-gray-900">Randy Curtis</h6>
                    <h6 className="text-gray-900">**********</h6>
                    <h6 className="text-gray-900">+92 3093432454</h6>
                    <h6 className="text-gray-900">#90354</h6>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <button className="bg-blue-500 text-white px-5 py-1 rounded-md flex items-center">
                      <FiEdit className="mr-1" />
                      Edit
                    </button>
                  </div>
                  <div>
                    <button className="bg-red-500 text-white px-5 py-1 rounded-md flex items-center">
                      <RiDeleteBin6Line className="mr-1" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md ">
              <img
                src="/src/assets/rider1.png"
                alt="Rider"
                className="rounded-lg"
              />
              <div className="p-4">
                <div className="flex justify-between mb-2">
                  <div>
                    <h6 className="text-gray-800 font-medium">Name:</h6>
                    <h6 className="text-gray-800 font-medium">Password:</h6>
                    <h6 className="text-gray-800 font-medium">Contact No:</h6>
                    <h6 className="text-gray-800 font-medium">ID:</h6>
                  </div>
                  <div>
                    <h6 className="text-gray-900">Randy Curtis</h6>
                    <h6 className="text-gray-900">**********</h6>
                    <h6 className="text-gray-900">+92 3093432454</h6>
                    <h6 className="text-gray-900">#90354</h6>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <button className="bg-blue-500 text-white px-5 py-1 rounded-md flex items-center">
                      <FiEdit className="mr-1" />
                      Edit
                    </button>
                  </div>
                  <div>
                    <button className="bg-red-500 text-white px-5 py-1 rounded-md flex items-center">
                      <RiDeleteBin6Line className="mr-1" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md ">
              <img
                src="/src/assets/rider1.png"
                alt="Rider"
                className="rounded-lg"
              />
              <div className="p-4">
                <div className="flex justify-between mb-2">
                  <div>
                    <h6 className="text-gray-800 font-medium">Name:</h6>
                    <h6 className="text-gray-800 font-medium">Password:</h6>
                    <h6 className="text-gray-800 font-medium">Contact No:</h6>
                    <h6 className="text-gray-800 font-medium">ID:</h6>
                  </div>
                  <div>
                    <h6 className="text-gray-900">Randy Curtis</h6>
                    <h6 className="text-gray-900">**********</h6>
                    <h6 className="text-gray-900">+92 3093432454</h6>
                    <h6 className="text-gray-900">#90354</h6>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <button className="bg-blue-500 text-white px-5 py-1 rounded-md flex items-center">
                      <FiEdit className="mr-1" />
                      Edit
                    </button>
                  </div>
                  <div>
                    <button className="bg-red-500 text-white px-5 py-1 rounded-md flex items-center">
                      <RiDeleteBin6Line className="mr-1" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat this card block for each rider */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Rider;
