import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { getProduct, updateProduct } from "../api/product";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getProduct(id);
      setProduct(res.data);
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async (data, file) => {
    await updateProduct(id, data, file);
    alert("Product updated successfully");
    window.location.href = "/";
  };

  if (!product) return <div>Loading...</div>;
  return <ProductForm onSubmit={handleSubmit} initialData={product} />;
};

export default EditProduct;
