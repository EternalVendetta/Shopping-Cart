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
  // States Hook
  const [products, setProducts] = useState(data.products);
  const [cartItems, setCartItems] = useState([]);
  const [size, setSize] = useState('');
  const [sort, setSort] = useState('Latest');

  // Functions
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

  const handleAddToCart = product => {
    console.log(product)
    let alreadyInCart = false;
    cartItems.forEach(item => {
      if (item._id === product._id) {
          return alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      setCartItems(cartItems) 
    }
  }

  const removeFromCart = product => {

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
