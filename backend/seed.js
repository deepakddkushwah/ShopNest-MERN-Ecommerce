const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Product = require('./models/Product');
const connectDB = require('./config/db');

const path = require('path');
dotenv.config({ path: path.join(__dirname, '.env') });

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);

    const adminUser = await User.create({
      name: 'Deepak Kushwaha',
      email: 'admin@shopnest.com',
      password: hashedPassword,
      role: 'admin'
    });

    const products = [
      {
        name: 'iPhone 15',
        description: 'Dynamic Island, 48MP main camera, and USB-C in a durable color-infused glass and aluminum design.',
        price: 69999,
        category: 'Mobile',
        stock: 20,
        imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800',
        ratings: 4.8,
        numReviews: 45
      },
      {
        name: 'Samsung Galaxy S24',
        description: 'Galaxy AI is here. Epic camera with AI photo assist, gorgeous AMOLED display, and all-day battery life.',
        price: 74999,
        category: 'Mobile',
        stock: 15,
        imageUrl: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800',
        ratings: 4.7,
        numReviews: 38
      },
      {
        name: 'Apple MacBook Air M3',
        description: 'Strikingly thin and fast with Apple M3 chip, 15.3-inch Liquid Retina display, and up to 18 hours of battery life.',
        price: 104900,
        category: 'Electronics',
        stock: 12,
        imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
        ratings: 4.9,
        numReviews: 42
      },
      {
        name: 'Sony PlayStation 5 Console',
        description: 'Next-gen gaming experience with ultra-high speed SSD, haptic feedback, adaptive triggers, and 3D Audio technology.',
        price: 49990,
        category: 'Gaming',
        stock: 10,
        imageUrl: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800',
        ratings: 4.9,
        numReviews: 120
      },
      {
        name: 'Sony WH-1000XM5 Wireless Headphones',
        description: 'Industry-leading noise cancellation with dual processors, 8 microphones, and ultra-comfortable lightweight design.',
        price: 26990,
        category: 'Electronics',
        stock: 18,
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
        ratings: 4.8,
        numReviews: 68
      },
      {
        name: 'Apple Watch Series 9',
        description: 'Powerful health monitoring, brilliant Always-On Retina display, crash detection, and water resistant up to 50m.',
        price: 39900,
        category: 'Accessories',
        stock: 18,
        imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
        ratings: 4.7,
        numReviews: 35
      },
      {
        name: 'Nike Running Shoes',
        description: 'Revolutionary comfort and responsiveness for runners. Breathable mesh upper with lightweight flexible cushioning.',
        price: 2999,
        category: 'Footwear',
        stock: 25,
        imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
        ratings: 4.6,
        numReviews: 62
      },
      {
        name: 'Classic White Sneakers',
        description: 'Versatile and comfortable, premium white leather sneakers that go effortlessly with any casual outfit.',
        price: 2499,
        category: 'Footwear',
        stock: 40,
        imageUrl: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800',
        ratings: 4.5,
        numReviews: 89
      },
      {
        name: 'Professional DSLR Camera',
        description: 'High-resolution full-frame sensor, ultra-fast autofocus, and 4K video recording for professional photographers.',
        price: 89999,
        category: 'Electronics',
        stock: 8,
        imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800',
        ratings: 4.9,
        numReviews: 50
      },
      {
        name: 'RGB Mechanical Gaming Keyboard',
        description: 'Tactile mechanical switches with per-key customizable RGB backlighting, durable aluminum frame, and detachable wrist rest.',
        price: 4499,
        category: 'Electronics',
        stock: 22,
        imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800',
        ratings: 4.7,
        numReviews: 46
      },
      {
        name: 'Wireless Gaming Mouse',
        description: 'Ultra-lightweight ergonomic gaming mouse with high-precision 20,000 DPI optical sensor and RGB lighting.',
        price: 2499,
        category: 'Electronics',
        stock: 30,
        imageUrl: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800',
        ratings: 4.6,
        numReviews: 39
      },
      {
        name: 'Portable Bluetooth Speaker',
        description: 'Rugged waterproof speaker with 360-degree immersive sound, deep bass, and 20 hours of playtime.',
        price: 3499,
        category: 'Electronics',
        stock: 28,
        imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800',
        ratings: 4.7,
        numReviews: 58
      },
      {
        name: 'Minimal Leather Backpack',
        description: 'Handcrafted full-grain leather backpack with dedicated 15-inch laptop sleeve and water-resistant lining.',
        price: 3299,
        category: 'Bags',
        stock: 22,
        imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
        ratings: 4.6,
        numReviews: 31
      },
      {
        name: 'Leather Travel Duffel Bag',
        description: 'Spacious vintage leather weekender duffel bag with shoe compartment and adjustable shoulder strap.',
        price: 4999,
        category: 'Bags',
        stock: 15,
        imageUrl: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800',
        ratings: 4.8,
        numReviews: 27
      },
      {
        name: 'Classic Vintage Denim Jacket',
        description: 'Timeless casual trucker denim jacket crafted from 100% premium durable washed cotton denim.',
        price: 3499,
        category: 'Clothing',
        stock: 30,
        imageUrl: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800',
        ratings: 4.6,
        numReviews: 29
      },
      {
        name: 'Casual Oxford Cotton Shirt',
        description: 'Tailored slim-fit breathable 100% pure oxford cotton shirt, perfect for both formal and casual settings.',
        price: 1899,
        category: 'Clothing',
        stock: 35,
        imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800',
        ratings: 4.5,
        numReviews: 41
      },
      {
        name: 'Everyday Cotton T-Shirt',
        description: 'Soft combed organic cotton regular-fit crew neck t-shirt for everyday comfort and breathability.',
        price: 799,
        category: 'Clothing',
        stock: 50,
        imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
        ratings: 4.4,
        numReviews: 64
      },
      {
        name: 'Full-Grain Leather Wallet',
        description: 'Handcrafted minimalist bifold wallet with RFID blocking technology, multiple card slots, and currency pocket.',
        price: 1299,
        category: 'Accessories',
        stock: 45,
        imageUrl: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800',
        ratings: 4.5,
        numReviews: 54
      },
      {
        name: 'Ray-Ban Aviator Sunglasses',
        description: 'Iconic classic aviator design with gold metal frame, UV400 polarized crystal lenses for maximum eye protection.',
        price: 7590,
        category: 'Accessories',
        stock: 20,
        imageUrl: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800',
        ratings: 4.8,
        numReviews: 73
      },
      {
        name: 'Classic Analog Watch',
        description: 'Minimalist dress watch featuring a stainless steel case, genuine leather strap, and Japanese quartz movement.',
        price: 2799,
        category: 'Accessories',
        stock: 25,
        imageUrl: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800',
        ratings: 4.6,
        numReviews: 53
      },
      {
        name: 'Stainless Steel Water Bottle',
        description: 'Double-walled vacuum insulated flask keeping drinks cold for 24 hours or piping hot for 12 hours.',
        price: 1199,
        category: 'Accessories',
        stock: 35,
        imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800',
        ratings: 4.7,
        numReviews: 48
      },
      {
        name: 'Minimalist Modern Chair',
        description: 'A stylish and comfortable Scandinavian accent armchair, an elegant addition to any contemporary home.',
        price: 8999,
        category: 'Furniture',
        stock: 14,
        imageUrl: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800',
        ratings: 4.5,
        numReviews: 18
      },
      {
        name: 'Smart LED Desk Lamp',
        description: 'Eye-caring touch-control LED table lamp with adjustable color temperatures, brightness levels, and wireless charger base.',
        price: 2199,
        category: 'Furniture',
        stock: 24,
        imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800',
        ratings: 4.6,
        numReviews: 32
      },
      {
        name: 'Artisan Ceramic Coffee Mug Set',
        description: 'Set of 4 handcrafted matte-finish stoneware ceramic mugs, microwave and dishwasher safe.',
        price: 1499,
        category: 'Furniture',
        stock: 30,
        imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800',
        ratings: 4.8,
        numReviews: 44
      }
    ];

    await Product.insertMany(products);

    console.log('✅ Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error with data import: ${error.message}`);
    process.exit(1);
  }
};

importData();
