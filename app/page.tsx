"use client";

import SignIn from "../components/SignIn";
import { AuthProvider } from "../contexts/AuthContext";

export default function Home() {
  return <AuthProvider>test{/* <SignIn /> */}</AuthProvider>;
}
