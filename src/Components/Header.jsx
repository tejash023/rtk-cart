import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="header" id="main-header">
      <h2 className="logo">RTK Store</h2>
      <div className="cart-items">
        <p>Cart - {cartItems.length} item</p>
      </div>
    </div>
  );
};

export default Header;
