"use client";
// import images
import Image from "next/image";
import deleteBtn from "@/public/images/delete.png";
import updateBtn from "@/public/images/update.png";
// essentials import
import { useContext } from "react";
import { AuthContext } from "@/app/context/AuthProvider";
import Link from "next/link";

const ProductCard = ({ product }) => {
  console.log(product);
  // getting from AuthProvider component
  const { users, currentUserEmail } = useContext(AuthContext);
  // console.log(users);

  // find out current user role
  const currentUserRole = users.find(
    (user) => user.email === currentUserEmail
  )?.role;

  return (
    <>
      <div className="mx-3 lg:mx-6">
        <div className="flex flex-col md:flex-row md:justify-evenly items-center bg-base-100 shadow-xl h-80 md:h-52 lg:h-48">
          <figure className="w-1/3">
            <Image
              className="w-32 h-28 md:h-36"
              src={product.productImage}
              alt={product.productName}
              width={300}
              height={200}
            />
          </figure>
          <div className="w-2/3 mr-3">
            <h2 className="text-[#3d2d2d] text-lg font-bold uppercase mb-2">
              {product.productName}
            </h2>
            <p className="text-xs text-[#0f172a] text-justify">
              {product.productDescription}
            </p>
            <p className="font-bold text-sm text-[#0f172a] mt-1">Price: ${product.price}</p>
            <div className="flex justify-between items-center mt-3">
              <div>
                <button className="bg-[#fce1c3] text-[#3d2d2d] px-3 py-1 rounded border-b-2 border-[#3d2d2d] text-sm font-semibold">
                  <Link
                    href={`/Dashboard/Product/ProductDetails/${product.productId}`}
                  >
                    Details
                  </Link>
                </button>
              </div>
              {currentUserRole === "user" ? (
                ""
              ) : (
                <div className="flex">
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
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
