// PRODUCT ACTIONS
import * as type from '../types';

export const fetchProducts = () => async dispatch => {
    // Fetch Data from server (async)
    const res = await fetch('/api/products');
    // Convert to Json
    const data = await res.json();
    dispatch({
        type: type.FETCH_PRODUCTS,
        payload: data
    })
}
