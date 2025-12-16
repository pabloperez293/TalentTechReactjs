import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const exists = (id) => {
    const exist = cart.some((p) => p.id === id);
    return exist;
  };

  const addItem = (item) => {
    if (exists(item.id)) {
      // Actualizar cantidad si ya existe
      const updatedCart = cart.map((prod) =>
        prod.id === item.id
          ? { ...prod, quantity: (prod.quantity || 1) + item.quantity }
          : prod
      );
      setCart(updatedCart);
      alert(`Se agregó más cantidad de ${item.name} al carrito`);
      return;
    }
    setCart([...cart, item]);
    alert(`Se agregó ${item.name} al carrito`);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.length;
  };

  const deleteItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const total = () => {
    return cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
  };

  const checkout = () => {
    alert("Compra finalizada");
    setCart([]);
  };

  const values = {
    cart,
    addItem,
    getTotalItems,
    clearCart,
    deleteItem,
    total,
    checkout,
  };

  return <CartContext.Provider value={values}>
  {children}
  </CartContext.Provider>;
};
