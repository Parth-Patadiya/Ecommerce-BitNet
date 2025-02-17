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
    <div className="px-[200px] mt-3">
      <div className="flex items-center">
        <h2 className="text-2xl font-bold pr-10">Best Deals</h2>
        <p className="text-md text-black">Deals end in </p>
        <span className="ml-1 px-4 py-1.5 bg-[#F3DE6D]">
          {formatTime(timeLeft)}
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestDealsSection;
