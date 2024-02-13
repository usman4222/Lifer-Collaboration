import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchArea = () => {
  return (
    <>
      <div className="flex  md:flex-row flex-col gap-y-3 justify-between items-center mt-5 lg:pr-5 px-4 lg:px-0 gap-x-2 md:mx-3 lg:mx-0">
        <div className="relative">
          <input
            type="text"
            name="searchByOrder"
            id="searchByOrder"
            className="lg:p-2 p-1 w-[250px]  rounded-md placeholder:text-gray-500 border border-gray-500 text-[15px] focus:outline-yellow-500 focus:border-0"
            placeholder="Search By Order Id"
          />
          <CiSearch className="lg:absolute lg:block top-3 right-2 text-gray-500 hidden" />
        </div>
        <select
          name="searchByDateRange"
          className="lg:p-2 p-1 w-[250px]  rounded-md placeholder:text-gray-500  text-[15px] bg-white border border-gray-500 focus:outline-yellow-500 focus:border-0"
          id="SearchByDateRange"
        >
          <option value="#">Filter By Date Range</option>
          <option value="Today">Today</option>
          <option value="Yesterday">Yesterday</option>
          <option value="Last 7 Days">Last 7 Days</option>
          <option value="Last 30 Days">Last 30 Days</option>
          <option value="Last 90 Days">Last 90 Days</option>
          <option value="Last 365 Days">Last 365 Days</option>
        </select>
      </div>
    </>
  );
};

export default SearchArea;
