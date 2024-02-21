import React from "react";
import { FaChevronDown } from "react-icons/fa";

const SelectVariants = ({
  toggleVariants,
  openVariants,
  selectedVariant,
  handleVariantChange,
  toggleVariantInput,
}) => {
  return (
    <>
      <div className="relative">
        <div
          className="w-full bg-gray-200 flex flex-row justify-between items-center p-2 mt-2 rounded-md cursor-pointer"
          onClick={toggleVariants}
        >
          <span>{selectedVariant ? selectedVariant : "Choose a Variant"}</span>
          <FaChevronDown />
        </div>
        {openVariants && (
          <div className="flex flex-col bg-white border rounded-xl text-sm">
            <span className="bg-textActive py-1 px-2 text-white rounded-t-lg">
              Choose a Variant
            </span>
            <span className="font-semibold px-2 py-1">Variant Types</span>
            <span
              className="pl-8 py-1 text-gray-600 cursor-pointer"
              onClick={() => handleVariantChange("small")}
            >
              Small
            </span>
            <span
              className="pl-8 py-1 text-gray-600 cursor-pointer"
              onClick={() => handleVariantChange("medium")}
            >
              Medium
            </span>
            <span
              className="pl-8 py-1 text-gray-600 cursor-pointer"
              onClick={() => handleVariantChange("large")}
            >
              Large
            </span>
            <span className="font-semibold px-2 py-1">None of the above</span>
            <span
              className="pl-8 py-1 text-gray-600 cursor-pointer"
              onClick={() => toggleVariantInput()}
            >
              Create new Category
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default SelectVariants;
