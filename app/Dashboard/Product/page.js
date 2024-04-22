import products from "@/public/products.json";
import ProductCard from "./ProductCard/ProductCard";

const Product = () => {
  return (
    <>
      <section className="mx-2 lg:mx-12 py-12">
        <div className="text-center">
          <h1 className="font-bold text-lg md:text-2xl xl:text-3xl text-[#3d2d2d] uppercase">
            Find Your Favorite Cup
          </h1>
          <h6 className="text-xs uppercase text-[#d6904b] mt-2">
            --- Sip and Enjoy ---
          </h6>
        </div>
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
