// React
import React, { useState, useEffect } from 'react';
// React-Reveal (animations)
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
// React Modal
import Modal from 'react-modal';
// React-Redux API 
import { connect } from 'react-redux';
// Actions
import { fetchProducts } from '../redux/actions/productActions';

const Products = (props) => {
    // State Hook
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, [])

    // Open the Modal on the Image selected
    const openModal = product => {
        // Set the State to the current Image selected to open Modal
        setProduct(product)
    }

    // Close the Modal on the Image selected
    const closeModal = () => {
        // Set the State to null to remove the Modal
        setProduct(null);
    }

    // JSX
    return (
        <div>
            <Fade bottom cascade>
                {
                    !props.products ? <div>Loading...</div>
                    :
                    <ul className='products'>
                        {
                            props.products.map(product => {
                                return (
                                    <li key={product.id} product={product}>
                                        <div className='product'>
                                            <a href={"#" + product._id} onClick={() => openModal(product)}>
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
                }
            </Fade>
            {
                product && (
                    <Modal
                        isOpen={true}
                        onRequestClose={closeModal}
                        ariaHideApp={false}
                    >
                        <Zoom>
                            <button className='btn-modal' onClick={() => closeModal(product)}>
                                <i class="far fa-times-circle" />
                            </button>
                            <div className='product-details'>
                                <img src={product.image} alt={product.title} />
                                <div className="vertical-border"></div>
                                <div className="product-description">
                                    <h1>{product.title}</h1>
                                    <h3>{product.description}</h3>
                                    <div className="product-sizes">
                                        <h4>Available sizes :</h4>
                                        {
                                            product.availableSizes.map(size => {
                                                return (
                                                    <span>{size}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <h3>{product.price}$</h3>
                                    <button onClick={() => {
                                        props.handleAddToCart(product)
                                        closeModal()
                                    }}>
                                        <i class="fas fa-cart-plus" /> Add To Cart
                                    </button>
                                </div>
                            </div>
                        </Zoom>
                    </Modal>
                )
            }
        </div>
    );
}


export default connect((state) => ({ product: state.products.items }), fetchProducts)(Products);