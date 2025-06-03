import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const [signup, setSignUp] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-primary">
      <div className="w-[60%] mx-auto flex items-center justify-center pt-16 flex-col">
        <img src={logo} className="w-30 h-30" />
        <h1 className="text-xl font-bold mb-2">Welcome to Eaazzy shopping</h1>
        <h3 className="mb-2">Enter your email, phone number and</h3>
        <h3 className="mb-2">password to create an Eaazzy account</h3>
        <h3 className="mb-3">account</h3>
        <form className="flex items-center justify-center flex-col gap-y-5 w-[100%]">
          <input
            type="email"
            placeholder="Enter Email"
            className="py-2 bg-white px-2 border-none outline-none w-[40%] rounded"
          />
          <input
            type="text"
            placeholder="Enter Phone number E.g 0712345076"
            className="py-2 bg-white px-2 border-none outline-none w-[40%] rounded"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="py-2 bg-white px-2 border-none outline-none w-[40%] rounded"
          />
          {signup ? (
            <button
              className="font-bold tracking-wide cursor-pointer text-[16px]"
              onClick={() => navigate("/")}
            >
              Continue
            </button>
          ) : (
            <button className="font-bold tracking-wide cursor-pointer text-[16px]">
              Sign Up
            </button>
          )}
        </form>
        <h4 className="text-[16px]">
          Already have an account ?
          <Link to={"/login"} className="text-blue-600 cursor-pointer">
            Login
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Signup;
