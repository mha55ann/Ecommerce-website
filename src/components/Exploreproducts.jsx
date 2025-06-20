import React from "react";
import { useContextApi } from "./ContextApi";
import Rating from "./SideCompnents/Rating";
import { useNavigate } from "react-router";

function ExploreProducts() {
  const { categoriesData, categoriesError, categoriesLoading, addToCart } =
    useContextApi();
  const navigate = useNavigate();

  const products = categoriesData?.products; // safely access the products array

  const handleClick = (id) => {
    const selectedProduct = products?.find((item) => item.id === id);
    if (selectedProduct) {
      navigate("/details", {
        state: { array: [selectedProduct] },
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleCartClick = (e, id) => {
    e.stopPropagation(); // Prevents navigation to details
    const product = products.find((item) => item.id === id);
    if (product) {
      // Assuming addToCart is a function in your context to handle adding items to the cart
      addToCart(product);
      navigate("/cart", {
        state: { array: [product] },
      });
    }
  };

  if (categoriesLoading) {
    return (
      <p className="text-center text-xl font-semibold animate-pulse">
        Loading...
      </p>
    );
  }

  if (categoriesError) {
    return (
      <p className="text-center text-red-600 font-bold text-xl">
        Error: {categoriesError.message}
      </p>
    );
  }

  if (!Array.isArray(products)) {
    return (
      <p className="text-center text-red-600 font-bold text-xl">
        Invalid data format received. Please try again later.
      </p>
    );
  }

  if (products.length === 0) {
    return (
      <p className="text-center text-lg text-gray-600">
        No products available at the moment.
      </p>
    );
  }

  return (
    <div className="bg-[#e9ebee] py-10">
      <h1 className="text-3xl font-bold text-[#4f39f6] mb-8 text-center">
        Explore Our Products
      </h1>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {products.map((product) => (
          <div
            onClick={() => handleClick(product.id)}
            key={product.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl w-70 cursor-pointer"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-52 object-contain p-4"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1 truncate">
                {product.title}
              </h2>
              <p className="text-gray-700 mb-1 text-lg font-medium">
                ${product.price}
              </p>
              <div className="flex items-center justify-between mb-4">
                <Rating rating={product.rating} />{" "}
                {/* assuming rating is a number now */}
                <span className="text-sm text-gray-500">
                  ({product.reviews?.length ?? 0} reviews)
                </span>
              </div>
              <button
                onClick={(e) => handleCartClick(e, product.id)}
                className="w-full bg-[#4f39f6] text-white px-4 py-2 rounded hover:bg-[#3d2bc7] transition font-semibold"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreProducts;
