const CartItems = ({ cartItem }) => {
  return (
    <div className="cart-page-items">
      <div className="cart-page-items-details">
        <img src={cartItem.image} alt={cartItem.title} />
        <div className="cart-product-details">
          <h5 className="cart-product-title">{cartItem.title}</h5>
          <div className="cart-quantity">
            <button className="qty-button">-</button>
            <p className="qty">Qty:1</p>
            <button className="qty-button">+</button>
          </div>

          <h5>Rs. {cartItem.price}</h5>
        </div>
      </div>

      <div className="delete-cart-items">
        <i class="fa fa-remove"></i>
      </div>
    </div>
  );
};

export default CartItems;
