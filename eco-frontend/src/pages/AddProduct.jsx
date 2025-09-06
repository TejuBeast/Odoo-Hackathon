import React from "react";
import ProductForm from "../components/ProductForm";
import { addProduct } from "../api/product";

const AddProduct = () => {
  const handleSubmit = async (data, file) => {
    try {
      await addProduct(data, file);
      alert("Product added successfully");
      window.location.href = "/";
    } catch (err) {
      alert(err.response?.data?.detail || "Failed to add product");
    }
  };

  return <ProductForm onSubmit={handleSubmit} />;
};

export default AddProduct;
