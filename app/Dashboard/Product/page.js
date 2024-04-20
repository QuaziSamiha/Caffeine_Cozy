import coffee1 from "@/public/images/1.png";
import coffee2 from "@/public/images/2.png";
import coffee3 from "@/public/images/3.png";
import coffee4 from "@/public/images/4.png";
import coffee5 from "@/public/images/5.png";
import coffee6 from "@/public/images/6.png";
import ProductCard from "./ProductCard/ProductCard";

const Product = () => {
  const products = [
    {
      productId: 1,
      productName: "Latte",
      productDescription:
        "Smooth and creamy, our Latte is a perfect harmony of espresso and steamed milk, delivering a delightful balance of flavors with every sip.",
      productImage: coffee1,
      price: 20,
      productIngredients: "Espresso, Steamed Milk",
      originHistory:
        "Originating from Italy, the Latte has become a beloved staple in coffee shops worldwide, known for its comforting and soothing qualities.",
    },
    {
      productId: 2,
      productName: "Mocha",
      productDescription:
        "Indulge in the rich fusion of espresso, steamed milk, and decadent chocolate syrup in our Mocha. It's a luxurious treat that's both comforting and invigorating.",
      productImage: coffee2,
      price: 22,
      productIngredients: "Espresso, Steamed Milk, Chocolate Syrup",
      originHistory:
        "The Mocha traces its roots back to Yemen, where coffee beans were first cultivated. Today, it's celebrated worldwide for its irresistible blend of flavors.",
    },
    {
      productId: 3,
      productName: "Macchiato",
      productDescription:
        "Experience the bold flavors of espresso with just a hint of creamy foam in our Macchiato. It's a powerful yet nuanced coffee that's sure to awaken your senses.",
      productImage: coffee3,
      price: 18,
      productIngredients: "Espresso, Foamed Milk",
      originHistory:
        "Hailing from Italy, the Macchiato has a rich history dating back to the 19th century. It's loved for its simplicity and intense coffee flavor.",
    },
    {
      productId: 4,
      productName: "Espresso",
      productDescription:
        "Our Espresso is a pure and intense coffee experience, with rich flavors and a velvety crema. It's the perfect pick-me-up for coffee enthusiasts.",
      productImage: coffee4,
      price: 16,
      productIngredients: "Espresso",
      originHistory:
        "The Espresso originated in Italy, where it's deeply ingrained in the coffee culture. It's renowned for its strong flavor and quick preparation.",
    },
    {
      productId: 5,
      productName: "Cappuccino",
      productDescription:
        "Indulge in the classic combination of espresso, steamed milk, and airy foam in our Cappuccino. It's a comforting and luxurious coffee that's sure to satisfy.",
      productImage: coffee5,
      price: 21,
      productIngredients: "Espresso, Steamed Milk, Foamed Milk",
      originHistory:
        "With roots in Italy, the Cappuccino has evolved into a beloved coffee worldwide. Its frothy texture and balanced flavors make it a perennial favorite.",
    },
    {
      productId: 6,
      productName: "Americano",
      productDescription:
        "Experience the bold and robust flavors of our Americano, crafted by combining rich espresso with hot water. It's a straightforward yet satisfying coffee choice.",
      productImage: coffee6,
      price: 17,
      productIngredients: "Espresso, Hot Water",
      originHistory:
        "Originating in America, the Americano is a popular choice for those who prefer a strong and straightforward coffee. It's celebrated for its simplicity and versatility.",
    },
  ];

  return (
    <>
      <section className="mx-12 py-12">
        <div className="text-center">
          <h1 className="font-bold text-3xl text-[#3d2d2d] uppercase">
            Find Your Favorite Cup
          </h1>
          <h6 className="text-xs uppercase text-[#d6904b] mt-2">--- Sip and Enjoy ---</h6>
        </div>
        <div className="mt-6">
          <div className="grid grid-cols-2 gap-6">
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
