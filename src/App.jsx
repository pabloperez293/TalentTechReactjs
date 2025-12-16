import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { MainLayout } from "./Layouts/MainLayout";
import { AdminLayout } from "./Layouts/AdminLayout";
import { Login } from "./components/Login/Login";
import { Cart } from "./components/Cart/Cart";
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <CartProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/carrito" element={<Cart />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
