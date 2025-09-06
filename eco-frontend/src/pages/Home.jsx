import React, { useEffect, useState } from "react";
import { listProducts } from "../api/product";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await listProducts();
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>EcoFinds Marketplace</h1>
      <div className="products-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
