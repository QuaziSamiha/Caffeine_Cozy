import Navbar from "@/components/SignUp/Navbar/Navbar";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}

      <p>footer</p>
    </>
  );
};

export default layout;
