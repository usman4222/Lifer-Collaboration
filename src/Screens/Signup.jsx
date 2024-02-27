import React, { Fragment, useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import profil from "../assets/profil.png";
import { IoIosArrowForward } from "react-icons/io";
import signup from "../Services/Authentication.js";
import { CiCamera } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const inputRef = useRef();
  const [profileImage, setProfileImage] = useState(null);

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

  return (
    <Fragment>
      <div className="lg:grid lg:grid-cols-12 ">
        <div className="lg:col-span-5  flex justify-center">
          <div className="md:w-[400px]  w-[300px mt-3">
            <div>
              <h3 className="text-[#464255] text-3xl md:text-4xl font-bold  py-2 ">
                Sign Up
              </h3>
              <p className="text-[#464255] text-sm pb-4">
                Please fill your information below
              </p>
            </div>
            <div className="flex justify-center pb-3">
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
            <form>
              <div>
                <div className="mt-3 mb-4 flex justify-center">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstname"
                      className="pl-3 pr-4 py-2 rounded-lg bg-[#F5F5F7] focus:outline-none md:w-[400px] w-[300px] focus:border focus:border-textActive focus:ring-0"
                      ref={inputRef}
                      {...register("firstname")}
                    />
                  </div>
                </div>
                <div className="mt-3 mb-4 flex justify-center">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastname"
                      className="pl-3 pr-4 py-2 rounded-lg bg-[#F5F5F7] focus:outline-none md:w-[400px] w-[300px] focus:border focus:border-textActive focus:ring-0"
                      {...register("lastname")}
                    />
                  </div>
                </div>
                <div className="mt-3 mb-4 flex justify-center">
                  <div className="relative">
                    <input
                      type="Email"
                      name="email"
                      placeholder="Email"
                      className="pl-3 pr-4 py-2 rounded-lg bg-[#F5F5F7]  focus:outline-none md:w-[400px] w-[300px] focus:border focus:border-textActive focus:ring-0"
                      {...register("email")}
                    />
                  </div>
                </div>
                <div className="mt-3 mb-4 flex justify-center">
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Contact No."
                      className="pl-3 pr-4 py-2 rounded-lg bg-[#F5F5F7] focus:outline-none md:w-[400px] w-[300px] focus:border focus:border-textActive focus:ring-0"
                      {...register("phone")}
                    />
                  </div>
                </div>
                <div className="mt-3 mb-4 flex justify-center">
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="pl-3 pr-4 py-2 rounded-lg bg-[#F5F5F7] focus:outline-none md:w-[400px]  w-[300px] focus:border focus:border-textActive focus:ring-0"
                      {...register("password")}
                    />
                  </div>
                </div>
                <div className="mt-3 mb-4 flex justify-center">
                  <div>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      className="pl-3 pr-4 py-2 rounded-lg bg-[#F5F5F7] focus:outline-none md:w-[400px]  w-[300px] focus:border focus:border-textActive focus:ring-0"
                      {...register("confirmpassword")}
                    />
                  </div>
                </div>
                <div className="mt-3 mb-4 flex justify-start">
                  <div className="flex flex-col gap-y-2">
                    <select
                      name="role_id"
                      id="role_id"
                      className="rounded-md bg-[#F5F5F7] focus:outline-none md:w-[400px]  w-[300px] text-gray-600 focus:border focus:border-textActive focus:ring-0"
                      {...register("role_id")}
                    >
                      <option value="">Select Role</option>
                      <option value="1">Admin</option>
                      <option value="2">Moderator</option>
                      <option value="3">User</option>
                    </select>
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
