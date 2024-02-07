import React from "react";

const HeaderSection = ({ heading, para }) => {
  return (
    <>
      <h1 className="text-primary text-3xl font-bold ml-6 pt-10 lg:ml-0">
        {heading}
      </h1>
      <span className="text-gray-500 mt-1 ml-6 lg:ml-0">{para}</span>
    </>
  );
};

export default HeaderSection;
