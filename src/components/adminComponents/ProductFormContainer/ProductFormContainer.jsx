import { useState } from "react";
import { ProductFormUI } from "./ProductFormUI";

const initialProduct = {
  name: "",
  price: "",
  category: "",
  description: "",
  file: null,
};

export const ProductFormContainer = () => {
  const [product, setProduct] = useState(initialProduct);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (file) => {
    setProduct({
      ...product,
      file,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!product.name) newErrors.name = "El nombre es obligatorio";
    if (!product.price) newErrors.price = "El precio es obligatorio";
    if (!product.category) newErrors.category = "La categoría es obligatoria";
    if (!product.description)
      newErrors.description = "La descripción es obligatoria";
    if (!product.file) newErrors.file = "La imagen es obligatoria";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    // simulamos alta
    setTimeout(() => {
      console.log("Producto creado:", product);
      alert("Producto creado correctamente");

      setProduct(initialProduct);
      setLoading(false);
    }, 1000);
  };

  return (
    <ProductFormUI
      product={product}
      errors={errors}
      loading={loading}
      onChange={handleChange}
      onFileChange={handleFileChange}
      onSubmit={handleSubmit}
    />
  );
};
