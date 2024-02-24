import React, { useRef, useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const OTP = () => {
  const [otp, setOTP] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);
  const [resend, setResend] = useState(false);
  const [counter, setCounter] = useState(30);
  const buttonRef = useRef();

  useEffect(() => {
    inputsRef.current[0].focus();
  }, []);

  const handleInputChange = (index, value) => {
    if (isNaN(value) || value.length > 1) return;
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (index < 3 && value !== "") {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleBackspace = (index, event) => {
    if (event.keyCode === 8 && index > 0 && otp[index] === "") {
      inputsRef.current[index - 1].focus();
    }
  };

  const isOTPComplete = otp.every((digit) => digit !== "");

  const handleResendOTP = () => {
    setResend(true);
    setCounter(30);
  };

  useEffect(() => {
    let timer;

    if (resend && counter > 0) {
      timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
    } else if (counter === 0) {
      clearInterval(timer);
      setResend(false);
      setCounter(30);
    }

    return () => clearInterval(timer);
  }, [resend, counter]);

  return (
    <>
      <div className="bg-white min-h-screen">
        <div className="flex flex-col py-24 px-10 gap-y-4">
          <div className="flex flex-row  justify-between items-start gap-x-8">
            <FaArrowLeft size={25} className="text-textActive" />
            <p className="font-medium text-gray-800 ">
              Please add 4 digit code that has been sent to your email
              arsalan@gmail.com
            </p>
          </div>
          <div className="flex justify-center py-5 flex-row px-10 gap-x-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(ref) => (inputsRef.current[index] = ref)}
                type="text"
                maxLength="1"
                className="w-16 h-16 border-none rounded-lg bg-gray-100 text-xl font-bold"
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleBackspace(index, e)}
              />
            ))}
          </div>
          <button
            className="bg-primary text-white font-medium px-16 py-3 rounded-lg mx-9 disabled:bg-orange-200"
            disabled={!isOTPComplete}
          >
            Confirm
          </button>
          <button
            className="text-gray-600 text-center underline underline-offset-1"
            onClick={handleResendOTP}
            ref={buttonRef}
          >
            {resend ? (
              <span className="text-primary font-medium">
                OTP sent, Request a new OTP in{" "}
                <span className="font-bold"> 00:{counter}</span>
              </span>
            ) : (
              <span>Resend OTP</span>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default OTP;
