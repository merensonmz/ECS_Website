import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import '../styles/PopularProducts.css';

const PopularProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Ürün 1',
      price: '299.99 TL',
      image: '/images/products/product1.jpg',
      category: 'erkek'
    },
    // ... Diğer ürünler buraya eklenecek
  ];

  return (
    <section className="popular-products">
      <h2>Popüler Ürünler</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="product-actions">
                <button className="action-btn cart-btn">
                  <FaShoppingCart />
                </button>
                <Link to={`/urun/${product.id}`} className="action-btn view-btn">
                  <FaSearch />
                </Link>
              </div>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts; 