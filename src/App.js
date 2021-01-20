// React 
import React, { useState } from 'react';
// Scss
import './styles/App.scss';
// Data
import data from './data.json';
// Components
import Header from './components/Header';
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';

const App = () => {
  // States Hooks
  const [products, setProducts] = useState(data.products);
  const [cartItems, setCartItems] = useState([]);
  const [size, setSize] = useState('');
  const [sort, setSort] = useState('Latest');

  // Filter the Products by both Price & Time
  const handleSort = e => {
    const sort = e.target.value;
    setSort(sort);
    setProducts(products.slice().sort((a, b) => {
      if (sort === 'Lowest' && a.price < b.price) {
        return -1;
      } else if (sort === 'Highest' && a.price > b.price) {
        return -1
      } else if (sort === 'Latest' && a._id > b._id) {
        return -1;
      } else if (sort === 'Oldest' && a._id < b._id) {
        return -1
      }
    }))
  }
  
  // Filter the Products by their Sizes
  const handleSize = e => {
    // Remove default Behaviours
    e.preventDefault();

    // If the value is Empty
    if (e.target.value === "All") {
      setProducts(data.products);
    } else {
      // Change the State Size with the value Choosen
      setSize(e.target.value);
      // Filter the Array of Products
      setProducts(data.products.filter(product => {
        return product.availableSizes.indexOf(e.target.value) !== -1;
      }))
    }
  }

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
  }

  // Remove a Profuct from the Cart
  const removeFromCart = product => {
    const items = cartItems.slice(); 
    setCartItems(items.filter(x => x._id !== product._id))
  }

  // JSX
  return (
    <div className='grid-container'>
      <Header />
      <main>
        <div className='content'>
          <div className='products-container'>
            <Filter 
              size={size}
              sort={sort}
              count={products.length}
              handleSize={handleSize}
              handleSort={handleSort}
            />
            <Products 
              products={products} 
              handleAddToCart={handleAddToCart}  
            />
          </div>
          <div className='sidebar'>
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
          </div>
        </div>
      </main>
        {/* Footer goes here */}
    </div>
  );
}

export default App;
