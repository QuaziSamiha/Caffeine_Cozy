"use client";
import Image from "next/image";
import userImage from "@/public/images/user.jpg";
import updateBtn from "@/public/images/update.png";
import deleteBtn from "@/public/images/delete.png";
import { useContext } from "react";
import { AuthContext } from "@/app/context/AuthProvider";

const Profile = () => {
  const { currentUserEmail, currentUserName } = useContext(AuthContext);
  // console.log(currentUserEmail, currentUserName);
  return (
    <>
      <section className="mx-6 lg:mx-24 my-12 py-6 flex justify-center items-center p-6 bg-base-100 rounded-sm shadow-lg">
        <div>
          <div className="flex flex-col md:justify-evenly md:flex-row gap-10">
            <div className="md:w-1/2">
              <div className="flex justify-center items-center m-6 shadow-2xl rounded bg-white">
                <Image
                  className=""
                  src={userImage}
                  alt="coffee user"
                  width={300}
                  height={200}
                />
              </div>
            </div>
            <div className="md:w-1/2  text-sm mt-6 text-[#0f172a]">
              <div className="flex flex-col-reverse md:flex-row justify-between">
                <h1 className="text-[#3d2d2d] text-lg xl:text-2xl font-bold uppercase mb-3">
                  {currentUserName}
                </h1>
                {/* based on user role this portion will show -- only admin can see delete and updat button */}
                <div>
                  <div className="flex justify-end mb-3 md:mb-0">
                    <button>
                      <Image
                        className="w-6 h-6 mr-2"
                        src={updateBtn}
                        alt="Update"
                      />
                    </button>
                    <button>
                      <Image className="w-6 h-6" src={deleteBtn} alt="Delete" />
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-sm mb-3">
                <span className="font-semibold">Email:</span> {currentUserEmail}
              </p>
              <p className="text-sm mb-3">
                <span className="font-semibold"> Phone:</span> 036985648525
              </p>
              <p className="text-sm mb-3">
                <span className="font-semibold"> Age:</span> 28 years
              </p>
              <p className="text-sm mb-3">
                <span className="font-semibold">Address:</span> Newyork, USA
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
