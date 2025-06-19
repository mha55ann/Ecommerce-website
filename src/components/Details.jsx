import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as faStarSolid,
  faShoppingCart,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { useContextApi } from "./ContextApi"; // Import your context <API>    </API>
function Details() {
  const navigate = useNavigate(); // Initialize useNavigate
  const { addToCart } = useContextApi(); // Assuming you have a context for cart management
  const location = useLocation();
  const array = location.state?.array || [];

  const [selectedImages, setSelectedImages] = useState(
    array.reduce((acc, item, index) => {
      acc[index] = item.images?.[0] || "";
      return acc;
    }, {})
  );

  const handleImageClick = (itemIndex, image) => {
    setSelectedImages((prev) => ({
      ...prev,
      [itemIndex]: image,
    }));
  };
  const handleCartClick = (e, id) => {
    e.stopPropagation();
    const product = array.find((item) => item.id === id);
    if (product) {
      addToCart(product);
      navigate("/cart", {
        state: { array: [product] },
      });
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={i <= rating ? faStarSolid : faStarRegular}
          className="text-yellow-500"
        />
      );
    }
    return stars;
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          {array.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-lg overflow-hidden"
            >
              <div className="md:flex">
                {/* Image Gallery */}
                <div className="md:w-1/2">
                  <div className="relative">
                    <img
                      src={selectedImages[index] || item.images?.[0]}
                      alt={item.title}
                      className="w-full h-96 object-contain"
                    />
                  </div>
                  <div className="flex overflow-x-auto py-2 px-4 scrollbar-hide">
                    {item.images?.map((image, imgIndex) => (
                      <div
                        key={`${index}-${imgIndex}`}
                        onClick={() => handleImageClick(index, image)}
                        className="w-24 h-24 mr-2 last:mr-0 rounded-md overflow-hidden shadow-md cursor-pointer hover:opacity-75 transition-opacity"
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${imgIndex}`}
                          className={`w-full h-full object-cover ${
                            selectedImages[index] === image
                              ? "ring-2 ring-blue-500"
                              : ""
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Details */}
                <div className="md:w-1/2 p-6">
                  <h2 className="text-2xl font-semibold text-[#4f39f6] mb-3">
                    {item.title}
                  </h2>

                  <div className="flex items-center mb-4">
                    <div className="text-yellow-500 mr-2">
                      {renderStars(item.rating)}
                    </div>
                    <span className="text-gray-600 text-sm">
                      ({item.reviews?.length || 0} reviews)
                    </span>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <span className="text-3xl font-bold text-[#4f39f6]">
                        ${item.price.toFixed(2)}
                      </span>
                      {item.discountPercentage && (
                        <span className="ml-2 text-sm text-red-500">
                          -{item.discountPercentage}%
                        </span>
                      )}
                    </div>
                    <span
                      className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${
                        item.stock > 0
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {item.stock > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 mb-6">
                    <div>
                      <strong className="font-medium">Category:</strong>{" "}
                      {item.category}
                    </div>
                    <div>
                      <strong className="font-medium">Brand:</strong>{" "}
                      {item.brand}
                    </div>
                    <div>
                      <strong className="font-medium">Warranty:</strong>{" "}
                      {item.warrantyInformation || "N/A"}
                    </div>
                    <div>
                      <strong className="font-medium">Shipping:</strong>{" "}
                      {item.shippingInformation || "Standard"}
                    </div>
                    <div>
                      <strong className="font-medium">Availability:</strong>{" "}
                      <span
                        className={
                          item.availabilityStatus === "In Stock"
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {item.availabilityStatus || "Unknown"}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={(e) => handleCartClick(e, item.id)}
                      className="flex items-center bg-[#4f39f6] hover:bg-[#3d2bc7] text-white font-semibold py-2 px-4 rounded-md transition-colors"
                    >
                      <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                      Add to Cart
                    </button>
                    <button className="flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition-colors">
                      <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
              <div className="p-6 bg-gray-50">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Customer Reviews
                </h3>
                {item.reviews?.length > 0 ? (
                  <ul className="space-y-4">
                    {item.reviews.map((review, reviewIndex) => (
                      <li
                        key={reviewIndex}
                        className="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-semibold text-gray-800">
                            {review.reviewerName}
                          </div>
                          <div className="text-yellow-500">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">No reviews yet.</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Details;
