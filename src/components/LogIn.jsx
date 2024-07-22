import React from "react";
import Logo from "../assets/Shape.png";
import { FiEye } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";

const LogIn = () => {

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/home");
  };


  return (
    <div className="h-screen flex flex-col items-center justify-center w-2/5">
      <div className="mb-8">
        <img src={Logo} alt="logo" />
      </div> 
      <div className=" p-8 rounded-lg shadow-md w-full bg-[#27292D] border-2 border-gray-400">
        <h1 className=" text-base text-[#6B6C70] font-semibold mb-2 text-center">
          WELCOME BACK
        </h1>
        <h2 className="text-2xl mb-11 font-semibold text-center">
          Log into your account
        </h2>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block text-lg text-[#C5C7CA]">
              Email or Username
            </label>
            <input
              type="text"
              placeholder="Enter your email or username"
              className="mt-1 block w-full px-3 py-2 border bg-[#27292D] border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
            />
          </div>
          <div>
            <label className="block text-lg text-[#C5C7CA] flex justify-between">
              Password{" "}
              <span className="text-[#C5C7CA] text-sm cursor-pointer">
                Forgot Password?
              </span>
            </label>
            <div className="relative mt-1">
              <input
                type="password"
                placeholder="Enter your Password"
                className="block w-full px-3 py-2 bg-[#27292D] border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
              />
              <FiEye className="absolute inset-y-0 right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
            </div>
          </div>
          {/* <button className="w-full bg-[#4A96FF] px-3 py-3 rounded">Login now</button> */}
          <button
            type="submit"
            className="w-full bg-[#4A96FF] px-3 py-3 rounded"
          >
            Login now
          </button>
          <div className="text-sm text-[#7F8084] ">
            Not registered yet?{" "}
            <NavLink
              to="/signup"
              className="cursor-pointer text-[#C5C7CA]"
            >
              Register →
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
