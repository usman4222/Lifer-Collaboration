import React, { useEffect, useState } from "react";
import Wrapper from "../Components/Wrapper";
import HeaderSection from "../Components/HeaderSection";
import { FaArrowLeft, FaTimes, FaCloudUploadAlt } from "react-icons/fa";
import SelectCategory from "../Components/SelectCategory";
import SelectVariants from "../Components/SelectVariants";
import { useNavigate } from "react-router-dom";

const AddMenu = ({ edit }) => {
  const [images, setImages] = useState([]);
  const [openCategory, setOpenCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showCategoryInput, setShowCategoryInput] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState("");
  const [showVariantInput, setShowVariantIput] = useState(false);
  const [openVariants, setOpenVariants] = useState(false);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImages((prevImages) => [...prevImages, reader.result]);
      };

      reader.readAsDataURL(file);
    }
  };

  const toggleCategoryInput = () => {
    setShowCategoryInput(!showCategoryInput);
    if (openCategory) {
      setOpenCategory(!openCategory);
    }
  };

  const toggleVariantInput = () => {
    setShowVariantIput(!showVariantInput);
    if (openVariants) {
      setOpenVariants(!openVariants);
    }
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const toggleCategory = () => {
    setOpenCategory(!openCategory);
  };

  const toggleVariants = () => {
    setOpenVariants(!openVariants);
  };

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
    setOpenCategory(false);
    if (showCategoryInput) {
      setShowCategoryInput(false);
    }
  };

  const handleVariantChange = (newVariant) => {
    setSelectedVariant(newVariant);
    setOpenVariants(false);
    if (showVariantInput) {
      setShowVariantIput(false);
    }
  };

  return (
    <Wrapper>
      <HeaderSection
        heading="Menu Control Panel"
        para="Simplified Menu Management"
      />
      <div className="grid grid-cols-12  gap-x-5 md:mx-20 mt-10 mx-4 gap-y-5">
        <div className="md:col-span-7 col-span-12 flex flex-col justify-start items-start gap-y-5">
          <div className="flex flex-row text-gray-700 gap-x-5 justify-center items-center font-medium">
            <FaArrowLeft
              size={22}
              onClick={() => navigate(-1)}
              className="cursor-pointer"
            />
            <h3 className="text-2xl ">Update Menu Item</h3>
          </div>
          <div className="flex flex-col justify-start items-start gap-y-5 w-full">
            <div className="bg-white rounded-lg p-5 flex flex-col gap-y-5 w-full">
              <div className="flex flex-col justify-start items-start">
                <label htmlFor="productName" className="mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  name="productName"
                  id="productName"
                  className="form-input rounded-md w-full"
                />
              </div>
              <div className="flex flex-col justify-start items-start">
                <label htmlFor="productDescription" className="mb-1">
                  Product Description
                </label>
                <textarea
                  name="productDescription"
                  id="productDescription"
                  className="form-textarea rounded-md w-full"
                />
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col w-full gap-y-4">
              <label htmlFor="images">Images</label>
              <div className="border-2 border-dashed p-2">
                <label
                  htmlFor="productImages"
                  className="cursor-pointer flex flex-col justify-center items-center gap-y-1 opacity-60 "
                >
                  <FaCloudUploadAlt size={25} />
                  <h4>Upload Images</h4>
                  <span className="text-sm text-gray-500">
                    Select one or more images
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="productImages"
                    multiple
                    onChange={handleImageChange}
                  />
                </label>
              </div>
              {images && (
                <div className="flex flex-row justify-start items-center gap-x-3">
                  {images?.map((img, index) => (
                    <div
                      className="w-24 h-24 border-2 border-dashed relative"
                      key={index}
                    >
                      <img
                        src={img}
                        alt="Product Image"
                        className="w-full h-full object-cover"
                      />
                      <FaTimes
                        className="absolute top-0 right-0 cursor-pointer"
                        size={20}
                        onClick={() => handleRemoveImage(index)}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:col-span-5 col-span-12  md:mt-14 gap-y-5">
          <div className="bg-white p-5 flex flex-col rounded-lg w-full gap-y-3">
            <div>
              <label htmlFor="Product Category">Product Category </label>
              <SelectCategory
                toggleCategory={toggleCategory}
                openCategory={openCategory}
                selectedCategory={selectedCategory}
                handleCategoryChange={handleCategoryChange}
                toggleCategoryInput={toggleCategoryInput}
              />
            </div>
            {showCategoryInput && (
              <div className="relative">
                <input
                  type="text"
                  name="newCategory"
                  id="newCategory"
                  className="px-3 py-1 rounded-md w-full"
                  placeholder="Name the category"
                />
                <button className="px-3 bg-textActive text-white rounded-md absolute top-[5px] right-1.5 hover:bg-textActiveHover transition-all duration-500 ease-in-out">
                  Add
                </button>
              </div>
            )}
          </div>
          <div className="bg-white p-5 flex flex-col rounded-lg">
            <div className="flex flex-col mb-2">
              <label htmlFor="Variants">Variants</label>
              <SelectVariants
                toggleVariants={toggleVariants}
                openVariants={openVariants}
                selectedVariant={selectedVariant}
                handleVariantChange={handleVariantChange}
                toggleVariantInput={toggleVariantInput}
              />
            </div>
            {showVariantInput && (
              <div className="relative">
                <input
                  type="text"
                  name="newVariant"
                  id="newVariant"
                  className="px-3 py-1 rounded-md w-full"
                  placeholder="Name the variant"
                />
                <button className="px-3 bg-textActive text-white rounded-md absolute top-[5px] right-1.5 hover:bg-textActiveHover transition-all duration-500 ease-in-out">
                  Add
                </button>
              </div>
            )}
            <div className="flex flex-col gap-y-4">
              <h5 className="font-medium mt-8">Pricing</h5>
              <div className="grid grid-cols-2 gap-x-2 mt-3">
                <div className="flex flex-col">
                  <label htmlFor="price" className="mb-1 text-sm">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="px-3 py-1 rounded-md"
                    placeholder="$ 0.00"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="discount" className="mb-1 text-sm">
                    Discount
                  </label>
                  <input
                    type="text"
                    name="discount"
                    id="discount"
                    className="px-3 py-1 rounded-md"
                    placeholder="e.g.  20%"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="itemCost" className="mb-1 text-sm">
                  Cost Per Item
                </label>
                <input
                  type="number"
                  name="itemCost"
                  id="itemCost"
                  className="px-3 py-1 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AddMenu;
