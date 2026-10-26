import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '', description: '', price: '', category: '', stock: '', imageUrl: ''
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ text: '', type: '' });

  if (!user || user.role !== 'admin') {
    navigate('/');
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image && !formData.imageUrl) {
      setStatus({ text: 'Please either select an image file or provide an Image URL.', type: 'error' });
      return;
    }

    setLoading(true);
    setStatus({ text: 'Creating product...', type: 'info' });

    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('category', formData.category);
    data.append('stock', formData.stock);
    if (formData.imageUrl) data.append('imageUrl', formData.imageUrl);
    if (image) data.append('image', image);

    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { Authorization: `Bearer ${user.token}` },
        body: data
      });
      const responseData = await res.json();

      if (res.ok) {
        setStatus({ text: 'Product created successfully! Redirecting...', type: 'success' });
        setTimeout(() => navigate('/shop'), 1200);
      } else {
        setStatus({ text: responseData.message || 'Error creating product', type: 'error' });
      }
    } catch (error) {
      console.error(error);
      setStatus({ text: 'Failed to create product due to network error.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '640px', margin: '40px auto', background: '#18181b', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
      <h2 style={{ color: '#f97316', marginBottom: '10px' }}>Add New Product</h2>
      <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '25px' }}>Publish a new tech or lifestyle product to the ShopNest store.</p>

      {status.text && (
        <div style={{
          padding: '12px 18px',
          borderRadius: '8px',
          marginBottom: '20px',
          background: status.type === 'error' ? 'rgba(239, 68, 68, 0.15)' : status.type === 'success' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(59, 130, 246, 0.15)',
          border: `1px solid ${status.type === 'error' ? '#ef4444' : status.type === 'success' ? '#10b981' : '#3b82f6'}`,
          color: status.type === 'error' ? '#fca5a5' : status.type === 'success' ? '#6ee7b7' : '#93c5fd',
          fontSize: '0.92rem'
        }}>
          {status.text}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <input
          type="text" placeholder="Product Name (e.g. Apple MacBook Pro M3)" required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={inputStyle}
        />
        <textarea
          placeholder="Detailed Product Description" required rows="4"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          style={inputStyle}
        />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <input
            type="number" placeholder="Price in ₹" required
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            style={inputStyle}
          />
          <input
            type="number" placeholder="Stock Inventory" required
            value={formData.stock}
            onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
            style={inputStyle}
          />
        </div>
        <input
          type="text" placeholder="Category (e.g. Mobile, Electronics, Gaming, Audio)" required
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          style={inputStyle}
        />

        <div style={{ padding: '20px', border: '1px dashed rgba(249, 115, 22, 0.4)', borderRadius: '10px', background: 'rgba(0,0,0,0.2)' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#cbd5e1', fontWeight: '500', fontSize: '0.95rem' }}>
            Product Image Source
          </label>
          <input
            type="text"
            placeholder="Or enter direct Image URL (e.g. Unsplash URL)"
            value={formData.imageUrl}
            onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
            style={{ ...inputStyle, width: '100%', marginBottom: '12px' }}
          />
          <p style={{ color: '#64748b', fontSize: '0.82rem', margin: '0 0 10px 0' }}>— OR upload a local file via Cloudinary CDN —</p>
          <input
            type="file" accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            style={{ color: '#94a3b8' }}
          />
        </div>

        <button type="submit" disabled={loading} className="btn" style={{ marginTop: '10px', padding: '14px' }}>
          {loading ? 'Publishing Product...' : 'Publish Product to Store'}
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  padding: '13px',
  background: '#09090b',
  border: '1px solid #27272a',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '15px',
  outline: 'none',
  fontFamily: 'inherit'
};

export default AddProduct;
