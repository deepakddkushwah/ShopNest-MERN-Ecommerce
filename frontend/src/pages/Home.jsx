import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = ['All', 'Mobile', 'Electronics', 'Gaming', 'Audio'];

  const filteredProducts = activeCategory === 'All'
    ? products.slice(0, 8)
    : products.filter(p => p.category?.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="home-container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
      {/* Hero Banner */}
      <div className="hero-banner" style={{
        background: 'radial-gradient(circle at top right, rgba(249, 115, 22, 0.22), transparent 55%), linear-gradient(135deg, #18181b 0%, #09090b 100%)',
        padding: '75px 30px',
        textAlign: 'center',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
        marginBottom: '40px',
        position: 'relative'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(249, 115, 22, 0.12)',
          color: '#fb923c',
          border: '1px solid rgba(249, 115, 22, 0.3)',
          padding: '6px 16px',
          borderRadius: '999px',
          fontSize: '0.88rem',
          fontWeight: '600',
          marginBottom: '22px'
        }}>
          ⚡ Engineered by Deepak Kushwaha • Next-Gen MERN E-Commerce
        </div>

        <h1 style={{
          fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
          fontWeight: '800',
          lineHeight: '1.2',
          marginBottom: '20px',
          color: '#ffffff',
          letterSpacing: '-1px'
        }}>
          Premium Tech & Lifestyle <br />
          <span style={{
            background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Delivered at Peak Speed.
          </span>
        </h1>

        <p style={{
          fontSize: '1.15rem',
          color: '#94a3b8',
          maxWidth: '680px',
          margin: '0 auto 35px auto',
          lineHeight: '1.7'
        }}>
          Discover flagships, high-performance computing, audio gear, and elite accessories with real-time stock and encrypted checkout.
        </p>

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/shop" className="btn" style={{ fontSize: '1rem', padding: '14px 32px' }}>
            🛍️ Explore Store
          </Link>
          <Link to="/about" style={{
            display: 'inline-block',
            padding: '14px 28px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#fff',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'all 0.3s ease'
          }}>
            👨‍💻 Developer Profile
          </Link>
        </div>
      </div>

      {/* Trust & Guarantee Badges Strip */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '16px',
        marginBottom: '50px'
      }}>
        <div style={{
          background: '#18181b',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '12px',
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          <div style={{ fontSize: '2rem' }}>🚚</div>
          <div>
            <h4 style={{ color: '#fff', margin: '0 0 4px 0', fontSize: '0.98rem' }}>Fast Express Delivery</h4>
            <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.82rem' }}>Complimentary on all orders</p>
          </div>
        </div>

        <div style={{
          background: '#18181b',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '12px',
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          <div style={{ fontSize: '2rem' }}>🛡️</div>
          <div>
            <h4 style={{ color: '#fff', margin: '0 0 4px 0', fontSize: '0.98rem' }}>100% Genuine Tech</h4>
            <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.82rem' }}>Direct warranty coverage</p>
          </div>
        </div>

        <div style={{
          background: '#18181b',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '12px',
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          <div style={{ fontSize: '2rem' }}>💳</div>
          <div>
            <h4 style={{ color: '#fff', margin: '0 0 4px 0', fontSize: '0.98rem' }}>Encrypted Payments</h4>
            <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.82rem' }}>Razorpay & Fast Checkout</p>
          </div>
        </div>

        <div style={{
          background: '#18181b',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '12px',
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          <div style={{ fontSize: '2rem' }}>⚡</div>
          <div>
            <h4 style={{ color: '#fff', margin: '0 0 4px 0', fontSize: '0.98rem' }}>24/7 Dedicated Support</h4>
            <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.82rem' }}>Live expert assistance</p>
          </div>
        </div>
      </div>

      {/* Category Pills & Section Header */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '25px'
      }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '2rem' }}>Featured Collections</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: '6px 0 0 0' }}>Handpicked selections updated weekly</p>
        </div>

        {/* Category Filter Chips */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '8px',
                border: activeCategory === cat ? '1px solid #f97316' : '1px solid rgba(255, 255, 255, 0.1)',
                background: activeCategory === cat ? '#f97316' : '#18181b',
                color: '#fff',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px 0', color: '#f97316', fontSize: '1.2rem' }}>
          Loading premium catalog...
        </div>
      ) : filteredProducts.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          background: '#18181b',
          borderRadius: '12px',
          border: '1px solid rgba(255,255,255,0.05)',
          color: '#94a3b8'
        }}>
          No items found in category <strong>{activeCategory}</strong>.
          <div style={{ marginTop: '15px' }}>
            <Link to="/shop" className="btn">Browse All Products</Link>
          </div>
        </div>
      ) : (
        <div className="product-grid" style={{ marginBottom: '60px' }}>
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}

      {/* Promo Banner / Spotlight */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.15) 0%, rgba(24, 24, 27, 0.95) 100%)',
        border: '1px solid rgba(249, 115, 22, 0.3)',
        borderRadius: '16px',
        padding: '40px 30px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '60px'
      }}>
        <div>
          <span style={{
            background: '#f97316',
            color: '#fff',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            padding: '3px 10px',
            borderRadius: '4px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Exclusive Offer
          </span>
          <h3 style={{ color: '#fff', fontSize: '1.8rem', margin: '10px 0 6px 0' }}>Upgrade Your Tech Ecosystem</h3>
          <p style={{ color: '#cbd5e1', fontSize: '1rem', margin: 0, maxWidth: '520px' }}>
            Get premier pricing on flagship smartphones, ultra-portable notebooks, and pro audio gear.
          </p>
        </div>
        <div>
          <Link to="/shop" className="btn" style={{ padding: '14px 28px', fontSize: '1rem' }}>
            View All Deals &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
