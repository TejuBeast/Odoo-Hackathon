import axios from "axios";
axios.defaults.withCredentials = true;

export const listProducts = () => axios.get("http://localhost:8000/products/");
export const listUserProducts = (userId) => axios.get(`http://localhost:8000/products/user/${userId}`);
export const getProduct = (id) => axios.get(`http://localhost:8000/products/${id}`);

export const addProduct = (data, file) => {
  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("description", data.description || "");
  formData.append("category", data.category);
  formData.append("price", data.price);
  if (file) formData.append("file", file);

  return axios.post("http://localhost:8000/products/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const updateProduct = (id, data, file) => {
  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("description", data.description || "");
  formData.append("category", data.category);
  formData.append("price", data.price);
  if (file) formData.append("file", file);

  return axios.put(`http://localhost:8000/products/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const deleteProduct = (id) => axios.delete(`http://localhost:8000/products/${id}`);
