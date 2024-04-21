import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <div className="drawer lg:drawer-open mt-12">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu px-4 pt-12 w-60 min-h-screen bg-[#3d2d2d] text-[#f1d1a8] font-medium uppercase">
            {/* Sidebar content here */}
            <li>
              <Link href="/Dashboard/Product">Product</Link>
            </li>
            <li>
              <Link href="/Dashboard/Profile">Profile</Link>
            </li>
            <li>
              <Link href="/Dashboard/Users">Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
