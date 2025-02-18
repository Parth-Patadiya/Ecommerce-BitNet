import React from "react";
import Dropdown from "./DropDown";

const SocialSection = () => {
  return (
    <nav className="bg-[#1B6392] w-full overflow-hidden p-3 md:p-4 flex flex-col sm:flex-row justify-between items-center text-white px-4 md:px-10 lg:px-16 border-b border-white">
      {/* Left Side: Welcome Message */}
      <span className="text-sm text-center sm:text-left">
        Welcome to Clicon online eCommerce store.
      </span>

      {/* Right Side: Social Icons & Dropdowns */}
      <div className="flex flex-wrap sm:flex-nowrap items-center mt-2 sm:mt-0">
        {/* Follow Us Section */}
        <div className="flex items-center sm:border-r sm:pr-6 mb-2 sm:mb-0">
          <span>Follow us:</span>
          <img className="ml-2 h-[13px]" src="/images/Social Icon.png" alt="Social Icons" />
        </div>

        {/* Dropdowns */}
        <div className="flex items-center sm:ml-6 space-x-4">
          <Dropdown title="Eng" options={["Eng", "Spn", "Fre", "Ger"]} textColor="white" />
          <Dropdown title="USD" options={["USD", "EUR", "GBP", "JPY"]} textColor="white" />
        </div>
      </div>
    </nav>
  );
};

export default SocialSection;
