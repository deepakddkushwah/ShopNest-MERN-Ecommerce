import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/product.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div style={{ position: 'relative' }}>
        <img
          src={product.imageUrl || 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=800'}
          alt={product.name}
          className="product-image"
        />
        {product.category && (
          <span style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            background: 'rgba(9, 9, 11, 0.85)',
            backdropFilter: 'blur(8px)',
            color: '#fb923c',
            border: '1px solid rgba(249, 115, 22, 0.3)',
            padding: '3px 10px',
            borderRadius: '6px',
            fontSize: '0.75rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            {product.category}
          </span>
        )}
      </div>

      <div className="product-info">
        <h3 title={product.name}>{product.name}</h3>
        <p className="price" style={{ margin: '8px 0 16px 0' }}>
          ₹{Number(product.price).toLocaleString('en-IN')}
        </p>
        <Link to={`/product/${product._id}`} className="btn" style={{ textAlign: 'center' }}>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
