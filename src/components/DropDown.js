import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Dropdown = ({ title, options, textColor = "text-gray-500", d_padding }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center justify-center ${textColor} text-sm py-2 rounded-lg transition duration-200 ${d_padding}`}
      >
        {title}
        <ChevronDown
          className={`w-5 h-5 ml-2 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md transition-all duration-200 overflow-hidden ${
          isOpen ? "opacity-100 visible scale-100 z-11" : "opacity-0 invisible scale-95"
        }`}
      >
        <ul className="py-2 text-gray-800">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-150"
              onClick={() => setIsOpen(false)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
