import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Store/cartSlice";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const dispatch = useDispatch();

  const handleAddProduct = (product) => {
    dispatch(addItem(product));
  };

  const productRatings = (rating) => {
    return rating >= 4.0 ? "good" : rating >= 3.0 ? "moderate" : "bad";
  };

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="product-details">
            <h5 className="product-title">{product.title}</h5>
            <p>{product.description}</p>

            <div className="more-details">
              <p className="product-category">{product.category}</p>
              <p
                className={`product-rating ${productRatings(
                  product.rating.rate
                )}`}
              >
                {product.rating.rate} <i className="fa fa-star"></i>
              </p>
            </div>

            <div
              className="add-to-cart"
              onClick={() => handleAddProduct(product)}
            >
              <p>Add to cart</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
