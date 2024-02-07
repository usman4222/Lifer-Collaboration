import React from "react";
import HeaderSection from "../Components/HeaderSection";
import Wrapper from "../Components/Wrapper";
import SearchArea from "../Components/SearchArea";
import Table from "../Components/Table";
const OrderHistory = () => {
  return (
    <>
      <Wrapper>
        <HeaderSection heading="Order History" para={"Past Order Logs!"} />
        <SearchArea />
        <div className="w-full lg:pl-0 lg:pr-4 mt-2 md:pl-2 md:pr-2">
          <Table />
        </div>
      </Wrapper>
    </>
  );
};

export default OrderHistory;
