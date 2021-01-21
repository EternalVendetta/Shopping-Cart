// Products Reducer
import * as type from '../types';

export const productsReducer = (state = {}, action) => {
    // Switch Statement (Value to evaluate)
    switch(action.type) {
        case type.FETCH_PRODUCTS:
           return { items: action.payload }
        default:
            return state;
    };
} 