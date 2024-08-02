"use client";
import React, { useRef, useState } from "react";
import Header from "./Header";
import { Validate } from "@/utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/utils/firebase";

const Login = () => {
  const [isSignIN, SetisSignIN] = useState(true);
  const [ErrorMessage, SetErrorMessage] = useState("");

  const Email = useRef(null);
  const Password = useRef(null);

  const CheckSignIN = () => {
    SetisSignIN(!isSignIN);
  };

  const SubmitInput = () => {
    const ValidateResult = Validate(
      Email.current.value,
      Password.current.value
    );

    const email = Email.current.value;
    const password = Password.current.value;
    // console.log(Email.current.value)
    // console.log(Password.current.value);
    // console.log(ValidateResult);
    SetErrorMessage(ValidateResult);

    if (ValidateResult) return;

    if (!isSignIN) {
      // Sign Up logic
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          alert("Sign In Succesfull");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorCode + " " + errorMessage)
        });
    }
  };

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
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80 "
      >
        <h1 className="text-3xl font-bold p-2">
          {isSignIN ? "Sign In" : "Sign Up"}
        </h1>
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
          ref={Email}
          type="text"
          name=""
          id=""
          placeholder="Email or Mobile no"
          className="p-4 my-2 w-full bg-gray-700 rounded-sm border "
        />
        <input
          ref={Password}
          type="password"
          name=""
          id=""
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700 rounded-sm border"
        />
        <p className="text-red-600">{ErrorMessage}</p>
        <button
          className="p-2 my-4 text-white w-full bg-red-700 rounded-md"
          onClick={SubmitInput}
        >
          {isSignIN ? "Sign In" : "Sign Up"}
        </button>
        <h1 onClick={CheckSignIN} className="cursor-pointer">
          {isSignIN
            ? "New to Netflix ? Sign Up Now"
            : "Already Registerd ? Sign In Now"}
        </h1>
      </form>
    </div>
  );
};
export default Login;
