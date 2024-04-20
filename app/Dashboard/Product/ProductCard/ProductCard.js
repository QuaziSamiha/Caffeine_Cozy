import Image from "next/image";
import deleteBtn from '@/public/images/delete.png'
import updateBtn from '@/public/images/update.png'

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <>
      <div className="mx-6">
        <div className="flex justify-evenly items-center bg-base-100 shadow-xl h-44">
          <figure className="w-1/3">
            <Image
              className="w-32 h-36"
              src={product.productImage}
              alt={product.productName}
            />
          </figure>
          <div className="w-2/3 mr-3">
            <h2 className="text-[#3d2d2d] text-lg font-bold uppercase mb-2">{product.productName}</h2>
            <p className="text-xs text-[#0f172a] text-justify">{product.productDescription}</p>
            <p>{product.productPrice}</p>
            <div className="flex justify-between items-center mt-3">
              <div>
                <button className="bg-[#fce1c3] text-[#3d2d2d] px-3 py-1 rounded border-b-2 border-[#3d2d2d] text-sm font-semibold">Details</button>
              </div>
              <div className="flex">
                <button><Image className="w-6 h-6 mr-2" src={updateBtn} alt="Update"/></button>
                <button><Image className="w-6 h-6" src={deleteBtn} alt="Delete"/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
