// React 
import React, { useState } from 'react';
// React-Redux
import { Provider } from 'react-redux';
// Store
import { store } from './redux/store';
// Scss
import './styles/App.scss';
// Components
import Header from './components/Header';
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';

const App = () => {
  // States Hooks
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);

  // Add a Product to the Cart
  const handleAddToCart = product => {
    const items = cartItems.slice();
    let alreadyInCart = false;
    items.forEach(item => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      items.push({ ...product, count: 1 })
    }
    setCartItems(items);
    // Save to the Local Storage
    localStorage.setItem('cartItems', JSON.stringify(items))
  }

  // Remove a Profuct from the Cart
  const removeFromCart = product => {
    const items = cartItems.slice(); 
    setCartItems(items.filter(x => x._id !== product._id))
    localStorage.setItem('cartItems', JSON.stringify(items.filter(x => x._id !== product._id)))
  }

  // Create an Order
  const createOrder = order => {
    alert('Thanks for your order ' + order.name)
  }

  // JSX
  return (
    <Provider store={store}>
      <div className='grid-container'>
        <Header />
        <main>
          <div className='content'>
            <div className='products-container'>
              <Filter />
              <Products/>
            </div>
            <div className='sidebar'>  
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                createOrder={createOrder}
                />
            </div>
          </div>
        </main>
          {/* Footer goes here */}
      </div>
    </Provider>
  );
}

export default App;
