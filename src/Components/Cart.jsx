import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="cart-page">
      {cartItems.map((cartItem) => (
        <div key={cartItem.id}>
          <img src={cartItem.image} alt={cartItem.title} />
          <p>{cartItem.title}</p>
          <p>{cartItem.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
