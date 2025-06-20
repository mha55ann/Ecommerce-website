import React, { useRef } from "react";
import { useContextApi } from "./ContextApi";
import Rating from "./SideCompnents/Rating";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"; // ✅ Correct import

function SaleItem() {
  const { data, error, isLoading, addToCart } = useContextApi();
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = (id) => {
    const selectedProduct = data.products.find((item) => item.id === id);
    navigate("/details", { state: { array: [selectedProduct] } });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCartClick = (e, id) => {
    e.stopPropagation(); // Prevents navigation to details
    const selectedProduct = data.products.find((item) => item.id === id);
    addToCart(selectedProduct);
    navigate("/cart", {
      state: { array: [selectedProduct] },
    });
  };

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      const scrollOptions = {
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      };
      scrollRef.current.scrollBy(scrollOptions);
    }
  };

  if (isLoading) {
    return (
      <p className="text-center text-xl font-semibold animate-pulse">
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-600 font-bold text-xl">
        Error: {error.message}
      </p>
    );
  }

  return (
    <div className="relative py-8 bg-gradient-to-br from-gray-100 to-gray-200">
      <h1 className="text-3xl font-bold text-[#4f39f6] mb-8 text-center">
        Flash Sales
      </h1>

      {/* Arrow Buttons */}
      <button
        onClick={() => handleScroll("left")}
        className="text-[#4f39f6] absolute text-3xl left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 shadow p-2 rounded-full hover:scale-110 transition z-10"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={() => handleScroll("right")}
        className="text-[#4f39f6] absolute text-3xl right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 shadow p-2 rounded-full hover:scale-110 transition z-10"
      >
        <FaChevronRight />
      </button>

      {/* Product List */}
      <div
        ref={scrollRef}
        className="scrollbar-hide overflow-x-auto overflow-y-hidden px-4"
      >
        <div className="flex flex-row gap-8 whitespace-nowrap">
          {data.products.map((product) => (
            <div
              key={product.id}
              onClick={() => handleClick(product.id)}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl min-w-[260px]"
            >
              <span className="bg-indigo-600 py-2 px-4 relative m-2 top-4 left-2.5 text-white rounded-full font-bold text-sm">
                {Math.round(product.discountPercentage)}% OFF
              </span>

              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-6">
                <h2 className="text-xl font-bold text-[#4f39f6] mb-3 truncate">
                  {product.title}
                </h2>

                <h1 className="line-through font-medium text-gray-500">
                  $
                  {(
                    product.price /
                    (1 - product.discountPercentage / 100)
                  ).toFixed(2)}
                </h1>

                <p className="text-3xl font-extrabold text-gray-800 mb-3">
                  ${product.price}
                  <span className="text-sm font-normal text-gray-500 ml-2">
                    USD
                  </span>
                </p>

                <div className="flex items-center mb-4">
                  <Rating rating={product.rating} />
                </div>

                <button
                  onClick={(e) => handleCartClick(e, product.id)}
                  className="w-full bg-[#4f39f6] text-white py-3 rounded-lg font-semibold hover:bg-[#3d2bc7] transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4f39f6] focus:ring-opacity-50"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SaleItem;
