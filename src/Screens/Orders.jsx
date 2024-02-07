import React from "react";
import Wrapper from "../Components/Wrapper";

const Orders = () => {
  return (
    <>
      <Wrapper>
        <div className="bg-white shadow-xl py-2 rounded-xl md:w-[45%] w-full flex flex-col">
          <h1 className="text-2xl font-bold text-primary pl-5">Sales</h1>
          <ul className="pt-3 text-gray-600 w-full">
            <li className="border-b border-gray-300 text-lg pl-5">hello</li>
            <li className="border-b border-gray-300 text-lg pl-5">hello</li>
            <li className="border-b border-gray-300 text-lg pl-5">hello</li>
            <li className="border-b border-gray-300 text-lg pl-5">hello</li>
            <li className="border-b border-gray-300 text-lg pl-5">hello</li>
            <li className="border-b border-gray-300 text-lg pl-5">hello</li>
          </ul>
        </div>
      </Wrapper>
    </>
  );
};

export default Orders;
