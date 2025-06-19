import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim()) {
      navigate(`/search?q=${encodeURIComponent(inputValue.trim())}`);
      setInputValue("");
      scrollToTop();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClicked = (path) => {
    navigate(`/${path}`);
    setToggle(false);
    scrollToTop();
  };

  return (
    <>
      {/* Navbar Container - Sticky */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-12 md:py-4 p-3 items-center">
          {/* Logo */}
          <div
            onClick={() => handleClicked("")}
            className="col-span-1 text-xl md:col-span-3 font-bold lg:text-3xl md:text-2xl text-indigo-600 cursor-pointer"
          >
            Exclusive
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-3xl col-span-1 flex justify-end">
            <TiThMenu
              onClick={() => setToggle(!toggle)}
              className="cursor-pointer text-gray-600 hover:text-indigo-600 transition-colors"
            />
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:block col-span-5">
            <ul className="flex gap-5 text-lg lg:gap-8 lg:text-xl">
              {["Home", "Contact", "About", "Sign up"].map((item) => {
                const path =
                  item === "Home"
                    ? ""
                    : item.toLowerCase().replace(/\s+/g, "-");
                return (
                  <li
                    key={item}
                    onClick={() => handleClicked(path)}
                    className="cursor-pointer hover:text-indigo-600 transition-colors relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Search + Cart */}
          <div className="hidden md:flex col-span-4 gap-5 items-center">
            <div className="relative flex-grow">
              <IoSearchSharp className="absolute text-2xl left-3 top-2 text-gray-400" />
              <input
                className="border-2 border-gray-300 p-2 pl-10 pr-5 rounded-full w-full focus:outline-none focus:border-indigo-500 transition-colors"
                type="text"
                value={inputValue}
                placeholder="What are you looking for?"
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <Link to="/cart">
              <BsCart2 className="text-2xl cursor-pointer text-gray-600 hover:text-indigo-600 transition-colors" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {toggle && (
        <div className="fixed top-[72px] left-0 w-full bg-white shadow-md md:hidden z-40">
          <ul className="text-xl">
            {["Home", "Contact", "About", "Sign up"].map((item, index) => {
              const path =
                item === "Home" ? "" : item.toLowerCase().replace(/\s+/g, "-");
              return (
                <div key={item}>
                  <li
                    onClick={() => handleClicked(path)}
                    className="cursor-pointer hover:bg-indigo-50 p-4 transition-colors"
                  >
                    {item}
                  </li>
                  {index < 3 && <hr className="border-gray-200" />}
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
