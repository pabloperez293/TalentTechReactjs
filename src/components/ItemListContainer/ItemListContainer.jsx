import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/itemList";

export const ItemListContainer = () => {
  const [products, setProductos] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/products.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Tenemos un problema en los productos");
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setProductos(data);
        } else if (data.products && Array.isArray(data.products)) {
          setProductos(data.products);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section>
      <h1>Distribuidora</h1>
      <ItemList list={products} />
    </section>
  );
};

export default ItemListContainer;
