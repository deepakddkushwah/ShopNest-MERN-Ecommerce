import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      background: '#09090b',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '50px 20px 30px 20px',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '40px',
        marginBottom: '40px'
      }}>
        {/* Brand Summary */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <img
              src="/ShopNestLogo.png"
              alt="ShopNest"
              style={{ height: '32px', width: '32px', borderRadius: '6px', objectFit: 'cover' }}
            />
            <h3 style={{ color: '#f97316', margin: 0, fontSize: '1.4rem', fontWeight: '700' }}>ShopNest</h3>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: '1.7', margin: 0 }}>
            Modern Full-Stack MERN E-Commerce platform delivering high-performance shopping experiences, reliable state management, and secure checkout.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '14px', fontWeight: '600' }}>Store Navigation</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: 0 }}>
            <li><Link to="/shop" style={{ color: '#94a3b8', fontSize: '0.9rem' }}>All Products</Link></li>
            <li><Link to="/cart" style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Shopping Cart</Link></li>
            <li><Link to="/profile" style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Customer Profile</Link></li>
            <li><Link to="/admin" style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Admin Portal</Link></li>
          </ul>
        </div>

        {/* Policies & Legal */}
        <div>
          <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '14px', fontWeight: '600' }}>Policies & Support</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: 0 }}>
            <li><Link to="/about" style={{ color: '#94a3b8', fontSize: '0.9rem' }}>About the Developer</Link></li>
            <li><Link to="/return" style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Return & Refund Policy</Link></li>
            <li><Link to="/disclaimer" style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Platform Disclaimer</Link></li>
          </ul>
        </div>

        {/* Developer Info */}
        <div>
          <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '14px', fontWeight: '600' }}>Lead Engineer</h4>
          <p style={{ color: '#cbd5e1', fontSize: '0.92rem', marginBottom: '12px' }}>
            Architected & engineered by <strong style={{ color: '#f97316' }}>Deepak Kushwaha</strong>
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="https://linkedin.com/in/deepak-80ku"
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#60a5fa',
                fontSize: '0.88rem',
                padding: '6px 12px',
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
                borderRadius: '6px'
              }}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/deepakddkushwah"
              target="_blank"
              rel="noreferrer"
              style={{
                color: '#f8fafc',
                fontSize: '0.88rem',
                padding: '6px 12px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '6px'
              }}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '25px',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '15px',
        color: '#64748b',
        fontSize: '0.88rem'
      }}>
        <div>
          &copy; {new Date().getFullYear()} ShopNest. All rights reserved.
        </div>
        <div>
          Engineered with precision by <span style={{ color: '#f97316', fontWeight: '500' }}>Deepak Kushwaha</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
