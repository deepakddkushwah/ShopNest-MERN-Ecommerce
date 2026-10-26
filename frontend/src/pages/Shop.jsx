import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/product.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

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

  const categories = ['All', 'Mobile', 'Electronics', 'Gaming', 'Audio', 'Accessories'];

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
                          (p.description && p.description.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' ||
                            (p.category && p.category.toLowerCase() === selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="shop-container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '25px' }}>
        <div>
          <h2 style={{ margin: '0 0 6px 0' }}>Explore All Products</h2>
          <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.95rem' }}>
            Showing {filteredProducts.length} of {products.length} catalog items
          </p>
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="🔍 Search flagship products, tech..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
          style={{ marginBottom: 0 }}
        />
      </div>

      {/* Category Filter Pills */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '8px 18px',
              borderRadius: '8px',
              border: selectedCategory === cat ? '1px solid #f97316' : '1px solid rgba(255, 255, 255, 0.1)',
              background: selectedCategory === cat ? '#f97316' : '#18181b',
              color: '#fff',
              fontSize: '0.88rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '80px 0', color: '#f97316', fontSize: '1.2rem' }}>
          Loading products...
        </div>
      ) : filteredProducts.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '80px 20px',
          background: '#18181b',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.06)',
          color: '#94a3b8'
        }}>
          <h3>No matching products found</h3>
          <p style={{ marginTop: '8px' }}>Try searching with a different keyword or category filter.</p>
          <button
            onClick={() => { setSearch(''); setSelectedCategory('All'); }}
            className="btn"
            style={{ marginTop: '15px' }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
