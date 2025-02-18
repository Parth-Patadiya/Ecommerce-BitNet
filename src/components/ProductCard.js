import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";
import { Heart, ShoppingCart, Eye } from "lucide-react";

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();

  const truncateTitle = (title, wordLimit) => {
    const words = title.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : title;
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div
      className="relative border border-gray-200 rounded-sm overflow-hidden p-4 shadow-md hover:shadow-xl transition duration-300 bg-white cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {product.discount && (
        <span className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-sm shadow-md">
          {product.discount}% OFF
        </span>
      )}

      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-44 object-contain mt-2 transition-transform duration-300 hover:scale-105" />

        {/* Hover Icons */}
        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/50 transition-opacity duration-300">
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-[#FA8232] hover:text-white transition cursor-pointer">
              <Heart className="w-5 h-5 hover:text-white" />
            </button>
            <button
              className="bg-white p-2 rounded-full shadow-md hover:bg-[#FA8232] hover:text-white transition cursor-pointer"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-5 h-5 hover:text-white" />
            </button>
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-[#FA8232] hover:text-white transition cursor-pointer">
              <Eye className="w-5 h-5 hover:text-white" />
            </button>
          </div>
        )}
      </div>

      {/* Product Details */}
      <h3 className="text-sm text-gray-900 font-semibold mt-3 h-10 truncate">
        {truncateTitle(product.title, 5)}
      </h3>
      <p className="text-blue-500 font-bold text-lg">${product.price}</p>
    </div>
  );
};

export default ProductCard;
