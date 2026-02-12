import "./App.css";
import { Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts"
import Payment from "./pages/Payment"
import Products from "./pages/Products"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"


function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
           <li>
            <Link to="/contacts">Contacts</Link>
          </li>
         <li>
            <Link to="/payment">Payment</Link>
          </li>
           <li>
            <Link to="/products">Products</Link>
          </li>
            <li>
            <Link to="/shop">Shop</Link>
          </li>
            <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default App;