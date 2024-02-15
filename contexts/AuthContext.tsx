"use client;";

import React, { createContext, useContext, ReactNode, useState } from "react";

// Define the type of the context state
interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

// Define the type for the User object
interface User {
  id: string;
  name: string;
  // Add other user properties here
}

// Create the context with an initial undefined value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the type for the provider props
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const signup = async (email: string, password: string) => {
    // Make a POST request to your signup API route
    // Update the user state based on the response
  };

  const login = async (email: string, password: string) => {
    // Make a POST request to your login API route
    // Update the user state based on the response
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
