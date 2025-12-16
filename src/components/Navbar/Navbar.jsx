import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useCartContext } from "../../context/CartContext/useCartContext";

const Navbar = () => {

  const { getTotalItems } = useCartContext();
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/category/destacado">Destacados</Link>
        </li>
        <li>
          <Link to="/category/mayorista">Mayorista</Link>
        </li>
        <li>
          <Link to="/category/minorista">Minorista</Link>
        </li>

        <li>
          <Link to="/carrito">Carrito</Link>
          {getTotalItems() > 0 && (
            <span className="cart-count">{getTotalItems()}</span>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
