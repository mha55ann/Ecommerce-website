import React from "react";
import { useContextApi } from "./ContextApi";
import Rating from "./SideCompnents/Rating";
import { useNavigate } from "react-router";

function Tablets() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate("/details", {
      state: { array: tabletsData.filter((item) => item.id === id) },
    });
  };
  const { tabletsData, tabletsError, tabletsLoading, addToCart } =
    useContextApi();

  const handleCartClick = (e, id) => {
    e.stopPropagation(); // Prevents navigation to details
    const product = tabletsData.find((item) => item.id === id);
    if (product) {
      addToCart(product);
      navigate("/cart", {
        state: { array: tabletsData.filter((item) => item.id === id) },
      });
    }
  };
  if (tabletsLoading) {
    return (
      <p className="text-center text-xl font-semibold animate-pulse">
        Loading...
      </p>
    );
  }

  if (tabletsError) {
    return (
      <p className="text-center text-xl font-semibold text-red-500">
        Error: {tabletsError.message}
      </p>
    );
  }

  return (
    <div className="bg-[#e9ebee] py-10">
      <h1 className="text-3xl font-bold text-[#4f39f6] mb-8 text-center">
        Tablets Collection
      </h1>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {tabletsData.map((product) => (
          <div
            onClick={() => handleClick(product.id)}
            key={product.id}
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

export default Tablets;
