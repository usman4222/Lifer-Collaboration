import React, { Fragment, useState } from "react";
import logo from "../assets/logo.png";
import profil from "../assets/profil.png";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import signup from "../Services/Authentication.js";
import { CiCamera } from "react-icons/ci";
const SignUp = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigator = () => {
    navigate("/account/login");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setProfileImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData);
      // Redirect or show success message
    } catch (error) {
      console.error("Signup failed:", error.message);
      // Display error message to the user
    }
  };

  console.log(buttonDisabled);

  return (
    <Fragment>
      <div className="lg:grid lg:grid-cols-12 ">
        <div className="lg:col-span-5  flex justify-center">
          <div className="md:w-[400px]  w-[300px mt-3">
            <div>
              <h3 className="text-[#464255] text-3xl md:text-4xl font-bold  py-2 ">
                Sign Up
              </h3>
              <p className="text-[#464255] text-sm pb-8">
                Please fill your information bellow
              </p>
            </div>
            <div className="flex justify-center pb-4">
              <label htmlFor="profile">
                <input
                  type="file"
                  name="profile"
                  id="profile"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <div className="w-20 h-20 object-contain rounded-full flex justify-center items-center cursor-pointer border relative">
                  <img
                    src={profileImage ? profileImage : profil}
                    className="object-contain w-20 h-20 rounded-full"
                  />
                  <div className="absolute bottom-0 right-0 p-1 bg-textActive rounded-full text-white">
                    <CiCamera />
                  </div>
                </div>
              </label>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <div className="mt-3 mb-8 flex justify-center">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Restaurant Name"
                      name="name"
                      className="pl-3 pr-4 py-2 rounded-lg bg-[#F5F5F7] focus:outline-none md:w-[400px] w-[300px]  focus:ring-0 focus:border-gray-500"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
                <div className="mt-3 mb-8 flex justify-center">
                  <div className="relative">
                    <input
                      type="Email"
                      name="email"
                      placeholder="Email"
                      className="pl-3 pr-4 py-2 rounded-lg bg-[#F5F5F7]  focus:outline-none md:w-[400px] w-[300px] focus:ring-0 focus:border-gray-500"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                </div>
                <div className="mt-3 mb-8 flex justify-center">
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Contact No."
                      className="pl-3 pr-4 py-2 rounded-lg bg-[#F5F5F7] focus:outline-none md:w-[400px] w-[300px] focus:ring-0 focus:border-gray-500"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="mt-3 mb-8 flex justify-center">
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="pl-3 pr-4 py-2 rounded-lg bg-[#F5F5F7] focus:outline-none md:w-[400px]  w-[300px] focus:ring-0 focus:border-gray-500"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="mt-3 mb-8 flex justify-center">
                  <div>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      className="pl-3 pr-4 py-2 rounded-lg bg-[#F5F5F7] focus:outline-none md:w-[400px]  w-[300px] focus:ring-0 focus:border-gray-500"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
              </div>
              <div className=" flex justify-end  mb-5  ">
                <button
                  type="submit"
                  className="bg-[#FBC252] py-2 px-6 text-white rounded-md flex cursor-pointer"
                >
                  Next
                  <IoIosArrowForward className="mt-1 ml-3" />
                </button>
              </div>
            </form>
            <div className=" lg:hidden flex justify-center">
              <span className="text-center text-[#464255]">
                Already have an account?
              </span>
            </div>
            <div
              className=" flex justify-center pt-3  mb-8  cursor-pointer lg:hidden"
              onClick={navigator}
            >
              <button className="bg-[#FBC252] py-2 px-6 text-white rounded-md flex">
                Log In
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 relative hidden lg:block">
          <div className="bg-[url('/src/assets/bg.jpeg')] bg-cover h-[100vh] ">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="flex justify-center items-center h-[100vh] text-white">
              <div className="relative">
                <div className="flex justify-center py-8 pb-5">
                  <img className="object-contain w-50" src={logo} />
                </div>
                <h3 className="text-center pb-2 font-bold text-3xl text-white">
                  Already have an account?
                </h3>
                <span className="text-center font-semibold text-base text-white flex justify-center">
                  Figma ipsum a variant main layer.
                </span>
                <div className="flex justify-center pt-10" onClick={navigator}>
                  <button className="bg-[#FFB100] px-14 py-3 rounded-xl text-white font-semibold cursor-pointer">
                    Log In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUp;
