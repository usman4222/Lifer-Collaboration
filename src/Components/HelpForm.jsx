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
          className="text-helpForm cursor-pointer"
          onClick={() => window.history.back()}
        />
      </div>
      <div className="flex justify-center items-center md:mt-[-20px] mt-10 mx-5">
        <div className="bg-white rounded-lg p-8 max-w-md w-full">
          <div className="md:text-center">
            <h3 className="text-helpForm text-2xl font-semibold mb-6">
              Fill in the Details
            </h3>
          </div>
          <div className="">
            <div className="mb-4">
              <div className="flex flex-col md:flex-row justify-between md:items-center">
                <div>
                  <h6 className="text-helpForm text-sm">Name</h6>
                </div>
                <div>
                  <input
                    className="border border-helpForm rounded px-3 py-2 w-64 text-sm placeholder-helpForm focus:outline-helpForm focus:border-0"
                    type="text"
                    placeholder="Enter Name"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between md:items-center flex-col md:flex-row">
                <div>
                  <h6 className="text-helpForm text-sm">Email</h6>
                </div>
                <div>
                  <input
                    className="border border-helpForm rounded px-3 py-2 w-64 text-sm placeholder-helpForm  focus:outline-helpForm focus:border-0"
                    type="email"
                    placeholder="Enter Email"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between md:items-center flex-col md:flex-row">
                <div>
                  <h6 className="text-helpForm text-sm">Subject</h6>
                </div>
                <div>
                  <input
                    className="border border-helpForm rounded px-3 py-2 w-64 text-sm placeholder-helpForm  focus:outline-helpForm focus:border-0"
                    type="text"
                    placeholder="Enter Subject"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between md:items-center flex-col md:flex-row">
                <div>
                  <h6 className="text-helpForm text-sm">Message</h6>
                </div>
                <div>
                  <textarea
                    className="border border-helpForm rounded px-3 py-2 w-64 text-sm placeholder-helpForm  focus:outline-helpForm focus:border-0"
                    placeholder="Enter Message"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between md:items-center flex-col md:flex-row">
                <div>
                  <h6 className="text-helpForm text-sm">Ticket Priority </h6>
                </div>
                <div>
                  <select
                    name="ticketpriority"
                    id="ticketpriority"
                    className="border border-helpForm rounded px-3 py-2 w-64 text-sm placeholder-helpForm  focus:outline-helpForm focus:border-0"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between md:items-center flex-col md:flex-row">
                <div>
                  <h6 className="text-helpForm text-sm">Attachment</h6>
                </div>
                <div>
                  <input
                    className="border border-helpForm rounded px-3 py-2 w-64 text-sm placeholder-helpForm  focus:outline-helpForm focus:border-0"
                    type="file"
                  />
                </div>
              </div>
            </div>
            <div className="md:text-right">
              <button className="bg-helpForm text-white w-64 px-4 py-2 rounded-lg font-semibold text-sm">
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
