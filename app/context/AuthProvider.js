"use client";
import { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  //   used in SignUp component
  const createUser = (name, email, password, role) => {
    const newUser = {
      name,
      email,
      role,
    };
    setUsers((prevUsers) => [...prevUsers, newUser]); // Push new user to the array

    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  console.log(users);

  //   used in SignIn component
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   used in Navbar component
  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    createUser, // called from SignUp component
    users,
    userLogin, // called from SignIn component
    userLogOut, // called from Navbar component
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
