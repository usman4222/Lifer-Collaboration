import React, { useState } from "react";
import { MdOutlineLiveHelp } from "react-icons/md";
import Wrapper from "../Components/Wrapper";
import HeaderSection from "../Components/HeaderSection";
const Help = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [agentInfo, setAgentInfo] = useState({ name: "", email: "", id: "" });

  const handleHelpB2Click = () => {
    const agent = {
      username: "Muhammad Irfan",
      email: "Irfan@gmail.com",
      id: "m.irfan 12",
    };

    setAgentInfo(agent);
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };
  return (
    <>
      <Wrapper>
        <div className="relative">
          <div className="">
            <HeaderSection heading="Help" para={"How can we help you?"} />
            <div className="pt-5 ">
              <div className="flex flex-col md:flex-row gap-4 md:px-20 px-8">
                <div className="bg-amber-700 rounded-xl p-4 flex flex-col md:flex-row items-center justify-center gap-x-2 gap-y-3">
                  <div className="p-4 bg-amber-600 rounded-full">
                    <MdOutlineLiveHelp className="text-4xl text-white " />
                  </div>
                  <div className="text-center md:text-left">
                    <h6 className="md:text-xl text-lg font-semibold text-white">
                      Create Ticket
                    </h6>
                    <p className="text-white text-[14px] md:text-base">
                      To initiate a one to one chat with the support team,
                      please click on this Button
                    </p>
                  </div>
                </div>
                <div className="help-b1 bg-yellow-500 rounded-xl p-4 flex items-center justify-center">
                  <div className="p-4 bg-yellow-600 rounded-full">
                    <MdOutlineLiveHelp className="text-4xl text-white" />
                  </div>
                  <div>
                    <h6 className="text-xl font-semibold text-white">Agent</h6>
                    <p className="text-white">
                      To initiate a one-to-one chat with the support team,
                      please click on this Button
                    </p>
                  </div>
                </div>
              </div>
              <h1 className="text-xl font-bold text-gray-600 ">FAQS</h1>
              <div className="mt-8 bg-white mx-10 rounded-md">
                <ul className="pt-3 text-gray-600 flex flex-col">
                  <div className="border-b border-orange-100">
                    <li className=" font-semibold text-sm pl-5 py-2">#4365</li>
                    <div className="text-sm pl-5 hidden">
                      <h1>Lorem ipsum dolor sit amet</h1>
                    </div>
                  </div>
                  <div className="border-b border-orange-100">
                    <li className=" font-semibold text-sm pl-5 py-2">#4365</li>
                    <div className="text-sm pl-5 hidden">
                      <h1>Lorem ipsum dolor sit amet</h1>
                    </div>
                  </div>
                  <div className="border-b border-orange-100">
                    <li className=" font-semibold text-sm pl-5 py-2">#4365</li>
                    <div className="text-sm pl-5 hidden">
                      <h1>Lorem ipsum dolor sit amet</h1>
                    </div>
                  </div>
                  <div className="border-b border-orange-100">
                    <li className=" font-semibold text-sm pl-5 py-2">#4365</li>
                    <div className="text-sm pl-5 hidden">
                      <h1>Lorem ipsum dolor sit amet</h1>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          {showOverlay && (
            <div
              className="bg-black opacity-50 absolute top-0 left-0 w-full h-full"
              onClick={closeOverlay}
            >
              <div className=" bg-white p-4 rounded-lg text-center z-50">
                <div className="flex justify-center items-center mb-4">
                  <h6 className="text-yellow-600 font-bold text-lg mr-2">
                    Name:
                  </h6>
                  <p>{agentInfo.username}</p>
                </div>
                <div className="flex justify-center items-center mb-4">
                  <h6 className="text-yellow-600 font-bold text-lg mr-2">
                    Email:
                  </h6>
                  <p>{agentInfo.email}</p>
                </div>
                <div className="flex justify-center items-center">
                  <h6 className="text-yellow-600 font-bold text-lg mr-2">
                    Skype ID:
                  </h6>
                  <p>{agentInfo.id}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Wrapper>
    </>
  );
};

export default Help;
