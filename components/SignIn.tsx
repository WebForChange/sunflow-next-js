"use client;";

import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signup = (email, password) => {
    console.log("Signing up!");
  }; // { signup } = useAuth(); Assuming you have a signup function in your AuthContext

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Call the signup function from your context
    signup(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
