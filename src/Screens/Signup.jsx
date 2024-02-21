import React, { Fragment } from "react";
import logo from "../assets/logo.png";
import profil from "../assets/profil.png";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const SignUp = () => {
  const navigate = useNavigate();

  const navigator = () => {
    navigate("/account/login");
  };

  return (
    <Fragment>
      <div className="lg:grid lg:grid-cols-12 ">
        <div className="lg:col-span-5  flex justify-center">
          <div className="md:w-[400px]  w-[300px mt-3">
            <div>
              <h3 className="text-[#464255] text-2xl font-bold  py-2 ">
                Sign Up
              </h3>
              <p className="text-[#464255] text-sm pb-8">
                Please fill your information bellow
              </p>
            </div>
            <div className="flex justify-center pb-4">
              <img src={profil} className="object-contain w-20" />
            </div>
            <div>
              <div className="mt-3 mb-8 flex justify-center">
                <div className="relative">
                  <input
                    type="Email"
                    placeholder="Restaurant Name"
                    className="pl-10 pr-4 py-2 rounded-lg bg-[#F5F5F7] focus:outline-none md:w-[400px] w-[300px]  focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="mt-3 mb-8 flex justify-center">
                <div className="relative">
                  <input
                    type="Email"
                    placeholder="Email"
                    className="pl-10 pr-4 py-2 rounded-lg bg-[#F5F5F7]  focus:outline-none md:w-[400px] w-[300px]  focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="mt-3 mb-8 flex justify-center">
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="pl-10 pr-4 py-2 rounded-lg bg-[#F5F5F7] focus:outline-none md:w-[400px]  w-[300px]"
                  />
                </div>
              </div>
              <div className="mt-3 mb-8 flex justify-center">
                <div className="relative">
                  <input
                    type="Email"
                    placeholder="Contact No."
                    className="pl-10 pr-4 py-2 rounded-lg bg-[#F5F5F7] focus:outline-none md:w-[400px] w-[300px] focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className=" flex justify-end  mb-5  cursor-pointer">
              <button className="bg-[#FBC252] py-2 px-6 text-white rounded-md flex">
                Next
                <IoIosArrowForward className="mt-1 ml-3" />
              </button>
            </div>
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
