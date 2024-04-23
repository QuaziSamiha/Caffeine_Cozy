"use client";
// REACT IMPORTS
import { createContext, useEffect, useState } from "react";
// FIREBASE IMPORTS
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
// IMPORT FIREBASE CONFIGURATION
import { app } from "../firebase.config";

// CREATING A CONTEXT TO MANAGE USER DATA TO WHOLE APPLICATION
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // CREATING A USER'S ARRAY TO STORE ALL SIGNED UP USERS DATA
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });
  // TO STORE CURRENT USER EMAIL AND NAME
  // CURRENT USER EMAIL IS REQUIRED TO IDENTIFY USER UNIQUELY SO THAT USER ROLE CAN BE FIND OUT
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [currentUserName, setCurrentUserName] = useState(""); // CURRENT USER NAME TO SHOW ON PROFILE PAGE

  // USER DATA ARE STORED AT LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  //  used in SignUp component
  const createUser = (name, email, password, role) => {
    // STORING SIGNED UP USER DATA
    const newUser = {
      name,
      email,
      role,
    };
    setUsers((prevUsers) => [...prevUsers, newUser]); // Push new user to the array
    // FIREBASE AUTHENTICATION
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // console.log(users);

  //   used in SignIn component
  const userLogin = (email, password) => {
    //  FIREBAE AUTHENTICATION
    return signInWithEmailAndPassword(auth, email, password);
  };

  // used in SignUp component
  const updateUserProfile = (name) => {
    // console.log(name);
    updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  // execute only once either on sign up or sign in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser.email);
      // console.log(currentUser);
      setCurrentUserEmail(currentUser ? currentUser.email : "");
      setCurrentUserName(currentUser ? currentUser.displayName : "");
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  // console.log(currentUserEmail);

  //   used in Navbar component
  const userLogOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    createUser, // called from SignUp component
    users,
    currentUserEmail,
    currentUserName,
    updateUserProfile, // called from SignUp component
    userLogin, // called from SignIn component
    userLogOut, // called from Navbar component
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
