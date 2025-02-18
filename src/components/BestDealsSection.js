import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const BestDealsSection = () => {
  const [timeLeft, setTimeLeft] = useState(16 * 24 * 3600 + 21 * 3600 + 57 * 60 + 23);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=8")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days}d : ${hours}h : ${minutes}m : ${secs}s`;
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 mt-3 mb-5">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center gap-2">
        <h2 className="text-2xl font-bold">Best Deals</h2>
        <div className="flex items-center">
          <p className="text-md text-black">Deals end in</p>
          <span className="ml-2 px-4 py-1.5 bg-[#F3DE6D] text-sm font-semibold rounded-sm">
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 mt-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestDealsSection;
