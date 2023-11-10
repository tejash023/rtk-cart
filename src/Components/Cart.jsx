import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="cart-page">
      <h3>Cart</h3>
      {cartItems.length > 0 ? (
        cartItems.map((cartItem) => (
          <CartItems key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <p>Nothing here!! Try adding something from our products.</p>
      )}
    </div>
  );
};

export default Cart;
