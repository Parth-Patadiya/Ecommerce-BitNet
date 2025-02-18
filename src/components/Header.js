import React from "react";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { selectCartCount } from "../redux/slice/cartSlice";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, User, UserRound } from "lucide-react";

const Header = () => {
  const cartCount = useSelector(selectCartCount);

  return (
    <div className="bg-[#1B6392] sticky top-0 z-10 flex flex-col md:flex-row items-center py-3 px-4 md:px-10 lg:px-20 space-y-4 md:space-y-0">
      {/* Logo Section */}
      <div className="flex items-center justify-center md:justify-start w-full md:w-1/3">
        <Link to="/" className="relative">
          <img className="w-24 md:w-30 cursor-pointer" src="/images/Logo.png" alt="Logo" />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="w-full md:w-[50%] flex justify-center">
        <SearchBar placeholder="Search for anything..." />
      </div>

      {/* Icons Section */}
      <div className="flex w-full md:w-1/3 justify-center md:justify-end space-x-6 items-center">
        <Link to="/cart" className="relative">
          <div className="relative cursor-pointer">
          <ShoppingCart className="w-5 h-5 text-white cursor-pointer" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-white text-[#1B6392] text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </Link>
        <Heart className="w-5 h-5 text-white cursor-pointer" />
        <UserRound className="w-5 h-5 text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
