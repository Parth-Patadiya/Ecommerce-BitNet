import React from "react";
import Dropdown from "./DropDown";
const Navbar = () => {
    return (
        <nav className="w-full h-[80px] p-4 flex justify-between items-center px-[200px]">
            <div className="flex justify-between w-full">
                <div className="flex">

                    <div className="bg-gray-200 px-[24px] py-[12px]">
                        <Dropdown
                            title="All Catagory"
                            options={["Game", "SmartPhone", "Camera", "TV"]}
                            textColor="gray-500"
                        />
                    </div>
                    <div className="text-gray-500 items-center flex px-[14px] py-[12px] text-xs cursor-pointer">
                        <img className="w-[20px] h-[20px] mr-1" src="images/MapPinLine.png" /> Track Order
                    </div>
                    <div className="text-gray-500 items-center flex px-[14px] py-[12px] text-xs cursor-pointer">
                        <img className="w-[20px] h-[20px] mr-1" src="images/Clock.png" /> Compare
                    </div>
                    <div className="text-gray-500 items-center flex px-[14px] py-[12px] text-xs cursor-pointer">
                        <img className="w-[20px] h-[20px] mr-1" src="images/Headphones.png" /> Customer Support
                    </div>
                    <div className="text-gray-500 items-center flex px-[14px] py-[12px] text-xs cursor-pointer">
                        <img className="w-[20px] h-[20px] mr-1" src="images/Info.png" /> Need Help
                    </div>
                </div>
                <div className="flex px-[24px] py-[12px] items-center cursor-pointer">
                    <img className="w-[20px] h-[20px] mr-1" src="images/call.png" /> +1-202-555-0104

                </div>
            </div>

        </nav>
    );
};

export default Navbar;
