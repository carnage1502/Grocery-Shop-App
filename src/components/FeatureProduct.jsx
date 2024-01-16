import Product from "./Product";

const productData = [
  {
    img: "/product-1.jpg",
    name: "Organic Bartlett Pear",
    price: "₹100",
  },
  {
    img: "/product-2.jpg",
    name: "Organic Strawberries, 1 1b",
    price: "₹120",
  },
  {
    img: "/product-3.jpg",
    name: "Blueberry Organic, 6 ounce",
    price: "₹110",
  },
  {
    img: "/product-4.jpg",
    name: "Kiwi Organic, 1 each",
    price: "₹200",
  },
  {
    img: "/product-5.jpg",
    name: "Organic Banana",
    price: "₹250",
  },
  {
    img: "/product-6.jpg",
    name: "McCormick Gourmet Orange",
    price: "₹300",
  },
  {
    img: "/product-7.jpg",
    name: "Organic Broccoli, 1 1b",
    price: "₹250",
  },
  {
    img: "/product-8.jpg",
    name: "Blueberry Organic, 6 ounce",
    price: "₹350",
  },
  {
    img: "/product-9.jpg",
    name: "Dried Pineapple Fruit Bar",
    price: "₹150",
  },
  {
    img: "/product-10.jpg",
    name: "Holiday Nuts Gift Basket",
    price: "₹450",
  },
];

const FeatureProduct = () => {
  return (
    <div className="pt-20 ">
      <div className="container">
        <div className="sm:flex justify-between items-center">
          <div className="text-xl md:text-4xl pb-4 sm:pb-0">
            Feature Product
          </div>
          <div className="flex gap-8 items-center text-[14px] md:text-lg">
            <button className="border-b  border-[#000]">Best Seller</button>
            <button className="border-b  border-[#000]">Most Popular</button>
          </div>
        </div>

        {/* Grid */}

        <div className="pt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {productData.map((product) => (
            <Product
              key={product.name}
              img={product.img}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
