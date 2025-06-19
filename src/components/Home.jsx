import React from "react";
import SwiperSlider from "./SideCompnents/SwiperSlider";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();  

  const categories = [
    { name: "Women's Fashion", page: "wfashion" },
    { name: "Men's Fashion", page: "mfashion" },
    { name: "Laptops", page: "laptops" },
    { name: "Groceries", page: "groceries" },
    { name: "Womens Jewellery", page: "womens-jewellery" },
    { name: "Furniture", page: "furniture" },
    { name: "Fragrances", page: "fragrances" },
    { name: "Smartphones", page: "smartphones" },
    { name: "Tablets", page: "tablets" },
  ];

  const clickHandler = (page) => {
    console.log("Clicked category:", page);
    navigate(`/${page}`);  
  };

  return (
    <div id="home" className="mt-7 md:grid md:grid-cols-12 p-5 gap-6">
      {/* Categories panel */}
      <div className="hidden md:block col-span-4 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-[#4f39f6]">
          Categories
        </h2>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-3 rounded-md cursor-pointer transition-all duration-300 bg-indigo-100 text-indigo-700 hover:bg-gray-100"
              onClick={() => clickHandler(category.page)}
            >
              <span className="flex items-center">{category.name}</span>
              <FaChevronRight className="transition-transform duration-300 hover:translate-x-1" />
            </li>
          ))}
        </ul>
      </div>

      {/* Swiper Slider */}
      <div className="md:col-span-8 flex justify-center items-center">
        <SwiperSlider />
        
      </div>
    </div>
  );
}

export default Home;
