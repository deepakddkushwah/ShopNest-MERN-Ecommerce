import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '960px',
    margin: '30px auto',
    padding: '45px 35px',
    background: 'linear-gradient(145deg, #18181b 0%, #111113 100%)',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  };

  const socialBtnStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    margin: '8px',
    padding: '12px 22px',
    background: '#27272a',
    color: '#fff',
    borderRadius: '10px',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '0.95rem',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)'
  };

  const skillBadgeStyle = {
    padding: '6px 14px',
    background: 'rgba(249, 115, 22, 0.1)',
    color: '#fb923c',
    border: '1px solid rgba(249, 115, 22, 0.25)',
    borderRadius: '999px',
    fontSize: '0.85rem',
    fontWeight: '600',
    letterSpacing: '0.3px'
  };

  const featureCardStyle = {
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '12px',
    padding: '20px 16px',
    textAlign: 'left'
  };

  return (
    <div style={containerStyle}>
      {/* Ambient Glow */}
      <div style={{
        position: 'absolute',
        top: '-80px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '320px',
        height: '320px',
        background: 'radial-gradient(circle, rgba(249, 115, 22, 0.18) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Profile Avatar */}
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '22px' }}>
          <img
            src="/dp.jpg"
            alt="Deepak Kushwaha"
            style={{
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '4px solid #f97316',
              boxShadow: '0 8px 30px rgba(249, 115, 22, 0.45)',
              display: 'block'
            }}
          />
          <span style={{
            position: 'absolute',
            bottom: '8px',
            right: '12px',
            background: '#10b981',
            color: '#fff',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            padding: '3px 10px',
            borderRadius: '999px',
            border: '2px solid #18181b',
            boxShadow: '0 2px 8px rgba(0,0,0,0.4)'
          }}>
            ACTIVE
          </span>
        </div>

        {/* Developer Name & Title */}
        <h1 style={{
          fontSize: '2.6rem',
          fontWeight: '800',
          marginBottom: '8px',
          background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.5px'
        }}>
          Deepak Kushwaha
        </h1>

        <h2 style={{
          fontSize: '1.25rem',
          color: '#f97316',
          fontWeight: '600',
          marginBottom: '20px',
          letterSpacing: '0.2px'
        }}>
          Full Stack MERN Developer | React.js | Node.js | Express.js | MongoDB
        </h2>

        {/* Professional Bio */}
        <p style={{
          color: '#cbd5e1',
          fontSize: '1.05rem',
          lineHeight: '1.8',
          maxWidth: '720px',
          margin: '0 auto 28px auto'
        }}>
          Welcome to <strong>ShopNest</strong>! I am Deepak Kushwaha, a dedicated full-stack software engineer with expertise in architecting resilient, production-grade web applications. ShopNest was engineered from the ground up to showcase a complete modern commerce lifecycle — featuring secure JWT authentication, dynamic Redux state synchronization, payment gateway processing, and real-time administrative analytics.
        </p>

        {/* Technical Competencies Matrix */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          maxWidth: '780px',
          margin: '0 auto 35px auto'
        }}>
          <span style={skillBadgeStyle}>⚛️ React.js & Hooks</span>
          <span style={skillBadgeStyle}>⚡ Redux Toolkit</span>
          <span style={skillBadgeStyle}>🟢 Node.js & Express</span>
          <span style={skillBadgeStyle}>🍃 MongoDB & Mongoose</span>
          <span style={skillBadgeStyle}>🔐 JWT & Role Auth</span>
          <span style={skillBadgeStyle}>💳 Razorpay Integration</span>
          <span style={skillBadgeStyle}>☁️ Cloudinary CDN</span>
          <span style={skillBadgeStyle}>📊 RESTful API Design</span>
          <span style={skillBadgeStyle}>🎨 Responsive Dark Mode</span>
        </div>

        {/* Project Engineering Highlights */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          gap: '16px',
          maxWidth: '820px',
          margin: '0 auto 35px auto'
        }}>
          <div style={featureCardStyle}>
            <div style={{ fontSize: '1.6rem', marginBottom: '8px' }}>🚀</div>
            <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '6px' }}>MERN Architecture</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.5', margin: 0 }}>
              Separation of concerns using modular MVC backend and atomic React state flows.
            </p>
          </div>

          <div style={featureCardStyle}>
            <div style={{ fontSize: '1.6rem', marginBottom: '8px' }}>🛡️</div>
            <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '6px' }}>Secure Sessions</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.5', margin: 0 }}>
              Encrypted credentials via bcrypt, protected bearer routes, and role-based ACL.
            </p>
          </div>

          <div style={featureCardStyle}>
            <div style={{ fontSize: '1.6rem', marginBottom: '8px' }}>💳</div>
            <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '6px' }}>Order Processing</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.5', margin: 0 }}>
              End-to-end checkout pipeline, HMAC payment verification, and persistent carts.
            </p>
          </div>

          <div style={featureCardStyle}>
            <div style={{ fontSize: '1.6rem', marginBottom: '8px' }}>📈</div>
            <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '6px' }}>Admin Analytics</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.5', margin: 0 }}>
              Real-time revenue calculation, product CRUD, and centralized order dispatch.
            </p>
          </div>
        </div>

        {/* Social & Contact Actions */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '12px',
          paddingTop: '15px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <a
            href="https://linkedin.com/in/deepak-80ku"
            target="_blank"
            rel="noreferrer"
            style={{ ...socialBtnStyle, background: 'rgba(10, 102, 194, 0.2)', borderColor: '#0a66c2', color: '#60a5fa' }}
          >
            💼 LinkedIn Profile
          </a>

          <a
            href="https://github.com/deepakddkushwah"
            target="_blank"
            rel="noreferrer"
            style={{ ...socialBtnStyle, background: 'rgba(255, 255, 255, 0.08)', borderColor: '#94a3b8', color: '#f8fafc' }}
          >
            🐙 GitHub Portfolio
          </a>

          <a
            href="mailto:deepakdd975877@gmail.com"
            style={{ ...socialBtnStyle, background: 'rgba(249, 115, 22, 0.2)', borderColor: '#f97316', color: '#fb923c' }}
          >
            ✉️ Contact Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
