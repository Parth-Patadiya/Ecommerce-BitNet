import React, { useState } from "react";
import Dropdown from "./DropDown";
import { Menu, X, MapPin, Clock, Headphones, Info, Phone } from "lucide-react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full h-auto md:h-[60px] p-4 flex justify-between items-center px-4 md:px-10 lg:px-20 bg-white shadow-md relative">
            {/* Left Section */}
            <div className="flex items-center">
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 mr-4"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Category Dropdown (Only visible on desktop) */}
                <div className="hidden md:block bg-gray-200 rounded-sm">
                    <Dropdown
                        title="All Category"
                        options={["Game", "SmartPhone", "Camera", "TV"]}
                        textColor="gray-500"
                        d_padding="px-4"
                    />
                </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-x-4 text-gray-500 text-xs">
                <div className="flex items-center cursor-pointer">
                    <MapPin size={16} className="mr-1" />
                    Track Order
                </div>
                <div className="flex items-center cursor-pointer">
                    <Clock size={16} className="mr-1" />
                    Compare
                </div>
                <div className="flex items-center cursor-pointer">
                    <Headphones size={16} className="mr-1" />
                    Customer Support
                </div>
                <div className="flex items-center cursor-pointer">
                    <Info size={16} className="mr-1" />
                    Need Help
                </div>
            </div>

            {/* Contact Section (Desktop) */}
            <div className="hidden md:flex items-center cursor-pointer">
                <Phone size={16} className="mr-1" />
                <span className="text-gray-500 text-xs">+1-202-555-0104</span>
            </div>

            {/* Mobile Menu (Dropdown) */}
            {menuOpen && (
                <div className="absolute top-14 left-0 w-full bg-white shadow-md flex flex-col p-4 space-y-4 text-gray-700 md:hidden transition-all duration-300">
                    <Dropdown
                        title="All Category"
                        options={["Game", "SmartPhone", "Camera", "TV"]}
                        textColor="gray-700"
                    />
                    <div className="flex flex-col space-y-3 text-sm">
                        <div className="flex items-center cursor-pointer">
                            <MapPin size={18} className="mr-2" />
                            Track Order
                        </div>
                        <div className="flex items-center cursor-pointer">
                            <Clock size={18} className="mr-2" />
                            Compare
                        </div>
                        <div className="flex items-center cursor-pointer">
                            <Headphones size={18} className="mr-2" />
                            Customer Support
                        </div>
                        <div className="flex items-center cursor-pointer">
                            <Info size={18} className="mr-2" />
                            Need Help
                        </div>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <Phone size={18} className="mr-2" />
                        <span className="text-gray-700 text-sm">+1-202-555-0104</span>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
