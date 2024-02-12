import React, { Fragment } from "react";
import Wrapper from "../Components/Wrapper";
import HeaderSection from "../Components/HeaderSection";
import { IoMdReturnLeft } from "react-icons/io";

const HelpForm = () => {
  return (
    <Wrapper>
      <HeaderSection heading={"Help"} para={"How can we help you?"} />
      <div className="mt-10 ml-5  w-[50px] h-[50px]">
        <IoMdReturnLeft
          size={30}
          className="text-orange-600 cursor-pointer hover:text-orange-800"
          onClick={() => window.history.back()}
        />
      </div>
      <div className="flex justify-center items-center md:mt-[-20px] mt-10 mx-5">
        <div className="bg-white rounded-lg p-8 max-w-md w-full">
          <div className="md:text-center">
            <h3 className="text-orange-600 text-2xl font-semibold mb-6">
              Add Rider
            </h3>
          </div>
          <div className="">
            <div className="mb-4">
              <div className="flex flex-col md:flex-row justify-between md:items-center">
                <div>
                  <h6 className="text-orange-600 text-sm">Name</h6>
                </div>
                <div>
                  <input
                    className="border border-orange-600 rounded px-3 py-2 w-64 text-sm placeholder-orange-400 focus:outline-none"
                    type="text"
                    placeholder="Enter Name"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between md:items-center flex-col md:flex-row">
                <div>
                  <h6 className="text-orange-600 text-sm">Password</h6>
                </div>
                <div>
                  <input
                    className="border border-orange-600 rounded px-3 py-2 w-64 text-sm placeholder-orange-400 focus:outline-none"
                    type="text"
                    placeholder="Enter Password"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between md:items-center flex-col md:flex-row">
                <div>
                  <h6 className="text-orange-600 text-sm">Contact No</h6>
                </div>
                <div>
                  <input
                    className="border border-orange-600 rounded px-3 py-2 w-64 text-sm placeholder-orange-400 focus:outline-none"
                    type="text"
                    placeholder="Cell No. of Rider"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between md:items-center flex-col md:flex-row">
                <div>
                  <h6 className="text-orange-600 text-sm">ID</h6>
                </div>
                <div>
                  <input
                    className="border border-orange-600 rounded px-3 py-2 w-64 text-sm placeholder-orange-400 focus:outline-none"
                    type="text"
                    placeholder="Restaurant ID"
                  />
                </div>
              </div>
            </div>
            <div className="md:text-right">
              <button className="bg-orange-600 text-white w-64 px-4 py-2 rounded-lg font-semibold text-sm">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HelpForm;
