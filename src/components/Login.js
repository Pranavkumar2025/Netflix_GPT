"use client"
import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIN, SetisSignIN] = useState(true);


  const CheckSignIN = ()=>{
    SetisSignIN(!isSignIN);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg"
          alt="Background image"
        />
      </div>
      <form
        action=""
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80 "
      >
        <h1 className="text-3xl font-bold p-2">{isSignIN ? "Sign In" : "Sign Up"}</h1>
        {!isSignIN && (
          <input
          type="text"
          name=""
          id=""
          placeholder="Full Name"
          className="p-4 my-2 w-full bg-gray-700 rounded-sm border "
        />
        )}
        <input
          type="text"
          name=""
          id=""
          placeholder="Email or Mobile no"
          className="p-4 my-2 w-full bg-gray-700 rounded-sm border "
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700 rounded-sm border"
        />
        <button className="p-2 my-4 text-white w-full bg-red-700 rounded-md">{isSignIN ? "Sign In" : "Sign Up"}</button>
        <h1 onClick={CheckSignIN} className="cursor-pointer">{isSignIN ? "New to Netflix ? Sign Up Now": "Already Registerd ? Sign In Now"}</h1>
      </form>
    </div>
  );
};

export default Login;
