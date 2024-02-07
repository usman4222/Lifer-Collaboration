import React from "react";

const Wrapper = ({ children }) => {
  return (
    <>
      <section className="w-full lg:w-[73%] xl:w-[80%] md:float-end flex flex-col">
        {children}
      </section>
    </>
  );
};

export default Wrapper;
