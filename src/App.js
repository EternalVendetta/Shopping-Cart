// React 
import React, { useState } from 'react';
// Scss
import './styles/App.scss';
// Data
import data from './data.json';
// Components
import Products from './components/Products';

const App = () => {
  // States
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState('');
  const [sort, setSort] = useState('');

  // JSX
  return (
    <div className='grid-container'>
      <header>
        <a href="/">Eternal Shopping Cart</a>
      </header>
      <main>
        <div className='content'>
          <div className='products-container'>
            <Products products={products} />
          </div>
          <div className='sidebar'>
            sidebar
          </div>
        </div>
      </main>
        {/* Footer goes here */}
    </div>
  );
}

export default App;
