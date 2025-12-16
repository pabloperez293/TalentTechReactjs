import "./Item.css";
import { useCartContext } from "../../context/CartContext/useCartContext";

const Item = ({ id, name, price, description, imageUrl, children }) => {
  const { cart, addItem, deleteItem } = useCartContext();

  const inCart = cart.some((p) => p.id === id);

  const handleAdd = () => {
    const item = { id, name, price, description, imageUrl, quantity: 1 };
    addItem(item);
  };

  const handleRemove = () => {
    deleteItem(id);
  };

  return (
    <article className="product-item" key={id}>
      <img src={imageUrl} alt={description} />
      <h2 className="product-title">{name}</h2>
      <p>Precio : ${price}</p>
      <p>Descripción: {description}</p>
      <div className="item-actions">
        {children}
        {!inCart ? (
          <button className="btn" onClick={handleAdd}>Agregar</button>
        ) : (
          <button className="btn btn-remove" onClick={handleRemove}>Quitar</button>
        )}
      </div>
    </article>
  );
};

export default Item;