import Navbar from "@/components/Navbar/Navbar";

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
