import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import AuthDetails from "./AuthDetails";
import Navbar from "../Components/Navbar";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Handle successful sign-in
        console.error("success");
      })
      .catch((error) => {
        console.error("Error occurred while SignIn", error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4">
            Log in to your account
          </h2>
          <form onSubmit={signIn}>
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
              Sign In
            </button>

            <a
              href="/forgot-password"
              className="text-blue-500 block text-sm mt-2 hover:underline"
            >
              Forgot password?
            </a>
          </form>
          <AuthDetails />
        </div>
      </div>
    </>
  );
}

export default SignIn;
