"use client";
import Image from "next/image";
import userImage from "@/public/images/user.jpg";
import { useContext } from "react";
import { AuthContext } from "@/app/context/AuthProvider";

const Profile = () => {
  const { currentUserEmail, currentUserName } = useContext(AuthContext);
  console.log(currentUserEmail, currentUserName);
  return (
    <>
      <section>
        <div className="mx-4 bg-base-100 shadow-xl rounded p-6 flex flex-col md:flex-row justify-around items-center">
          <Image
            className="h-24 w-24 rounded-full"
            src={userImage}
            alt="user"
          />
          <div className="mt-4 md:ml-4">
            <p className="text-[#3d2d2d] font-semibold">{currentUserName}</p>
            <p className="text-[#0f172a] text-sm font-medium">
              {currentUserEmail} hell
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
