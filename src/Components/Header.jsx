import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="header" id="main-header">
      <Link to="/" className="logo">
        <h2>RTK Store</h2>
      </Link>

      <Link to="/cart" className="cart-items">
        <p>Cart - {cartItems.length} item</p>
      </Link>
    </div>
  );
};

export default Header;
