import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import Navbar from "../Components/Navbar";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Handle successful sign-up
        console.error("success");
      })
      .catch((error) => {
        console.error("Error occurred while SignUp", error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4">Create Account</h2>
          <form onSubmit={signUp}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full border rounded py-2 px-3 mb-3 focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full border rounded py-2 px-3 mb-3 focus:outline-none focus:border-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
