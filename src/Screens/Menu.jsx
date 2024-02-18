import React from "react";
import Wrapper from "../Components/Wrapper";
import RIderMenu from "../Components/RIderMenu";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import AddMenu from "./AddMenu";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

const MenuPage = () => {
  const navigate = useNavigate();
  const toggleRiderForm = () => {
    navigate("/menu/add-menu");
  };

  return (
    <Wrapper>
      <div className="flex flex-col">
        <RIderMenu
          toggleRiderForm={toggleRiderForm}
          heading={"Menu Control Panel"}
          para={"Simplified Menu Management"}
          image={"/src/assets/chef.png"}
          modalButtonText={"+ Add Item"}
          cardsMainHeading={"Menu (Total Items)"}
        />
        <div className="py-8 mx-5 lg:mx-0 lg:mr-5">
          <h3 className="text-2xl font-semibold text-gray-800">
            Menu (Total Items)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            <div className="bg-white rounded-2xl shadow-md ">
              <img
                src="/src/assets/product.png"
                alt="Rider"
                className="rounded-lg w-full"
                loading="lazy"
              />
              <div className="px-3 py-4">
                <div className="flex justify-start flex-col mb-3">
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                      <span className="text-gray-800 font-bold">
                        Spicy Beast Burger
                      </span>
                      <span className="text-green-500 text-sm font-bold before:content-[''] before:mr-1 before:h-2 before:w-2 before:bg-green-500 before:inline-block before:rounded-full ">
                        Available
                      </span>
                    </div>
                    <div className="bg-yellow-500 text-white w-16 h-7 rounded-2xl text-center text-sm flex justify-center items-center">
                      $10.00
                    </div>
                  </div>
                  <div className="py-2 text-gray-800">
                    <span>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Accusamus, doloribus.
                    </span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <NavLink
                      className="bg-blue-500 text-white px-5 py-1 rounded-md flex items-center"
                      to="/menu/edit-menu"
                    >
                      <FiEdit className="mr-1" />
                      Edit
                    </NavLink>
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
                src="/src/assets/product.png"
                alt="Rider"
                className="rounded-lg w-full"
                loading="lazy"
              />
              <div className="px-3 py-4">
                <div className="flex justify-start flex-col mb-3">
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                      <span className="text-gray-800 font-bold">
                        Spicy Beast Burger
                      </span>
                      <span className="text-green-500 text-sm font-bold before:content-[''] before:mr-1 before:h-2 before:w-2 before:bg-green-500 before:inline-block before:rounded-full ">
                        Available
                      </span>
                    </div>
                    <div className="bg-yellow-500 text-white w-16 h-7 rounded-2xl text-center text-sm flex justify-center items-center">
                      $10.00
                    </div>
                  </div>
                  <div className="py-2 text-gray-800">
                    <span>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Accusamus, doloribus.
                    </span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <NavLink
                      className="bg-blue-500 text-white px-5 py-1 rounded-md flex items-center"
                      to="/menu/edit-menu"
                    >
                      <FiEdit className="mr-1" />
                      Edit
                    </NavLink>
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
                src="/src/assets/product.png"
                alt="Rider"
                className="rounded-lg w-full"
                loading="lazy"
              />
              <div className="px-3 py-4">
                <div className="flex justify-start flex-col mb-3">
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                      <span className="text-gray-800 font-bold">
                        Spicy Beast Burger
                      </span>
                      <span className="text-green-500 text-sm font-bold before:content-[''] before:mr-1 before:h-2 before:w-2 before:bg-green-500 before:inline-block before:rounded-full ">
                        Available
                      </span>
                    </div>
                    <div className="bg-yellow-500 text-white w-16 h-7 rounded-2xl text-center text-sm flex justify-center items-center">
                      $10.00
                    </div>
                  </div>
                  <div className="py-2 text-gray-800">
                    <span>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Accusamus, doloribus.
                    </span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <NavLink
                      className="bg-blue-500 text-white px-5 py-1 rounded-md flex items-center"
                      to="/menu/edit-menu"
                    >
                      <FiEdit className="mr-1" />
                      Edit
                    </NavLink>
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
                src="/src/assets/product.png"
                alt="Rider"
                className="rounded-lg w-full"
                loading="lazy"
              />
              <div className="px-3 py-4">
                <div className="flex justify-start flex-col mb-3">
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                      <span className="text-gray-800 font-bold">
                        Spicy Beast Burger
                      </span>
                      <span className="text-green-500 text-sm font-bold before:content-[''] before:mr-1 before:h-2 before:w-2 before:bg-green-500 before:inline-block before:rounded-full ">
                        Available
                      </span>
                    </div>
                    <div className="bg-yellow-500 text-white w-16 h-7 rounded-2xl text-center text-sm flex justify-center items-center">
                      $10.00
                    </div>
                  </div>
                  <div className="py-2 text-gray-800">
                    <span>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Accusamus, doloribus.
                    </span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <NavLink
                      className="bg-blue-500 text-white px-5 py-1 rounded-md flex items-center"
                      to="/menu/edit-menu"
                    >
                      <FiEdit className="mr-1" />
                      Edit
                    </NavLink>
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
                src="/src/assets/product.png"
                alt="Rider"
                className="rounded-lg w-full"
                loading="lazy"
              />
              <div className="px-3 py-4">
                <div className="flex justify-start flex-col mb-3">
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                      <span className="text-gray-800 font-bold">
                        Spicy Beast Burger
                      </span>
                      <span className="text-green-500 text-sm font-bold before:content-[''] before:mr-1 before:h-2 before:w-2 before:bg-green-500 before:inline-block before:rounded-full ">
                        Available
                      </span>
                    </div>
                    <div className="bg-yellow-500 text-white w-16 h-7 rounded-2xl text-center text-sm flex justify-center items-center">
                      $10.00
                    </div>
                  </div>
                  <div className="py-2 text-gray-800">
                    <span>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Accusamus, doloribus.
                    </span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <NavLink
                      className="bg-blue-500 text-white px-5 py-1 rounded-md flex items-center"
                      to="/menu/edit-menu"
                    >
                      <FiEdit className="mr-1" />
                      Edit
                    </NavLink>
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
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Menu = () => {
  return (
    <Routes>
      <Route path="/" element={<MenuPage />} />
      <Route path="/add-menu" element={<AddMenu />} />
      <Route path="/edit-menu" element={<AddMenu edit={true} />} />
    </Routes>
  );
};

export default Menu;
