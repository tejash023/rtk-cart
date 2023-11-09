import React, { useState, useEffect } from "react";

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
              <p class="product-category">{product.category}</p>
              <p class="product-rating moderate">
                {product.rating.rate} <i class="fa fa-star"></i>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;