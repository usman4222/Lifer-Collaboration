import React from "react";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useMediaQuery } from "react-responsive";
import { MdErrorOutline } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";

const NotificationSideBar = ({ openSideBar }) => {
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  return (
    <div
      className={`bg-white lg:border-r border-gray-300  transition-transform duration-500 ease-in-out lg:translate-x-0  ${
        openSideBar &&
        "fixed top-0 left-0 z-50 w-[200px] md:w-[300px] shadow-2xl min-h-full transform translate-x-0 "
      }
      ${isSmallScreen && !openSideBar && "translate-x-[-200%] absolute "}"

       }
      }`}
      id="chatSidebar"
    >
      <div className="flex flex-col justify-center items-center gap-y-5 ">
        <div className="flex flex-row justify-between items-center gap-y-5 w-full text-white bg-primary  p-3">
          <div>
            <h6 className="font-medium	">Notification</h6>
          </div>
          <div>
            <HiDotsVertical />
          </div>
        </div>
        <ul className="flex flex-col gap-y-5 ">
          <li className=" text-[14px] w-full ">
            <div className=" w-[95%] mx-auto flex flex-row justify-center items-start  p-1  cursor-pointer transition-all duration-300 hover:bg-linkBg gap-x-6 border-b lg:border-none">
              <div className="w-10 rounded-full">
                <MdErrorOutline className="text-xl text-gray-600" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-xs">Note</span>
                <span className="text-xs text-gray-600">
                  This product is under active development and is available in a
                  Private Beta, please contact Courier..
                </span>
              </div>
              <div className="flex flex-row w-[150px] text-xs absolute right-0 pl-20">
                <span>6:12 PM</span>
              </div>
            </div>
          </li>
          <li className=" text-[14px] w-full">
            <div className=" w-[95%] mx-auto flex flex-row justify-center items-start  p-1 cursor-pointer transition-all duration-300 hover:bg-linkBg gap-x-6 border-b lg:border-none">
              <div className="w-10 rounded-full">
                <MdErrorOutline className="text-xl text-gray-600" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-xs">Note</span>
                <span className="text-xs text-gray-600">
                  This product is under active development and is available in a
                  Private Beta, please contact Courier..
                </span>
              </div>
              <div className="flex flex-row w-[150px] text-xs absolute right-0 pl-20">
                <span>6:12 PM</span>
              </div>
            </div>
          </li>
          <li className=" text-[14px] w-full">
            <div className=" w-[95%] mx-auto flex flex-row justify-center items-start  p-1 border-b lg:border-none cursor-pointer transition-all duration-300 hover:bg-linkBg gap-x-6 relative">
              <div className="w-10 rounded-full">
                <MdErrorOutline className="text-xl text-gray-600" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-xs">Note</span>
                <span className="text-xs text-gray-600">
                  This product is under active development and is available in a
                  Private Beta, please contact Courier..
                </span>
              </div>
              <div className="flex flex-row w-[150px] text-xs absolute right-0 pl-20">
                <span>6:12 PM</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NotificationSideBar;
