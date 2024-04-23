import products from "@/public/products.json";
import ProductCard from "./ProductCard/ProductCard";

const Product = () => {
  return (
    <>
      <section className="mx-2 lg:mx-12 py-6">
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

/**
  {
    "productId": 5,
    "productName": "Cappuccino",
    "productDescription": "Indulge in the classic combination of espresso, steamed milk, and airy foam in our Cappuccino. It's a comforting and luxurious coffee that's sure to satisfy.",
    "productImage": "/images/5.png",
    "price": 21,
    "productIngredients": "Espresso, Steamed Milk, Foamed Milk",
    "originHistory": "With roots in Italy, the Cappuccino has evolved into a beloved coffee worldwide. Its frothy texture and balanced flavors make it a perennial favorite."
  },
  {
    "productId": 6,
    "productName": "Americano",
    "productDescription": "Experience the bold and robust flavors of our Americano, crafted by combining rich espresso with hot water. It's a straightforward yet satisfying coffee choice.",
    "productImage": "/images/6.png",
    "price": 17,
    "productIngredients": "Espresso, Hot Water",
    "originHistory": "Originating in America, the Americano is a popular choice for those who prefer a strong and straightforward coffee. It's celebrated for its simplicity and versatility."
  }
 */
