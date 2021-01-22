// Products Reducer
import * as type from '../types';

export const productsReducer = (state = {}, action) => {
    // Switch Statement (Value to evaluate)
    switch(action.type) {
        case type.FILTER_PRODUCTS_BY_SIZE:
            return {
                // Copy the State
                ...state,
                size: action.payload.size,
                filteredItems: action.payload.items,
            };
        case type.ORDER_PRODUCTS_BY_PRICE:
            return {
                ...state,
                sort: action.payload.sort,
                filteredItems: action.payload.items,
            };
        case type.FETCH_PRODUCTS: 
            return { 
                items: action.payload,
                filteredItems: action.payload,
            };
        default:
            return state;
    };
}; 