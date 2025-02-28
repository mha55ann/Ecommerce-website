import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";

function Navbar() {
  //toggle for mobile devices
  const [toggle, setToggle] = useState(false);
  const handleOnClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {/* Navbar Container */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-12 md:py-4 p-3 items-center">
          {/* Logo or name... */}
          <div className="col-span-1 md:col-span-3 font-bold lg:text-3xl md:text-2xl text-indigo-600">
            Exclusive
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-3xl col-span-1 flex justify-end">
            <TiThMenu
              onClick={handleOnClick}
              className="cursor-pointer text-gray-600 hover:text-indigo-600 transition-colors"
            />
          </div>

          {/* Desktop Navbar Items */}
          <div className="hidden md:block col-span-5">
            <ul className="flex gap-5 text-lg lg:gap-8 lg:text-xl">
              {/* array and its mapping */}
              {["Home", "Contact", "About", "Sign up"].map((item) => (
                //elements
                <li
                  key={item}
                  className="cursor-pointer hover:text-indigo-600 transition-colors relative group"
                >
                  {item}
                  {/* little animation */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Search, Favorites, Cart */}
          <div className="hidden md:flex col-span-4 gap-5 items-center">
            <div className="relative flex-grow">
              {/* search */}
              <IoSearchSharp className="absolute text-2xl left-3 top-2 text-gray-400" />
              <input
                className="border-2 border-gray-300 p-2 pl-10 pr-5 rounded-full w-full focus:outline-none focus:border-indigo-500 transition-colors"
                type="text"
                placeholder="What are you looking for?"
              />
            </div>
            {/* favorites */}
            <FaRegHeart className="text-2xl cursor-pointer text-gray-600 hover:text-indigo-600 transition-colors" />
            {/* cart */}
            <BsCart2 className="text-2xl cursor-pointer text-gray-600 hover:text-indigo-600 transition-colors" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {toggle && (
        <div className="fixed top-[60px] left-0 w-full h-full bg-white shadow-md md:hidden z-10 overflow-y-auto">
          <ul className="text-xl flex flex-col">
            {/* array and its mapping */}
            {["Home", "Contact", "About", "Sign up"].map((item, index) => (
              <div key={item}>
                <li className="cursor-pointer hover:bg-indigo-50 p-4 transition-colors">
                  {/* elemnts displaying */}
                  <a
                    href="#"
                    className="block w-full h-full text-gray-800 hover:text-indigo-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
                {/* lines hr  */}
                {index < 3 && <hr className="border-gray-200" />}
              </div>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
