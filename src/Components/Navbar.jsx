import React from "react";
import { GoBell } from "react-icons/go";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const handleSidebarToggle = () => {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    sidebar.classList.remove("translate-x-[-100%]");
    sidebar.classList.add("translate-x-0");
    overlay.classList.remove("hidden");
  };

  const closeSideBar = () => {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    sidebar.classList.add("translate-x-[-100%]");
    overlay.classList.add("hidden");
  };

  return (
    <>
      <div className="w-full flex flex-row lg:justify-end justify-between items-center md:gap-x-3 p-4">
        <div className="lg:hidden bg-linkBg p-2 rounded-lg text-textActive">
          <HiMiniBars3BottomLeft size={20} onClick={handleSidebarToggle} />
        </div>
        <div className="flex flex-row gap-x-3 md:border-r md:border-gray-400 px-5 md:pl-[40%]">
          <div className="bg-linkBg p-2 rounded-lg text-textActive font-extrabold cursor-pointer relative">
            <GoBell />
            <div className="w-[15px] h-[15px] bg-primary rounded-full absolute top-[-5px] right-[-5px]"></div>
          </div>
          <NavLink
            className="bg-linkBg p-2 rounded-lg text-textActive font-extrabold cursor-pointer relative"
            to={"/chat"}
          >
            <BiSolidMessageSquareDots />
            <div className="w-[15px] h-[15px] bg-primary rounded-full absolute top-[-5px] right-[-5px]"></div>
          </NavLink>
        </div>
        <div className="text-primary hidden md:block">
          <span className="text-[15px]">Welcome,{"   "}</span>
          <span className="font-semibold">Restaurant</span>
        </div>
        <img
          src="/src/assets/profile.png"
          className="w-[50px] h-[50px] rounded-full"
          alt=""
        />
      </div>
      <div
        id="overlay"
        className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] hidden z-10"
        onClick={closeSideBar}
      ></div>
    </>
  );
};

export default Navbar;
