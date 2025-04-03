import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useState } from "react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        EzyBuy
      </Link>

      <div
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/orders">Orders</Link>
        {user ? (
          <Link to="/" onClick={logout}>
            Logout
          </Link>
        ) : (
          <Link to="/register">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
