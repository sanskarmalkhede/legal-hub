import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import Navbar from "../Components/Navbar";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Handle successful sign-in
        console.error("success");
      })
      .catch((error) => {
        console.error("Error occured while SignIn", error);
      });
  };
  return (
    <>
      <Navbar />
      <div className="signin-container">
        <h2>Create Account</h2>
        <form onSubmit={SignUp}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
