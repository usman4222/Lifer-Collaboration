import React from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const ChatSideBar = () => {
  return (
    <div
      className="w-[200px] md:w-[250px] lg:block lg:w-[350px] min-h-full  bg-white fixed top-0 left-0 transition-transform duration-500 transform lg:translate-x-0 translate-x-[-100%] border-r border-gray-300"
      style={{ zIndex: 1000 }}
      id="messageBar"
    >
      <div className="flex flex-col justify-center items-center gap-y-5 ">
        <input
          type="text"
          name="searchMessage"
          id="searchMessage"
          className="w-full bg-gray-200 p-3 outline-none relative"
          placeholder="Search for Messages"
        />
        <CiSearch className="lg:absolute lg:block lg:text-lg top-4 right-3 text-gray-500 hidden" />
        <ul className="flex flex-col gap-y-5 w-full">
          <li className=" text-[14px] w-full">
            <div className=" w-[95%] mx-auto flex flex-row justify-center items-start  p-1 rounded-md cursor-pointer transition-all duration-300 hover:bg-linkBg gap-x-6">
              <div className="w-10 rounded-full">
                <img
                  src="https://i.pravatar.cc/50"
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Username</span>
                <span className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet.
                </span>
              </div>
              <div className="text-xs">
                <span>10/19</span>
              </div>
            </div>
          </li>
          <li className=" text-[14px] w-full">
            <div className=" w-[95%] mx-auto flex flex-row justify-center items-start  p-1 rounded-md cursor-pointer transition-all duration-300 hover:bg-linkBg gap-x-6">
              <div className="w-10 rounded-full">
                <img
                  src="https://i.pravatar.cc/50"
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Username</span>
                <span className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet.
                </span>
              </div>
              <div className="text-xs">
                <span>10/19</span>
              </div>
            </div>
          </li>
          <li className=" text-[14px] w-full">
            <div className=" w-[95%] mx-auto flex flex-row justify-center items-start  p-1 rounded-md cursor-pointer transition-all duration-300 hover:bg-linkBg gap-x-6">
              <div className="w-10 rounded-full">
                <img
                  src="https://i.pravatar.cc/50"
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Username</span>
                <span className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet.
                </span>
              </div>
              <div className="text-xs">
                <span>10/19</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChatSideBar;
