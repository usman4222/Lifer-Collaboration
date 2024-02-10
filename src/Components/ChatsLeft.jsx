import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosSend } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";

const ChatsLeft = ({ toggleSideBar, openSideBar }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col overflow-y-auto ">
      <div className="flex  flex-row justify-between items-center px-10 py-4 gap-x-4 border-b border-gray-300">
        <div className="flex flex-row justify-center items-center gap-x-3">
          <img src="https://i.pravatar.cc/50" alt="" className="rounded-full" />
          <div className="flex flex-col">
            <h1 className="font-semibold">Username</h1>
            <div className="flex flex-row justify-start items-center gap-x-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600">Online</span>
            </div>
          </div>
        </div>
        {!openSideBar ? (
          <FaBarsStaggered
            size={22}
            className="cursor-pointer float-end lg:hidden"
            onClick={() => toggleSideBar()}
          />
        ) : (
          <IoMdCloseCircle
            size={22}
            className="cursor-pointer float-end lg:hidden"
            onClick={() => toggleSideBar()}
          />
        )}
      </div>
      <div className="flex flex-col gap-y-12 px-10 py-10 pb-32">
        <div className="flex flex-col justify-start items-start gap-y-10">
          <div className="relative">
            <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-tr-xl rounded-br-xl rounded-tl-2xl text-[14px] font-medium">
              message from receiver
            </span>
            <div className="absolute bottom-[-32px] right-1">
              <span className="text-[13px] text-gray-500">12:00 PM</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end gap-y-10">
          <div className="relative">
            <span className="px-4 py-2 text-white bg-primary rounded-tr-xl rounded-bl-xl rounded-tl-2xl  text-[14px] font-medium">
              message from sender
            </span>
            <div className="absolute bottom-[-32px] left-1">
              <span className="text-[13px] text-gray-500">12:00 PM</span>
            </div>
          </div>
          <div className="relative">
            <span className="px-4 py-2 text-white bg-primary rounded-tr-xl rounded-bl-xl rounded-tl-2xl  text-[14px] font-medium">
              message from sender
            </span>
            <div className="absolute bottom-[-32px] left-1">
              <span className="text-[13px] text-gray-500">12:00 PM</span>
            </div>
          </div>
          <div className="relative">
            <span className="px-4 py-2 text-white bg-primary rounded-tr-xl rounded-bl-xl rounded-tl-2xl  text-[14px] font-medium">
              message from sender
            </span>
            <div className="absolute bottom-[-32px] left-1">
              <span className="text-[13px] text-gray-500">12:00 PM</span>
            </div>
          </div>
          <div className="relative">
            <span className="px-4 py-2 text-white bg-primary rounded-tr-xl rounded-bl-xl rounded-tl-2xl  text-[14px] font-medium">
              message from sender
            </span>
            <div className="absolute bottom-[-32px] left-1">
              <span className="text-[13px] text-gray-500">12:00 PM</span>
            </div>
          </div>
          <div className="relative">
            <span className="px-4 py-2 text-white bg-primary rounded-tr-xl rounded-bl-xl rounded-tl-2xl  text-[14px] font-medium">
              message from sender
            </span>
            <div className="absolute bottom-[-32px] left-1">
              <span className="text-[13px] text-gray-500">12:00 PM</span>
            </div>
          </div>
          <div className="relative">
            <span className="px-4 py-2 text-white bg-primary rounded-tr-xl rounded-bl-xl rounded-tl-2xl  text-[14px] font-medium">
              message from sender
            </span>
            <div className="absolute bottom-[-32px] left-1">
              <span className="text-[13px] text-gray-500">12:00 PM</span>
            </div>
          </div>
          <div className="relative">
            <span className="px-4 py-2 text-white bg-primary rounded-tr-xl rounded-bl-xl rounded-tl-2xl  text-[14px] font-medium">
              message from sender
            </span>
            <div className="absolute bottom-[-32px] left-1">
              <span className="text-[13px] text-gray-500">12:00 PM</span>
            </div>
          </div>
          <div className="relative">
            <span className="px-4 py-2 text-white bg-primary rounded-tr-xl rounded-bl-xl rounded-tl-2xl  text-[14px] font-medium">
              message from sender
            </span>
            <div className="absolute bottom-[-32px] left-1">
              <span className="text-[13px] text-gray-500">12:00 PM</span>
            </div>
          </div>
          <div className="relative">
            <span className="px-4 py-2 text-white bg-primary rounded-tr-xl rounded-bl-xl rounded-tl-2xl  text-[14px] font-medium">
              message from sender
            </span>
            <div className="absolute bottom-[-32px] left-1">
              <span className="text-[13px] text-gray-500">12:00 PM</span>
            </div>
          </div>
          <div className="relative">
            <span className="px-4 py-2 text-white bg-primary rounded-tr-xl rounded-bl-xl rounded-tl-2xl  text-[14px] font-medium">
              message from sender
            </span>
            <div className="absolute bottom-[-32px] left-1">
              <span className="text-[13px] text-gray-500">12:00 PM</span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <input
          type="text"
          name="textMessage"
          id="textMessage"
          className="bg-white p-2 md:p-3 outline-textActive border-2 border-gray-300 rounded-lg fixed xl:bottom-[130px] xl:right-5 w-[72%] lg:w-[57vw] lg:left-64 mx-auto right-[45px] focus:outline-none bottom-[340px] md:bottom-[410px] md:right-24 lg:bottom-96 lg:right-20"
          placeholder="Type a message"
        />
      </div>
    </div>
  );
};

export default ChatsLeft;
