const CartItems = ({ cartItem }) => {
  return (
    <div className="cart-page-items">
      <div className="cart-page-items-details">
        <img src={cartItem.image} alt={cartItem.title} />
        <div className="cart-product-details">
          <h5 className="cart-product-title">{cartItem.title}</h5>
          <p>Qty:1</p>
          <p>Rs. {cartItem.price}</p>
        </div>
      </div>

      <div className="delete-cart-items">
        <i class="fa fa-remove"></i>
      </div>
    </div>
  );
};

export default CartItems;
