"use client";
import Image from "next/image";
import Link from "next/link";
import authImg from "@/public/images/auth.png";
import { useContext, useState } from "react";
import { AuthContext } from "@/app/context/AuthProvider";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.name = userName;
    formData.email = userEmail;
    formData.password = userPassword;
    // formData.role = "admin";
    formData.role = "user";

    // createUser function is defined at AuthProvided component
    createUser(formData.name, formData.email, formData.password, formData.role)
      .then((userCredential) => {
        // Signed up
        // const user = userCredential.user;
        console.log("signed up successfully");
        // if signed up successfully, then it will redirect to dashboard page
        router.push("/Dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(true);
        console.log(errorCode, errorMessage);
      });
    // console.log("clicked");
    // console.log(formData);
  };
  return (
    <>
      <div className="mx-8 xl:mx-56 my-12">
        <div className="flex justify-center items-center bg-[#fafafa] rounded-lg shadow-xl">
          <div className="flex flex-col-reverse md:flex-row md:justify-around gap-10 p-4">
            <div className="md:w-1/2 bg-[#fafafa]">
              <div className="bg-white shadow-xl pt-2 md:pt-0">
                <div className="mx-4 md:mt-14">
                  <h1 className="text-center py-4 text-2xl text-[#8d2232] font-bold hidden md:block">
                    Sign Up
                  </h1>
                  {error === true ? (
                    <p className="text-xs text-blue-600 text-center">
                      Already Signed Up
                    </p>
                  ) : (
                    ""
                  )}
                  <div className="mx-4 mt-1">
                    <form onSubmit={handleSubmit}>
                      <input
                        className="block border-[#131932] border-b placeholder:text-[#131932] text-sm px-2 py-1 outline-none w-full my-8"
                        placeholder="Name"
                        type="text"
                        required
                        onBlur={(e) => setUserName(e.target.value)}
                      />
                      <input
                        className="block border-[#131932] border-b placeholder:text-[#131932] text-sm px-2 py-1 outline-none w-full my-8"
                        placeholder="Email"
                        type="email"
                        required
                        onBlur={(e) => setUserEmail(e.target.value)}
                      />
                      <input
                        className="block border-[#131932] border-b placeholder:text-[#131932] text-sm px-2 py-1 outline-none w-full my-8"
                        placeholder="Password"
                        type="password"
                        required
                        onBlur={(e) => setUserPassword(e.target.value)}
                      />
                      <input
                        type="submit"
                        value="Sign Up"
                        className="block w-full text-sm font-semibold tracking-wide mt-8 mb-8 uppercase bg-[#8d2232] text-white py-2"
                      />
                    </form>
                    <p className="text-xs text-center text-[#131932] pb-4">
                      Already have an account?{" "}
                      <Link href="/SignIn">
                        {" "}
                        <span className="text-[#8d2232] font-bold">
                          Sign In
                        </span>{" "}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h1 className="text-center py-4 text-2xl text-[#8d2232] font-bold md:hidden">Sign Up</h1>
              <Image
                className="h-[500px] w-[500px]"
                src={authImg}
                alt="Signup Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
