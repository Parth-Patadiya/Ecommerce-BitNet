import { SearchIcon } from "@heroicons/react/solid";
const SearchBar = ({ placeholder }) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-4 py-2 pr-10 border rounded-[2px] bg-white placeholder-gray-500 text-xs"
      />
      <SearchIcon className="w-4 h-4 text-black absolute right-3 top-1/2 transform -translate-y-1/2" />
    </div>
  );
};

export default SearchBar;
