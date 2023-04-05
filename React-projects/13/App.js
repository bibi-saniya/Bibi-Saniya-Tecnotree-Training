import React, { useState } from 'react';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 10.99,
      image: 'https://images.samsung.com/is/image/samsung/p6pim/in/ua65bu8570ulxl/gallery/in-crystaluhd-bu8500-ua65bu8570ulxl-532176128?$684_547_PNG$',
      description: '1m 63cm (65") BU8570 Crystal 4K UHD Smart TV'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 15.99,
      image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71KCwNV6MuL._SL1500_.jpg',
      description: '12+2+2MP triple rear camera | 8MP front camera.16.5 centimeters (6.5-inch), Storage & SIM: 6GB RAM | 128GB internal memory expandable up to 256GB'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 20.99,
      image: 'https://opsg-img-cdn-gl.heytapimg.com/epb/202209/05/zci3trOWyDic9jxA.png',
      description: '32MP Ultra-sensing front Selfie camera and a 64MP rear camera'
    }
  ];

  const addToCart = (product, e) => {
    e.preventDefault();
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart ({totalItems})</li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Products</h1>
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              

              <p>{product.description}</p>
              <span>${product.price.toFixed(2)}</span>
        

              <button onClick={(e) => addToCart(product, e)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
      
     
      <aside>
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <span>{item.name}</span>
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                  <span>{item.quantity}</span>
                </li>
              ))}
            </ul>
            <p>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
          </>
        )}
      </aside>
    </div>
  );
}
export default App;