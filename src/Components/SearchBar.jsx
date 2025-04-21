import React from "react";
import amazonLogo from "../assets/Amazon-logo.jpg";
import { IoLocationOutline } from "react-icons/io5";
import GameZone from "./GameZone";
import { IoMdSearch } from "react-icons/io";
import ReactCountryFlag from "react-country-flag";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const cartProduct=useSelector((state) => state.cart);
  return (
    <div className="flex bg-[#131921] text-white h-16 w-full items-center justify-between px-4">
      {/* upper section */}
      <div className="flex h-auto w-auto">
        <div className="flex items-center">
          <img src={amazonLogo} alt="Amazon Logo" className="h-12 w-22" />
          <h3 className="ml-1 text-lg">.in</h3>
        </div>

        <div className="flex items-center space-x-2 m-8">
          <IoLocationOutline className="text-xl" />
          <div className="leading-tight">
            <h4 className="text-sm text-gray-300">Deliver to Client</h4>
            <h1 className="text-md font-semibold">Sara indu...274021</h1>
          </div>
        </div>
      </div>

      {/* mid section */}
      <div className="flex items-center border border-orange-400 rounded-md bg-white w-full max-w-xl">
        <GameZone />

        <input
          type="text"
          placeholder="Search Amazon.in"
          className="flex-1 p-2 outline-none text-black placeholder-gray-500"
        />

        <button className="p-2.5 bg-orange-400 rounded-r-md hover:bg-orange-500 transition duration-200">
          <IoMdSearch className="text-black text-xl" />
        </button>
      </div>

      {/* Right Section: (placeholder) */}
      <div className="flex items-center space-x-4">
        <div className="flex flex-col items-center">
          {/* Corrected flex-col instead of flex-cloumn */}
          <div className="flex flex-col items-center">
            <ReactCountryFlag
              countryCode="IN"
              svg
              style={{
                width: "2em",
                height: "2em",
              }}
              title="US"
            />
            <h1>EN</h1>
          </div>
        </div>

        <div className="flex flex-col">
          <h5 className="text-gray-300">Hello, Karunakar</h5>
          <h1 className="font-bold">Accounts &amp; Lists</h1>
        </div>

        <div className="flex flex-col">
          <h5 className="text-gray-300">Returns</h5>
          <h1 className="font-bold">&amp; Orders</h1>
        </div>

        <div className="text-center">
        <Link to='/cart'>
        <h1 >{cartProduct.length}</h1>
          <div className="text-2xl">
            <LuShoppingCart />
          </div>
        </Link>
          
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
