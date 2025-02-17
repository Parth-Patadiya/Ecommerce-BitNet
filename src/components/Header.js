import React from "react";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { selectCartCount } from "../redux/slice/cartSlice";
import { Link } from "react-router-dom";
const Header = () => {
  const cartCount = useSelector(selectCartCount);
  return (
    <div className="bg-[#1B6392] sticky top-0 z-2 items-center space-x-4 just py-3 text-center flex text-xl px-[200px]">
      <div className='flex items-center w-1/3'>
        <Link to="/" className="relative"><img className="w-30 cursor-pointer" src="/images/Logo.png" /></Link>
      </div>
      <div className="text-black w-[70%] flex  justify-center items-center">
        <SearchBar placeholder="Search for anything..." />
      </div>
      <div className="flex w-1/3 justify-end h-7 items-center justify-center">
        <div className="flex items-center space-x-6">
          <Link to="/cart" className="relative">
            <div className="relative cursor-pointer">
              <img className="w-5" src="/images/Cart.png" />
              {cartCount >= 0 && (
                <span className="absolute -top-1 -right-2 bg-white text-[#1B6392] text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>
          <img className="w-5 cursor-pointer" src="/images/Heart.png" />
          <img className="w-5 cursor-pointer" src="/images/User.png" />
        </div>
      </div>
    </div>
  );
};

export default Header;
