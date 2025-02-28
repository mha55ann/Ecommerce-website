import React from "react";
import SwiperSlider from "./SideCompnents/SwiperSlider";
import { FaChevronRight } from "react-icons/fa";

function Home() {
  // Array of objects
  const categories = [
    { name: "Women's Fashion", icon: "👚" },
    { name: "Men's Fashion", icon: "👔" },
    { name: "Electronics", icon: "🖥️" },
    { name: "Home & Lifestyle", icon: "🏠" },
    { name: "Medicine", icon: "💊" },
    { name: "Sports & Outdoor", icon: "⚽" },
    { name: "Baby & Toys", icon: "🧸" },
    { name: "Groceries & Pets", icon: "🛒" },
    { name: "Health and Beauty", icon: "💄" },
  ];

  return (
    // Homepage content goes here... this is the main container for the page
    <div className="mt-7 md:grid md:grid-cols-12 p-5 gap-6">
      {/* container for catagaries.....*/}
      <div className="hidden md:block col-span-4 bg-white rounded-lg shadow-md p-6">
        {/* title */}
        <h2 className="text-2xl font-semibold mb-4 text-[#4f39f6]">
          Categories
        </h2>
        <ul className="space-y-2">
          {/* map through the array and display the catagories */}
          {categories.map((category, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-3 rounded-md cursor-pointer transition-all duration-300 bg-indigo-100 text-indigo-700 hover:bg-gray-100"
            >
              {/* display the catagory name and icon */}
              <span className="flex items-center">
                {/* icon */}
                <span className="mr-3 text-xl">{category.icon}</span>
                {/* name */}
                {category.name}
              </span>
              {/* gotocon icon */}
              <FaChevronRight className="transition-transform duration-300   hover:transform translate-x-1" />
            </li>
          ))}
        </ul>
      </div>
      {/* container for the swiper slider */}
      <div className="md:col-span-8 flex justify-center items-center">
        <SwiperSlider />
      </div>
    </div>
  );
}

export default Home;
