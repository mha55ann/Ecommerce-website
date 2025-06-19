import React from "react";
import { useContextApi } from "./ContextApi";
import Rating from "./SideCompnents/Rating";
import { useNavigate } from "react-router-dom"; // ✅ Corrected import

function Women_fashion() {
  const navigate = useNavigate();
  const { womenData, womenError, womenLoading, addToCart } = useContextApi();

  const handleClick = (id) => {
    navigate("/details", {
      state: { array: womenData.filter((item) => item.id === id) },
    });
  };

  const handleCartClick = (e, id) => {
    e.stopPropagation(); // ✅ Prevents navigation to details
    addToCart(womenData.find((item) => item.id === id));
    navigate("/cart", {
      state: { array: womenData.filter((item) => item.id === id) },
    });
  };

  if (womenLoading) {
    return (
      <p className="text-center text-xl font-semibold animate-pulse">
        Loading...
      </p>
    );
  }

  if (womenError) {
    return (
      <p className="text-center text-xl font-semibold text-red-500">
        Error: {womenError.message}
      </p>
    );
  }

  return (
    <div className="bg-[#e9ebee] py-10">
      <h1 className="text-3xl font-bold text-[#4f39f6] mb-8 text-center">
        Women's Fashion
      </h1>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {womenData.map((product) => (
          <div
            key={product.id}
            onClick={() => handleClick(product.id)}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl w-70"
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
                <Rating rating={product.rating} />
                <span className="text-sm text-gray-500">
                  ({product.rating})
                </span>
              </div>
              
              <button
                onClick={(e) => handleCartClick(e, product.id)} // ✅ Fix: pass `e`
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

export default Women_fashion;
