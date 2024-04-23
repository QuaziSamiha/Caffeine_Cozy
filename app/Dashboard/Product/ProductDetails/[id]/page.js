"use client";
// image imports
import Image from "next/image";
import deleteBtn from "@/public/images/delete.png";
import updateBtn from "@/public/images/update.png";
// essentials import
import products from "@/public/products.json";
import { useContext } from "react";
import { AuthContext } from "@/app/context/AuthProvider";

// this is a dynamically route page
const ProductDetails = ({ params }) => {
  const { id } = params; // getting id from ProductCard component
  // finiding specific product from all products based on productIs
  const productInfo = products.find(
    (product) => product.productId === parseInt(id)
  );

  // getting user's from AuthProvider component
  const { users, currentUserEmail } = useContext(AuthContext);
  // console.log(users);

  // find out current user role
  const currentUserRole = users.find(
    (user) => user.email === currentUserEmail
  )?.role;

  return (
    <>
      <section className="mx-6 lg:mx-24 my-12 py-6 flex justify-center items-center p-6 bg-base-100 rounded-sm shadow-lg">
        <div>
          <div className="flex flex-col md:justify-evenly md:flex-row gap-10">
            <div className="md:w-1/2">
              <div className="flex justify-center items-center m-6 shadow-2xl rounded bg-white">
                <Image
                  className=""
                  src={productInfo.productImage}
                  alt={productInfo.productName}
                  width={300}
                  height={200}
                />
              </div>
            </div>
            <div className="md:w-1/2  text-sm mt-6 text-[#0f172a]">
              <div className="flex justify-between">
                <h1 className="text-[#3d2d2d] text-2xl font-bold uppercase mb-3">
                  {productInfo.productName}
                </h1>
                {/* based on user role this portion will show -- only admin can see delete and updat button */}
                <div>
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
                        <Image
                          className="w-6 h-6"
                          src={deleteBtn}
                          alt="Delete"
                        />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-sm mb-3">
                <span className="font-bold">Ingredients:</span>{" "}
                {productInfo.productIngredients}
              </p>

              <p className="font-bold text-sm mb-3">
                Price: ${productInfo.price}
              </p>
              <p className="text-justify mb-6 font-medium">
                {productInfo.productDescription}
              </p>
              <p className="text-center mb-2 font-semibold text-[#d6904b]">
                --- Origin History ---
              </p>
              <p className="text-justify italic font-semibold">
                {productInfo.originHistory}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
