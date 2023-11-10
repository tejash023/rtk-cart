const CartItems = ({ cartItem }) => {
  return (
    <div className="cart-page-items">
      <img src={cartItem.image} alt={cartItem.title} />
      <div className="cart-product-details">
        <p>{cartItem.title}</p>
        <p>Qty:1</p>
        <p>Rs. {cartItem.price}</p>
      </div>
    </div>
  );
};

export default CartItems;
