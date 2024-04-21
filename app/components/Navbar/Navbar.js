'use client'
import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/app/context/AuthProvider";
const Navbar = () => {
  
  const { userLogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        // Sign-out successful.
        console.log("logged out successfully");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <>
      <div className="navbar px-12 bg-[#3d2d2d] text-[#f1d1a8]">
        <div className="flex-1">
          <div className="flex items-center">
            <Image className="h-12 w-10" src={logo} alt="coffee cup" />
            <p className="font-bold fon text-2xl tracking-wide uppercase">
              CaffeineCozy
            </p>
          </div>
        </div>
        <div className="flex-none">
          <Link href="/">
            <button
              onClick={handleLogOut}
              className="bg-[#f1d1a8] text-[#3d2d2d] uppercase font-bold px-6 py-2 rounded"
            >
              Sign Out
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
