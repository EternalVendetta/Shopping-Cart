// PRODUCT ACTIONS
import * as type from '../types';

export const fetchProducts = () => async dispatch => {
    // Fetch Data from server (async)
    const res = await fetch('/api/products');
    // Convert to Json
    const data = await res.json();
    dispatch({
        type: type.FETCH_PRODUCTS,
        payload: data,
    });
};

export const filterProducts = (products, size) => dispatch => {
    dispatch({
        type: type.FILTER_PRODUCTS_BY_SIZE,
        payload: {
            size: size,
            items: 
            size === "All" 
            ? products 
            : products.filter(x => x.availableSizes.indexOf(size) !== -1)
        },
    });    
}; 

export const sortProducts = (filteredProducts, sort) => dispatch => {
    const sortedProducts = filteredProducts.slice();
    if (sort === "Latest") {
        sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1))
    } else {
        sortedProducts.sort((a, b) => 
            sort === 'Lowest' ?
            // Lowest to Highest
            a.price > b.price ? 1 : -1
            :
            // Hihest to Lowest
            a.price > b.price ? -1 : 1
        );
    };

    dispatch({
        type: type.ORDER_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            items: sortedProducts,
        },
    });
};
