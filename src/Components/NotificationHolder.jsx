import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosSend } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";

const NotificationHolder = ({ toggleSideBar, openSideBar }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col overflow-y-auto ">
      <div className="flex  flex-row justify-between items-center px-10 py-4 gap-x-4 border-b border-gray-300">
        <div className="flex flex-row justify-center items-center gap-x-3">
          <div>
            <MdErrorOutline className="text-2xl text-gray-600" />
          </div>
          <div className="flex flex-col ">
            <h1 className="font-semibold">Note</h1>
            <div className="flex flex-row justify-start items-center gap-x-2">
              <span className="text-sm text-gray-600">
                Fri, Nov 3, 2024, 10:35 AM
              </span>
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
        <div className="flex flex-col justify-end items-end gap-y-10">
          <div className="relative">
            <span className="text-xs">
              Figma ipsum component variant main layer. Blur move auto draft
              underline outline undo variant flatten boolean. Shadow clip blur
              scrolling layout invite. Group share asset link layer. Figjam
              duplicate duplicate clip flatten flows. Figjam undo follower slice
              draft. Component overflow ipsum outline device vector group asset.
              Stroke move share share figma frame. Rectangle share object undo
              scrolling link vector draft pen team. Team vertical vector bold
              scrolling effect object prototype project inspect. Star star
              create style rotate ipsum thumbnail clip variant boolean. Flows
              star vertical connection ellipse figma. Thumbnail effect vertical
              horizontal text arrow fill draft content strikethrough. Clip
              italic figjam hand figjam effect. Scale scale background flows
              undo polygon group text. Duplicate star union polygon background.
              Vector stroke thumbnail flatten flows link subtract effect line
              vector. Group library scrolling prototype move select pixel link.
              Image outline stroke hand library comment star frame arrange list.
              Rotate project device rectangle layer library.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationHolder;
