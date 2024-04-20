import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className="navbar px-12 bg-[#3d2d2d] text-[#f1d1a8]">
        <div className="flex-1">
          <div className="flex items-center">
            <Image className="h-12 w-10" src={logo} alt="coffee cup" />
            <p className="font-bold fon text-2xl tracking-wide">CaffeineCozy</p>
          </div>
        </div>
        <div className="flex-none">
          <Link href='/'>
            <button className="bg-[#f1d1a8] text-[#3d2d2d] uppercase font-bold px-6 py-2 rounded">
              Sign Out
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
