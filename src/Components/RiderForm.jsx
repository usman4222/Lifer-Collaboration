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
        className="bg-white absolute top-40 left-1 right-1 md:left-44 md:right-44 lg:top-20 lg:right-96 lg:left-96 p-7 rounded-lg overflow-auto"
        style={{ zIndex: 1100 }}
      >
        <div className="flex flex-col">
          <h1
            className="font-semibold text-xl md:text-2xl text-center mb-2 text-textActive
          "
          >
            Add Rider
          </h1>
          <div className="mb-3 grid grid-cols-12 gap-x-3 ">
            <div className="flex flex-col col-span-6 gap-y-1">
              <label htmlFor="name" className="text-sm font-bold">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="rounded-lg focus:outline-none focus:ring-0 focus:border focus:border-textActive"
              />
            </div>
            <div className="flex flex-col col-span-6 gap-y-1">
              <label htmlFor="email" className="text-sm font-bold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="rounded-lg focus:outline-none focus:ring-0 focus:border focus:border-textActive"
              />
            </div>
          </div>
          <div className="mb-3 grid grid-cols-12 gap-x-3">
            <div className="flex flex-col gap-y-1 col-span-6">
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
            <div className="flex flex-col gap-y-1 col-span-6">
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
              <label
                htmlFor="upload"
                className="text-sm font-bold bg-slate-200 py-3 rounded-md text-center cursor-pointer"
              >
                Upload Picture
                <input
                  type="file"
                  name="upload"
                  id="upload"
                  accept="image/*"
                  className="rounded-lg hidden"
                  onChange={handleImageChange}
                />
              </label>
              <div className="mt-3 flex justify-center items-center">
                {imagePreview && (
                  <img
                    src={imagePreview}
                    className="h-[15vh] w-[10vw] rounded-md"
                    alt="Rider Image"
                  />
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
