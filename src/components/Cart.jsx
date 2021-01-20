// React
import React from 'react';

const Cart = (props) => {
    // JSx
    return (
        <div>
            {
                props.cartItems.length === 0 ? 
                <div className="cart-empty">
                    <div className='cart-empty-img'></div>
                    <h3>Your Cart is Empty...</h3>
                </div>
                : 
                <div className='cart-full'>
                    <h3>You have <span className="blue">{props.cartItems.length}</span> item in the Cart</h3>
                </div>
            }

            <div className='cart'>
                <ul className='cart-items'>
                    {
                        props.cartItems.map(item => {
                           return (
                               <li key={item._id}>
                                   <div>
                                        <img src={item.image} alt={item.title}/>
                                   </div>
                                   <div className='cart-items-description'>
                                       <div className='left'>
                                            <p>{item.title}</p> 
                                            <p>{item.price}$ x {item.count}</p>
                                       </div>
                                       <div className='right'>
                                         <button onClick={() => props.removeFromCart(item)} className='remove-btn'></button>
                                        </div>
                                   </div>
                               </li>
                           );
                       }) 
                    }
                </ul>
            </div>

            {props.cartItems.length !== 0 && (
                <div className='cart-payment'>
                        <div className='total'>
                            <h3>Total: {props.cartItems.reduce((a, c) => a + c.price * c.count, 0).toFixed(2)}$</h3>
                        </div>
                        <button className='payment-btn'><i class="fas fa-shopping-basket" /> Proceed</button>
                </div>
            )}
            
        </div>
    );
}

export default Cart;