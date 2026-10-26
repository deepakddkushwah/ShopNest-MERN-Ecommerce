import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import '../styles/product.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addedToast, setAddedToast] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({
        productId: product._id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        qty: 1
      }));
      setAddedToast(true);
      setTimeout(() => setAddedToast(false), 2500);
    }
  };

  if (loading) return <div style={{ textAlign: 'center', margin: '100px', color: '#f97316' }}>Loading Product...</div>;
  if (!product) return <div style={{ textAlign: 'center', margin: '100px', color: '#ef4444' }}>Product Not Found</div>;

  return (
    <div className="product-detail-wrapper" style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>

      {/* Floating Modern Toast Notification */}
      {addedToast && (
        <div style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          color: '#fff',
          padding: '16px 26px',
          borderRadius: '12px',
          boxShadow: '0 12px 35px rgba(0,0,0,0.6)',
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          zIndex: 9999,
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <span style={{ fontSize: '1.3rem' }}>🛍️</span>
          <div>
            <div style={{ fontSize: '0.95rem' }}>Added to Cart!</div>
            <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>{product.name} is now in your bag</div>
          </div>
        </div>
      )}

      {/* Breadcrumb Navigation */}
      <div style={{ color: '#a1a1aa', marginBottom: '20px', fontSize: '0.95rem' }}>
        <Link to="/" style={{ color: '#f97316' }}>Home</Link> / <Link to="/shop" style={{ color: '#f97316' }}>Shop</Link> / {product.category} / <span style={{ color: '#fff' }}>{product.name}</span>
      </div>

      <div className="product-detail">
        {/* Left Side: Image */}
        <div className="detail-image-container">
          <img src={product.imageUrl} alt={product.name} className="detail-image" />
        </div>

        {/* Right Side: Information Block */}
        <div className="detail-info">
          <span style={{
            background: 'rgba(249, 115, 22, 0.1)',
            color: '#f97316',
            padding: '4px 12px',
            borderRadius: '6px',
            fontSize: '0.85rem',
            fontWeight: '600',
            width: 'fit-content',
            marginBottom: '10px'
          }}>
            {product.category || 'Tech'}
          </span>

          <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#fff' }}>{product.name}</h2>

          <p className="detail-price" style={{ fontSize: '2.2rem', margin: '15px 0' }}>₹{product.price.toLocaleString('en-IN')}</p>

          {/* Description */}
          <div style={{ marginBottom: '25px' }}>
            <h4 style={{ color: '#fff', marginBottom: '10px' }}>Product Description</h4>
            <p style={{ color: '#a1a1aa', lineHeight: '1.8' }}>{product.description}</p>
          </div>

          {/* Cart & Stock Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button
              onClick={handleAddToCart}
              className="btn"
              disabled={product.stock <= 0}
              style={{
                flexGrow: '1',
                padding: '16px',
                fontSize: '1.1rem',
                opacity: product.stock <= 0 ? 0.5 : 1
              }}
            >
              {product.stock > 0 ? 'Add to Shopping Cart' : 'Out of Stock'}
            </button>
          </div>

          <p style={{ marginTop: '20px', color: product.stock > 0 ? '#10b981' : '#ef4444', fontWeight: '600' }}>
            {product.stock > 0 ? `● In Stock (${product.stock} units available)` : `● Temporarily Out of Stock`}
          </p>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
