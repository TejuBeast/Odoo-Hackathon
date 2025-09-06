import React, { useState } from "react";

const ProductForm = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [category, setCategory] = useState(initialData?.category || "");
  const [price, setPrice] = useState(initialData?.price || 0);
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, category, price }, file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
      <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="Price" required />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
