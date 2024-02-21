import React, { useState } from "react";

const Package = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <div className="w-4/12 bg-white min-h-screen">
        <div className="flex flex-col py-24 px-10 gap-y-10">
          <h3 className="text-4xl text-gray-800">SELECT PACKAGE</h3>
          <div className="flex flex-row gap-x-3">
            <div
              className={`w-56 h-52 relative border rounded-lg cursor-pointer 
                    ${selectedOption === 1 && "shadow-lg shadow-textActive"}`}
              onClick={() => handleOptionClick(1)}
              tabIndex={0}
              role="button"
            >
              <div className="flex justify-start items-center p-3 gap-x-5">
                <input
                  type="radio"
                  checked={selectedOption === 1}
                  className="checked:bg-textActive"
                />
                <span className="font-semibold text-gray-600">Manual</span>
              </div>
            </div>
            <div
              className={`w-56 h-52 relative border border-gray-300 rounded-lg cursor-pointer 
                    ${selectedOption === 2 && "shadow-lg shadow-textActive"}`}
              onClick={() => handleOptionClick(2)}
              tabIndex={0}
              role="button"
            >
              <div className="flex justify-between items-center p-3 gap-x-5">
                <input
                  type="radio"
                  checked={selectedOption === 2}
                  className="checked:bg-textActive"
                />
                <span className="font-semibold text-gray-600">Premium</span>
                <span className="font-medium text-2xl text-gray-600">$450</span>
              </div>
            </div>
          </div>
          <button
            className="bg-textActive text-white font-medium rounded-lg w-3/4 mx-auto py-2 disabled:bg-orange-200 disabled:cursor-not-allowed"
            disabled={!selectedOption}
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </>
  );
};

export default Package;
