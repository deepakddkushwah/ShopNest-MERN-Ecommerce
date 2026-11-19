import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { clearCart } from '../redux/cartSlice';

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    fullName: user ? user.name : '',
    street: '',
    city: '',
    postalCode: '',
    country: 'India'
  });

  const [paymentMethod, setPaymentMethod] = useState('razorpay'); // 'razorpay' or 'cod'
  const [processing, setProcessing] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: '', type: '' });

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * (item.qty || 1), 0);

  const placeOrderDirectly = async (paymentId) => {
    try {
      const saveOrderRes = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`
        },
        body: JSON.stringify({
          items: cartItems,
          totalAmount: totalPrice,
          address,
          paymentId: paymentId || `txn_direct_${Date.now()}`
        })
      });

      if (saveOrderRes.ok) {
        dispatch(clearCart());
        navigate('/ordersuccess');
      } else {
        const errorData = await saveOrderRes.json();
        setStatusMessage({ text: errorData.message || 'Unable to place order. Please try again.', type: 'error' });
      }
    } catch (error) {
      console.error(error);
      setStatusMessage({ text: 'Network error placing order.', type: 'error' });
    } finally {
      setProcessing(false);
    }
  };

  const handleRazorpayPayment = async () => {
    setProcessing(true);
    setStatusMessage({ text: 'Processing payment...', type: 'info' });

    try {
      const orderRes = await fetch('/api/payment/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: totalPrice })
      });

      const orderData = await orderRes.json();

      if (!orderRes.ok || !orderData.id) {
        setStatusMessage({ text: orderData.message || 'Payment initialization failed. Please try again.', type: 'error' });
        setProcessing(false);
        return;
      }

      // Detect simulated / demo orders when live Razorpay credentials are not configured
      if (orderData.id.startsWith('order_demo_') || orderData.id.startsWith('order_fallback_')) {
        await placeOrderDirectly(`demo_payment_${Date.now()}`);
        return;
      }

      const razorpayKey = orderData.key || process.env.REACT_APP_RAZORPAY_KEY;

      if (!razorpayKey) {
        await placeOrderDirectly(`demo_payment_${Date.now()}`);
        return;
      }

      const options = {
        key: razorpayKey,
        amount: orderData.amount,
        currency: orderData.currency || 'INR',
        name: 'ShopNest',
        description: `Order Payment for ${user?.name || 'Customer'}`,
        order_id: orderData.id,
        handler: async function (response) {
          try {
            const verifyRes = await fetch('/api/payment/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(response)
            });

            if (verifyRes.ok) {
              await placeOrderDirectly(response.razorpay_payment_id);
            } else {
              setStatusMessage({ text: 'Payment verification failed. Please try again.', type: 'error' });
              setProcessing(false);
            }
          } catch (err) {
            console.error(err);
            setStatusMessage({ text: 'Payment response verification error.', type: 'error' });
            setProcessing(false);
          }
        },
        prefill: {
          name: address.fullName,
          email: user?.email,
          contact: '9999999999'
        },
        theme: {
          color: '#f97316'
        }
      };

      if (window.Razorpay) {
        const rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function () {
          setStatusMessage({ text: 'Payment transaction failed or cancelled.', type: 'error' });
          setProcessing(false);
        });
        rzp1.open();
      } else {
        // Fallback if script blocked
        await placeOrderDirectly(`demo_payment_${Date.now()}`);
      }
    } catch (error) {
      console.error(error);
      setStatusMessage({ text: 'Network error placing order.', type: 'error' });
      setProcessing(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      navigate('/login');
      return;
    }

    if (cartItems.length === 0) {
      setStatusMessage({ text: 'Your shopping cart is empty.', type: 'error' });
      return;
    }

    if (paymentMethod === 'cod') {
      setProcessing(true);
      placeOrderDirectly(`cod_${Date.now()}`);
    } else {
      handleRazorpayPayment();
    }
  };

  return (
    <div className="checkout-container" style={{ maxWidth: '800px', margin: '30px auto' }}>
      <h2 style={{ marginBottom: '10px' }}>Secure Checkout</h2>
      <p style={{ color: '#94a3b8', marginBottom: '30px' }}>Complete your shipping details to place your order.</p>

      {statusMessage.text && (
        <div style={{
          padding: '12px 20px',
          borderRadius: '8px',
          marginBottom: '20px',
          background: statusMessage.type === 'error' ? 'rgba(239, 68, 68, 0.15)' : 'rgba(59, 130, 246, 0.15)',
          border: `1px solid ${statusMessage.type === 'error' ? '#ef4444' : '#3b82f6'}`,
          color: statusMessage.type === 'error' ? '#fca5a5' : '#93c5fd',
          fontSize: '0.95rem'
        }}>
          {statusMessage.text}
        </div>
      )}

      <div className="checkout-content" style={{ background: '#18181b', padding: '35px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <form onSubmit={handleSubmit} className="shipping-form">
          <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '15px' }}>1. Delivery Address</h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
            <input
              type="text"
              placeholder="Full Name"
              required
              value={address.fullName}
              onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Street Address"
              required
              value={address.street}
              onChange={(e) => setAddress({ ...address, street: e.target.value })}
            />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <input
                type="text"
                placeholder="City"
                required
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
              />
              <input
                type="text"
                placeholder="Postal Code"
                required
                value={address.postalCode}
                onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
              />
            </div>
            <input
              type="text"
              placeholder="Country"
              required
              value={address.country}
              onChange={(e) => setAddress({ ...address, country: e.target.value })}
            />
          </div>

          <h3 style={{ color: '#fff', fontSize: '1.25rem', marginTop: '25px', marginBottom: '15px' }}>2. Payment Options</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '14px',
              borderRadius: '8px',
              background: paymentMethod === 'razorpay' ? 'rgba(249, 115, 22, 0.1)' : '#09090b',
              border: `1px solid ${paymentMethod === 'razorpay' ? '#f97316' : '#27272a'}`,
              cursor: 'pointer'
            }}>
              <input
                type="radio"
                name="paymentMethod"
                value="razorpay"
                checked={paymentMethod === 'razorpay'}
                onChange={() => setPaymentMethod('razorpay')}
              />
              <div>
                <strong style={{ color: '#fff' }}>💳 Razorpay / Cards / UPI / NetBanking</strong>
                <p style={{ margin: '2px 0 0 0', fontSize: '0.82rem', color: '#94a3b8' }}>Fast and secure instant online gateway</p>
              </div>
            </label>

            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '14px',
              borderRadius: '8px',
              background: paymentMethod === 'cod' ? 'rgba(249, 115, 22, 0.1)' : '#09090b',
              border: `1px solid ${paymentMethod === 'cod' ? '#f97316' : '#27272a'}`,
              cursor: 'pointer'
            }}>
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={paymentMethod === 'cod'}
                onChange={() => setPaymentMethod('cod')}
              />
              <div>
                <strong style={{ color: '#fff' }}>💵 Cash on Delivery / Fast Demo Checkout</strong>
                <p style={{ margin: '2px 0 0 0', fontSize: '0.82rem', color: '#94a3b8' }}>Pay upon delivery or instant order simulation</p>
              </div>
            </label>
          </div>

          <div className="checkout-summary" style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Items: {cartItems.length}</span>
              <h4 style={{ margin: '4px 0 0 0', color: '#f97316', fontSize: '1.6rem' }}>Total: ₹{totalPrice.toLocaleString('en-IN')}</h4>
            </div>

            <button
              type="submit"
              className="btn"
              disabled={processing || cartItems.length === 0}
              style={{ padding: '14px 36px', fontSize: '1.05rem', opacity: processing ? 0.7 : 1 }}
            >
              {processing ? 'Processing...' : paymentMethod === 'cod' ? 'Place Order Now' : 'Pay & Confirm Order'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
