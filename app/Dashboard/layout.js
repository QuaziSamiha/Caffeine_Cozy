import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const layout = ({ children }) => {
  return (
    <>
        <Navbar />
        <div className="flex">
          <div>
            <Sidebar />
          </div>
          <div className="flex justify-center items-center">{children}</div>
        </div>
    </>
  );
};

export default layout;
