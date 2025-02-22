import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
function Navbar() {
  const [toggle, settoggle] = useState(false);
  const Handelonclick = () => {
    settoggle(!toggle);
  };
  return (
    <>
      {/* container for navigation */}
      <div className="grid grid-cols-2 md:grid-cols-12 md:mt-10 md:ml-15 p-2 ">
        {/* logo or main text of  container */}

        <div className="col-span-1 md:col-span-3 font-bold text-3xl  ">
          Exclusive
        </div>
        {/* menu iocon for mobile */}
        <div className="md:hidden text-3xl col-span-1 flex justify-end ">
          <TiThMenu onClick={Handelonclick} />
        </div>
        {/* navbar items*/}
        <div className=" hidden md:block col-span-5">
          <ul className="flex gap-20 text-2xl">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign up</li>
          </ul>
        </div>
        {/* searching & cart & faverouts  */}
        <div className="hidden  col-span-4 md:flex gap-5">
          {/* search here */}
          <IoSearchSharp className="text-2xl relative left-12 top-[6px] " />
          <input
            className="border-2 w-fit p-1 pl-8 pr-5 rounded-sm"
            type="text"
            placeholder="What are you looking for?"
          />
          {/* add to faverouit */}
          <FaRegHeart className="text-2xl mt-2" />
          {/* cart icon go to cart */}
          <BsCart2 className="text-2xl mt-2" />
        </div>
      </div>
      {/* nav items for mobile */}
      {toggle && (
        <div className="  w-full font-semibold ">
          <ul className="text-2xl text-center flex flex-col gap-2">
            <hr />
            <li>Home</li>
            <hr />
            <li>Contact</li>
            <hr />
            <li>About</li>
            <hr />
            <li>Sign up</li>
            <hr />
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
