import React from 'react';

const textualStyle = {
  maxWidth: '920px',
  margin: '30px auto',
  padding: '40px',
  background: '#18181b',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  lineHeight: '1.8',
  color: '#cbd5e1'
};

const Disclaimer = () => {
  return (
    <div style={textualStyle}>
      <h2 style={{ color: '#fff', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px' }}>
        Terms & Platform Disclaimer
      </h2>

      <p style={{ marginBottom: '20px' }}>
        Welcome to <strong>ShopNest</strong>, architected and maintained by <strong>Deepak Kushwaha</strong>. By accessing or interacting with our store interface, digital services, or API endpoints, you agree to comply with the terms set forth herein.
      </p>

      <h4 style={{ color: '#f97316', marginTop: '25px', marginBottom: '10px' }}>1. Product Information & Availability</h4>
      <p style={{ marginBottom: '15px' }}>
        Product specifications, inventory levels, and prices featured on ShopNest are synchronized dynamically with our database records. We strive for precision; however, slight variations in visual color representation or descriptive metadata may occur due to screen rendering or hardware configurations.
      </p>

      <h4 style={{ color: '#f97316', marginTop: '25px', marginBottom: '10px' }}>2. Payment Security & Data Privacy</h4>
      <p style={{ marginBottom: '15px' }}>
        ShopNest implements industry-standard tokenization protocols and TLS encryption. Online transactions initiated through Razorpay or partner gateways are processed through authorized payment gateways without unencrypted storage of sensitive cardholder details on application servers.
      </p>

      <h4 style={{ color: '#f97316', marginTop: '25px', marginBottom: '10px' }}>3. User Accounts & Access Control</h4>
      <p style={{ marginBottom: '15px' }}>
        Users are responsible for safeguarding their login credentials and authentication tokens. Administrative portals are secured with cryptographic password hashing (bcrypt) and restricted JWT authorization middlewares.
      </p>

      <h4 style={{ color: '#f97316', marginTop: '25px', marginBottom: '10px' }}>4. Intellectual Property</h4>
      <p style={{ marginBottom: '15px' }}>
        All custom application logic, system architectures, brand logos, and interface components are proprietary works developed by <strong>Deepak Kushwaha</strong> for the ShopNest ecosystem.
      </p>

      <p style={{ marginTop: '30px', fontStyle: 'italic', fontSize: '0.9rem', color: '#94a3b8' }}>
        For technical inquiries, bug reporting, or developer queries, reach out directly at: <a href="mailto:deepakdd975877@gmail.com" style={{ color: '#f97316', textDecoration: 'underline' }}>deepakdd975877@gmail.com</a>.
      </p>
    </div>
  );
};

export default Disclaimer;
