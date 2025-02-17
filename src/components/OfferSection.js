import React from "react";
const OfferSection = () => {
    return (
        <div className="bg-black items-center space-x-4 just py-3 text-center flex text-xl px-[200px]">
            <div className='flex items-center w-1/3'>
                <img className='w-13 h-8 mr-2' src='/images/Black.png' />
                <span className='text-[15px] text-white'>Friday</span>
            </div>
            <div className="text-white flex w-1/3 justify-center items-center">
                <span className="text-sm mr-1">
                    Up to
                </span>
                <span className="font-bold text-2xl text-yellow-500">59% </span>
                <span className="text-sm ml-1">
                    OFF
                </span>
            </div>
            <div className="flex w-1/3 justify-end h-7 items-center justify-center ">
                <button className="px-4 py-4 flex bg-[#EBC80C] h-full text-black text-xs items-center cursor-pointer"> Shop Now <img className="ml-1 w-4 h-3" src="/images/ArrowRight.png" /></button>
            </div>
        </div>
    );
};

export default OfferSection;
