import React, { useState } from "react";
import Wrapper from "../Components/Wrapper";
import HeaderSection from "../Components/HeaderSection";
import { FaArrowLeft } from "react-icons/fa";

const AddMenu = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <Wrapper>
      <HeaderSection heading="Add Menu" para="Add Menu Items" />
      <FaArrowLeft
        size={22}
        className="text-gray-800  mt-3 cursor-pointer ml-5 lg:ml-0"
        onClick={() => window.history.back()}
      />
      <div className="bg-white rounded-lg p-5 w-[95%] md:w-[600px] mx-auto mt-5">
        <h3 className="text-center text-gray-700 text-xl md:text-3xl font-bold mb-8">
          Add Menu Item
        </h3>
        <div className="flex flex-col  gap-y-5">
          <div className="flex flex-col gap-y-2 md:justify-between md:items-center md:flex-row">
            <label htmlFor="productName" className="font-medium text-gray-800">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              id="productName"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:justify-between md:items-center">
            <label htmlFor="productPrice" className="font-medium text-gray-800">
              Product Price
            </label>
            <input
              type="text"
              name="productPrice"
              id="productPrice"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:justify-between md:items-center">
            <label
              htmlFor="productCategory"
              className="font-medium text-gray-800"
            >
              Category
            </label>
            <select
              name="productCategory"
              id="productCategory"
              className="rounded-lg w-full md:w-[61%]"
            >
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:justify-between md:items-center">
            <label
              htmlFor="productIngredients"
              className="font-medium text-gray-800"
            >
              Ingredients
            </label>
            <select
              name="productIngredients"
              id="productIngredients"
              className="rounded-lg w-full md:w-[61%]"
            >
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
          </div>
          <div className="flex flex-row justify-between items-center">
            <label
              htmlFor="productAvailable"
              className="font-medium text-gray-800"
            >
              Available
            </label>
            <div className="flex flex-row justify-center items-center mr-auto gap-x-5 pl-36">
              <div className="flex flex-row justify-center items-center gap-x-2">
                <input
                  type="radio"
                  name="productAvailable"
                  id="productAvailable"
                  className="rounded-lg checked:bg-yellow-400 checked:outline-yellow-400"
                />
                <label
                  htmlFor="productAvailable"
                  className="font-medium text-gray-800"
                >
                  Yes
                </label>
              </div>
              <div className="flex flex-row justify-center items-center gap-x-2">
                <input
                  type="radio"
                  name="productAvailable"
                  id="productAvailable"
                  className="rounded-lg checked:bg-yellow-400 checked:outline-yellow-400"
                />
                <label
                  htmlFor="productAvailable"
                  className="font-medium text-gray-800 "
                >
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <label
              htmlFor="productDescription"
              className="font-medium text-gray-800"
            >
              Product Description
            </label>
            <textarea
              name="productDescription"
              id="productDescription"
              className="rounded-lg w-[61%]"
            ></textarea>
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:justify-between md:items-center">
            <label htmlFor="productImage" className="font-medium text-gray-800">
              Product Image
            </label>
            <label htmlFor="imageUpload" className="md:w-[61%] w-full">
              <input
                type="file"
                name="imageUpload"
                id="imageUpload"
                className="hidden"
                onChange={handleImageChange}
              />
              <div className="bg-gray-200 w-full rounded-lg flex justify-center items-center p-5 cursor-pointer">
                {imagePreview ? (
                  <img src={imagePreview} alt="preview" />
                ) : (
                  <p className="text-gray-600 font-medium">Upload Image</p>
                )}
              </div>
            </label>
          </div>
          <button className="bg-textActive py-2 text-white rounded-lg font-semibold">
            Add Item
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default AddMenu;
