import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const Dropdown = ({ title, options, textColor }) => {
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
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center text-${textColor} text-sm pl-3 cursor-pointer`}
      >
        {title}
        <ChevronDownIcon
          className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : "rotate-0"
            }`}
        />
      </button>

      {isOpen && (
        <div className="absolute mt-2 bg-white z-1">
          <ul className="py-2 text-gray-800">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
