import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function Rating({ rating }) {
  return (
    //dive for Display rating stars based on the given rating value
    <div className="flex">
    {/* render based on the conditioni */}
      {Array.from({ length: 5 }, (_, index) =>
        rating >= index + 1 ? (
          <FaStar key={index} className="text-yellow-400" />
        ) : rating >= index + 0.5 ? (
          <FaStarHalfAlt key={index} className="text-yellow-400" />
        ) : (
          <FaStar key={index} className="text-gray-300" />
        )
      )}
      <div className="text-gray-500 ml-2 mt-[-4px]">({rating})</div>
    </div>
  );
}

export default Rating;
