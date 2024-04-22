"use client";
import { AuthContext } from "@/app/context/AuthProvider";
import Link from "next/link";
import { useContext } from "react";

// THIS COMPONENT IS USED AT DASHBOARD LAYOUT
const Sidebar = () => {
  const { users, currentUserEmail } = useContext(AuthContext);
  // console.log(users);

  const currentUserRole = users.find(
    (user) => user.email === currentUserEmail
  )?.role;
  // console.log(currentUserRole);

  return (
    <>
      <div className="drawer lg:drawer-open mt-4 xl:mt-12">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <div className="ml-4">
            <label
              htmlFor="my-drawer-2"
              className="bg-[#f1d1a8] text-[#3d2d2d] uppercase text-xs font-bold px-2 py-2 rounded drawer-button lg:hidden"
            >
              Menu
            </label>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu px-4 pt-12 w-60 min-h-screen bg-[#3d2d2d] text-[#f1d1a8] font-medium uppercase">
            {/* Sidebar content here */}
            {currentUserRole === "user" ? (
              <div>
                <li>
                  <Link href="/Dashboard/Product">Product</Link>
                </li>
                <li>
                  <Link href="/Dashboard/Profile">Profile</Link>
                </li>
              </div>
            ) : (
              <div>
                <li>
                  <Link href="/Dashboard/Product">Product</Link>
                </li>
                <li>
                  <Link href="/Dashboard/Profile">Profile</Link>
                </li>
                <li>
                  <Link href="/Dashboard/Users">Users</Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
