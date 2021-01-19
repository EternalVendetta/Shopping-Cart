// React
import React from 'react';
// Scss
import '../styles/Products.scss';

const Products = (props) => {
    // JSX
    return (
        <div>
            <ul className='products'>
                {
                    props.products.map(product => {
                        return (
                            <li key={product.id} product={product}>
                                <div className='product'>
                                    <a href={"#" + product._id}>
                                        <img src={product.image} alt={product.title} />
                                        <p><i class="fas fa-link" /> {product.title}</p>
                                    </a>
                                    <div className='product-price'>
                                        <h3><i class="fas fa-money-bill-wave" /> {product.price} $</h3>
                                        <button onClick={() => props.handleAddToCart(product)}><i class="fas fa-cart-plus" /> Add To Cart</button>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Products;