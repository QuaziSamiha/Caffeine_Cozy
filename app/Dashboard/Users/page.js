"use client";
import Image from "next/image";
import userImage from "@/public/images/user.jpg";
import { useContext } from "react";
import { AuthContext } from "@/app/context/AuthProvider";
const Users = () => {
  // users array is getting from AuthProvider component
  const { users } = useContext(AuthContext);
  // console.log(users);
  return (
    <>
      <section className="mx-4 lg:mx-12 py-12">
        <h1 className="text-center font-bold mb-12 text-lg sm:text-xl lg:text-3xl text-[#3d2d2d] uppercase">
          All Users
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {users.map((user, index) => (
            <div key={index}>
              <div className="mx-4 bg-base-100 shadow-xl rounded p-6 flex flex-col md:flex-row justify-around items-center">
                <Image
                  className="h-24 w-24 rounded-full"
                  src={userImage}
                  alt="user"
                />
                <div className="mt-4 md:ml-4">
                  <p className="text-[#3d2d2d] font-semibold">{user.name}</p>
                  <p className="text-[#0f172a] text-sm font-medium">
                    {user.email}
                  </p>
                  <button className="mt-3 bg-[#fce1c3] text-[#3d2d2d] px-3 py-1 rounded border-b-2 border-[#3d2d2d] text-sm font-semibold">
                    Make Admin
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default Users;
