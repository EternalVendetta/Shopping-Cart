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
                                   <div>
                                       <h4>{item.title}</h4>
                                       <button onClick={() => props.removeFromCart(item)} className='remove-btn'>Remove <i class="far fa-trash-alt"/></button>
                                   </div>
                               </li>
                           )
                       }) 
                    }
                </ul>
            </div>
        </div>
    );
}

export default Cart;