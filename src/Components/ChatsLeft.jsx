import React from "react";
import { IoIosSend } from "react-icons/io";

const ChatsLeft = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-y-auto bg-white relative">
      <div className="flex  flex-row justify-start items-center px-10 py-4 gap-x-4 border-b border-gray-300">
        <img src="https://i.pravatar.cc/50" alt="" className="rounded-full" />
        <div className="flex flex-col">
          <h1 className="font-semibold">Username</h1>
          <div className="flex flex-row justify-start items-center gap-x-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-600">Online</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 px-10 py-10">
        <div className="flex flex-col justify-start items-start">
          <div className="relative">
            <span className="px-4 py-2 bg-gray-200 text-gray-800 rounded-tr-xl rounded-br-xl rounded-tl-2xl text-[14px] font-medium">
              message from receiver
            </span>
            <div className="absolute bottom-[-32px] right-1">
              <span className="text-[13px] text-gray-500">12:00 PM</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end">
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
      <div className="fixed bottom-3 w-[71%] mx-auto right-7 ">
        <label htmlFor="" className="relative">
          <input
            type="text"
            name="textMessage"
            id="textMessage"
            className="w-full bg-transparent p-3 outline-textActive border-2 border-gray-300 rounded-lg"
            placeholder="Type a message"
          />
          <IoIosSend className="absolute right-5 top-0 text-textActive text-2xl" />
        </label>
      </div>
    </div>
  );
};

export default ChatsLeft;
