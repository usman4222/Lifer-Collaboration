import React, { Fragment, useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import { IoIosArrowForward } from "react-icons/io";
import signup from "../Services/Authentication.js";
import { CiCamera } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignUp = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  const navigate = useNavigate();
  const inputRef = useRef();

  const navigator = () => {
    navigate("/account/login");
  };

  const formSubmit = async (data) => {
    try {
      const response = await signup(data);
      toast.success(response.message, { duration: 5000 });
    } catch (error) {
      toast.error(error.message || "An error occurred during signup.", {
        duration: 5000,
      });
    }
  };

  return (
    <Fragment>
      <div className="lg:grid lg:grid-cols-12 ">
        <div className="lg:col-span-5  flex justify-center overflow-y-auto">
          <div className="md:w-[400px]  w-[300px] mt-3">
            <div>
              <h3 className="text-[#464255] text-3xl md:text-4xl font-bold  py-2 ">
                Sign Up
              </h3>
              <p className="text-[#464255] text-sm pb-4">
                Please fill your information below
              </p>
            </div>
            <form onSubmit={handleSubmit(formSubmit)}>
              <div>
                <div className="mt-3 mb-4 flex justify-start">
                  <div className="relative flex flex-col ">
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
                <div className="mt-3 mb-4 flex justify-start">
                  <div className="relative flex flex-col">
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastname"
                      className="pl-3 pr-4 py-2 rounded-lg bg-[#F5F5F7] focus:outline-none md:w-[400px] w-[300px] focus:border focus:border-textActive focus:ring-0"
                      {...register("lastname")}
                    />
                  </div>
                </div>
                <div className="mt-3 mb-4 flex justify-start">
                  <div className="relative flex flex-col">
                    <input
                      type="Email"
                      name="email"
                      placeholder="Email"
                      className="pl-3 pr-4 py-2 rounded-lg bg-[#F5F5F7]  focus:outline-none md:w-[400px] w-[300px] focus:border focus:border-textActive focus:ring-0"
                      {...register("email")}
                    />
                  </div>
                </div>
                <div className="mt-3 mb-4 flex justify-start">
                  <div className="relative flex flex-col">
                    <input
                      type="number"
                      name="phone"
                      placeholder="Contact No."
                      className="pl-3 pr-4 py-2 rounded-lg bg-[#F5F5F7] focus:outline-none md:w-[400px] w-[300px] focus:border focus:border-textActive focus:ring-0"
                      {...register("phone")}
                    />
                  </div>
                </div>
                <div className="mt-3 mb-4 flex justify-start">
                  <div className="flex flex-col">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="pl-3 pr-4 py-2 rounded-lg bg-[#F5F5F7] focus:outline-none md:w-[400px]  w-[300px] focus:border focus:border-textActive focus:ring-0"
                      {...register("password")}
                    />
                  </div>
                </div>
                <div className="mt-3 mb-4 flex justify-start">
                  <div className="flex flex-col">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      className="pl-3 pr-4 py-2 rounded-lg bg-[#F5F5F7] focus:outline-none md:w-[400px]  w-[300px] focus:border focus:border-textActive focus:ring-0"
                      {...register("confirmpassword")}
                    />
                    <span className="text-red-500 text-sm ml-2">
                      {errors.confirmpassword && errors.confirmpassword.message}
                    </span>
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
                    <span className="text-red-500 text-sm ml-2">
                      {errors.role_id && errors.role_id.message}
                    </span>
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
        <div className="lg:col-span-7 w-[59%]  hidden lg:block fixed top-0 right-0">
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
