import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import "./global.css";
import Login from "./Pages/Login";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Orders from "./Pages/Orders";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
