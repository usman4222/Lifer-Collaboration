import { useState } from "react";

const RiderForm = () => {
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
    <>
      <div
        className="bg-white absolute top-40 left-1 right-1 md:left-44 md:right-44 lg:top-20 lg:right-96 lg:left-96 p-4 rounded-lg overflow-auto"
        style={{ zIndex: 1100 }}
      >
        <div className="flex flex-col">
          <h1
            className="font-semibold text-xl md:text-2xl text-center mb-2 text-textActive
          "
          >
            Add Rider
          </h1>
          <div className="mb-3 ">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-bold">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="rounded-lg focus:border-0 focus:outline-yellow-500"
              />
            </div>
          </div>
          <div className="mb-3 ">
            <div className="flex flex-col">
              <label htmlFor="contact" className="text-sm font-bold">
                Contact
              </label>
              <input
                type="text"
                name="contact"
                id="contact"
                className="rounded-lg focus:border-0 focus:outline-yellow-500"
              />
            </div>
          </div>
          <div className="mb-3 ">
            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm font-bold">
                Password
              </label>
              <input
                type="text"
                name="password"
                id="password"
                className="rounded-lg focus:border-0 focus:outline-yellow-500"
              />
            </div>
          </div>
          <div className="mb-3 ">
            <div className="flex flex-col">
              <label htmlFor="ID" className="text-sm font-bold">
                ID
              </label>
              <input
                type="text"
                name="ID"
                id="ID"
                className="rounded-lg focus:border-0 focus:outline-yellow-500"
              />
            </div>
          </div>
          <div className="mb-3 ">
            <div className="flex flex-col">
              <label htmlFor="label" className="text-sm font-bold">
                Upload Picture
              </label>
              <label
                htmlFor="upload"
                className="cursor-pointer bg-textActive shadow-2xl text-white px-4 py-2 w-[100px] text-center rounded-lg mt-2 font-bold "
              >
                Browse
                <input
                  type="file"
                  name="upload"
                  id="upload"
                  accept="image/*"
                  className="rounded-lg hidden"
                  onChange={handleImageChange}
                />
              </label>
              <div className="mt-3 bg-gray-200 w-full rounded-lg py-2 flex justify-center items-center">
                {imagePreview ? (
                  <img src={imagePreview} alt="Rider Image" />
                ) : (
                  <div>No File Choosen</div>
                )}
              </div>
            </div>
          </div>
          <button className="bg-textActive text-white py-1 font-semibold rounded-lg">
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default RiderForm;
