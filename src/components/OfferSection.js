import React from "react";

const OfferSection = () => {
    return (
        <div className="bg-black flex flex-col md:flex-row items-center justify-between text-center text-xl px-4 md:px-20 py-3 space-y-3 md:space-y-0">
            {/* Left Section */}
            <div className="flex items-center w-full md:w-1/3 justify-center md:justify-start">
                <img className="w-10 h-6 mr-2" src="/images/Black.png" alt="Black Friday" />
                <span className="text-[15px] text-white">Friday</span>
            </div>

            {/* Center Section */}
            <div className="text-white flex w-full md:w-1/3 justify-center items-center">
                <span className="text-sm mr-1">Up to</span>
                <span className="font-bold text-2xl text-yellow-500">59%</span>
                <span className="text-sm ml-1">OFF</span>
            </div>

            {/* Right Section */}
            <div className="flex w-full md:w-1/3 justify-center md:justify-end">
                <button className="px-4 py-2 flex bg-[#EBC80C] text-black text-xs items-center cursor-pointer rounded-md hover:bg-yellow-400 transition">
                    Shop Now
                    <img className="ml-2 w-4 h-3" src="/images/ArrowRight.png" alt="Arrow" />
                </button>
            </div>
        </div>
    );
};

export default OfferSection;
