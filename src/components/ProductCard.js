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
      className="relative border border-gray-100 mb-5 p-4 shadow-md hover:shadow-lg transition"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {product.discount && (
        <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
          {product.discount}% OFF
        </span>
      )}
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-40 object-contain mt-2" />

        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/50 transition-opacity">
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-[#FA8232] hover:text-white cursor-pointer">
              <Heart className="w-5 h-5 text-black-500" />
            </button>
            <button
              className="bg-white p-2 rounded-full shadow-md hover:bg-[#FA8232] hover:text-white cursor-pointer"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-5 h-5 text-black-500" />
            </button>
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-[#FA8232] hover:text-white cursor-pointer">
              <Eye className="w-5 h-5 text-black-700" />
            </button>
          </div>
        )}
      </div>

      <h3 className="text-sm text-[#191C1F] font-semibold mt-2 h-10">
        {truncateTitle(product.title, 5)}
      </h3>
      <p className="text-[#2DA5F3] font-bold">${product.price}</p>
    </div>
  );
};

export default ProductCard;
