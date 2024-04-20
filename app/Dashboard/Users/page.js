import Image from "next/image";
import user from "@/public/images/user.jpg";
const Users = () => {
  return (
    <>
      <section className="mx-12 py-12">
        <h1 className="text-center font-bold mb-12 text-3xl text-[#3d2d2d] uppercase">
          All Users
        </h1>
        <section className="grid grid-cols-2 gap-10">
          <div className="mx-4 bg-base-100 shadow-xl rounded p-6 flex justify-around items-center">
            <Image className="h-24 w-24 rounded-full" src={user} alt="user" />
            <div className="ml-4">
              <p className="text-[#3d2d2d] font-semibold">Samiha Tasnim</p>
              <p className="text-[#0f172a] text-sm font-medium">quazisamiha@gmail.com</p>
              <button className="mt-3 bg-[#fce1c3] text-[#3d2d2d] px-3 py-1 rounded border-b-2 border-[#3d2d2d] text-sm font-semibold">
                Make Admin
              </button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Users;
