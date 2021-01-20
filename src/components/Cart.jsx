// React
import React, { useState } from 'react';
// Component
import Form from './Form';
// React-Reveal (animations)
import Fade from 'react-reveal/Fade';

const Cart = (props) => {
    // State Hook
    const [showCheckOut, setShowCheckOut] = useState(false);
    const [input, setInput] = useState({
        email: '',
        name: '',
        address: ''
    })

    // Handle the inputs field
    const handleInput = e => {
        const value = e.target.value;
        // Change the state with the input value
        setInput({
            // Copy the State
            ...input,
            // Set the State's Value depending on the input choosen
            [e.target.name] : value
        })
    }

    // Create an Order when CLicked
    const createOrder = e => {
        // Remove the default behaviours
        e.preventDefault();
        // Create an Order Onject
        const order = {
            // Refer values to States
            email: input.email,
            name: input.name,
            address: input.address,
            // Refer to the Items in the Cart
            cartItems: props.cartItems
        }
        // Execute and pass the Object above as Argument
        props.createOrder(order);
    }

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
                <Fade left cascade>
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
                                                <button 
                                                    onClick={() => props.removeFromCart(item)} 
                                                    className='remove-btn'>
                                                </button>
                                        </div>
                                    </div>
                                </li>
                            );
                        }) 
                        }
                    </ul>
                </Fade>
            </div>

            {props.cartItems.length !== 0 && (
                <div className='cart-payment'>
                        <div className='total'>
                            <h3>Total: {props.cartItems.reduce((a, c) => a + c.price * c.count, 0).toFixed(2)}$</h3>
                        </div>
                        <button 
                            className='payment-btn'
                            onClick={() => setShowCheckOut(true)}
                        >
                            <i class="fas fa-shopping-basket" /> Proceed
                        </button>
                </div>
            )}
            {showCheckOut &&
                <Form 
                    handleInput={handleInput} 
                    email={input.email}
                    name={input.name}
                    address={input.address}
                    createOrder={createOrder}
                />
            }
        </div>
    );
}

export default Cart;