import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useSelector } from 'react-redux';
import '../styles/navbar.css';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + (item.qty || 1), 0);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img
            src="/ShopNestLogo.png"
            alt="ShopNest"
            style={{
              height: '36px',
              width: '36px',
              borderRadius: '8px',
              objectFit: 'cover',
              filter: 'drop-shadow(0 2px 8px rgba(249, 115, 22, 0.35))'
            }}
          />
          ShopNest
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/shop">Shop</Link></li>
        <li>
          <Link to="/cart" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            Cart
            {totalCartCount > 0 && (
              <span style={{
                background: '#f97316',
                color: '#fff',
                fontSize: '0.75rem',
                fontWeight: '700',
                padding: '1px 7px',
                borderRadius: '999px',
                lineHeight: '1.4'
              }}>
                {totalCartCount}
              </span>
            )}
          </Link>
        </li>
        <li><Link to="/about">About Developer</Link></li>
        {user ? (
          <>
            <li><Link to="/profile">Hi, {user.name.split(' ')[0]}</Link></li>
            {user.role === 'admin' && (
              <li>
                <Link
                  to="/admin"
                  style={{
                    color: '#f97316',
                    background: 'rgba(249, 115, 22, 0.1)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: '1px solid rgba(249, 115, 22, 0.3)'
                  }}
                >
                  Admin
                </Link>
              </li>
            )}
            <li><button onClick={handleLogout} className="btn-logout">Logout</button></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
