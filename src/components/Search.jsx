import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Rating from "./SideCompnents/Rating";
import { useContextApi } from "./ContextApi";

function Search() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";
  const navigate = useNavigate();

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContextApi();

  // Fetch search results
  useEffect(() => {
    if (query) {
      fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setResults(data.products || []);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }
  }, [query]);

  const handleClick = (id) => {
    const selected = results.filter((item) => item.id === id);
    navigate("/details", {
      state: { array: selected },
    });
  };

  const handleCartClick = (e, id) => {
    e.stopPropagation(); // prevent card click
    const product = results.find((item) => item.id === id); // ✅ find product
    addToCart(product);
    if (product) {
      // You can connect this with context's addToCart if needed
      navigate("/cart", {
        state: { array: [product] },
      });
    }
  };

  if (loading) {
    return (
      <p className="text-center text-xl font-semibold animate-pulse">
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-xl font-semibold text-red-500">
        Error: {error.message}
      </p>
    );
  }

  return (
    <div className="bg-[#e9ebee] py-10">
      <h1 className="text-3xl font-bold text-[#4f39f6] mb-8 text-center">
        Search Results for: "{query}"
      </h1>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {results.length > 0 ? (
          results.map((product) => (
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
          ))
        ) : (
          <p className="text-center text-lg font-medium text-gray-600">
            No results found for "{query}".
          </p>
        )}
      </div>
    </div>
  );
}

export default Search;
