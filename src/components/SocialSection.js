import React from "react";
import Dropdown from "./DropDown";
const SocialSection = () => {
  return (
    <nav className="bg-[#1B6392] w-full p-4 flex justify-between items-center text-white px-[200px] border-b border-white">
      <div className="flex justify-between w-full">
        <span className="text-sm ">
          Welcome to Clicon online eCommerce store.
        </span>
        <div className="flex items-center">
          <div className="flex items-center justify-end border-r pr-10 mr-10 border-white">Follwo us: <img className="ml-2 h-[13px]" src="/images/Social Icon.png" />
          </div>
          <div className="flex justify-end">
          </div>
          <Dropdown
            title="Eng"
            options={["Eng", "Spn", "Fre", "Ger"]}
            textColor="white"
          />
          <Dropdown
            title="USD"
            options={["USD", "EUR", "GBP", "JPY"]}
            textColor="white"
          />
        </div>
      </div>
    </nav>
  );
};

export default SocialSection;
