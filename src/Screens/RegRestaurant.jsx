import React, { Fragment, useState } from "react";
import logo from "../assets/logo.png";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { MdRestaurant } from "react-icons/md";
// import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react'


const RegRestaurant = () => {

  const [location, setLocation] = useState('');
  const [file, setFile] = useState("")
  const [imageUploadProgress, setImageUploadProgree] = useState(false)

  // const handleLocationChange = (e) => {
  //   setLocation(e.target.value);
  // };

  // const getCurrentLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const { latitude, longitude } = position.coords;
  //         setLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
  //       },
  //       (error) => {
  //         console.error('Error getting location:', error.message);
  //       }
  //     );
  //   } else {
  //     console.error('Geolocation is not supported by this browser.');
  //   }
  // };


  return (
    <Fragment>
      <div className="lg:grid lg:grid-cols-12 ">
        <div className="lg:col-span-5  flex justify-center">
          <div className="md:w-[400px]  w-[300px] ">
            <div className="flex justify-center py-8">
              <img className="object-contain w-50" src={logo} />
            </div>
            <div>
              <h3 className="text-[#464255] text-3xl md:text-4xl font-bold py-2 ">
                Register Your Restaurant Here...
              </h3>
              <p className="text-[#464255] text-sm pb-8">
                Please fill your information below
              </p>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Restaurant Name"
                    className="pl-10 pr-4 py-3 rounded-lg bg-[#F5F5F7] focus:outline-none md:w-[400px]  w-[300px] focus:ring-0 focus:border-textActive"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ">
                    <MdRestaurant className="text-gray-500" />
                  </div>
                </div>
              </div>
              <div className="mt-5 mb-5 flex justify-center">
                <div className="relative">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      value={location}
                      placeholder="Location"
                      className="pl-10 pr-4 py-3 rounded-lg bg-[#F5F5F7] focus:outline-none md:w-[400px]  w-[300px] focus:ring-0 focus:border-textActive"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ">
                      <IoLocationSharp className="text-gray-500" />
                    </div>
                    {/* <button className="border-2  border-gary-500" onClick={getCurrentLocation}>Get Current Location</button> */}
                  </div>
                </div>
              </div>
              <div className='flex justify-between items-center border-4 mb-12 border-teal-500 border-dotted p-3'>
                <input 
                type='file' 
                accept='image/*' 
                onChange={(e) => setFile(e.target.files[0])} 
                className="focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            <div className=" flex justify-center  mb-8  cursor-pointer">
              <button className="bg-[#FBC252] py-3 w-[200px] lg:w-[400px] text-white rounded-md">
                Register 
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 relative hidden lg:block">
          <div className="bg-[url('/src/assets/bg.jpeg')] bg-cover h-[700px] ">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="flex justify-center items-center h-[100vh] text-white">
              <div className="relative">
              <img className="object-contain w-50" src={logo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RegRestaurant;