import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(true);
  return (
    <div className="w-screen h-screen bg-primary">
      <div className="w-[60%] mx-auto flex items-center justify-center pt-16 flex-col">
        <img src={logo} className="w-30 h-30" />
        <h1 className="text-xl font-bold ">Welcome to Eaazzy shopping</h1>
        <h3>Enter your email and password to</h3>
        <h3 className="mb-4">login to your Eaazzy account</h3>
        <form className="flex items-center justify-center flex-col gap-y-5 w-[100%]">
          <input
            type="email"
            placeholder="Enter Email"
            className="py-2 bg-white px-2 border-none outline-none w-[40%] rounded"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="py-2 bg-white px-2 border-none outline-none w-[40%] rounded"
          />
          {login ? (
            <button
              className="font-bold tracking-wide cursor-pointer text-[16px]"
              onClick={() => navigate("/")}
            >
              Continue
            </button>
          ) : (
            <button className="font-bold tracking-wide cursor-pointer text-[16px] hover:disabled">
              Login
            </button>
          )}
        </form>
        <h4 className="text-[16px] my-8">
          Forgot Password ?
          <span className="text-blue-600 cursor-pointer">
            Send a password reset email
          </span>
        </h4>
        <h4 className="text-[16px]">
          Don't have an account ?
          <Link to={"/signup"} className="text-blue-600 cursor-pointer">
            Create an account
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Login;
